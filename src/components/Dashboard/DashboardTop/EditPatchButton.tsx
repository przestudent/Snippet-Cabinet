import GradientButton from '@/lib/GradientButton';
import { languageTypes } from '@prisma/client';
import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import {
  snippetInfo,
  optimalSnippetsData,
  refetchFuncUserSnippets,
} from '../../../../global';
import { useMutation } from 'react-query';
import Modal, { useModalState } from '@/lib/Modal';
import initialSnippetInfo from '@/util/initialSnippetInfo';
import SendingStatus from '@/lib/SendingStatus';

interface EditPatchButtonProps {
  editorConfigOption: languageTypes;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  yourSnippetsUniqueData: optimalSnippetsData[];
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
  refetch: refetchFuncUserSnippets;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
}

const EditPatchButton: FC<EditPatchButtonProps> = ({
  isBeingEdited,
  setSnippetInfo,
  editorConfigOption,
  refetch,
  setIsBeingEdited,
  setChosenSnippetToEdit,
  snippetInfoRef,
  yourSnippetsUniqueData,
}) => {
  const { mutate, isError, isLoading, isSuccess } = useMutation({
    mutationFn: patchSnippetData,
    onError: () => {
      console.log('error');
    },
    onSuccess: () => {
      setIsBeingEdited(false);
      console.log('success');
      refetch();
      setChosenSnippetToEdit(null);
      setSnippetInfo(initialSnippetInfo());
      setOpenState(true);
    },
  });
  const { openState, setOpenState } = useModalState();
  async function patchSnippetData() {
    const isUniqueName = yourSnippetsUniqueData.find(
      (sn) =>
        sn.snippetTitle === snippetInfoRef.current.snippetTitle &&
        sn.snippetId !== snippetInfoRef.current.snippetId
    );
    //TODO: FIX THIS ^^
    if (
      isUniqueName !== undefined &&
      snippetInfoRef.current.snippetTitle.length > 0
    ) {
      alert('name not unique or length');
      throw new Error('Name not unique');
    }
    const data = { ...snippetInfoRef.current };
    data.langType = editorConfigOption;
    setOpenState(true);
    const res = await fetch(`${window.location.origin}/api/create-snippet`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    const data2 = await res.json();
  }
  return (
    <>
      <button
        disabled={!isBeingEdited}
        onClick={() => {
          mutate();
        }}
      >
        <GradientButton innerButtonText='Patch' />
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

export default EditPatchButton;
