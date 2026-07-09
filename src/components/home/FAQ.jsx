import { useState } from "react";
import { Plus } from "lucide-react";
import Container from "../ui/Container";
import { BUNDLE_PRICE } from "../../lib/constants";

const FAQS = [
  {
    q: "Enroll করার পর আমি কী Access পাবো?",
    a: "Payment Confirm হওয়ার পর আপনাকে সরাসরি আমাদের Telegram Bot-এর মাধ্যমে সংশ্লিষ্ট Chapter-এর Private Channel-এ যোগ করে দেওয়া হবে — সব Class Video ও Content সেখানেই থাকবে, এবং এটা Lifetime Access।",
  },
  {
    q: "Trading-এ আগে থেকে কোনো অভিজ্ঞতা লাগবে?",
    a: "না। Chapter 1 (The Architecture of Markets) সম্পূর্ণ একদম বেসিক থেকে শুরু হয় — Trading আসলে কী সেটা থেকেই। কোনো আগের Experience ছাড়াই শুরু করা যায়।",
  },
  {
    q: "Chapter কি নিজের পছন্দমতো যেকোনো একটা কিনতে পারি, নাকি ক্রমানুসারে কিনতে হবে?",
    a: "Chapter গুলো ক্রমানুসারে Unlock হয় (আগে Chapter 1, তারপর 2, এভাবে) — কারণ প্রতিটা Chapter আগেরটার Concept-এর উপর ভিত্তি করে তৈরি। এতে কোনো Concept miss হয় না।",
  },
  {
    q: "Payment কীভাবে করবো?",
    a: "সম্পূর্ণ Crypto-ভিত্তিক Payment: Binance UID, USDT (TRC20 বা BEP20), BTC অথবা ETH (ERC20) — যেটা আপনার জন্য সুবিধাজনক। Checkout-এর সময় Wallet Address দেখানো হবে।",
  },
  {
    q: "Refund Policy কী?",
    a: `শুধুমাত্র Full Bundle ($${BUNDLE_PRICE}) Package-এ ৭-দিনের Money-Back Guarantee আছে। Individual Chapter বা Add-on কেনার ক্ষেত্রে কোনো Refund নেই — Checkout-এর সময় এটা স্পষ্টভাবে দেখানো হবে।`,
  },
  {
    q: "কোনো Sign-up বা Account তৈরি করতে হবে?",
    a: "না, কোনো Sign-up/Account লাগবে না। পুরো Checkout Process Frictionless — শুধু আপনার তথ্য দিয়ে Payment সম্পূর্ণ করলেই হবে।",
  },
  {
    q: "Crypto-তে নতুন হলে Payment করতে সমস্যা হলে কী করবো?",
    a: "Checkout-এর Payment Step-এ একটা 'Get Support' বাটন আছে — সেখান থেকে সরাসরি সাহায্য নিতে পারবেন, বিশেষ করে যারা প্রথমবার Crypto দিয়ে Payment করছেন তাদের জন্য।",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line py-5">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 text-left">
        <span className="font-display text-[15px] sm:text-[16px] font-semibold text-ink">{item.q}</span>
        <Plus
          size={18}
          className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
      {isOpen && <p className="mt-3 text-[14px] leading-relaxed text-ink-soft pr-6">{item.a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface-alt/60">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-[0.14em] text-gold uppercase">FAQ</span>
          <h2 className="mt-3 font-display text-3xl sm:text-[2.3rem] font-semibold text-ink leading-tight">
            সাধারণ প্রশ্নসমূহ
          </h2>
        </div>

        <div className="mt-12 max-w-2xl mx-auto rounded-3xl border border-line bg-surface px-6 sm:px-8">
          {FAQS.map((item, i) => (
            <FAQItem key={i} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
