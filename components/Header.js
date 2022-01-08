import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-900 text-gray-100 shadow w-full  sm:px-2 '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <span className='ml-3 text-xl md:text-3xl'>Tretton37</span>
          </a>
        </Link>

        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/whoweare'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Who we are
            </a>
          </Link>

          <Link href='#'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              What we do
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
