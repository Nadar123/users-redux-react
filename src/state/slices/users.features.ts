import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CrudService from '../../services/ajax.service';
import { IUser } from '../../constants/interfaces.constant';

const crudService = new CrudService();

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await crudService.getUsers();
      // Map the response
      const filteredResponse = response.map(({ name, email, phone }) => ({
        name,
        email,
        phone,
      }));
      return filteredResponse;
    } catch (err) {
      console.error(err);
      return rejectWithValue('Failed to fetch users');
    }
  }
);

const initialState = {
  loading: false,
  error: '',
  users: [] as IUser[],
};

const globalSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.users = action.payload;
        }
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const globalSliceActions = globalSlice.actions;
export default globalSlice.reducer;
