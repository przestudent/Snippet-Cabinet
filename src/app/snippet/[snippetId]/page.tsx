import SnippetPageInside from '@/components/SnippetPage/SnippetPageInside';
import { prisma } from '@/db/db';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface SnippetPageProps {
  params: { snippetId: string };
}

const SnippetPage: FC<SnippetPageProps> = ({ params }) => {
  return (
    <BackgroundEmeraldToRed style={{ margin: '1rem' }} innerPadding='0'>
      <SnippetPageInside snippetId={params.snippetId} />
    </BackgroundEmeraldToRed>
  );
};

export default SnippetPage;
