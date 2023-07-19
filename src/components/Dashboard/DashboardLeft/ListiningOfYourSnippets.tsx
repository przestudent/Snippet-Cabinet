import { snippets } from '@codemirror/lang-javascript';
import { UserSnippets } from '@prisma/client';
import { Dispatch, SetStateAction, FC } from 'react';
import { snippetInfo, optimalSnippetsData } from '../../../../global';
import Image from 'next/image';
import IndividualSnippet from './IndividualSnippet';

interface ListingOfYourSnippetsProps {
  snippets: UserSnippets[] | undefined;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
  chosenSnippetToEdit: optimalSnippetsData | null;
}

const ListingOfYourSnippets: FC<ListingOfYourSnippetsProps> = ({
  chosenSnippetToEdit,
  isBeingEdited,
  setChosenSnippetToEdit,
  setIsBeingEdited,
  setSnippetInfo,
  snippets,
}) => {
  if (!snippets) {
    return <>none</>;
  }
  return (
    <ul>
      {snippets.map((snippet) => (
        <IndividualSnippet
          chosenSnippetToEdit={chosenSnippetToEdit}
          isBeingEdited={isBeingEdited}
          setChosenSnippetToEdit={setChosenSnippetToEdit}
          setIsBeingEdited={setIsBeingEdited}
          setSnippetInfo={setSnippetInfo}
          snippet={snippet}
          key={snippet.snippetId}
        />
      ))}
    </ul>
  );
};

export default ListingOfYourSnippets;
