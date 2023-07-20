import { CSSProperties, FC, PropsWithChildren } from 'react';

type BackgroundEmeraldToRedProps = {
  colorStart?: string;
  colorEnd?: string;
  style?: CSSProperties;
  background?: string;
  innerPadding?: string;
  className?: string;
  marginAround?: string;
  insideClassName?: string;
};

const BackgroundEmeraldToRed: FC<
  PropsWithChildren<BackgroundEmeraldToRedProps>
> = ({
  marginAround = '1',
  className = '',
  children,
  innerPadding = '3',
  background = 'zinc',
  colorEnd = 'yellow',
  colorStart = 'emerald',
  insideClassName = '',
  style,
}) => {
  return (
    <div
      style={style}
      className={` m-${marginAround}  rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 p-[2px] ${className} `}
    >
      <div
        className={`bg-zinc-900  rounded-md  p-${innerPadding} ${insideClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundEmeraldToRed;
