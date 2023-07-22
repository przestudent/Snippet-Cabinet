import { FC } from 'react';
import SnippetPageCodeEditor from './SnippetPageCodeEditor';
import { prisma } from '@/db/db';
import { snippetPageData } from '../../../global';
import Image from 'next/image';
import { tagsType } from '@/private/tagsSourceOfTruth';
import TagsMapping from '@/lib/TagsMapping';
import isNumeric from '@/util/isNumeric';

interface SnippetPageInsideProps {
  snippetId: string;
}

async function fetchSnippet(snippetId: number) {
  const snippet = await prisma.userSnippets.findUnique({
    where: { snippetId: snippetId, public: true },
    include: { userOwner: true },
  });
  if (!snippet) return undefined;
  return snippet;
}

const SnippetPageInside: FC<SnippetPageInsideProps> = async ({ snippetId }) => {
  if (!isNumeric(snippetId)) return <div>Invalid snippet id</div>;
  const snippet = await fetchSnippet(parseInt(snippetId));

  if (!snippet) {
    return (
      <>
        <div>this snippet doesnt exist</div>
      </>
    );
  }
  return (
    <>
      <div className='flex justify-between px-6 pt-4 pb-2  gap-3 border-zinc-500 border-b-2'>
        <h1 className='text-3xl text-emerald-600 text-left'>
          {snippet.snippetTitle}
        </h1>
        <h2 className='text-xl flex-row flex-wrap flex gap-2 justify-end items-center text-right'>
          <span className='text-emerald-500'>Author: </span>
          <div>
            <span>{snippet!.userOwner.username}</span>
            <Image
              src={snippet.userOwner.profileImageUrl}
              alt=''
              className='rounded-[50%] inline-block ml-2'
              width={40}
              height={40}
            />
          </div>
        </h2>
      </div>
      <SnippetPageCodeEditor
        snippetLangType={snippet.langType}
        snippetCode={snippet.snippetCode}
      />
      <div className='flex justify-between px-6 py-4 items-center'>
        <div className='flex gap-4'>
          <div>Tags: </div>
          <TagsMapping snippet={snippet} />
        </div>
        <time className='italic text-emerald-500 text-lg'>
          {snippet.createdAt.toDateString()}
        </time>
      </div>
    </>
  );
};

export default SnippetPageInside;
