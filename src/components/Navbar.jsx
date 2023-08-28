import { Link } from 'react-router-dom';
import SearchSVG from './../assets/search.svg';
const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='p-5 pb-0 flex sm:justify-between md:justify-center items-center border-b dark:border-gray-700 border-gray-200 w-full'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <div className='flex justify-around bg-blue-500 py-1 px-2 rounded dark:bg-gray-500'>
            <p className=' text-2xl font-bold text-white dark:text-gray-900'>
              Goggle{' '}
            </p>
            <img src={SearchSVG} width='20' height='20' />
          </div>
        </Link>
        <button
          type='button'
          onClick={() => setDarkTheme(!darkTheme)}
          className='text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'
        >
          {darkTheme ? 'Light ☀️' : 'Dark 🌙'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
