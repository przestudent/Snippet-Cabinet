import { FC } from 'react';

interface GradientButtonProps {
  href?: string;
  className?: string;
  innerButtonText: string;
}

const GradientButton: FC<GradientButtonProps> = ({
  href,
  className = 'p-3  text-2xl',
  innerButtonText,
}) => {
  return (
    <a
      href={href}
      className={`${className} rounded-md bg-gradient-to-br from-emerald-500 via-emerald-500 to-red-600  `}
    >
      {innerButtonText}
    </a>
  );
};

export default GradientButton;
