import { UserSnippets } from '@prisma/client';
import { QueryFunction } from 'react-query';
import { searchParams } from '../../global';

const fetchUserSnippets: QueryFunction<
  UserSnippets[],
  ['private-user-snippets']
> = async () => {
  const res = await fetch(
    `${window.location.origin}/api/private-user-snippets`
  );
  if (!res.ok) {
    return [];
  }
  const data: UserSnippets[] = await res.json();
  return data;
};

export default fetchUserSnippets;
