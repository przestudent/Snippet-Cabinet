'use client';
import { FC, useState } from 'react';
import DashboardCodeEditor from './DashboardCodeEditor';
import YourSnippets from './DashboardLeft/YourSnippets';
import { UserSnippets } from '@prisma/client';
import { optimalSnippetsData, snippetInfo } from '../../../global';
import initialSnippetInfo from '@/util/initialSnippetInfo';
import { useQuery } from 'react-query';
import fetchUserSnippets from '@/util/fetchUserSnippets';

interface DashboardInnerContentProps {
  snippets: UserSnippets[];
}

const DashboardInnerContent: FC<DashboardInnerContentProps> = ({
  snippets,
}) => {
  const [chosenSnippetToEdit, setChosenSnippetToEdit] =
    useState<optimalSnippetsData | null>(null);
  const { refetch, data } = useQuery({
    queryFn: fetchUserSnippets,
    initialData: snippets,
  });
  const [snippetInfo, setSnippetInfo] = useState<snippetInfo>(
    initialSnippetInfo()
  );
  const [isBeingEdited, setIsBeingEdited] = useState(true);
  const yourSnippetsUniqueData: optimalSnippetsData[] = data
    ? data.map((snippet) => {
        const data = {} as optimalSnippetsData;
        data.snippetId = snippet.snippetId;
        data.snippetTitle = snippet.snippetTitle;
        return data;
      })
    : [{ snippetId: -1, snippetTitle: '' }];

  return (
    <div className='flex flex-wrap flex-row'>
      <YourSnippets
        chosenSnippetToEdit={chosenSnippetToEdit}
        setChosenSnippetToEdit={setChosenSnippetToEdit}
        setSnippetInfo={setSnippetInfo}
        isBeingEdited={isBeingEdited}
        setIsBeingEdited={setIsBeingEdited}
        snippets={data}
      />
      <DashboardCodeEditor
        setChosenSnippetToEdit={setChosenSnippetToEdit}
        refetch={refetch}
        setSnippetInfo={setSnippetInfo}
        isBeingEdited={isBeingEdited}
        setIsBeingEdited={setIsBeingEdited}
        yourSnippetsUniqueData={yourSnippetsUniqueData}
        snippetInfo={snippetInfo}
      />
    </div>
  );
};

export default DashboardInnerContent;
