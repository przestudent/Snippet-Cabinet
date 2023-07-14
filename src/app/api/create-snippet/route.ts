import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  //   const user = await currentUser();
  //   if (!user) return NextResponse.json({ message: 'Not authorized' });
  //   const data = await req.json();

  return NextResponse.json({ handler: 'works' });
}
