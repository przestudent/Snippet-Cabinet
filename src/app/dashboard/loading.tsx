import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { FC } from 'react';

const DashboardSkeletonLoader: FC = async () => {
  const snippets = Array.from(Array(5).keys());
  return (
    <BackgroundEmeraldToRed
      innerPadding={''}
      style={{ margin: '1rem' }}
      className='mt-5'
    >
      <div className='border-b-2 border-zinc-600 p-6'>
        <h1 className='text-4xl text-emerald-500'>Dashboard</h1>
      </div>
      <div className='h-[75vh] flex'>
        <aside className='pl-3 pr-1 border-r-2 w-[30%]  border-zinc-600'>
          <div className='flex items-center justify-between'>
            <h2 className='p-4 text-xl'>Your snippets</h2>
            <div className='text-6xl'>
              <button className='text-emerald-300'>+</button>
            </div>
          </div>
          <ul>
            {snippets.map((snippet) => (
              <li
                className='flex h-[67px] items-center animate-pulse bg-zinc-700 justify-between px-2 rounded border-2 border-emerald-500 my-2'
                key={snippet}
              >
                {/* <div>
                  <h3 className='text-xl min-h-[2rem]'></h3>
                  <time className='text-zinc-500'></time>
                </div>
                <div className='py-4 w-[35px] h-[35px]' /> */}
              </li>
            ))}
          </ul>
        </aside>
        <article className='w-[70%] relative'>
          <div className='absolute top-0 left-0 w-full h-full z-50 animate-pulse bg-[#282c34]'></div>
        </article>
      </div>
    </BackgroundEmeraldToRed>
  );
};

export default DashboardSkeletonLoader;
