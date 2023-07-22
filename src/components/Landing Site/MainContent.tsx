import { Dispatch, FC, SetStateAction } from 'react';
import SnippetCabinetRightColumn from './Right-Section/SnippetCabinetRightColumn';
import SnippetListing from './SnippetsListing';
import { UserSnippets, languageTypes } from '@prisma/client';
import { snippetsData } from '../../../global';

interface MainContentProps {
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  snippets: UserSnippets[];
  isChosenLang: Record<languageTypes, boolean>;
  doesMediaMatch: boolean;
}

const MainContent: FC<MainContentProps> = ({
  doesMediaMatch,
  isChosenLang,
  setIsChosenLang,
  snippets,
}) => {
  return (
    <>
      <SnippetListing snippets={snippets} />
      <SnippetCabinetRightColumn
        isChosenLang={isChosenLang}
        setIsChosenLang={setIsChosenLang}
        doesMediaMatch={doesMediaMatch}
      />
    </>
  );
};

export default MainContent;
