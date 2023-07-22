import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import Link from 'next/link';
import { FC } from 'react';
import { currentUser, UserButton } from '@clerk/nextjs';
import NavbarProfileBar from './NavbarProfileBar';

const Navbar: FC = async () => {
  return (
    <BackgroundEmeraldToRed marginAround='2'>
      <nav className='flex items-center justify-between px-7 text-center flex-row  flex-wrap gap-y-4 text-xl'>
        <Link className=' w-1/4 text-left' href={'/'}>
          Home
        </Link>
        <NavbarProfileBar />
      </nav>
    </BackgroundEmeraldToRed>
  );
};

export default Navbar;
