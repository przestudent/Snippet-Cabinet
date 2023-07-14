import { FC } from 'react';
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { prisma } from '@/db/db';

const createNewUser = async () => {
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: { clerkId: user?.id as string },
  });
  if (!match) {
    const prisRes = await prisma.user.create({
      data: {
        clerkId: user!.id,
        email: user!.emailAddresses[0].emailAddress,
        username: user!.username ?? user!.lastName ?? '',
      },
    });
  }

  redirect('/dashboard');
};

const NewUserPage: FC = async () => {
  await createNewUser();
  return <div>Loading...</div>;
};

export default NewUserPage;
