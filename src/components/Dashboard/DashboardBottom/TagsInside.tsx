import GradientButton from '@/lib/GradientButton';
import {
  FC,
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import { snippetInfo, snippetsTags } from '../../../../global';

interface TagsInsideProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
}

const TagsInside: FC<TagsInsideProps> = ({ snippetInfo, snippetInfoRef }) => {
  const avaiableTags: snippetsTags[] = ['boilerPlate'];
  const [tags, setTags] = useState<snippetsTags[]>(snippetInfo.tags);
  useEffect(() => {
    setTags(snippetInfo.tags);
  }, [snippetInfo]);
  return (
    <div className='flex gap-4 items-center justify-center'>
      <h3 className='w-[10%] inline'>Tags:</h3>
      <ul className='flex gap-4 flex-wrap flex-row justify-around px-4'>
        {avaiableTags.map((tag) => {
          return (
            <li
              key={tag}
              className={`${tags.includes(tag) ? '' : 'opacity-70'}`}
              onClick={() => {
                const idx = tags.indexOf(tag);
                if (idx === -1) {
                  setTags(tags.concat(tag));
                  snippetInfoRef.current.tags.push(tag);
                } else {
                  tags.splice(idx, 1);
                  snippetInfoRef.current.tags.splice(idx, 1);
                  setTags([...tags]);
                }
              }}
            >
              <GradientButton
                className='cursor-pointer block text-lg py-1 px-3'
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
