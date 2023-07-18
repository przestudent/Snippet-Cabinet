import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import GradientButton from '@/lib/GradientButton';
import {
  FC,
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import { snippetInfo, snippetsTags } from '../../../../global';
import TagsInside from './TagsInside';
import ButtonPublic from './ButtonPublic';

interface SnippetTagSectionProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
}

const SnippetTagSection: FC<SnippetTagSectionProps> = ({
  snippetInfoRef,
  snippetInfo,
}) => {
  return (
    <div className='w-full flex py-3 px-2 items-center justify-between'>
      <TagsInside snippetInfo={snippetInfo} snippetInfoRef={snippetInfoRef} />
      <ButtonPublic snippetInfo={snippetInfo} snippetInfoRef={snippetInfoRef} />
    </div>
  );
};

export default SnippetTagSection;
