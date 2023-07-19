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
  snippetsTags,
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
}

const DashboardCodeEditor: FC<DashboardCodeEditorProps> = ({
  snippetInfo,
  setIsBeingEdited,
  isBeingEdited,
  yourSnippetsUniqueData,
  refetch,
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
      <article className='w-[70%] '>
        <DashboardTop
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
