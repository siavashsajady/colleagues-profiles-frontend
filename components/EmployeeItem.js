import Link from 'next/link';
import Image from 'next/image';
import { CgSweden } from 'react-icons/cg';

export default function EmployeeItem({ emp }) {
  return (
    <div className=' max-w-sm w-full justify-center text-center flex card  lg:max-w-full lg:flex '>
      <div className='w-128 h-60 ml-3 flex card '>
        <Image
          src={emp.image ? emp.image : '/images/employee-default.jpg'}
          width={200}
          height={270}
          alt='employee image'
        />
      </div>
      <div className='border-r border-b border-l border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <div className='text-gray-900 flex-1  font-bold text-xl mb-2'>
            {emp.name}
          </div>
        </div>

        <div className='flex items-center'>
          <div className='text-lg'>
            <span className='text-gray-900 leading-none'>
              <CgSweden />
              {emp.office}
            </span>
          </div>
        </div>
        <div className='flex'>
          <Link href={`/employees/${emp.slug}`}>
            <a className='bg-transparent hover:bg-white border border-bg-white text-black hover:text-blue-500 text-center py-2 px-2 rounded'>
              Get to know me
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
