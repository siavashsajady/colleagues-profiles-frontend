import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between'>
        <p className='text-white flex-1  font-bold  mb-2'>
          Copyright &copy; Tretton37 2022
        </p>
        <p className='text-white flex-0 font-bold items-center  mb-2'>
          <Link href='#'>Contact</Link>
        </p>
      </div>
    </footer>
  );
}
