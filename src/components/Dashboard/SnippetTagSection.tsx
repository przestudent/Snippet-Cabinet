import GradientButton from '@/lib/GradientButton';
import { FC, FunctionComponent } from 'react';

interface SnippetTagSectionProps {}

const SnippetTagSection: FC<SnippetTagSectionProps> = () => {
  return (
    <div className='w-full flex py-3 px-2 items-center justify-between'>
      <h3 className='w-[10%] inline'>Tags:</h3>
      <ul className='flex gap-4 flex-wrap flex-row justify-around px-4'>
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
        </li>
        <li>
          <GradientButton
            className='cursor-pointer block text-lg py-2 px-4'
            innerButtonText='Tag'
          />
        </li>

        {/* <li className='rounded-lg bg-zinc-400 px-4 py-2'>Tag</li> */}
      </ul>
      <span>
        <div className='leading-[unset] text-5xl cursor-pointer'>+</div>
      </span>
    </div>
  );
};

export default SnippetTagSection;
