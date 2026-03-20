import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NecoFi | Minimalist Finance App',
  description: 'A minimalist finance app landing template for NecoFi.',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
