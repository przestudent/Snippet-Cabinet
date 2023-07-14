import { snippets } from '@codemirror/lang-javascript';
import { FC, useState } from 'react';
import SnippetCard from './SnippetCard';
import Modal from '@/lib/Modal';
import { createPortal } from 'react-dom';

interface SnippetListingProps {
  chosenLanguage: string;
  snippets: snippetsData[];
}

const SnippetListing: FC<SnippetListingProps> = ({
  chosenLanguage,
  snippets,
}) => {
  return (
    <>
      <a href='#snippets-listing'></a>
      <div className='flex gap-2 flex-row flex-wrap lg:flex-nowrap'>
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.snippetId} snippet={snippet} />
        ))}
      </div>

      <h3 id='listing'>{chosenLanguage}</h3>
    </>
  );
};

export default SnippetListing;
