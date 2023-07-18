import { prisma } from '@/db/db';
import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { snippetInfo } from '../../../../global';

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: 'Not authorized' });
  //   const data = await req.json();
  const userIdObj = await prisma.user.findUnique({
    where: { clerkId: user.id },
    select: { userId: true },
  });
  const userId = (userIdObj as { userId: number }).userId;
  const reqData: snippetInfo = await req.json();
  const prismaRes = await prisma.userSnippets.create({
    data: {
      userOwnerId: userId,
      langType: reqData.langType,
      public: reqData.public,
      snippetCode: reqData.snippetCode,
      snippetTitle: reqData.snippetTitle,
      tagBoilerPlate: reqData.tags.includes('boilerPlate'),
    },
  });
  const res = NextResponse.json(reqData, { status: 200 });
  return res;
}

export async function DELETE(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: 'Not authorized' });
  //   const data = await req.json();
  const userIdObj = await prisma.user.findUnique({
    where: { clerkId: user.id },
    select: { userId: true },
  });
  const userId = (userIdObj as { userId: number }).userId;
  const reqData: number = await req.json();
  const prismaRes = prisma.userSnippets.delete({
    where: { snippetId: reqData },
  });
  const res = NextResponse.json(reqData, { status: 200 });
  return res;
}
