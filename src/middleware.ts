import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({ publicRoutes: ['/', '/snippet/:snippetId'] });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
