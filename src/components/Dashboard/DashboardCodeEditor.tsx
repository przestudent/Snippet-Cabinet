'use client';
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import EditSnippetName from './DashboardTop/EditSnippetName';
import SetEditorLang from './DashboardTop/SetEditorLang';
import SnippetTagSection from './DashboardBottom/SnippetTagSection';
import PostButton from './DashboardTop/PostButton';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
} from '../../../global';
import { languageTypes } from '@prisma/client';
import CodeEditorPlate from './DashbordMiddle/CodeEditorPlate';
import DashboardTop from './DashboardTop/DashboardTop';
interface DashboardCodeEditorProps {
  snippetInfo: snippetInfo;
  isBeingEdited: boolean;
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  refetch: refetchFuncUserSnippets;
  yourSnippetsUniqueData: optimalSnippetsData[];
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
}

const DashboardCodeEditor: FC<DashboardCodeEditorProps> = ({
  snippetInfo,
  setSnippetInfo,
  setIsBeingEdited,
  isBeingEdited,
  yourSnippetsUniqueData,
  refetch,
  setChosenSnippetToEdit,
}) => {
  const snippetInfoRef = useRef(snippetInfo);
  const [editorConfigOption, setEditorConfigOption] = useState<languageTypes>(
    snippetInfo.langType
  );
  useEffect(() => {
    snippetInfoRef.current = snippetInfo;
    setEditorConfigOption(snippetInfo.langType);
  }, [snippetInfo]);
  return (
    <>
      <article className=' w-full md:w-[70%] '>
        <DashboardTop
          setChosenSnippetToEdit={setChosenSnippetToEdit}
          setSnippetInfo={setSnippetInfo}
          refetch={refetch}
          editorConfigOption={editorConfigOption}
          isBeingEdited={isBeingEdited}
          setEditorConfigOption={setEditorConfigOption}
          setIsBeingEdited={setIsBeingEdited}
          snippetInfo={snippetInfo}
          snippetInfoRef={snippetInfoRef}
          yourSnippetsUniqueData={yourSnippetsUniqueData}
        />
        <CodeEditorPlate
          isBeingEdited={isBeingEdited}
          snippetInfoRef={snippetInfoRef}
          snippetInfo={snippetInfo}
          editorConfigOption={editorConfigOption}
          setEditorConfigOption={setEditorConfigOption}
        />
        <SnippetTagSection
          setChosenSnippetToEdit={setChosenSnippetToEdit}
          setSnippetInfo={setSnippetInfo}
          refetch={refetch}
          isBeingEdited={isBeingEdited}
          snippetInfoRef={snippetInfoRef}
          snippetInfo={snippetInfo}
        />
      </article>
    </>
  );
};

export default DashboardCodeEditor;
