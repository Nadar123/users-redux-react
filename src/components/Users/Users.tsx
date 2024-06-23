import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { getUsers } from '../../state/slices/users.features';
import Spinner from '../UI/Spinner/Spinner';
import User from '../User/User';
import SearchBox from '../SearchBox/SearchBox';

const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState('');

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <Spinner loading />;

  if (error) return <h1>{error}</h1>;

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1 className='text-center text-2xl text-black dark:text-white pb-4'>
        Users
      </h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul className='w-full sm:w-1/3 mx-auto'>
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <User key={user.id} {...user} />)
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </>
  );
};

export default Users;
