'use client';
import { FunctionComponent, useState } from 'react';
import SnippetListing from './SnippetsListing';
import SnippetCabinetRightColumn from './Right-Section/SnippetCabinetRightColumn';
import { snippetsData } from '../../../global';
import { languageTypes } from '@prisma/client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useSearchParams } from 'next/navigation';
import { SearchParamsProvider } from '@/hooks/SearchParamsProvider';
import useQueryParams from '@/hooks/useQueryParams';

interface LandingPageWrapperProps {
  snippets: snippetsData[];
}

const LandingPageWrapper: FunctionComponent<LandingPageWrapperProps> = ({
  snippets,
}) => {
  const [isChosenLang, setIsChosenLang] = useState<
    Record<languageTypes, boolean>
  >({
    HTML: true,
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
        <SnippetListing snippets={snippets} />
        <SnippetCabinetRightColumn
          isChosenLang={isChosenLang}
          setIsChosenLang={setIsChosenLang}
          doesMediaMatch={doesMediaMatch}
        />
      </SearchParamsProvider>
    </main>
  );
};

export default LandingPageWrapper;
