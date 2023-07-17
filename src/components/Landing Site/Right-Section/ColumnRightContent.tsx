import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { languageTypes } from '@prisma/client';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import RightSectionForm from './RightSectionForm';

interface ColumnRightContentProps {
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
  className?: string;
}

const ColumnRightContent: FunctionComponent<ColumnRightContentProps> = ({
  isChosenLang,
  setIsChosenLang,
  className,
}) => {
  return (
    <BackgroundEmeraldToRed
      insideClassName='h-full'
      marginAround='1'
      className={`ml-3 h-max sticky top-2 ${className}`}
    >
      <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 via-green-500 to-white text-center text-xl border-b-2 border-emerald-500'>
        Snippets Cabinet
      </h1>
      <ul className='flex  justify-center gap-2 items-center py-4 flex-wrap flex-row'>
        {Object.keys(isChosenLang).map((lang) => {
          return (
            <li
              key={lang}
              onClick={() => {
                const a = isChosenLang['HTML'];
                const newLangs = { ...isChosenLang };
                newLangs[lang as languageTypes] =
                  !newLangs[lang as languageTypes];
                setIsChosenLang(newLangs);
              }}
              className={`   ${
                isChosenLang[lang as languageTypes]
                  ? 'border-2 border-emerald-600'
                  : ''
              } rounded-xl pt-2`}
            >
              <div className='flex justify-center'>
                <img
                  className='w-14 h-14'
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
      <RightSectionForm />
    </BackgroundEmeraldToRed>
  );
};

export default ColumnRightContent;
