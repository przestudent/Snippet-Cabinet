import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className='m-5 mt-2 rounded-md flex items-center justify-evenly text-center flex-row flex-wrap gap-y-4 '>
      <Link className='w-full text-center md:w-1/4 md:text-left' href={'/'}>
        Home
      </Link>
      <Link className='w-1/4 text-right md:text-left' href={'/'}>
        Something else
      </Link>
      <Link href={'/dashboard'}>Dashboard for now</Link>
    </nav>
  );
};

export default Navbar;
