'use client';
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import EditSnippetName from './EditSnippetName';
import SetEditorLang from './SetEditorLang';
import SnippetTagSection from './SnippetTagSection';
import PostButton from './PostButton';
import { snippetInfo, snippetsTags } from '../../../global';
import { languageTypes } from '@prisma/client';
import CodeEditorPlate from './CodeEditorPlate';
interface DashboardCodeEditorProps {
  snippetInfo: snippetInfo;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
}

const DashboardCodeEditor: FC<DashboardCodeEditorProps> = ({ snippetInfo }) => {
  const chosenTagsRef = useRef<snippetsTags[]>(snippetInfo.tags);
  const newSnippetName = useRef('');
  const [editorConfigOption, setEditorConfigOption] = useState<languageTypes>(
    snippetInfo.langType
  );
  const editorCodeRef = useRef<string>(snippetInfo.snippetCode);
  const publicRef = useRef<boolean>(snippetInfo.public);
  useEffect(() => {
    chosenTagsRef.current = snippetInfo.tags;
    newSnippetName.current = snippetInfo.snippetTitle;
    publicRef.current = snippetInfo.public;
    editorCodeRef.current = snippetInfo.snippetCode;
    setEditorConfigOption(snippetInfo.langType);
  }, [snippetInfo]);
  return (
    <>
      <article className='w-[70%] '>
        <div className='flex py-5 items-center px-4 justify-between'>
          <EditSnippetName
            newSnippetName={newSnippetName}
            snippetInfo={snippetInfo}
          />
          <div>
            <SetEditorLang
              snippetInfo={snippetInfo}
              editorConfigOption={editorConfigOption}
              setEditorConfigOption={setEditorConfigOption}
            />
            <PostButton
              editorConfigOption={editorConfigOption}
              newSnippetName={newSnippetName}
              publicRef={publicRef}
              chosenTagsRef={chosenTagsRef}
              editorCodeRef={editorCodeRef}
              snippetInfo={snippetInfo}
            />
          </div>
        </div>
        <CodeEditorPlate
          snippetInfo={snippetInfo}
          editorCodeRef={editorCodeRef}
          editorConfigOption={editorConfigOption}
          setEditorConfigOption={setEditorConfigOption}
        />
        <SnippetTagSection
          publicRef={publicRef}
          chosenTagsRef={chosenTagsRef}
          snippetInfo={snippetInfo}
        />
      </article>
    </>
  );
};

export default DashboardCodeEditor;
