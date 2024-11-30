'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from 'react';

export function ApolloProviderWrapper({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    new ApolloClient({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      cache: new InMemoryCache(),
    })
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}