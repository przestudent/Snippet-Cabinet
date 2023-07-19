import { FC, MutableRefObject, useEffect, useState } from 'react';
import Image from 'next/image';
import { snippetInfo } from '../../../../global';
import ButtonPublicEyeSymbol from './ButtonPublicEyeSymbol';

interface ButtonPublicProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  isBeingEdited: boolean;
}

const ButtonPublic: FC<ButtonPublicProps> = ({
  isBeingEdited,
  snippetInfo,
  snippetInfoRef,
}) => {
  const [isPublic, setIsPublic] = useState(snippetInfo.public);
  useEffect(() => {
    setIsPublic(snippetInfo.public);
  }, [snippetInfo]);
  return (
    <div className='flex justify-center items-center'>
      <ButtonPublicEyeSymbol
        imageSrc='/eye-off-svgrepo-com.svg'
        isPublic={!isPublic}
      />

      <div className='mx-4'>
        <div
          onClick={() => {
            if (isBeingEdited) {
              setIsPublic(!isPublic);
              snippetInfoRef.current.public = !isPublic;
            }
          }}
          className={` ${
            isPublic ? 'bg-green-600' : 'bg-zinc-600'
          } transition-colors flex items-center rounded-md w-10 h-5`}
        >
          <button
            disabled={!isBeingEdited}
            className={`${
              isPublic ? 'translate-x-[100%]' : 'translate-x-[0%]'
            } transition-all h-6 rounded-[100%]  bg-white w-6`}
          ></button>
        </div>
      </div>
      <ButtonPublicEyeSymbol
        imageSrc='/eye-show-svgrepo-com.svg'
        isPublic={isPublic}
      />
    </div>
  );
};

export default ButtonPublic;
