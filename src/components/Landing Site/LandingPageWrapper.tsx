'use client';
import { FunctionComponent, useState } from 'react';
import SnippetListing from './SnippetsListing';
import WelcomeMain from './WelcomeMain';

interface LandingPageWrapperProps {
  snippets: snippetsData[];
}

const LandingPageWrapper: FunctionComponent<LandingPageWrapperProps> = ({
  snippets,
}) => {
  const [chosenLanguage, setChosenLanguage] = useState<languageTypes>('JSX');
  const choseableLanguages: languageTypes[] = ['HTML', 'JavaScript', 'JSX'];
  return (
    <>
      <WelcomeMain
        choseableLanguages={choseableLanguages}
        setChosenLanguage={setChosenLanguage}
      />
      <SnippetListing snippets={snippets} chosenLanguage={chosenLanguage} />
    </>
  );
};

export default LandingPageWrapper;
