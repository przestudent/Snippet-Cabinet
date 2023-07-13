import { FC } from 'react';
import DashboardInnerContent from './DashboardInnerContent';

interface DashboardFetchSnippetsProps {}

const fetchSnippets = async () => {
  return Promise<'2'>;
};

const DashboardFetchSnippets: FC<DashboardFetchSnippetsProps> = async () => {
  const snippets = await fetchSnippets();
  return <DashboardInnerContent />;
};

export default DashboardFetchSnippets;
