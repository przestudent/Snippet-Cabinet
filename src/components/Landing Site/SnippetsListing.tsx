import { FC, useState } from 'react';
import SnippetCard from './SnippetCard';
import Modal from '@/lib/Modal';
import { useSearchParamsContext } from '@/hooks/SearchParamsProvider';
import { useQuery } from 'react-query';
import fetchFromParamsSnippets from '@/util/fetchFromParamsSnippets';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { UserSnippets } from '@prisma/client';

interface SnippetListingProps {
  snippets: UserSnippets[];
}

const SnippetListing: FC<SnippetListingProps> = ({ snippets }) => {
  const { queryParams } = useSearchParamsContext();
  const { isLoading, data } = useQuery(
    ['snippets', queryParams],
    fetchFromParamsSnippets,
    {
      initialData: snippets,
    }
  );
  if (isLoading || data === undefined) {
    const editorHeight = '45vh';
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {['a', 'b', 'c', 'e', 'f', 'g'].map((letter) => (
          <BackgroundEmeraldToRed
            innerPadding='0'
            marginAround='0'
            key={letter}
          >
            <figure className='cursor-pointer'>
              <div
                className={`h-[${editorHeight}] bg-[#282c34] relative`}
              ></div>
              <figcaption className='p-4'>
                <h3>_</h3>
                <div className='flex justify-between flex-row flex-wrap gap-2'></div>
              </figcaption>
            </figure>
          </BackgroundEmeraldToRed>
        ))}
      </div>
    );
  }
  if (snippets.length === 0) {
    return <div className='text-7xl'>None found</div>;
  }
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {data.map((snippet) => (
          <SnippetCard key={snippet.snippetId} snippet={snippet} />
        ))}
      </div>
    </>
  );
};

export default SnippetListing;
