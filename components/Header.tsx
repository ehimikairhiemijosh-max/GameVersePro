'use client';

import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-primary to-secondary/80 backdrop-blur-md border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-primary font-bold">GV</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
            Game Verse Pro
          </span>
        </Link>

        <SearchBar />

        <button className="px-4 py-2 rounded-lg bg-accent text-primary font-bold hover:shadow-glow-lg transition-all">
          Sign In
        </button>
      </div>
    </header>
  );
}