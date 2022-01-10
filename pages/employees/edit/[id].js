import { FaImage } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseCookies } from '@/helpers/index';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/components/Modal';
import ImageUpload from '@/components/ImageUpload';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EditEmployeePage({ emp, token }) {
  const [values, setValues] = useState({
    name: emp.name,
    office: emp.office,
    description: emp.description,
  });

  const [imagePreview, setImagePreview] = useState(
    emp.image ? emp.image.formats.thumbnail.url : null
  );

  const [showModal, setShowModal] = useState(false);

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

    const res = await fetch(`${API_URL}/employees/${emp.id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthoized');
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

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/employees/${emp.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  return (
    <Layout title='Add New Employee'>
      <div className='container mx-auto px-6 my-12'>
        <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-2 px-4 rounded '>
          <Link href='/'>
            <a className='flex justify-center'>
              <GoHome className='mr-1 mt-1' /> Go Back
            </a>
          </Link>
        </button>
        <h1 className='text-3xl border-b-4 mt-3 pb-5 font-bold text-blue-500'>
          Edit Colleages Profile
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
              value='Edit Colleage'
              className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
            />
          </form>
        </div>

        <div className=' block justify-center w-full  px-6 my-12   max-w-sm  text-center'>
          <h2 className='text-2xl  border-b-4 mt-3 mb-2  pb-5 font-bold text-blue-500'>
            Colleage Image
          </h2>
          {imagePreview ? (
            <Image
              src={imagePreview}
              height={170}
              width={120}
              className=' lg:block  rounded-lg '
            />
          ) : (
            <div>
              <p className=' mt-3 pb-5 font-bold text-red-500'>
                No image uploaded
              </p>
            </div>
          )}

          <div>
            <button
              onClick={() => setShowModal(true)}
              className=' flex justify-center w-full my-4  max-w-sm  bg-transparent border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white text-center py-3 px-6 rounded'
            >
              <FaImage className='mr-1 mt-1' /> Set Image
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          empId={emp.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/employees/${id}`);
  const emp = await res.json();

  return {
    props: {
      emp,
      token,
    },
  };
}
