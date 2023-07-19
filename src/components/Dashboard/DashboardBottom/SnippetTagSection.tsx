import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import GradientButton from '@/lib/GradientButton';
import {
  FC,
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import {
  refetchFuncUserSnippets,
  snippetInfo,
  snippetsTags,
} from '../../../../global';
import TagsInside from './TagsInside';
import ButtonPublicAndDelete from './ButtonPublicAndDelete';

interface SnippetTagSectionProps {
  snippetInfo: snippetInfo;
  isBeingEdited: boolean;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  refetch: refetchFuncUserSnippets;
}

const SnippetTagSection: FC<SnippetTagSectionProps> = ({
  snippetInfoRef,
  isBeingEdited,
  snippetInfo,
  refetch,
}) => {
  return (
    <div className='w-full flex-wrap flex-row flex py-3 px-2 items-center justify-center gap-y-1 sm:justify-between'>
      <TagsInside
        snippetInfo={snippetInfo}
        isBeingEdited={isBeingEdited}
        snippetInfoRef={snippetInfoRef}
      />
      <ButtonPublicAndDelete
        refetch={refetch}
        isBeingEdited={isBeingEdited}
        snippetInfo={snippetInfo}
        snippetInfoRef={snippetInfoRef}
      />
    </div>
  );
};

export default SnippetTagSection;
