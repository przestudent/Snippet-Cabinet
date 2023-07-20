import {
  Dispatch,
  SetStateAction,
  RefObject,
  FC,
  useEffect,
  useRef,
  MutableRefObject,
} from 'react';
import { snippetInfo } from '../../../../global';

interface InputEditTitleFieldProps {
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
  snippetInfoRef: MutableRefObject<snippetInfo>;
  editNameRefInput: RefObject<HTMLInputElement>;
}

const InputEditTitleField: FC<InputEditTitleFieldProps> = ({
  editNameRefInput,
  snippetInfoRef,
  inputValue,
  setInputValue,
}) => {
  useEffect(() => {
    if (!editNameRefInput.current) return;
    editNameRefInput.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <input
      className='text-zinc-100 bg-zinc-950 focus-visible:outline-emerald-500 focus-visible:outline rounded px-2 focus-visible:outline-2  '
      ref={editNameRefInput}
      minLength={3}
      maxLength={30}
      type='text'
      value={inputValue}
      onChange={({ target }) => {
        setInputValue(target.value);
        snippetInfoRef.current.snippetTitle = target.value;
      }}
    />
  );
};

export default InputEditTitleField;
