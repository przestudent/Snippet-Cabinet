import { Dispatch, FC, SetStateAction } from 'react';
import {
  optimalSnippetsData,
  refetchFuncUserSnippets,
  snippetInfo,
} from '../../../../global';
import { useMutation } from 'react-query';
import Modal, { useModalState } from '@/lib/Modal';
import initialSnippetInfo from '@/util/initialSnippetInfo';
import SendingStatus from '@/lib/SendingStatus';

interface DeleteButtonProps {
  snippetInfo: snippetInfo;
  refetch: refetchFuncUserSnippets;
  isBeingEdited: boolean;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  setChosenSnippetToEdit: Dispatch<SetStateAction<optimalSnippetsData | null>>;
}

const DeleteButton: FC<DeleteButtonProps> = ({
  snippetInfo,
  setChosenSnippetToEdit,
  setSnippetInfo,
  isBeingEdited,
  refetch,
}) => {
  const { openState, setOpenState } = useModalState(false);
  const { isLoading, isSuccess, isError, mutate } = useMutation({
    onSuccess: () => {
      refetch();
      setChosenSnippetToEdit(null);
      setSnippetInfo(initialSnippetInfo());
    },
    mutationFn: async () => {
      const res = await fetch(`${window.location.origin}/api/create-snippet`, {
        method: 'DELETE',
        body: JSON.stringify({ snippetId: snippetInfo!.snippetId }),
      });
    },
  });
  if (snippetInfo.snippetId !== undefined) {
    return (
      <>
        <button
          disabled={!isBeingEdited}
          onClick={() => {
            mutate();
            setOpenState(true);
          }}
          className='w-12 h-12 rounded-xl  bg-red-700 flex items-center justify-center'
        >
          <div className='text-4xl'>🗑</div>
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
  } else {
    return <></>;
  }
};

export default DeleteButton;
