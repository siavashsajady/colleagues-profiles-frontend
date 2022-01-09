import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('Passwords do not match!');
      return;
    }
    register({ username, email, password });
  };

  return (
    <Layout title='User Registration'>
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-2xl text-black w-full '>
            <h1 className='   flex flex-col items-center text-center mt-5 mb-8 text-3xl my-10'>
              <FaUser className='w-10 h-10 text-green-600 mb-1' /> Register
            </h1>
            <ToastContainer />
            <form
              onSubmit={handleSubmit}
              className='flex flex-col pt-3 md:pt-8'
            >
              <div>
                <label
                  htmlFor='username'
                  className='text-sm font-medium text-blue-700 flex flex-col pt-4'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='text-sm font-medium text-blue-700 flex flex-col pt-4'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='text-sm font-medium text-blue-700 flex flex-col pt-4'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div>
                <label
                  htmlFor='passwordConfirm'
                  className='text-sm font-medium text-blue-700 flex flex-col pt-4'
                >
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='passwordConfirm'
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <input
                type='submit'
                value='Register'
                className='bg-gray-200 hover:bg-gray-500 hover:text-white text-gray-500 text-center py-2 px-4 rounded mt-3'
              />
            </form>
          </div>

          <p className='flex flex-row'>
            Already have an account?
            <div className='text-blue-800 '>
              <Link href='/account/login'>Login</Link>
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
}
