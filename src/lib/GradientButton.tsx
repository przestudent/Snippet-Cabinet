import { FC } from 'react';

interface GradientButtonProps {
  className?: string;
  innerButtonText: string;
  isBeingEdited?: boolean;
}

const GradientButton: FC<GradientButtonProps> = ({
  className = 'p-3  text-2xl',
  innerButtonText,
  isBeingEdited,
}) => {
  //MOST LIKELY THE ERROR WAS HERE!
  return (
    <a
      // disabled={!isBeingEdited}
      className={`${className} rounded-md bg-gradient-to-br from-emerald-500 to-green-600  `}
    >
      {innerButtonText}
    </a>
  );
};

export default GradientButton;
