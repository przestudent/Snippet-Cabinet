import { User, UserSnippets } from '@prisma/client';
import { FC } from 'react';

interface TagsMappingProps {
  snippet: UserSnippets;
}

const TagsMapping: FC<TagsMappingProps> = ({ snippet }) => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {snippet.tags.split(' ').map((tag) => {
        if (tag === '') return <div key={tag}></div>;
        return (
          <div
            key={tag}
            className='p-1 text-sm  rounded flex items-center bg-gradient-to-b from-green-500 to-emerald-700'
          >
            <div className='flex items-center'>{tag}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TagsMapping;
