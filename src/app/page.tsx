import LandingPageWrapper from '@/components/Landing Site/LandingPageWrapper';
import { prisma } from '@/db/db';

async function fetchTheSnippets() {
  const snippets = await prisma.userSnippets.findMany({
    where: { public: true },
  });
  return snippets;
}

export default async function Home() {
  const snippets = await fetchTheSnippets();
  return (
    <>
      <LandingPageWrapper snippets={snippets} />
    </>
  );
}
