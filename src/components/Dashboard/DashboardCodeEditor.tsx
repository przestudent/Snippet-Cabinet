'use client';
import { FC, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
interface DashboardCodeEditorProps {}

const DashboardCodeEditor: FC<DashboardCodeEditorProps> = () => {
  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    console.log('value:', value);
    // console.log(viewUpdate);
  }, []);

  return (
    <article className='w-[70%]'>
      <CodeMirror
        theme={'dark'}
        value="console.log('hello world!');"
        height='75vh'
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </article>
  );
};

export default DashboardCodeEditor;
