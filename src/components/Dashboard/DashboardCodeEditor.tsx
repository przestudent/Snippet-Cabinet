'use client';
import {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import GradientButton from '@/lib/GradientButton';
import Image from 'next/image';
import EditSnippetName from './EditSnippetName';
import SetEditorLang from './SetEditorLang';
import SnippetTagSection from './SnippetTagSection';
import PostButton from './PostButton';
import { snippetInfo } from '../../../global';
interface DashboardCodeEditorProps {
  snippetInfo: snippetInfo;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
}

const DashboardCodeEditor: FC<DashboardCodeEditorProps> = ({
  setSnippetInfo,
  snippetInfo,
}) => {
  const [formattedText, setFormattedText] = useState('');
  const editorConfig = [javascript(), javascript({ jsx: true }), html()];
  const [editorConfigOption, setEditorConfigOption] = useState<0 | 1 | 2>(1);
  const editorCodeRef = useRef<string>(snippetInfo.editorCode);
  const onChange = useCallback(
    (value: string, { view }: { view: { contentDOM: HTMLElement } }) => {
      // setFormattedText(view.contentDOM.innerHTML);
      editorCodeRef.current = value;
    },
    []
  );

  //TODO: we know for a fact that this will cause perfomarnace issues, deal with it later
  return (
    <>
      <article className='w-[70%] '>
        <div className='flex py-5 items-center px-4 justify-between'>
          <EditSnippetName
            setSnippetInfo={setSnippetInfo}
            snippetInfo={snippetInfo}
          />
          <div>
            <SetEditorLang
              setSnippetInfo={setSnippetInfo}
              snippetInfo={snippetInfo}
              editorConfigOption={editorConfigOption}
              setEditorConfigOption={setEditorConfigOption}
            />
            <PostButton
              editorCodeRef={editorCodeRef}
              snippetInfo={snippetInfo}
            />
          </div>
        </div>
        {/* TODO: ADD SUSPENSE MAYBE? */}
        <div className='min-h-[75vh] bg-[#282c34]'>
          <CodeMirror
            theme={'dark'}
            value="console.log('hello world!');"
            height='75vh'
            extensions={[editorConfig[editorConfigOption]]}
            onChange={onChange}
          />
        </div>
        <SnippetTagSection />
      </article>
      {/* <div dangerouslySetInnerHTML={{ __html: formattedText }}></div> */}
    </>
  );
};

export default DashboardCodeEditor;
