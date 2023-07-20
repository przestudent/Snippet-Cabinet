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
import { snippetInfo } from '../../../../global';

interface EditSnippetNameProps {
  snippetInfo: snippetInfo;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  isBeingEdited: boolean;
}

const EditSnippetName: FC<EditSnippetNameProps> = ({
  snippetInfo,
  snippetInfoRef,
  isBeingEdited,
}) => {
  const editNameRef = useRef<HTMLElement>(null);
  const editNameRefInput = useRef<HTMLInputElement>(null);
  const [editName, setEditName] = useState(false);
  const [inputValue, setInputValue] = useState(snippetInfo.snippetTitle);
  useEffect(() => {
    setInputValue(snippetInfo.snippetTitle);
    snippetInfoRef.current = snippetInfo;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <span
      tabIndex={0}
      className={`${isBeingEdited ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      ref={editNameRef}
      onClick={() => {
        if (isBeingEdited) {
          setEditName(true);
        }
      }}
    >
      <span className='text-xl text-emerald-500 mr-1'>&#9998;</span>

      {editName ? (
        <InputEditTitleField
          snippetInfoRef={snippetInfoRef}
          editNameRefInput={editNameRefInput}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        <h2 className='text-xl inline'>{inputValue}</h2>
      )}
      {/* <Image
        className='pl-2 inline-block -translate-y-1 fill-green-500'
        alt='edit'
        src={'edit.svg'}
        height='30'
        width='30'
      /> */}
    </span>
  );
};

export default EditSnippetName;
