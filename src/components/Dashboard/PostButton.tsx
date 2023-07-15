import GradientButton from '@/lib/GradientButton';
import { FC, FunctionComponent, MutableRefObject } from 'react';
import { snippetInfo } from '../../../global';

interface PostButtonProps {
  editorCodeRef: MutableRefObject<string | undefined>;
  snippetInfo: snippetInfo;
}

const PostButton: FC<PostButtonProps> = ({ editorCodeRef, snippetInfo }) => {
  async function postSnippetData() {
    const data = { ...snippetInfo };
    data.editorCode = editorCodeRef.current ?? snippetInfo.editorCode;
    await fetch(`${window.location.origin}/api/create-snippet`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // const data2 = await res.json();
    // console.log(data2);
  }

  return (
    <button onClick={postSnippetData}>
      <GradientButton innerButtonText='Save' />
    </button>
  );
};

export default PostButton;
