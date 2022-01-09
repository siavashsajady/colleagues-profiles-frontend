import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Layout from './Layout';

export default function DashboardEmployee({ emp, handleDelete }) {
  return (
    <div className='container max-w-sm w-full  text-center flex sm:text-center items-center justify-between lg:max-w-full lg:flex'>
      <h4 className='text-2xl text-gray-500 pb-5 font-bold text-center'>
        <Link href={`/employees/${emp.slug}`}>
          <a>{emp.name}</a>
        </Link>
      </h4>
      <div className='flex m-8'>
        <Link href={`/employees/edit/${emp.id}`}>
          <a className='m-4 p-4 '>
            <FaPencilAlt className='text-blue-600' /> <span>Edit</span>
          </a>
        </Link>
        <a className='m-4 p-4' href='#' onClick={() => handleDelete(emp.id)}>
          <FaTimes className='text-red-600' /> <span>Delete</span>
        </a>
      </div>
    </div>
  );
}
