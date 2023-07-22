import { languageTypes } from '@prisma/client';
import { Dispatch, FC, FunctionComponent, SetStateAction } from 'react';
import Image from 'next/image';

interface RightColumnTopSectionProps {
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
}

const RightColumnTopSection: FC<RightColumnTopSectionProps> = ({
  isChosenLang,
  setIsChosenLang,
}) => {
  return (
    <>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 via-green-500 to-white text-center text-xl border-b-2 border-green-600'>
        Snippets Cabinet
      </h1>
      <ul className='flex  justify-center gap-2 items-center py-4 flex-wrap flex-row'>
        {Object.keys(isChosenLang).map((lang) => {
          return (
            <li
              tabIndex={0}
              key={lang}
              onClick={() => {
                const newLangs = { ...isChosenLang };
                newLangs[lang as languageTypes] =
                  !newLangs[lang as languageTypes];
                setIsChosenLang(newLangs);
              }}
              className={`   ${
                isChosenLang[lang as languageTypes]
                  ? ' border-emerald-600'
                  : 'border-transparent'
              } rounded-xl border-2 pt-2`}
            >
              <div className='flex justify-center'>
                <Image
                  width={40}
                  height={40}
                  src={`/${lang}.svg`}
                  alt={`${lang} Icon`}
                />
              </div>
              <div className='text-center'>{lang}</div>
            </li>
          );
        })}
      </ul>
      <div className='flex justify-center mb-6'>
        <div className='border-b-2 border-green-600 text-2xl'>
          Click to Select
        </div>
      </div>
    </>
  );
};

export default RightColumnTopSection;
