import GradientButton from '@/lib/GradientButton';
import { FC, MutableRefObject, useEffect, useState } from 'react';
import { snippetInfo, snippetsTags } from '../../../../global';

interface TagsInsideProps {
  snippetInfo: snippetInfo;
  isBeingEdited: boolean;
  snippetInfoRef: MutableRefObject<snippetInfo>;
}

const TagsInside: FC<TagsInsideProps> = ({
  snippetInfo,
  isBeingEdited,
  snippetInfoRef,
}) => {
  const avaiableTags: snippetsTags[] = ['boilerPlate'];
  const [tags, setTags] = useState<snippetsTags[]>(snippetInfo.tags);
  useEffect(() => {
    setTags(snippetInfo.tags);
  }, [snippetInfo]);
  return (
    <div className='flex gap-4 sm:w-auto w-full order-2 sm:order-1 items-center justify-center'>
      <h3 className='w-[10%] inline'>Tags:</h3>
      <ul className='flex gap-4 flex-wrap flex-row justify-around px-4'>
        {avaiableTags.map((tag) => {
          return (
            <li
              tabIndex={0}
              key={tag}
              className={`${
                tags.includes(tag) ? '' : 'opacity-70'
              }  cursor-pointer`}
              onClick={() => {
                if (isBeingEdited) {
                  const idx = tags.indexOf(tag);
                  if (idx === -1) {
                    setTags(tags.concat(tag));
                    snippetInfoRef.current.tags.push(tag);
                  } else {
                    tags.splice(idx, 1);
                    snippetInfoRef.current.tags.splice(idx, 1);
                    setTags([...tags]);
                  }
                }
              }}
            >
              <GradientButton
                isBeingEdited={isBeingEdited}
                className=' block text-lg py-1 px-3'
                innerButtonText={tag}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagsInside;
