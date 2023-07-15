import LandingPageWrapper from '@/components/Landing Site/LandingPageWrapper';
import SnippetListing from '@/components/Landing Site/SnippetsListing';
import WelcomeMain from '@/components/Landing Site/WelcomeMain';
import { prisma } from '@/db/db';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import Image from 'next/image';
import { useState } from 'react';
import { snippetsData } from '../../../global';
// import {  } from '@prisma/client';

async function fetchTheSnippets() {
  const snippets = await prisma.userSnippets.findMany({});
  return snippets;
}

export default async function Home() {
  const snippets: snippetsData[] = await fetchTheSnippets();
  return (
    <>
      <LandingPageWrapper snippets={snippets} />
    </>
  );
}
