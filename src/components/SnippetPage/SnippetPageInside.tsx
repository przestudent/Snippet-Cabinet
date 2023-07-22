import { FC } from 'react';
import SnippetPageCodeEditor from './SnippetPageCodeEditor';
import { prisma } from '@/db/db';
import { snippetPageData } from '../../../global';
import Image from 'next/image';

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
  function isNumeric(str: unknown) {
    if (typeof str != 'string') return false; // we only process strings!
    return (
      !isNaN(str as unknown as number) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }
  if (!snippet) {
    return (
      <>
        <div>this snippet doesnt exist</div>
      </>
    );
  }
  return (
    <>
      <div className='flex justify-between px-6 pt-4 pb-2  border-zinc-500 border-b-2'>
        <h1 className='text-3xl text-emerald-600 text-left'>
          {snippet.snippetTitle}
        </h1>
        <h2 className='text-xl flex gap-2 text-right'>
          <span className='text-emerald-500'>Author: </span>
          <Image
            src={snippet.userOwner.profileImageUrl}
            alt=''
            width={30}
            height={40}
          />
          <span>{snippet!.userOwner.username}</span>
        </h2>
      </div>
      <SnippetPageCodeEditor
        snippetLangType={snippet.langType}
        snippetCode={snippet.snippetCode}
      />
      <div className='flex justify-between px-6 py-4 items-center'>
        <div>
          Tags: <div>{snippet.tagBoilerPlate}</div>
        </div>
        <time className='italic text-emerald-500 text-lg'>
          {snippet.createdAt.toDateString()}
        </time>
      </div>
    </>
  );
};

export default SnippetPageInside;
