import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import '../../public/css/grid.css';
import '../../public/css/isotope.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import '../../public/css/prettyPhoto.css';

import './styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SlatkoITocka',
  description:
    'Stranica napravljena u svrhu promoviranja obrta za proizvodnju slastica - Slatko i Točka.',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
