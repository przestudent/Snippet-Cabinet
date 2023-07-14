import { FC } from 'react';
import DashboardInnerContent from './DashboardInnerContent';
import { prisma } from '@/db/db';
import { currentUser } from '@clerk/nextjs';
import { UserSnippets } from '@prisma/client';

interface DashboardFetchSnippetsProps {}

const fetchSnippets = async (): Promise<UserSnippets[]> => {
  const user = await currentUser();
  const yourSnippets = await prisma.user.findUnique({
    where: { clerkId: user!.id },
    include: { userSnippets: true },
  });
  if (!yourSnippets && !yourSnippets!.userSnippets) return [];
  return yourSnippets!.userSnippets;
};

const DashboardFetchSnippets: FC<DashboardFetchSnippetsProps> = async () => {
  const snippets = await fetchSnippets();
  return <DashboardInnerContent snippets={snippets} />;
};

export default DashboardFetchSnippets;
