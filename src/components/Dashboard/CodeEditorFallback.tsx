import { FC } from 'react';

interface CodeEditorFallbackProps {}

const CodeEditorFallback: FC<CodeEditorFallbackProps> = () => {
  return <div className='h-[75vh] bg-red-700'></div>;
};

export default CodeEditorFallback;
