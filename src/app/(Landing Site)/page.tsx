'use client';
import SnippetListing from '@/components/Landing Site/SnippetsListing';
import WelcomeMain from '@/components/Landing Site/WelcomeMain';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import Image from 'next/image';
import { useState } from 'react';
// import {  } from '@prisma/client';

export default function Home() {
  const [chosenLanguage, setChosenLanguage] = useState<languageTypes>('All');
  const choseableLanguages: languageTypes[] = ['HTML', 'JavaScript', 'React'];
  return (
    <>
      <WelcomeMain
        choseableLanguages={choseableLanguages}
        setChosenLanguage={setChosenLanguage}
      />
      <SnippetListing chosenLanguage={chosenLanguage} />
    </>
  );
}
