import { ApolloProviderWrapper } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ApolloProviderWrapper>
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}