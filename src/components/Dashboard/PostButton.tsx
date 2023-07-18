import GradientButton from '@/lib/GradientButton';
import { FC, FunctionComponent, MutableRefObject } from 'react';
import { snippetInfo, snippetsTags } from '../../../global';
import { languageTypes } from '@prisma/client';

interface PostButtonProps {
  editorCodeRef: MutableRefObject<string>;
  snippetInfo: snippetInfo;
  chosenTagsRef: MutableRefObject<snippetsTags[]>;
  publicRef: MutableRefObject<boolean>;
  editorConfigOption: languageTypes;
  newSnippetName: MutableRefObject<string>;
}

const PostButton: FC<PostButtonProps> = ({
  editorCodeRef,
  chosenTagsRef,
  snippetInfo,
  publicRef,
  editorConfigOption,
  newSnippetName,
}) => {
  async function postSnippetData() {
    const data = { ...snippetInfo };
    data.public = publicRef.current;
    data.snippetCode = editorCodeRef.current;
    data.tags = chosenTagsRef.current;
    data.snippetTitle = newSnippetName.current;
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
