import { prisma } from '@/db/db';
import isNumeric from '@/util/isNumeric';
import { FC } from 'react';

interface PublicUserPageProps {
  params: { userId: string };
}

const fetchPublicUser = async (userId: number) => {
  try {
    const prismaRes = await prisma.user.findUniqueOrThrow({
      where: { userId: userId },
    });
    return prismaRes;
  } catch (err) {
    return undefined;
  }
};

const PublicUserPage: FC<PublicUserPageProps> = async ({
  params: { userId },
}) => {
  if (!isNumeric(userId)) return <div>Invalid user id</div>;
  const userInfo = await fetchPublicUser(parseInt(userId));
  if (!userInfo) return <div>User doesnt exist</div>;
  return <div>{userId}</div>;
};

export default PublicUserPage;
