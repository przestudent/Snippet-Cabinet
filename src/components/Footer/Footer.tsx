import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { FC } from 'react';

const Footer: FC = async () => {
  return (
    <BackgroundEmeraldToRed marginAround='2'>
      <footer className='flex justify-between text-center flex-wrap flex-row'>
        <h4 className='sm:order-2   order-1 w-full sm:w-auto'>
          Made with <span className='text-red-600'>❤</span> by{' '}
          <a
            aria-label='Go to author GitHub page'
            href='https://github.com/przestudent'
            className='text-lg text-emerald-500'
          >
            @przestudent
          </a>
        </h4>
        <div className='text-emerald-500  order-2 sm:w-auto w-full sm:order-1'>
          <a
            aria-label='Go to the source code on GitHub'
            className='mr-3 border-b-2 border-emerald-400'
            href='https://github.com/przestudent/Snippet-Cabinet'
          >
            Source code
          </a>
          <a
            aria-label='Send email to the author'
            className='border-b-2 border-emerald-400'
            href='mailto:przepalac22@gmail.com'
          >
            Contact
          </a>
        </div>
      </footer>
    </BackgroundEmeraldToRed>
  );
};

export default Footer;
