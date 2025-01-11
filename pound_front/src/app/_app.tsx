import { ApolloProvider } from '@apollo/client';
import client from '../apollo/apollo-client';

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
