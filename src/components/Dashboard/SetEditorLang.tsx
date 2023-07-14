import { Dispatch, FC, SetStateAction, use, useState } from 'react';
import Image from 'next/image';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import useOutsideClick from '@/hooks/useOutsideClick';
interface SetEditorLangProps {
  setSnippetInfo: Dispatch<SetStateAction<snippetInfo>>;
  snippetInfo: snippetInfo;
  setEditorConfigOption: Dispatch<SetStateAction<0 | 2 | 1>>;
  editorConfigOption: 0 | 2 | 1;
}

const SetEditorLang: FC<SetEditorLangProps> = ({
  snippetInfo,
  editorConfigOption,
  setSnippetInfo,
  setEditorConfigOption,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropDownOptions: {
    lang: languageTypes;
    configNumberOption: 0 | 1 | 2;
  }[] = [
    { lang: 'JavaScript', configNumberOption: 0 },
    { lang: 'JSX', configNumberOption: 1 },
    { lang: 'HTML', configNumberOption: 2 },
  ];
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
            {snippetInfo.editorLang}
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
                      setEditorConfigOption(d.configNumberOption);
                      const newSnippet = { ...snippetInfo };
                      newSnippet.editorLang = d.lang;
                      setSnippetInfo(newSnippet);
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
