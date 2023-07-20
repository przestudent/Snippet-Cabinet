import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
} from '../../../../global';
import TagsInside from './TagsInside';
import ButtonPublicAndDelete from './ButtonPublicAndDelete';

interface SnippetTagSectionProps {
  snippetInfo: snippetInfo;
  isBeingEdited: boolean;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  refetch: refetchFuncUserSnippets;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
}

const SnippetTagSection: FC<SnippetTagSectionProps> = ({
  snippetInfoRef,
  isBeingEdited,
  snippetInfo,
  refetch,
  setChosenSnippetToEdit,
  setSnippetInfo,
}) => {
  return (
    <div className='w-full flex-wrap flex-row flex py-3 px-2 items-center justify-center gap-y-1 sm:justify-between'>
      <TagsInside
        snippetInfo={snippetInfo}
        isBeingEdited={isBeingEdited}
        snippetInfoRef={snippetInfoRef}
      />
      <ButtonPublicAndDelete
        setChosenSnippetToEdit={setChosenSnippetToEdit}
        setSnippetInfo={setSnippetInfo}
        refetch={refetch}
        isBeingEdited={isBeingEdited}
        snippetInfo={snippetInfo}
        snippetInfoRef={snippetInfoRef}
      />
    </div>
  );
};

export default SnippetTagSection;
