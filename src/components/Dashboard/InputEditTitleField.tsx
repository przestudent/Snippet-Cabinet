import {
  Dispatch,
  SetStateAction,
  RefObject,
  FC,
  useEffect,
  useRef,
} from 'react';

interface InputEditTitleFieldProps {
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
  editNameRefInput: RefObject<HTMLInputElement>;
}

const InputEditTitleField: FC<InputEditTitleFieldProps> = ({
  editNameRefInput,
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
      className='text-zinc-100 bg-zinc-950 rounded px-2 border-2 border-emerald-400 '
      size={50}
      ref={editNameRefInput}
      maxLength={30}
      type='text'
      value={inputValue}
      onChange={({ target }) => setInputValue(target.value)}
    />
  );
};

export default InputEditTitleField;
