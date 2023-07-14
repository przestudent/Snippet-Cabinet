import SnippetPageInside from '@/components/SnippetPage/SnippetPageInside';
import { prisma } from '@/db/db';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface SnippetPageProps {
  params: { snippetId: string };
}

const SnippetPage: FC<SnippetPageProps> = ({ params }) => {
  console.log(params.snippetId);
  return (
    <BackgroundEmeraldToRed innerPadding='0'>
      <SnippetPageInside snippetId={parseInt(params.snippetId)} />
    </BackgroundEmeraldToRed>
  );
};

export default SnippetPage;