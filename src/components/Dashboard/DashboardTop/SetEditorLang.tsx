import { Dispatch, FC, SetStateAction, use, useState } from 'react';
import Image from 'next/image';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import useOutsideClick from '@/hooks/useOutsideClick';
import { languageTypes } from '@prisma/client';
import { snippetInfo } from '../../../../global';
import EditorLangOptions from './EditorLangOptions';
interface SetEditorLangProps {
  snippetInfo: snippetInfo;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
  editorConfigOption: languageTypes;
  isBeingEdited: boolean;
}

const SetEditorLang: FC<SetEditorLangProps> = ({
  snippetInfo,
  isBeingEdited,
  editorConfigOption,
  setEditorConfigOption,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropDownOptions: {
    lang: languageTypes;
  }[] = [{ lang: 'JavaScript' }, { lang: 'JSX' }, { lang: 'HTML' }];
  return (
    <div>
      <span>
        <span className='relative w-20'>
          <span
            className={`border-b-2 border-green-600 ${
              isBeingEdited ? 'cursor-pointer' : 'cursor-not-allowed'
            }`}
            onClick={() => {
              if (isBeingEdited) {
                setOpenDropdown(!openDropdown);
              }
            }}
          >
            {editorConfigOption}
          </span>
          <EditorLangOptions
            openDropdown={openDropdown}
            setEditorConfigOption={setEditorConfigOption}
            setOpenDropdown={setOpenDropdown}
          />
        </span>
      </span>
      <Image
        className='inline'
        height={'30'}
        width={'30'}
        alt='*'
        src={'/drop-down.svg'}
      />
    </div>
  );
};

export default SetEditorLang;
