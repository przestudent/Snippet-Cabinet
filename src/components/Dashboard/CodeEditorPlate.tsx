import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { languageTypes } from '@prisma/client';
import CodeMirror from '@uiw/react-codemirror';
import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useCallback,
} from 'react';
import { snippetInfo } from '../../../global';

interface CodeEditorPlateProps {
  editorCodeRef: MutableRefObject<string>;
  editorConfigOption: languageTypes;
  snippetInfo: snippetInfo;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
}

const CodeEditorPlate: FC<CodeEditorPlateProps> = ({
  editorCodeRef,
  snippetInfo,
  editorConfigOption,
  setEditorConfigOption,
}) => {
  const editorConfigObj = {
    JavaScript: javascript(),
    JSX: javascript({ jsx: true }),
    HTML: html(),
  };
  const onChange = useCallback(
    (value: string, { view }: { view: { contentDOM: HTMLElement } }) => {
      // setFormattedText(view.contentDOM.innerHTML);
      editorCodeRef.current = value;
      console.log(editorCodeRef.current);
    },
    []
  );
  return (
    <div className='min-h-[75vh] bg-[#282c34]'>
      <CodeMirror
        theme={'dark'}
        value={snippetInfo.snippetCode}
        height='75vh'
        extensions={[editorConfigObj[editorConfigOption]]}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditorPlate;
