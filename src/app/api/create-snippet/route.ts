import { prisma } from '@/db/db';
import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

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
      langType: reqData.editorLang,
      public: true,
      snippetCode: reqData.editorCode,
      snippetTitle: reqData.snippetName + 'dsjjdb,sjbfm,ffff',
    },
  });
  console.log(reqData);
  const res = NextResponse.json(reqData, { status: 200 });
  return res;
}
