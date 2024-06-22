import React, { useState, useEffect } from 'react';
import Input from '../UI/Input/Input';
import { SearchBoxProps } from '../../constants/interfaces.constant';

const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, setSearchTerm }) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTerm(debouncedSearchTerm);
    }, 800);

    return () => {
      clearTimeout(timerId);
    };
  }, [debouncedSearchTerm, setSearchTerm]);

  return (
    <Input
      name='search'
      type='text'
      placeholder='Search Users...'
      value={debouncedSearchTerm}
      onChange={(e) => setDebouncedSearchTerm(e.target.value)}
      className='w-70 mx-auto my-12'
    />
  );
};

export default SearchBox;
