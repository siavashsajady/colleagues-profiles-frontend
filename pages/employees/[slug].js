import { GoLocation } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

export default function ColleaguePage({ emp }) {
  const router = useRouter();

  return (
    <Layout>
      <div className='container mx-auto   px-6 my-12'>
        <div className='lg:w-1/2 lg:h-auto px-8 pt-6 pb-8 mb-4 bg-white'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-800 md:text-4xl'>
              {emp.name}
            </h1>

            <h4 className=' flex flex-row text-2xl items-center justify-items-center text  mt-3 pb-5 font-bold text-gray-500'>
              <GoLocation className=' top-0 right-0 text-gray-500 ' />
              {emp.office}
            </h4>
            <div>
              <h3 className='text-2xl  mt-3 pb-5 font-bold text-blue-500'>
                Description:
              </h3>
              <p>{emp.description}</p>
            </div>
          </div>
        </div>
        {emp.image && (
          <div className=' flex lg:flex lg:w-1/2'>
            <Image
              src={emp.image.formats.large.url}
              width={250}
              height={320}
              alt='Profile image'
              className='h-full object-cover justify-items-center'
            />
          </div>
        )}

        <div className='flex justify-center lg:justify-start mt-6'>
          <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-2 px-4 rounded '>
            <Link href='/'>
              <a className='flex justify-center'>
                <GoHome className='mr-1 mt-1' /> Go Back
              </a>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/employees?slug=${slug}`);
  const employees = await res.json();
  return {
    props: {
      emp: employees[0],
    },
  };
}
