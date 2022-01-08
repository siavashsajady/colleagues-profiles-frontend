import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <FaExclamationTriangle className='w-10 h-10 text-gray-600 ' />
        <h1 className='text-6xl my-5'>404</h1>
        <h4 className='text-4xl text-gray-400 mb-5'>
          Sorry, This page does not exist
        </h4>
        <button className='bg-transparent hover:bg-gray-400 text--gray-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          <Link href='/'>Go Back Home</Link>
        </button>
      </div>
    </Layout>
  );
}
