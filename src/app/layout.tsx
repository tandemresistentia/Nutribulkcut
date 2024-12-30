import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import ClientWrapper from './ClientWrapper'; // Import the Client Component wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutribulkcut',
  description: 'Nutribulkcut',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Client Wrapper for Cookies and Google Analytics */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
