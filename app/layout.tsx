'use client';

import './globals.css';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Game Verse Pro - Premium Gaming Marketplace" />
        <title>Game Verse Pro</title>
      </head>
      <body>
        <Header />
        <main className="pt-20 pb-24">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}