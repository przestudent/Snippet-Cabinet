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
  snippetInfo,
  snippetsTags,
} from '../../../global';
import { languageTypes } from '@prisma/client';
import CodeEditorPlate from './DashbordMiddle/CodeEditorPlate';
interface DashboardCodeEditorProps {
  snippetInfo: snippetInfo;
  yourSnippetsUniqueData: optimalSnippetsData[];
}

const DashboardCodeEditor: FC<DashboardCodeEditorProps> = ({
  snippetInfo,
  yourSnippetsUniqueData,
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
        <div className='flex py-5 items-center px-4 justify-between'>
          <EditSnippetName
            snippetInfoRef={snippetInfoRef}
            snippetInfo={snippetInfo}
          />
          <div>
            <SetEditorLang
              snippetInfo={snippetInfo}
              editorConfigOption={editorConfigOption}
              setEditorConfigOption={setEditorConfigOption}
            />
            <PostButton
              yourSnippetsUniqueData={yourSnippetsUniqueData}
              snippetInfoRef={snippetInfoRef}
              editorConfigOption={editorConfigOption}
            />
          </div>
        </div>
        {/* WE CAN EXTRACT THE EDITOR CONFIG, TODO: DO IT LATER */}
        <CodeEditorPlate
          snippetInfoRef={snippetInfoRef}
          snippetInfo={snippetInfo}
          editorConfigOption={editorConfigOption}
          setEditorConfigOption={setEditorConfigOption}
        />
        <SnippetTagSection
          snippetInfoRef={snippetInfoRef}
          snippetInfo={snippetInfo}
        />
      </article>
    </>
  );
};

export default DashboardCodeEditor;
