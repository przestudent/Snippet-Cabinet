import GradientButton from '@/lib/GradientButton';
import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
} from '../../../../global';
import { languageTypes } from '@prisma/client';
import { useMutation } from 'react-query';
import Modal, { useModalState } from '@/lib/Modal';
import initialSnippetInfo from '@/util/initialSnippetInfo';
import SendingStatus from '@/lib/SendingStatus';

interface PostButtonProps {
  editorConfigOption: languageTypes;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  yourSnippetsUniqueData: optimalSnippetsData[];
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  refetch: refetchFuncUserSnippets;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
}

const PostButton: FC<PostButtonProps> = ({
  setChosenSnippetToEdit,
  snippetInfoRef,
  setSnippetInfo,
  isBeingEdited,
  setIsBeingEdited,
  editorConfigOption,
  refetch,
  yourSnippetsUniqueData,
}) => {
  const { openState, setOpenState } = useModalState();
  const { isSuccess, isLoading, mutate, isError } = useMutation({
    mutationFn: postSnippetData,
    onSuccess: () => {
      refetch();
      setChosenSnippetToEdit(null);
      setSnippetInfo(initialSnippetInfo());
      setIsBeingEdited(false);
    },
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
    const res = await fetch(`${window.location.origin}/api/create-snippet`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const data2 = await res.json();
  }
  //  TODO: HANDLE INVALID NAME
  return (
    <>
      <button
        tabIndex={0}
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
        <SendingStatus
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </Modal>
    </>
  );
};

export default PostButton;
