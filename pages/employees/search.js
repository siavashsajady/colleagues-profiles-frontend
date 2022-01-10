import { GoHome } from 'react-icons/go';
import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EmployeeItem from '@/components/EmployeeItem';
import { API_URL } from '@/config/index';

export default function SearchPage({ employees }) {
  const router = useRouter();
  return (
    <Layout title='Search Results'>
      <div className='container mx-auto   px-6 my-12'>
        <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-2 px-4 rounded '>
          <Link href='/'>
            <a className='flex justify-center'>
              <GoHome className='mr-1 mt-1' /> Go Back
            </a>
          </Link>
        </button>

        <div className='text-3xl text-gray-700 border-b-4 pb-5 font-bold'>
          <h1>Search Results for {router.query.term}</h1>
        </div>
        <div className='lg:flex lg:flex-row justify-between p-2 px-6 my-12'>
          {employees.length === 0 && <h3>No employees to show</h3>}

          {employees.map((emp) => (
            <EmployeeItem key={emp.id} emp={emp} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { office_contains: term },
        { description_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/employees?${query}`);
  const employees = await res.json();

  return {
    props: { employees },
  };
}
