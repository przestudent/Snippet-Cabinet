import { prisma } from '@/db/db';
import { currentUser } from '@clerk/nextjs';
import { UserSnippets } from '@prisma/client';
import { NextResponse } from 'next/server';
import { searchParams } from '../../../../global';

export async function POST(req: Request) {
  const searchParams: searchParams = await req.json();
  let userSnippets: UserSnippets[];
  const isBoilerplate =
    searchParams.boilerplate === undefined ||
    searchParams.boilerplate === false ||
    searchParams.boilerplate === 'false'
      ? undefined
      : true;
  if (searchParams.sort === 'none' || searchParams.sort === undefined) {
    userSnippets = await prisma.userSnippets.findMany({
      where: { tagBoilerPlate: isBoilerplate, public: true },
    });
  } else {
    userSnippets = await prisma.userSnippets.findMany({
      where: {
        public: true,
        tagBoilerPlate: isBoilerplate,
      },
      orderBy: { createdAt: searchParams.sort === 'newest' ? 'desc' : 'asc' },
    });
  }
  return new Response(JSON.stringify(userSnippets));
}
