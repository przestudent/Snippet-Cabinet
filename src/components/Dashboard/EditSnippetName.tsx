import {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import useOutsideClick from '@/hooks/useOutsideClick';
import InputEditTitleField from './InputEditTitleField';

interface EditSnippetNameProps {
  snippetInfo: snippetInfo;
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
}

const EditSnippetName: FC<EditSnippetNameProps> = ({
  snippetInfo,
  setSnippetInfo,
}) => {
  const editNameRef = useRef<HTMLElement>(null);
  const editNameRefInput = useRef<HTMLInputElement>(null);
  const [editName, setEditName] = useState(false);
  const [inputValue, setInputValue] = useState(snippetInfo.snippetName);
  const snippetInfoRef = useRef<snippetInfo>();
  snippetInfoRef.current = snippetInfo;

  useOutsideClick({
    ref: editNameRefInput,
    functionForOutside: functionForOutside,
  });
  function functionForOutside() {
    if (!snippetInfoRef.current) return;
    const newSnippetInfo = { ...snippetInfoRef.current };
    newSnippetInfo.snippetName =
      editNameRefInput.current?.value ?? snippetInfo.snippetName;
    setSnippetInfo(newSnippetInfo);
    setEditName(false);
  }
  return (
    <span ref={editNameRef} onClick={() => setEditName(true)}>
      {editName ? (
        <InputEditTitleField
          editNameRefInput={editNameRefInput}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        <h2 className='text-xl inline'>{snippetInfo.snippetName}</h2>
      )}
      <Image
        className='pl-2 inline-block -translate-y-1'
        alt='edit'
        src={'edit.svg'}
        height='30'
        width='30'
      />
    </span>
  );
};

export default EditSnippetName;
