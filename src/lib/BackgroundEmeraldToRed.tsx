import { FC, PropsWithChildren } from 'react';

type BackgroundEmeraldToRedProps = {
  colorStart?: string;
  colorEnd?: string;
  background?: string;
  innerPadding?: string;
  className?: string;
  marginAround?: string;
};

const BackgroundEmeraldToRed: FC<
  PropsWithChildren<BackgroundEmeraldToRedProps>
> = ({
  marginAround = '5',
  className = '',
  children,
  innerPadding = '3',
  background = 'zinc',
  colorEnd = 'yellow',
  colorStart = 'emerald',
}) => {
  return (
    <div
      className={`${className} m-5 m-${marginAround}  rounded-md bg-gradient-to-br from-emerald-500 to-red-700 p-[2px]`}
    >
      <div className={`bg-zinc-900 rounded-md  p-${innerPadding}`}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundEmeraldToRed;
