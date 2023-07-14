import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import GradientButton from '@/lib/GradientButton';
import { FC, FunctionComponent, useState } from 'react';

interface SnippetTagSectionProps {}

const SnippetTagSection: FC<SnippetTagSectionProps> = () => {
  const [tags, setTags] = useState<string[]>([]);
  const avaiableTags = ['boilerPlate', 'a', 'd', 'e'];
  return (
    <div className='w-full flex py-3 px-2 items-center justify-between'>
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
                } else {
                  tags.splice(idx, 1);
                  setTags([...tags]);
                }
              }}
            >
              <GradientButton
                className='cursor-pointer block text-lg py-2 px-4'
                innerButtonText={tag}
              />
            </li>
          );
        })}
        {/*         
        <li>
          <GradientButton
            className='cursor-pointer block text-lg py-2 px-4'
            innerButtonText='Tag'
          />
        </li>
        <li>
          <GradientButton
            className='cursor-pointer block text-lg py-2 px-4'
            innerButtonText='Tag'
          />
        </li>
        <li>
          <GradientButton
            className='cursor-pointer block text-lg py-2 px-4'
            innerButtonText='Tag'
          />
        </li> */}

        {/* <li className='rounded-lg bg-zinc-400 px-4 py-2'>Tag</li> */}
      </ul>
      {/* <span className='relative'>
        <div className='leading-[unset] text-5xl cursor-pointer'>+</div>
        <BackgroundEmeraldToRed className='absolute -top-0 translate-y-[50%] -translate-x-full'>
          <ul className='flex gap-3'>
            <li>1</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </BackgroundEmeraldToRed>
      </span> */}
    </div>
  );
};

export default SnippetTagSection;
