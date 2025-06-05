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
  title: 'Slatko i točka – Domaće torte i kolači iz Slavonije',
  description:
    'Obrt za proizvodnju slastica u Slavoniji. Domaće torte, kolači i slastice po narudžbi za sve prigode. Ručno rađeno, s ljubavlju.',
  keywords: [
    'slastice',
    'domaći kolači',
    'torte po narudžbi',
    'kolači Slavonija',
    'Slatko i točka',
    'proizvodnja slastica',
    'slastičarnica Slavonija',
  ],
  openGraph: {
    title: 'Slatko i točka – Torte i kolači po narudžbi',
    description:
      'Naručite domaće kolače i torte u Slavoniji. Idealno za vjenčanja, rođendane i svečane prilike.',
    url: 'https://slatkoitocka.hr', //TODO: Nadopuni
    siteName: 'Slatko i točka',
    images: [
      {
        url: '/img/slatkoitocka/logo.png',
        width: 180,
        height: 239,
        alt: 'Logo – Slatko i točka',
      },
    ],
    type: 'website',
  },
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
