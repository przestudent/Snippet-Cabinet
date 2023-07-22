import { prisma } from '@/db/db';
import { UserSnippets } from '@prisma/client';
import { searchParams } from '../../../../global';

//TODO: add proper searching for the tags
export async function POST(req: Request) {
  const searchParams: searchParams = await req.json();
  let userSnippets: UserSnippets[];
  const tagSearchArray: { public: true; tags?: { contains: string } }[] = [];
  for (const [k, v] of Object.entries(searchParams)) {
    if (v === 'true') {
      tagSearchArray.push({ public: true, tags: { contains: k } });
    }
  }
  //Otherwise it will select private ones
  tagSearchArray.length === 0 ? tagSearchArray.push({ public: true }) : '';
  if (searchParams.sort === 'none' || searchParams.sort === undefined) {
    userSnippets = await prisma.userSnippets.findMany({
      where: { AND: tagSearchArray },
    });
  } else {
    userSnippets = await prisma.userSnippets.findMany({
      where: { AND: tagSearchArray },
      orderBy: { createdAt: searchParams.sort === 'newest' ? 'desc' : 'asc' },
    });
  }
  return new Response(JSON.stringify(userSnippets));
}
