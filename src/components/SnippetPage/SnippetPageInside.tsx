import { FC } from 'react';
import SnippetPageCodeEditor from './SnippetPageCodeEditor';
import { prisma } from '@/db/db';

interface SnippetPageInsideProps {
  snippetId: number;
}

async function fetchSnippet(snippetId: number) {
  const snippet = await prisma.userSnippets.findMany({
    where: { snippetId: snippetId, public: true },
  });
  return snippet;
}

const SnippetPageInside: FC<SnippetPageInsideProps> = async ({ snippetId }) => {
  const snippet = await fetchSnippet(snippetId);

  return (
    <>
      <div className='flex justify-between px-6 pt-4  border-zinc-500 border-b-2'>
        <h1 className='text-3xl'>Title</h1>
        <h2 className='text-xl'>Author</h2>
      </div>
      <SnippetPageCodeEditor />
      <div>Tags</div>
    </>
  );
};

export default SnippetPageInside;
