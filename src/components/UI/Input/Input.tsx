import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full sm:w-1/3 shadow appearance-none border border-blue-500 dark:border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      {...props}
    />
  );
};

export default Input;
