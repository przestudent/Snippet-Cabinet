'use client';
import { FC, useState } from 'react';
import DashboardCodeEditor from './DashboardCodeEditor';
import YourSnippets from './YourSnippets';
import { UserSnippets } from '@prisma/client';

interface DashboardInnerContentProps {
  snippets: UserSnippets[];
}

const DashboardInnerContent: FC<DashboardInnerContentProps> = ({
  snippets,
}) => {
  const [snippetInfo, setSnippetInfo] = useState<snippetInfo>({
    editorCode: "console.log('Hello World')",
    editorLang: 'JavaScript',
    snippetName: 'Snippet name',
    tags: [],
  });
  return (
    <div className='flex'>
      <YourSnippets snippets={snippets} />
      <DashboardCodeEditor
        setSnippetInfo={setSnippetInfo}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default DashboardInnerContent;
