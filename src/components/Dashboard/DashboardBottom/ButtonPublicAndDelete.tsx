import { FC, MutableRefObject, useEffect, useState } from 'react';
import { refetchFuncUserSnippets, snippetInfo } from '../../../../global';
import Image from 'next/image';
import DeleteButton from './DeleteButton';
import ButtonPublic from './ButtonPublic';

interface ButtonPublicAndDeleteProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  isBeingEdited: boolean;
  refetch: refetchFuncUserSnippets;
}

const ButtonPublicAndDelete: FC<ButtonPublicAndDeleteProps> = ({
  snippetInfo,
  isBeingEdited,
  refetch,
  snippetInfoRef,
}) => {
  return (
    <div className='flex sm:order-2 order-1 items-center justify-between sm:w-auto w-full flex-wrap flex-row sm:justify-center gap-2'>
      <ButtonPublic
        isBeingEdited={isBeingEdited}
        snippetInfo={snippetInfo}
        snippetInfoRef={snippetInfoRef}
      />
      <DeleteButton
        refetch={refetch}
        isBeingEdited={isBeingEdited}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default ButtonPublicAndDelete;
