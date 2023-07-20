import DashboardFetchSnippets from '@/components/Dashboard/DashBoardFetchSnippets';
import DashboardInnerContent from '@/components/Dashboard/DashboardInnerContent';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { auth, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import { FC } from 'react';

//TODO: Fetch snippets

const Dashboard: FC = async () => {
  const user = await currentUser();
  if (!user) <Link href={'/sign-in'}></Link>;
  return (
    <BackgroundEmeraldToRed
      innerPadding={''}
      style={{ margin: '1rem' }}
      className='mt-5'
    >
      <div className='border-b-2 border-zinc-600 p-6'>
        <h1 className='text-4xl text-emerald-500'>Dashboard</h1>
      </div>
      <DashboardFetchSnippets />
    </BackgroundEmeraldToRed>
  );
};

export default Dashboard;
