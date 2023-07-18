import {
  Dispatch,
  FC,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import useOutsideClick from '@/hooks/useOutsideClick';
import InputEditTitleField from './InputEditTitleField';
import { snippetInfo } from '../../../global';

interface EditSnippetNameProps {
  snippetInfo: snippetInfo;
  newSnippetName: MutableRefObject<string>;
}

const EditSnippetName: FC<EditSnippetNameProps> = ({
  snippetInfo,
  newSnippetName,
}) => {
  const editNameRef = useRef<HTMLElement>(null);
  const editNameRefInput = useRef<HTMLInputElement>(null);
  const [editName, setEditName] = useState(false);
  const [inputValue, setInputValue] = useState(snippetInfo.snippetTitle);
  const snippetInfoRef = useRef<snippetInfo>();
  useEffect(() => {
    setInputValue(snippetInfo.snippetTitle);
    snippetInfoRef.current = snippetInfo;
  }, [snippetInfo]);

  useOutsideClick({
    ref: editNameRefInput,
    functionForOutside: functionForOutside,
  });
  function functionForOutside() {
    if (!snippetInfoRef.current) return;

    setEditName(false);
  }
  return (
    <span ref={editNameRef} onClick={() => setEditName(true)}>
      {editName ? (
        <InputEditTitleField
          newSnippetName={newSnippetName}
          editNameRefInput={editNameRefInput}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        <h2 className='text-xl inline'>{inputValue}</h2>
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
