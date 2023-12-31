import { UserSnippets } from '@prisma/client';
import { Dispatch, FC, SetStateAction } from 'react';
import { snippetInfo, optimalSnippetsData } from '../../../../global';
import Image from 'next/image';

interface IndividualSnippetProps {
  snippet: UserSnippets;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
  chosenSnippetToEdit: optimalSnippetsData | null;
}

const IndividualSnippet: FC<IndividualSnippetProps> = ({
  chosenSnippetToEdit,
  isBeingEdited,
  setChosenSnippetToEdit,
  setIsBeingEdited,
  setSnippetInfo,
  snippet,
}) => {
  return (
    <li
      tabIndex={0}
      onClick={() => {
        setIsBeingEdited(false);
        setChosenSnippetToEdit({
          snippetId: snippet.snippetId,
          snippetTitle: snippet.snippetTitle,
        });
        const newSnippetInfo = {} as unknown as snippetInfo;
        newSnippetInfo.langType = snippet.langType;
        newSnippetInfo.public = snippet.public;
        newSnippetInfo.snippetTitle = snippet.snippetTitle;
        newSnippetInfo.tags = snippet.tags.split(' ');
        newSnippetInfo.snippetCode = snippet.snippetCode;
        newSnippetInfo.snippetId = snippet.snippetId;
        setSnippetInfo(newSnippetInfo);
      }}
      className={`flex items-center cursor-pointer relative justify-between px-2 rounded border-2 hover:scale-105 transition-all  border-emerald-500 my-2 ${
        snippet.snippetId === chosenSnippetToEdit?.snippetId ? 'scale-105' : ''
      }`}
      key={snippet.snippetTitle}
    >
      <div>
        <h3 className='text-xl'>{snippet.snippetTitle}</h3>
        <time className='text-zinc-500'>
          {typeof snippet.createdAt === 'string'
            ? new Date(snippet.createdAt as string).toDateString()
            : snippet.createdAt.toDateString()}
        </time>
      </div>
      <Image
        className='py-4'
        alt={snippet.langType}
        width={35}
        height={35}
        src={`/${snippet.langType}.svg`}
      />
      {snippet.snippetId === chosenSnippetToEdit?.snippetId ? (
        <div className=' absolute top-0 left-0 w-full h-full flex bg-[rgb(0,0,0,0.5)] items-center justify-center'>
          <div className='absolute scale-110 top-0 right-0 translate-x-[50%] accent-emerald-600 translate-y-[-50%]'>
            <input
              className='w-4 h-4 '
              type='radio'
              name='individual-snippet'
              id=''
              checked={isBeingEdited}
              onChange={() => setIsBeingEdited(!isBeingEdited)}
            />
          </div>
          {isBeingEdited ? (
            <div className='animate-pulse text-emerald-400 font-bold'>
              Editing...
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

export default IndividualSnippet;
