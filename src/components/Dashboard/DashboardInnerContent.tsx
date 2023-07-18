'use client';
import { FC, useState } from 'react';
import DashboardCodeEditor from './DashboardCodeEditor';
import YourSnippets from './DashboardLeft/YourSnippets';
import { UserSnippets } from '@prisma/client';
import { optimalSnippetsData, snippetInfo } from '../../../global';
import initialSnippetInfo from '@/util/initialSnippetInfo';

interface DashboardInnerContentProps {
  snippets: UserSnippets[];
}

const DashboardInnerContent: FC<DashboardInnerContentProps> = ({
  snippets,
}) => {
  //Can we though? Can we have two query client providers? Look into it!
  //TODO: USEQUERY HERE
  const yourSnippetsUniqueData = snippets.map((snippet) => {
    const data = {} as optimalSnippetsData;
    data.snippetId = snippet.snippetId;
    data.snippetTitle = snippet.snippetTitle;
    return data;
  });
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
        yourSnippetsUniqueData={yourSnippetsUniqueData}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default DashboardInnerContent;
