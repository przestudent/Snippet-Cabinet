import SnippetPageInside from '@/components/SnippetPage/SnippetPageInside';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { FC } from 'react';

const SnippetPage: FC = () => {
  return (
    <BackgroundEmeraldToRed innerPadding='0'>
      <SnippetPageInside />
    </BackgroundEmeraldToRed>
  );
};

export default SnippetPage;
