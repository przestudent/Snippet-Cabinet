import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Image from 'next/image';

interface WelcomeMainProps {
  choseableLanguages: languageTypes[];
  setChosenLanguage: Dispatch<SetStateAction<languageTypes>>;
}

const WelcomeMain: FunctionComponent<WelcomeMainProps> = ({
  choseableLanguages,
  setChosenLanguage,
}) => {
  return (
    <BackgroundEmeraldToRed>
      <div className='flex justify-center'>
        <div className='max-w-xl'>
          <h1 className='text-center text-4xl m-2'>Welcome to snippets-hub</h1>
          <div className='flex gap-4 justify-between mt-5  '>
            {choseableLanguages.map((lang) => (
              <a href='#listing' key={lang}>
                <Image
                  onClick={() => setChosenLanguage(lang)}
                  width='150'
                  height='150'
                  src={`/${lang}.svg`}
                  alt={`${lang}`}
                />
              </a>
            ))}
          </div>
          <div className='flex justify-center mt-6'>
            <a
              href='#listing'
              className='rounded-md bg-gradient-to-br from-emerald-500 via-emerald-500 to-red-600 p-3 text-2xl '
            >
              Check it out!
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center m-12 '>
        <h2 className='text-3xl'>Extra dexcription goes here</h2>
      </div>
    </BackgroundEmeraldToRed>
  );
};

export default WelcomeMain;
