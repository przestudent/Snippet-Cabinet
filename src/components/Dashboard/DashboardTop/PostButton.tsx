import GradientButton from '@/lib/GradientButton';
import {
  Dispatch,
  FC,
  FunctionComponent,
  MutableRefObject,
  SetStateAction,
} from 'react';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
  snippetsTags,
} from '../../../../global';
import { languageTypes } from '@prisma/client';
import { useMutation } from 'react-query';
import Modal, { useModalState } from '@/lib/Modal';

interface PostButtonProps {
  editorConfigOption: languageTypes;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  yourSnippetsUniqueData: optimalSnippetsData[];
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
  refetch: refetchFuncUserSnippets;
}

const PostButton: FC<PostButtonProps> = ({
  snippetInfoRef,
  isBeingEdited,
  setIsBeingEdited,
  editorConfigOption,
  refetch,
  yourSnippetsUniqueData,
}) => {
  const { openState, setOpenState } = useModalState();
  const { isSuccess, isLoading, mutate, isError } = useMutation({
    mutationFn: postSnippetData,
    onSuccess: () => refetch(),
  });
  async function postSnippetData() {
    const isUniqueName = yourSnippetsUniqueData.find(
      (sn) => sn.snippetTitle === snippetInfoRef.current.snippetTitle
    );
    if (
      isUniqueName !== undefined &&
      snippetInfoRef.current.snippetTitle.length > 0
    ) {
      alert('name not unique or length');
      throw new Error('Name not unique');
    }
    setOpenState(true);
    const data = { ...snippetInfoRef.current };
    data.langType = editorConfigOption;
    console.log(data);
    const res = await fetch(`${window.location.origin}/api/create-snippet`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const data2 = await res.json();
    console.log(data2);
  }
  //  TODO: HANDLE INVALID NAME
  return (
    <>
      <button
        onClick={() => {
          if (isBeingEdited) {
            mutate();
          }
        }}
        disabled={!isBeingEdited}
      >
        <GradientButton innerButtonText='Save' />
      </button>
      <Modal openState={openState} setOpenState={setOpenState}>
        <div>
          {isLoading + ' is loading'}
          {isSuccess + ' is success'}
        </div>
      </Modal>
    </>
  );
};

export default PostButton;