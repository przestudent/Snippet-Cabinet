import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import GradientButton from '@/lib/GradientButton';
import {
  FC,
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import { snippetInfo, snippetsTags } from '../../../global';

interface SnippetTagSectionProps {
  chosenTagsRef: MutableRefObject<snippetsTags[]>;
  snippetInfo: snippetInfo;
  publicRef: MutableRefObject<boolean>;
}

const SnippetTagSection: FC<SnippetTagSectionProps> = ({
  chosenTagsRef,
  publicRef,
  snippetInfo,
}) => {
  const [tags, setTags] = useState<snippetsTags[]>(snippetInfo.tags);
  const avaiableTags: snippetsTags[] = ['boilerPlate'];
  const [isPublic, setIsPublic] = useState(snippetInfo.public);
  useEffect(() => {
    setIsPublic(snippetInfo.public);
    setTags(snippetInfo.tags);
  }, [snippetInfo]);
  return (
    <div className='w-full flex py-3 px-2 items-center justify-between'>
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
                    chosenTagsRef.current.push(tag);
                  } else {
                    tags.splice(idx, 1);
                    chosenTagsRef.current.splice(idx, 1);
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
      <div>
        <button
          onClick={() => {
            publicRef.current = !publicRef.current;
            setIsPublic(!isPublic);
          }}
        >
          {isPublic + ''}
        </button>
      </div>
    </div>
  );
};

export default SnippetTagSection;
