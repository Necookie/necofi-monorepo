import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@tamagui/core/reset.css';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'necofi',
  description: 'NecoFi web app shell',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
