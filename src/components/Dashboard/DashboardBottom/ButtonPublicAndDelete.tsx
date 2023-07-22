import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
} from '../../../../global';
import DeleteButton from './DeleteButton';
import ButtonPublic from './ButtonPublic';

interface ButtonPublicAndDeleteProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  isBeingEdited: boolean;
  refetch: refetchFuncUserSnippets;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
}

const ButtonPublicAndDelete: FC<ButtonPublicAndDeleteProps> = ({
  snippetInfo,
  setChosenSnippetToEdit,
  setSnippetInfo,
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
        setChosenSnippetToEdit={setChosenSnippetToEdit}
        setSnippetInfo={setSnippetInfo}
        refetch={refetch}
        isBeingEdited={isBeingEdited}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default ButtonPublicAndDelete;
