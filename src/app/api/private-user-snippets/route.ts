import { prisma } from '@/db/db';
import { currentUser } from '@clerk/nextjs';
import { UserSnippets } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const userId = await currentUser();
  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const userFromClerkId = await prisma.user.findUnique({
    where: { clerkId: userId.id },
  });
  if (!userFromClerkId) {
    return NextResponse.json(
      { message: 'User not found from ClerkId' },
      { status: 404 }
    );
  }
  const prismaRes: UserSnippets[] = await prisma.userSnippets.findMany({
    where: { userOwnerId: userFromClerkId.userId },
  });
  return new Response(JSON.stringify(prismaRes));
}
