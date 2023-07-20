import { languageTypes } from '@prisma/client';
import { Dispatch, FC, SetStateAction } from 'react';
import { dropDownOptions } from '../../../../global';

interface EditorLangOptionElementProps {
  dropDownOption: dropDownOptions;
  dropDownOptionsLength: number;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
  idx: number;
}

const EditorLangOptionElement: FC<EditorLangOptionElementProps> = ({
  dropDownOptionsLength,
  idx,
  dropDownOption,
  setEditorConfigOption,
  setOpenDropdown,
}) => {
  return (
    <button
      tabIndex={0}
      key={dropDownOption.lang}
      onClick={() => {
        setEditorConfigOption(dropDownOption.lang);
        setOpenDropdown(false);
      }}
      className={`w-full p-2 ${
        idx === dropDownOptionsLength - 1 ? '' : 'border-b-2 border-zinc-200'
      }`}
    >
      <div> {dropDownOption.lang}</div>
    </button>
  );
};

export default EditorLangOptionElement;
