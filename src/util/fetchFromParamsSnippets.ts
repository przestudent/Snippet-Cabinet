import { UserSnippets } from '@prisma/client';
import { QueryFunction } from 'react-query';
import { searchParams } from '../../global';

const fetchFromParamsSnippets: QueryFunction<
  UserSnippets[],
  ['snippets', searchParams]
> = async ({ queryKey }): Promise<UserSnippets[]> => {
  console.log('refetching');
  const res = await fetch(`${window.location.origin}/somewhere`, {
    method: 'POST',
    body: JSON.stringify(queryKey[1]),
  });
  if (!res.ok) {
    return [];
  }
  const data: UserSnippets[] = await res.json();

  return data;
};

export default fetchFromParamsSnippets;
