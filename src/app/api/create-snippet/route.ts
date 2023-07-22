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
      tags: reqData.tags.join(' '),
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
    select: { userId: true, userSnippets: true },
  });
  const userId = (userIdObj as { userId: number }).userId;
  const reqData: { snippetId: number } = await req.json();

  if (
    userIdObj?.userSnippets &&
    userIdObj.userSnippets.findIndex(
      (snippet) => snippet.snippetId === reqData.snippetId
    ) !== -1
  ) {
    const prismaRes = await prisma.userSnippets.delete({
      where: { snippetId: reqData.snippetId },
    });
    const res = NextResponse.json(reqData, { status: 200 });

    return res;
  } else {
    return NextResponse.json(
      { message: 'You may not interact with this snippet' },
      { status: 403 }
    );
  }
}

export async function PATCH(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: 'Not authorized' });
  const userIdObj = await prisma.user.findUnique({
    where: { clerkId: user.id },
    select: { userId: true },
  });
  const userId = (userIdObj as { userId: number }).userId;
  const reqData: snippetInfo = await req.json();
  const prismaRes = await prisma.userSnippets.update({
    data: {
      userOwnerId: userId,
      langType: reqData.langType,
      public: reqData.public,
      snippetCode: reqData.snippetCode,
      snippetTitle: reqData.snippetTitle,
      tags: reqData.tags.join(' '),
    },
    where: { snippetId: reqData.snippetId },
  });
  const res = NextResponse.json(reqData, { status: 200 });
  return res;
}
