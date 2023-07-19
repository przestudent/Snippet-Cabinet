import {
  Dispatch,
  FC,
  FunctionComponent,
  MutableRefObject,
  SetStateAction,
} from 'react';
import EditSnippetName from './EditSnippetName';
import PostButton from './PostButton';
import SetEditorLang from './SetEditorLang';
import { languageTypes } from '@prisma/client';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
} from '../../../../global';
import EditPatchButton from './EditPatchButton';

interface DashboardTopProps {
  editorConfigOption: languageTypes;
  snippetInfo: snippetInfo;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  refetch: refetchFuncUserSnippets;
  yourSnippetsUniqueData: optimalSnippetsData[];
  isBeingEdited: boolean;
}

const DashboardTop: FC<DashboardTopProps> = ({
  snippetInfo,
  snippetInfoRef,
  isBeingEdited,
  refetch,
  editorConfigOption,
  setEditorConfigOption,
  setIsBeingEdited,
  yourSnippetsUniqueData,
}) => {
  return (
    <div className='flex py-5 items-center px-4 justify-between'>
      <EditSnippetName
        isBeingEdited={isBeingEdited}
        snippetInfoRef={snippetInfoRef}
        snippetInfo={snippetInfo}
      />
      <div className='flex '>
        <SetEditorLang
          isBeingEdited={isBeingEdited}
          snippetInfo={snippetInfo}
          editorConfigOption={editorConfigOption}
          setEditorConfigOption={setEditorConfigOption}
        />
        <div className='flex gap-4 items-center'>
          <PostButton
            refetch={refetch}
            isBeingEdited={isBeingEdited}
            setIsBeingEdited={setIsBeingEdited}
            yourSnippetsUniqueData={yourSnippetsUniqueData}
            snippetInfoRef={snippetInfoRef}
            editorConfigOption={editorConfigOption}
          />
          <EditPatchButton
            refetch={refetch}
            isBeingEdited={isBeingEdited}
            setIsBeingEdited={setIsBeingEdited}
            yourSnippetsUniqueData={yourSnippetsUniqueData}
            snippetInfoRef={snippetInfoRef}
            editorConfigOption={editorConfigOption}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
