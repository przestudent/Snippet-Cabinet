import { useSearchParamsContext } from '@/hooks/SearchParamsProvider';
import { FC, HTMLInputTypeAttribute, useEffect, useRef, useState } from 'react';

interface FormRightInputProps {
  inputType: HTMLInputTypeAttribute;
  inputName: string;
  inputId: string;
  inputLabel: string;
  inputValue: string;
}

const FormRightInput: FC<FormRightInputProps> = ({
  inputId,
  inputLabel,
  inputName,
  inputType,
  inputValue,
}) => {
  const { queryParams } = useSearchParamsContext();
  //  TODO: OMG!!!
  const [checked, setChecked] = useState(
    Object.hasOwn(queryParams, inputName) &&
      queryParams[inputName] === inputValue
      ? true
      : false
  );
  return (
    <div className='flex justify-between'>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        onChange={() => setChecked(!checked)}
        checked={checked}
        value={inputValue}
        type={inputType}
        name={inputName}
        id={inputId}
        className='accent-emerald-500'
      />
    </div>
  );
};

export default FormRightInput;
