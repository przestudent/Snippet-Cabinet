import { FC } from 'react';

interface YourSnippetsProps {}

const YourSnippets: FC<YourSnippetsProps> = () => {
  return (
    <aside className='pl-3 pr-1 border-r-2 w-[30%]  border-zinc-600'>
      <h2 className='p-4 text-xl'>Your snippets</h2>
      <ul></ul>
    </aside>
  );
};

export default YourSnippets;
