import DashboardInnerContent from '@/components/Dashboard/DashboardInnerContent';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { FC } from 'react';

//TODO: Fetch snippets

const Dashboard: FC = () => {
  return (
    <BackgroundEmeraldToRed innerPadding={''}>
      <div className='border-b-2 border-zinc-600 p-4'>
        <h1 className=''>Dashboard</h1>
      </div>
      <DashboardInnerContent />
    </BackgroundEmeraldToRed>
  );
};

export default Dashboard;
