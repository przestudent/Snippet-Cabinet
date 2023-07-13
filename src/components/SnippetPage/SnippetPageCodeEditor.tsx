'use client';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { FC } from 'react';

interface SnippetPageCodeEditorProps {}

const SnippetPageCodeEditor: FC<SnippetPageCodeEditorProps> = () => {
  return (
    <div className='min-h-[75vh] bg-[#282c34]'>
      <CodeMirror
        theme={'dark'}
        value="console.log('hello world!');"
        height='75vh'
        extensions={[javascript()]}
      />
    </div>
  );
};

export default SnippetPageCodeEditor;
