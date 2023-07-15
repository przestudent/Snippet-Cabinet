import { UserSnippets } from '@prisma/client';
import { FC, useState } from 'react';
import Image from 'next/image';

interface YourSnippetsProps {
  snippets: UserSnippets[];
}

const YourSnippets: FC<YourSnippetsProps> = ({ snippets }) => {
  const [isBeingEdited, setIsbeingEdited] = useState(false);
  return (
    <aside className='px-3 border-r-2 w-[30%]  border-zinc-600'>
      <h2 className='p-4 text-xl'>Your snippets</h2>
      <ul>
        {snippets.map((snippet) => (
          <li
            onClick={() => {
              setIsbeingEdited(true);
            }}
            className='flex items-center cursor-pointer relative justify-between px-2 rounded border-2 border-emerald-500 my-2'
            key={snippet.snippetTitle}
          >
            <div>
              <h3 className='text-xl'>{snippet.snippetTitle}</h3>
              <time className='text-zinc-500'>
                {snippet.createdAt.toDateString()}
              </time>
            </div>
            <Image
              className='py-4'
              alt={snippet.langType}
              width={35}
              height={35}
              src={`/${snippet.langType}.svg`}
            />
            {isBeingEdited ? (
              <div className=' absolute top-0 left-0 w-full h-full flex bg-[rgb(0,0,0,0.5)] items-center justify-center'>
                <div className='animate-pulse text-emerald-400 font-bold'>
                  Editing...
                </div>
              </div>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default YourSnippets;
