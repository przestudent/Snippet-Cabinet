'use client';
import CodeMirror from '@uiw/react-codemirror';
import { javascript, snippets } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { FC } from 'react';
import { languageTypes } from '@prisma/client';

interface SnippetPageCodeEditorProps {
  snippetCode: string;
  snippetLangType: languageTypes;
}

const SnippetPageCodeEditor: FC<SnippetPageCodeEditorProps> = ({
  snippetLangType,
  snippetCode,
}) => {
  const editorConfigObj = {
    JavaScript: javascript(),
    JSX: javascript({ jsx: true }),
    HTML: html(),
  };
  return (
    <div className='min-h-[75vh] bg-[#282c34]'>
      <CodeMirror
        theme={'dark'}
        value={snippetCode}
        height='75vh'
        extensions={[editorConfigObj[snippetLangType]]}
      />
    </div>
  );
};

export default SnippetPageCodeEditor;
