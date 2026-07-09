import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-[90rem] px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <TrendingUp size={18} strokeWidth={2.4} />
              </span>
              Exclusive Mentorship
            </div>
            <p className="mt-3 max-w-sm text-sm text-navy-foreground/60">
              A 13-chapter institutional trading mentorship — market structure, liquidity, psychology, risk and prop-firm mastery, taught step by step.
            </p>
          </div>
          <div className="flex gap-10 text-sm">
            <div className="space-y-2">
              <p className="font-semibold text-navy-foreground/90">Program</p>
              <a href="/#curriculum" className="block text-navy-foreground/60 hover:text-navy-foreground">Curriculum</a>
              <a href="/#pricing" className="block text-navy-foreground/60 hover:text-navy-foreground">Pricing</a>
              <a href="/#faq" className="block text-navy-foreground/60 hover:text-navy-foreground">FAQ</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-navy-foreground/90">Support</p>
              <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className="block text-navy-foreground/60 hover:text-navy-foreground">Telegram Support</a>
              <a href="/checkout" className="block text-navy-foreground/60 hover:text-navy-foreground">Enroll Now</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Exclusive Mentorship. All rights reserved.</p>
          <p>Trading involves substantial risk of loss. Past results are not indicative of future performance.</p>
        </div>
      </div>
    </footer>
  );
}
