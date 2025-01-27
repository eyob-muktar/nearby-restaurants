'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../lib/apolloClient';
import { MapProvider } from '../lib/mapProvider';
import { Toaster } from 'sonner';

const client = createApolloClient();
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MapProvider>
          <ApolloProvider client={client}>
            {children}
            <Toaster
              richColors
              closeButton
            />
          </ApolloProvider>
        </MapProvider>
      </body>
    </html>
  );
}
