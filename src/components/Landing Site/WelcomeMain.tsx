import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Image from 'next/image';
import GradientButton from '@/lib/GradientButton';

interface WelcomeMainProps {
  choseableLanguages: languageTypes[];
  setChosenLanguage: Dispatch<SetStateAction<languageTypes>>;
}

const WelcomeMain: FunctionComponent<WelcomeMainProps> = ({
  choseableLanguages,
  setChosenLanguage,
}) => {
  return (
    <div className='flex justify-center'>
      <BackgroundEmeraldToRed>
        <div className='flex justify-center'>
          <div>
            <h1 className='text-center text-4xl m-2'>
              Welcome to snippets-hub
            </h1>
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
              <GradientButton innerButtonText='Check it out!' href='#listing' />
            </div>
          </div>
        </div>
        <div className='flex justify-center m-12 '>
          <h2 className='text-3xl'>Extra dexcription goes here</h2>
        </div>
      </BackgroundEmeraldToRed>
    </div>
  );
};

export default WelcomeMain;
