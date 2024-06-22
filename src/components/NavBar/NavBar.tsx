import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/react.svg';

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className='flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-800'>
      <Link
        to='/'
        className='text-2xl font-semibold text-white dark:text-gray-300'
      >
        <img src={Icon} alt='logo' />
      </Link>

      <div className='flex items-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-xs mx-0 sm:mx-12 border border-white hover:border-transparent dark:border-transparent'
          onClick={handleThemeChange}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
