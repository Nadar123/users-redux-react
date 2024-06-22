import { IUser } from './../constants/interfaces.constant';
import axios from 'axios';
import {
  Environment,
  SERVER_URLS,
  API_ENDPOINTS,
} from '../constants/api.constants';

export default class CrudService {
  baseUrl: string;

  constructor() {
    this.baseUrl = SERVER_URLS[Environment.Development];
  }

  // fetch users
  getUsers = async (): Promise<IUser[]> => {
    const url = `${this.baseUrl}/${API_ENDPOINTS.GET_USERS}`;

    try {
      const response = await axios.get<IUser[]>(url);
      return response.data;
    } catch (error) {
      console.error('GET Users Error:', error);
      throw error;
    }
  };
}
