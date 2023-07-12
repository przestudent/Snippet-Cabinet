import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import Link from 'next/link';
import { FC } from 'react';
import { auth, UserButton } from '@clerk/nextjs';

const Navbar: FC = ({}) => {
  //TODO: ADD CURRENT NAV HIGHLIGHT
  const { user } = auth();
  return (
    <BackgroundEmeraldToRed>
      <nav className='flex items-center justify-evenly text-center flex-row  flex-wrap gap-y-4 text-xl'>
        <Link className='w-full text-center md:w-1/4 md:text-left' href={'/'}>
          Home
        </Link>
        <Link className='text-right md:text-left' href={'/'}>
          Something else
        </Link>
        {user ? (
          <div>
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
