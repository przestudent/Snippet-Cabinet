import { FC } from 'react';

interface YourSnippetsProps {}

const YourSnippets: FC<YourSnippetsProps> = () => {
  return (
    <aside className='pl-3 pr-1 border-r-2 w-[30%]  border-zinc-600'>
      <h2>Your snippets</h2>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
      </ul>
    </aside>
  );
};

export default YourSnippets;
