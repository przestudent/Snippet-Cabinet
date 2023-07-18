'use client';
import { FC, useState } from 'react';
import DashboardCodeEditor from './DashboardCodeEditor';
import YourSnippets from './YourSnippets';
import { UserSnippets } from '@prisma/client';
import { snippetInfo } from '../../../global';
import initialSnippetInfo from '@/util/initialSnippetInfo';

interface DashboardInnerContentProps {
  snippets: UserSnippets[];
}

const DashboardInnerContent: FC<DashboardInnerContentProps> = ({
  snippets,
}) => {
  const [snippetInfo, setSnippetInfo] = useState<snippetInfo>(
    initialSnippetInfo()
  );
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  return (
    <div className='flex'>
      <YourSnippets
        setSnippetInfo={setSnippetInfo}
        isBeingEdited={isBeingEdited}
        setIsBeingEdited={setIsBeingEdited}
        snippets={snippets}
      />
      <DashboardCodeEditor
        setSnippetInfo={setSnippetInfo}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default DashboardInnerContent;
