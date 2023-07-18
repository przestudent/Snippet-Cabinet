import GradientButton from '@/lib/GradientButton';
import { FC, FunctionComponent, MutableRefObject } from 'react';
import {
  optimalSnippetsData,
  snippetInfo,
  snippetsTags,
} from '../../../../global';
import { languageTypes } from '@prisma/client';

interface PostButtonProps {
  editorConfigOption: languageTypes;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  yourSnippetsUniqueData: optimalSnippetsData[];
}

const PostButton: FC<PostButtonProps> = ({
  snippetInfoRef,
  editorConfigOption,
}) => {
  async function postSnippetData() {
    const data = { ...snippetInfoRef.current };
    data.langType = editorConfigOption;
    const res = await fetch(`${window.location.origin}/api/create-snippet`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const data2 = await res.json();
  }
  //  TODO: HANDLE INVALID NAME
  return (
    <button onClick={postSnippetData}>
      <GradientButton innerButtonText='Save' />
    </button>
  );
};

export default PostButton;
