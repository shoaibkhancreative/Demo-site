import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingUp size={18} strokeWidth={2.4} />
          </span>
          Exclusive Mentorship
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#curriculum" className="transition-colors hover:text-foreground">Curriculum</a>
          <a href="/#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="/#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <Link
          to="/checkout"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-transform active:scale-[0.98] hover:brightness-110"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}
