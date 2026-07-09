import { Infinity as InfinityIcon, ShieldCheck, Lock, MessagesSquare } from "lucide-react";
import Container from "../ui/Container";

const ITEMS = [
  { icon: InfinityIcon, title: "Lifetime Access", text: "একবার কিনলে চিরকালের জন্য — কোনো Monthly Fee নেই।" },
  { icon: ShieldCheck, title: "৭-Day Guarantee", text: "Full Bundle-এ ৭ দিনের মধ্যে Money-Back Guarantee।" },
  { icon: Lock, title: "Secure Crypto Payment", text: "Binance, USDT, BTC, ETH — যেভাবে আপনার সুবিধা।" },
  { icon: MessagesSquare, title: "Direct Telegram Access", text: "Enroll করার সাথে সাথেই Telegram-এ সরাসরি যোগাযোগ।" },
];

export default function TrustIndicators() {
  return (
    <section className="py-14 border-y border-line bg-surface">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-ink">
                <item.icon size={18} strokeWidth={2} />
              </span>
              <div>
                <p className="font-display text-[14px] font-semibold text-ink leading-snug">{item.title}</p>
                <p className="text-[13px] text-ink-faint mt-0.5 leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
