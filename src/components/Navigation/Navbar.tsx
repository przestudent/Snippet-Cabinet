import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import Link from 'next/link';
import { FC } from 'react';
import { auth, currentUser, UserButton } from '@clerk/nextjs';

const Navbar: FC = async ({}) => {
  const user = await currentUser();
  return (
    <BackgroundEmeraldToRed marginAround='2'>
      <nav className='flex items-center justify-between px-7 text-center flex-row  flex-wrap gap-y-4 text-xl'>
        {/* <Link className='w-full text-center md:w-1/4 md:text-left' href={'/'}> */}
        <Link className=' w-1/4 text-left' href={'/'}>
          Home
        </Link>
        {/* <Link className='text-right md:text-left' href={'/'}>
          Something else
        </Link> */}
        {user ? (
          <div className='flex items-center gap-1'>
            <UserButton /> <Link href={'/dashboard'}>Dashboard</Link>
          </div>
        ) : (
          <Link href={'/dashboard'}>Sign in</Link>
        )}
      </nav>
    </BackgroundEmeraldToRed>
  );
};

export default Navbar;
