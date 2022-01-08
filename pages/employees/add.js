import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function AddEmployeePage() {
  const [values, setValues] = useState({
    name: '',
    office: '',
    description: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('No token included');
        return;
      }
      toast.error('Something Went Wrong');
    } else {
      const emp = await res.json();
      router.push(`/employees/${emp.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title='Add New Employee'>
      <div className='container mx-auto   px-6 my-12'>
        <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-2 px-4 rounded '>
          <Link href='/'>Go Back</Link>
        </button>
        <h1 className='text-3xl border-b-4 mt-3 pb-5 font-bold text-blue-500'>
          Add Colleage
        </h1>
        <div className='flex justify-center  px-6 my-12'>
          <ToastContainer />
          <form
            onSubmit={handleSubmit}
            className='lg:w-1/2 lg:h-auto px-8 pt-6 pb-8 mb-4 bg-white'
          >
            <div className='mb-4 md:flex md:justify-between'>
              <div className='mb-4 md:mr-2 md:mb-0'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-bold text-gray-700'
                >
                  Colleage Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={values.name}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-4 md:mr-2 md:mb-0'>
                <label
                  htmlFor='office'
                  className='block mb-2 text-sm font-bold text-gray-700'
                >
                  Office
                </label>
                <input
                  type='text'
                  name='office'
                  id='office'
                  value={values.office}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-bold text-gray-700'
              >
                Description
              </label>
              <textarea
                type='text'
                name='description'
                id='description'
                value={values.description}
                onChange={handleInputChange}
                className='resize-none form-control w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline'
              ></textarea>
            </div>

            <input
              type='submit'
              value='Add Colleage'
              className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
