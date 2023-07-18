import { UserSnippets } from '@prisma/client';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { snippetInfo } from '../../../global';
import initialSnippetInfo from '@/util/initialSnippetInfo';

interface YourSnippetsProps {
  snippets: UserSnippets[];
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
}

const YourSnippets: FC<YourSnippetsProps> = ({
  snippets,
  isBeingEdited,
  setIsBeingEdited,
  setSnippetInfo,
}) => {
  return (
    <aside className='px-3 border-r-2 w-[30%]  border-zinc-600'>
      <div className='flex items-center justify-between'>
        <h2 className='p-4 text-xl'>Your snippets</h2>
        <div>
          <button onClick={() => setSnippetInfo(initialSnippetInfo())}>
            +
          </button>
        </div>
      </div>
      <ul>
        {snippets.map((snippet) => (
          <li
            onClick={() => {
              // setIsBeingEdited(true);
              const newSnippetInfo = {} as unknown as snippetInfo;
              newSnippetInfo.langType = snippet.langType;
              newSnippetInfo.public = snippet.public;
              newSnippetInfo.snippetTitle = snippet.snippetTitle;
              newSnippetInfo.tags = snippet.tagBoilerPlate
                ? ['boilerPlate']
                : [];
              newSnippetInfo.snippetCode = snippet.snippetCode;
              newSnippetInfo.snippetId = snippet.snippetId;
              setSnippetInfo(newSnippetInfo);
            }}
            className='flex items-center cursor-pointer relative justify-between px-2 rounded border-2 hover:scale-105 transition-[scale] duration-1000 border-emerald-500 my-2'
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
