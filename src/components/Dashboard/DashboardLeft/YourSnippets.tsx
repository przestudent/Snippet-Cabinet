import { UserSnippets } from '@prisma/client';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { optimalSnippetsData, snippetInfo } from '../../../../global';
import initialSnippetInfo from '@/util/initialSnippetInfo';
import ListingOfYourSnippets from './ListiningOfYourSnippets';

interface YourSnippetsProps {
  snippets: UserSnippets[] | undefined;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
}

const YourSnippets: FC<YourSnippetsProps> = ({
  snippets,
  isBeingEdited,
  setIsBeingEdited,
  setSnippetInfo,
}) => {
  const [chosenSnippetToEdit, setChosenSnippetToEdit] =
    useState<optimalSnippetsData | null>(null);
  return (
    <aside className='px-3 border-r-2 w-[30%]  border-zinc-600'>
      <div className='flex items-center justify-between'>
        <h2 className='p-4 text-xl'>Your snippets</h2>
        <div className='text-6xl'>
          <button
            onClick={() => {
              setChosenSnippetToEdit(null);
              setIsBeingEdited(true);
              setSnippetInfo(initialSnippetInfo());
            }}
          >
            +
          </button>
        </div>
      </div>
      <ListingOfYourSnippets
        chosenSnippetToEdit={chosenSnippetToEdit}
        isBeingEdited={isBeingEdited}
        setChosenSnippetToEdit={setChosenSnippetToEdit}
        setIsBeingEdited={setIsBeingEdited}
        setSnippetInfo={setSnippetInfo}
        snippets={snippets}
      />
    </aside>
  );
};

export default YourSnippets;
