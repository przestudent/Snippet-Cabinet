import { FC } from 'react';

const LoadingLandingPage: FC = () => {
  return (
    <main className='h-[80vh] flex items-center justify-center'>
      <div className='animate-ping text-emerald-500 text-8xl'>Loading...</div>
    </main>
  );
};

export default LoadingLandingPage;
