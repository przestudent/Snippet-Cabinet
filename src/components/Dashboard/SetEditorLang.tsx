import { Dispatch, FC, SetStateAction, use, useState } from 'react';
import Image from 'next/image';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import useOutsideClick from '@/hooks/useOutsideClick';
import { languageTypes } from '@prisma/client';
import { snippetInfo } from '../../../global';
interface SetEditorLangProps {
  snippetInfo: snippetInfo;
  setEditorConfigOption: Dispatch<SetStateAction<languageTypes>>;
  editorConfigOption: languageTypes;
}

const SetEditorLang: FC<SetEditorLangProps> = ({
  snippetInfo,
  editorConfigOption,
  setEditorConfigOption,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropDownOptions: {
    lang: languageTypes;
  }[] = [{ lang: 'JavaScript' }, { lang: 'JSX' }, { lang: 'HTML' }];
  //   function functionForOutside(){
  //     return function(){
  //       setOpenDropdown(false);
  //     }
  //   }
  // useOutsideClick({ref,functionForOutside})
  return (
    <span className='mr-8'>
      <span>
        <span className='relative cursor-pointer w-20 p-2'>
          <span onClick={() => setOpenDropdown(true)}>
            {editorConfigOption}
          </span>
          {openDropdown ? (
            <BackgroundEmeraldToRed
              marginAround='0'
              className='absolute z-50 text-center'
              innerPadding='0'
            >
              {dropDownOptions.map((d, idx) => {
                return (
                  <button
                    key={d.lang}
                    onClick={() => {
                      setEditorConfigOption(d.lang);
                      setOpenDropdown(false);
                    }}
                    className={`w-full p-2 ${
                      idx === dropDownOptions.length - 1
                        ? ''
                        : 'border-b-2 border-zinc-200'
                    }`}
                  >
                    <div> {d.lang}</div>
                  </button>
                );
              })}
            </BackgroundEmeraldToRed>
          ) : (
            <></>
          )}
        </span>
      </span>
      <Image
        className='inline'
        height={'30'}
        width={'30'}
        alt='*'
        src={'/drop-down.svg'}
      />
    </span>
  );
};

export default SetEditorLang;
