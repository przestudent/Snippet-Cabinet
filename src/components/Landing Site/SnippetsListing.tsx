import { snippets } from '@codemirror/lang-javascript';
import { FC, useState } from 'react';
import SnippetCard from './SnippetCard';
import Modal from '@/lib/Modal';
import { createPortal } from 'react-dom';
import { snippetsData } from '../../../global';
import { useSearchParamsContext } from '@/hooks/SearchParamsProvider';
import { useQuery } from 'react-query';
import fetchFromParamsSnippets from '@/util/fetchFromParamsSnippets';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';

interface SnippetListingProps {
  snippets: snippetsData[];
}

const SnippetListing: FC<SnippetListingProps> = ({ snippets }) => {
  const { queryParams } = useSearchParamsContext();
  const { isLoading, data } = useQuery({
    queryKey: ['snippets', queryParams],
    queryFn: fetchFromParamsSnippets,
    initialData: snippets,
  });
  if (isLoading) {
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

  if (data === undefined) {
    return <div>undefined</div>;
  }
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {data.map((snippet) => (
          <SnippetCard key={snippet.snippetId} snippet={snippet} />
        ))}
      </div>
      {/* <div>{isLoading ? <div>Loadimg</div> : <div>Not loading</div>}</div> */}
    </>
  );
};

export default SnippetListing;
