import { UserSnippets } from '@prisma/client';
import { QueryFunction } from 'react-query';
import { searchParams } from '../../global';

const fetchFromParamsSnippets: QueryFunction<
  UserSnippets[],
  ['snippets', searchParams]
> = async ({ queryKey }) => {
  const res = await fetch(`${window.location.origin}/api/user-snippets`, {
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
