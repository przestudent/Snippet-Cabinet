import { FC, PropsWithChildren } from 'react';
import BackgroundEmeraldToRed from './BackgroundEmeraldToRed';

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='fixed top-0 w-full h-full bg-[rgb(0,0,0,0.25)] flex justify-center items-center z-50'>
      <BackgroundEmeraldToRed innerPadding='0'>
        {children}
      </BackgroundEmeraldToRed>
    </div>
  );
};

export default Modal;
