import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      className='bg-gray-900 text-gray-100 shadow   w-full items-center sm:px-2 lg:pl-12  lg:pr-12 '
      data-cy='nav-item'
    >
      <div className='container md:mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <span className='ml-3 text-xl md:text-3xl'>Tretton37</span>
          </a>
        </Link>

        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/whoweare'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Who we are
            </a>
          </Link>

          <Link href='#'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              What we do
            </a>
          </Link>

          {user ? (
            // If logged in
            <>
              <Link href='/employees/add'>
                <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                  Add Colleage
                </a>
              </Link>
              <Link href='/account/dashboard'>
                <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                  Dashboard
                </a>
              </Link>
              <button
                onClick={() => logout()}
                className='cursor-pointer uppercase hover:text-indigo-300 font-bold py-2 px-4 flex items-center md:justify-start mb-4 md:mb-0'
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            //If logged out
            <>
              <Link href='/account/login'>
                <a className='cursor-pointer uppercase hover:text-indigo-300 font-bold py-2 px-4 flex items-center md:justify-start mb-4 md:mb-0'>
                  <FaSignInAlt className=' mr-2' />
                  Login
                </a>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
