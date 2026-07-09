import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import Container from "../ui/Container";
import { chapters } from "../../lib/curriculum";
import { SUPPORT_TELEGRAM_URL } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-gold font-display text-lg font-bold">
                N
              </span>
              <span className="font-display text-[17px] font-semibold text-ink">
                NLT <span className="text-ink-soft font-medium">Mentorship</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              ICT-Based Trading Mentorship — মার্কেট Structure পড়া থেকে শুরু করে নিজের একটা সম্পূর্ণ Trading Plan তৈরি করা পর্যন্ত, ৭টি Chapter ও ৯৯টি Class-এ সম্পূর্ণ Roadmap।
            </p>
            <a
              href={SUPPORT_TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-signal hover:text-signal-deep transition-colors"
            >
              <Send size={16} />
              Telegram-এ যোগাযোগ করুন
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-ink mb-4">Curriculum</p>
            <ul className="space-y-2.5">
              {chapters.map((c) => (
                <li key={c.number}>
                  <Link
                    to={`/chapters/${c.slug}`}
                    className="text-[14px] text-ink-soft hover:text-ink transition-colors"
                  >
                    {c.number}. {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-ink mb-4">Enroll</p>
            <ul className="space-y-2.5 text-[14px] text-ink-soft">
              <li>
                <Link to="/checkout" className="hover:text-ink transition-colors">
                  Join Now
                </Link>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-ink transition-colors">
                  Pricing &amp; Bundle
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-ink transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="text-xs leading-relaxed text-ink-faint max-w-3xl">
            <strong className="text-ink-soft">Risk Disclosure:</strong> Trading Forex, Crypto, Commodities ও অন্যান্য Leveraged Product-এ উল্লেখযোগ্য ঝুঁকি জড়িত এবং প্রত্যেকের জন্য উপযুক্ত নাও হতে পারে। এই Mentorship সম্পূর্ণভাবে Educational উদ্দেশ্যে তৈরি — এটি কোনো Financial Advice নয় এবং ভবিষ্যৎ Profit-এর কোনো নিশ্চয়তা দেয় না। Past performance বা কোনো Strategy ভবিষ্যৎ ফলাফলের নিশ্চয়তা নয়। নিজের ঝুঁকি সম্পর্কে সচেতন থেকে এবং প্রয়োজনে একজন Licensed Financial Advisor-এর পরামর্শ নিয়ে সিদ্ধান্ত নিন।
          </p>
          <p className="mt-5 text-xs text-ink-faint">
            © {new Date().getFullYear()} NLT Exclusive Mentorship. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
