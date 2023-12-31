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
import { snippetInfo } from '../../../../global';

interface CodeEditorPlateProps {
  editorConfigOption: languageTypes;
  snippetInfo: snippetInfo;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  isBeingEdited: boolean;
}
//TODO: you might fix the delay here
const CodeEditorPlate: FC<CodeEditorPlateProps> = ({
  snippetInfoRef,
  snippetInfo,
  editorConfigOption,
  isBeingEdited,
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
      snippetInfoRef.current.snippetCode = value;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className='min-h-[75vh] bg-[#282c34]'>
      <CodeMirror
        theme={'dark'}
        value={snippetInfoRef.current.snippetCode}
        height='75vh'
        extensions={[editorConfigObj[editorConfigOption]]}
        onChange={onChange}
        editable={isBeingEdited}
      />
    </div>
  );
};

export default CodeEditorPlate;
