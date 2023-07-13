'use client';
import { FC, useState } from 'react';
import DashboardCodeEditor from './DashboardCodeEditor';
import YourSnippets from './YourSnippets';

interface DashboardInnerContentProps {}

const DashboardInnerContent: FC<DashboardInnerContentProps> = () => {
  const [snippetInfo, setSnippetInfo] = useState<snippetInfo>({
    editorCode: "console.log('Hello World')",
    editorLang: 'JavaScript',
    snippetName: 'Snippet name',
  });
  return (
    <div className='flex'>
      <YourSnippets />
      <DashboardCodeEditor
        setSnippetInfo={setSnippetInfo}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default DashboardInnerContent;
