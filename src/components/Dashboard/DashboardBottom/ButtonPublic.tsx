import { FC, MutableRefObject, useEffect, useState } from 'react';
import { snippetInfo } from '../../../../global';
import Image from 'next/image';

interface ButtonPublicProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
}

const ButtonPublic: FC<ButtonPublicProps> = ({
  snippetInfo,
  snippetInfoRef,
}) => {
  const [isPublic, setIsPublic] = useState(snippetInfo.public);
  useEffect(() => {
    setIsPublic(snippetInfo.public);
  }, [snippetInfo]);
  return (
    <div className='flex items-center justify-center gap-2'>
      {/* <button
        onClick={() => {
          snippetInfoRef.current.public = !snippetInfoRef.current.public;
          setIsPublic(!isPublic);
        }}
      >
        {isPublic + ''}
      </button> */}
      <div className='flex justify-center items-center'>
        <div className='bg-green-600 rounded'>
          <Image
            src={'/eye-off-svgrepo-com.svg'}
            alt='Oko'
            height={30}
            width={30}
          />
        </div>
        <div className='mx-4'>
          <div className='bg-green-600 flex items-center rounded-md w-10 h-5'>
            <div className=' top-0 h-6 rounded-[100%] bg-white w-6'></div>
          </div>
        </div>
        <Image
          src={'/eye-off-svgrepo-com.svg'}
          alt='Oko'
          height={30}
          width={30}
        />
      </div>
      {snippetInfo.snippetId !== undefined ? (
        <button
          onClick={() => {
            console.log('delete button clicked');
            console.log(snippetInfo);
          }}
          className='w-12 h-12 rounded-xl  bg-red-700 flex items-center justify-center'
        >
          <div className='text-4xl'>🗑</div>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ButtonPublic;
