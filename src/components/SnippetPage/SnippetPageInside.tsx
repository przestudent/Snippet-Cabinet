import { FC } from 'react';
import SnippetPageCodeEditor from './SnippetPageCodeEditor';
import { prisma } from '@/db/db';

interface SnippetPageInsideProps {
  snippetId: string;
}

async function fetchSnippet(snippetId: number) {
  const snippet = await prisma.userSnippets.findUnique({
    where: { snippetId: snippetId, public: true },
    include: { userOwner: true },
  });
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
      <div className='flex justify-between px-6 pt-4  border-zinc-500 border-b-2'>
        <h1 className='text-3xl'>{snippet.snippetTitle}</h1>
        <h2 className='text-xl'>{snippet!.userOwner.username}</h2>
      </div>
      <SnippetPageCodeEditor />
      <div>{snippet.tagBoilerPlate}</div>
    </>
  );
};

export default SnippetPageInside;
