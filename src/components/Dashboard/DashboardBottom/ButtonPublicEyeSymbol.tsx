import { FC } from 'react';
import Image from 'next/image';

interface ButtonPublicEyeSymbolProps {
  isPublic: boolean;
  imageSrc: string;
}

const ButtonPublicEyeSymbol: FC<ButtonPublicEyeSymbolProps> = ({
  isPublic,
  imageSrc,
}) => {
  return (
    <div
      className={`${
        isPublic ? 'bg-green-600' : 'bg-transparent'
      } rounded transition-colors`}
    >
      <Image src={imageSrc} alt='Oko' height={30} width={30} />
    </div>
  );
};

export default ButtonPublicEyeSymbol;
