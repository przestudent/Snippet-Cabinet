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
    <div className='flex py-5 items-center flex-row gap-y-2 md:justify-between flex-wrap px-4 justify-center'>
      <EditSnippetName
        isBeingEdited={isBeingEdited}
        snippetInfoRef={snippetInfoRef}
        snippetInfo={snippetInfo}
      />
      <div className='flex gap-x-2  justify-center flex-wrap flex-row'>
        <SetEditorLang
          isBeingEdited={isBeingEdited}
          snippetInfo={snippetInfo}
          editorConfigOption={editorConfigOption}
          setEditorConfigOption={setEditorConfigOption}
        />
        <div className='flex gap-y-4 w-full sm:w-auto gap-x-2 flex-row flex-wrap justify-center items-center'>
          <PostButton
            refetch={refetch}
            isBeingEdited={isBeingEdited}
            setIsBeingEdited={setIsBeingEdited}
            yourSnippetsUniqueData={yourSnippetsUniqueData}
            snippetInfoRef={snippetInfoRef}
            editorConfigOption={editorConfigOption}
          />
          {isBeingEdited && snippetInfo.snippetId !== undefined && (
            <EditPatchButton
              refetch={refetch}
              isBeingEdited={isBeingEdited}
              setIsBeingEdited={setIsBeingEdited}
              yourSnippetsUniqueData={yourSnippetsUniqueData}
              snippetInfoRef={snippetInfoRef}
              editorConfigOption={editorConfigOption}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
