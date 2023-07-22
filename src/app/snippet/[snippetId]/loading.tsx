import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { FC } from 'react';

const SnippetPageLoaderSkeleton: FC = async () => {
  return (
    <BackgroundEmeraldToRed innerPadding='0'>
      <div className='flex justify-between px-6 pt-4  border-zinc-500 border-b-2'>
        <h1 className='text-3xl'>Title</h1>
        <h2 className='text-xl'>username</h2>
      </div>
      <div className='min-h-[75vh] bg-[#282c34]'></div>
      <div className='h-4 px-6 py-4'>Tags</div>
    </BackgroundEmeraldToRed>
  );
};

export default SnippetPageLoaderSkeleton;
