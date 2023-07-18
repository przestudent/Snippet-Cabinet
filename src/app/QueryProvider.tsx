'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: { queries: { cacheTime: Infinity, staleTime: Infinity } },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
