// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient, useQuery} from 'react-query';

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  const queryClient = new QueryClient();
  
  return (
    <CacheProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}