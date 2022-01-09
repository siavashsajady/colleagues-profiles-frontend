import { useState } from 'react';
import { API_URL } from '@/config/index';

export default function ImageUpload({ empId, imageUploaded, token }) {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('files', image);
    formData.append('ref', 'employees');
    formData.append('refId', empId);
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='flex flex-col justify-center  px-6 my-12'>
      <h1 className='text-2xl border-b-4 mt-3 pb-5 font-bold text-blue-500'>
        Upload Image
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className='lg:w-1/2 lg:h-auto px-8 pt-6 pb-8 mb-4 bg-white rounded'
        >
          <div className=''>
            <input
              type='file'
              onChange={handleFileChange}
              className='flex bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-2 px-6 rounded m-2'
            />
          </div>
          <input
            type='submit'
            value='Upload'
            className='flex bg-transparent border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white text-center py-2 px-6 rounded m-2'
          />
        </form>
      </div>
    </div>
  );
}
