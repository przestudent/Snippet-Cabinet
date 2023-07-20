'use client';
import { FC, useState } from 'react';
import { snippetsData } from '../../../global';
import { languageTypes } from '@prisma/client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SearchParamsProvider } from '@/hooks/SearchParamsProvider';
import MainContent from './MainContent';

interface LandingPageWrapperProps {
  snippets: snippetsData[];
}

const LandingPageWrapper: FC<LandingPageWrapperProps> = ({ snippets }) => {
  const [isChosenLang, setIsChosenLang] = useState<
    Record<languageTypes, boolean>
  >({
    HTML: false,
    JavaScript: false,
    JSX: false,
  });
  const { doesMediaMatch } = useMediaQuery({
    mediaCriteria: '(min-width:750px)',
  });
  return (
    <main
      className={`grid grid-cols-${
        doesMediaMatch ? '[70%_30%]' : '1'
      }  justify-between p-3`}
    >
      <SearchParamsProvider>
        <MainContent
          doesMediaMatch={doesMediaMatch}
          isChosenLang={isChosenLang}
          setIsChosenLang={setIsChosenLang}
          snippets={snippets}
        />
      </SearchParamsProvider>
    </main>
  );
};

export default LandingPageWrapper;
