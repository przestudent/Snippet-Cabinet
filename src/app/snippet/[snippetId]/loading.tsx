import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { FC } from 'react';

const SnippetPageLoaderSkeleton: FC = () => {
  return (
    <BackgroundEmeraldToRed innerPadding='0'>
      <div className='flex justify-between px-6 pt-4  border-zinc-500 border-b-2'>
        <h1 className='text-3xl'>Title</h1>
        <h2 className='text-xl'>username</h2>
      </div>
      <div>dasda</div>
      <div>snippet.tagBoilerPlate</div>
    </BackgroundEmeraldToRed>
  );
};

export default SnippetPageLoaderSkeleton;
