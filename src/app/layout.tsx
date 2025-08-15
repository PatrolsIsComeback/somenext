// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Fontu import et
import './globals.css';

const inter = Inter({ subsets: ['latin'] }); // Fontu tanımla

export const metadata: Metadata = {
  title: 'OpenAnime',
  description: 'An open-source anime platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body> {/* className'i ekle */}
    </html>
  );
}
