import { FC, PropsWithChildren } from 'react';

type BackgroundEmeraldToRedProps = {
  colorStart?: String;
  colorEnd?: String;
  background?: String;
  innerPadding?: String;
};

const BackgroundEmeraldToRed: FC<
  PropsWithChildren<BackgroundEmeraldToRedProps>
> = ({
  children,
  innerPadding = 'p-3',
  background = 'zinc',
  colorEnd = 'yellow',
  colorStart = 'emerald',
}) => {
  return (
    <div
      className={`m-5 rounded-md bg-gradient-to-br from-emerald-500 to-red-700 p-[2px]`}
    >
      <div className={`bg-zinc-900 rounded-md  ${innerPadding}`}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundEmeraldToRed;
