import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { languageTypes } from '@prisma/client';
import { Dispatch, FC, SetStateAction } from 'react';
import EditorLangOptionElement from './EditorLangOptionElement';
import { dropDownOptions } from '../../../../global';

interface EditorLangOptionsProps {
  openDropdown: boolean;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
}

const EditorLangOptions: FC<EditorLangOptionsProps> = ({
  openDropdown,
  setEditorConfigOption,
  setOpenDropdown,
}) => {
  const dropDownOptions: dropDownOptions[] = [
    { lang: 'JavaScript' },
    { lang: 'JSX' },
    { lang: 'HTML' },
  ];
  if (openDropdown) {
    return (
      <BackgroundEmeraldToRed
        marginAround='0'
        className='absolute z-50 text-center'
        innerPadding='0'
      >
        {dropDownOptions.map((d, idx) => {
          return (
            <EditorLangOptionElement
              dropDownOption={d}
              dropDownOptionsLength={dropDownOptions.length}
              idx={idx}
              setEditorConfigOption={setEditorConfigOption}
              setOpenDropdown={setOpenDropdown}
              key={d.lang}
            />
          );
        })}
      </BackgroundEmeraldToRed>
    );
  }
};

export default EditorLangOptions;
