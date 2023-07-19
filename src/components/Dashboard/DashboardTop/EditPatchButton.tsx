import GradientButton from '@/lib/GradientButton';
import { languageTypes } from '@prisma/client';
import {
  Dispatch,
  FunctionComponent,
  MutableRefObject,
  SetStateAction,
} from 'react';
import {
  snippetInfo,
  optimalSnippetsData,
  refetchFuncUserSnippets,
} from '../../../../global';
import { useMutation } from 'react-query';

interface EditPatchButtonProps {
  editorConfigOption: languageTypes;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  yourSnippetsUniqueData: optimalSnippetsData[];
  setIsBeingEdited: Dispatch<SetStateAction<boolean>>;
  isBeingEdited: boolean;
  refetch: refetchFuncUserSnippets;
}

const EditPatchButton: FunctionComponent<EditPatchButtonProps> = ({
  isBeingEdited,
  editorConfigOption,
  refetch,
  setIsBeingEdited,
  snippetInfoRef,
  yourSnippetsUniqueData,
}) => {
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: patchSnippetData,
    onSuccess: () => {
      refetch();
      setIsBeingEdited(false);
    },
  });
  async function patchSnippetData() {
    const isUniqueName = yourSnippetsUniqueData.find(
      (sn) => sn.snippetTitle === snippetInfoRef.current.snippetTitle
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
    const res = await fetch(`${window.location.origin}/api/create-snippet`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    const data2 = await res.json();
  }
  return (
    <button
      disabled={!isBeingEdited}
      onClick={() => {
        mutate();
      }}
    >
      <GradientButton innerButtonText='Patch' />
    </button>
  );
};

export default EditPatchButton;
