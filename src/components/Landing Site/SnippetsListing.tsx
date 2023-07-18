import { snippets } from '@codemirror/lang-javascript';
import { FC, useState } from 'react';
import SnippetCard from './SnippetCard';
import Modal from '@/lib/Modal';
import { createPortal } from 'react-dom';
import { snippetsData } from '../../../global';
import { useSearchParamsContext } from '@/hooks/SearchParamsProvider';

interface SnippetListingProps {
  snippets: snippetsData[];
}

const SnippetListing: FC<SnippetListingProps> = ({ snippets }) => {
  const { queryParams } = useSearchParamsContext();
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.snippetId} snippet={snippet} />
        ))}
      </div>
    </>
  );
};

export default SnippetListing;
