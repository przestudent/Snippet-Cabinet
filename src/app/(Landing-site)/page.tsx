'use client';
import Image from 'next/image';
import { useState } from 'react';
// import {  } from '@prisma/client';

export default function Home() {
  const [chosenLanguage, setChosenLanguage] = useState<languageTypes>('All');
  const choseableLanguages: languageTypes[] = ['HTML', 'JavaScript', 'React'];
  return (
    <>
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
            <a href='#listing' className='rounded-md bg-slate-500 p-3 text-2xl'>
              Check it out!
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center m-12 '>
        <h2 className='text-3xl'>Extra dexcription goes here</h2>
      </div>
      <a href='#snippets-listing'></a>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h2>home child</h2>
      <h3 id='listing'>{chosenLanguage}</h3>
    </>
  );
}
