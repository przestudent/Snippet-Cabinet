import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({ publicRoutes: ['/', '/snippet'] });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
