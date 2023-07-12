import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

const LandingPage: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default LandingPage;
