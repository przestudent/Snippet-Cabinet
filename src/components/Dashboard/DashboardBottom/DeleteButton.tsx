import { FC } from 'react';
import { refetchFuncUserSnippets, snippetInfo } from '../../../../global';
import { useMutation } from 'react-query';
import Modal, { useModalState } from '@/lib/Modal';

interface DeleteButtonProps {
  snippetInfo: snippetInfo;
  refetch: refetchFuncUserSnippets;
  isBeingEdited: boolean;
}

const DeleteButton: FC<DeleteButtonProps> = ({
  snippetInfo,
  isBeingEdited,
  refetch,
}) => {
  const { openState, setOpenState } = useModalState(false);
  const { isLoading, isSuccess, isError, mutate } = useMutation({
    onSuccess: () => refetch(),
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
          {isLoading && (
            <div>
              <h1>Loading</h1>
            </div>
          )}
          {isSuccess && (
            <div>
              <h1>Success</h1>
            </div>
          )}
          {isError && (
            <div>
              <h1>Error</h1>
            </div>
          )}
        </Modal>
      </>
    );
  } else {
    return <></>;
  }
};

export default DeleteButton;
