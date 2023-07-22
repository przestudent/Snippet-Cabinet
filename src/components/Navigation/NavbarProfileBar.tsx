import { UserButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import { FC } from 'react';

interface NavbarProfileBarProps {}

const NavbarProfileBar: FC<NavbarProfileBarProps> = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <div className='flex items-center gap-1'>
          <UserButton /> <Link href={'/dashboard'}>Dashboard</Link>
        </div>
      ) : (
        <Link href={'/dashboard'}>Sign in</Link>
      )}
    </>
  );
};

export default NavbarProfileBar;
