import { UserSnippets } from '@prisma/client';
import { QueryFunction } from 'react-query';
import { searchParams } from '../../global';

const fetchUserSnippets: QueryFunction<UserSnippets[]> = async (): Promise<
  UserSnippets[]
> => {
  console.log('refetching user-snippets');
  const res = await fetch(`${window.location.origin}/api/user-snippets`);
  if (!res.ok) {
    return [];
  }
  const data: UserSnippets[] = await res.json();
  return data;
};

export default fetchUserSnippets;
