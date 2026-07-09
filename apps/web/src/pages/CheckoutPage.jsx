import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Copy, LifeBuoy, ShieldCheck, Send } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { chapters } from '@/data/chapters';
import { BUNDLE_PRICE, addons, paymentMethods, formatBDT } from '@/data/pricing';
import { buildTelegramUrl } from '@/lib/telegram';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const STEPS = ['Package', 'Your Info', 'Terms', 'Payment', 'Confirm'];

export default function CheckoutPage() {
  const [params] = useSearchParams();
  const { toast } = useToast();
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);

  const [packageType, setPackageType] = React.useState(params.get('package') === 'bundle' ? 'bundle' : 'chapters');
  const initialChapter = Number(params.get('chapter'));
  const [selectedChapters, setSelectedChapters] = React.useState(
    initialChapter && chapters.some((c) => c.id === initialChapter) ? [initialChapter] : []
  );
  const [selectedAddons, setSelectedAddons] = React.useState({ insight: false, consultation: false, priority: false });

  const [info, setInfo] = React.useState({ name: '', dob: '', phone: '', email: '', telegram: '', address: '' });
  const [terms, setTerms] = React.useState({ agree: false, risk: false });
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const toggleChapter = (id) =>
    setSelectedChapters((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));

  const chapterTotal = selectedChapters.reduce((sum, id) => sum + (chapters.find((c) => c.id === id)?.price || 0), 0);
  const baseTotal = packageType === 'bundle' ? BUNDLE_PRICE : chapterTotal;
  const priorityIncluded = packageType === 'bundle';
  const addonsTotal =
    (selectedAddons.insight ? addons[0].price : 0) +
    (selectedAddons.consultation ? addons[1].price : 0) +
    (!priorityIncluded && selectedAddons.priority ? addons[2].price : 0);
  const total = baseTotal + addonsTotal;

  const contactFilled = Boolean(info.phone || info.email || info.telegram);
  const step1Valid = packageType === 'bundle' || selectedChapters.length > 0;
  const step2Valid = Boolean(info.name.trim() && info.dob && contactFilled);
  const step3Valid = terms.agree && terms.risk;
  const step4Valid = Boolean(paymentMethod);

  const canProceed = [step1Valid, step2Valid, step3Valid, step4Valid, true][step];

  const paymentLabel = paymentMethods.find((p) => p.id === paymentMethod)?.label;

  const telegramUrl = buildTelegramUrl(
    {
      packageType,
      selectedChapters,
      addons: selectedAddons,
      total,
      paymentMethodLabel: paymentLabel,
      info,
    },
    chapters
  );

  const handleCopy = (address) => {
    navigator.clipboard?.writeText(address);
    setCopied(true);
    toast({ title: 'Address copied', description: 'Wallet address copied to clipboard.' });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    setSent(true);
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to home
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">Complete Your Enrollment</h1>
          <div className="mt-6 flex items-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i < step ? 'bg-brand text-brand-foreground' : i === step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className={`hidden text-xs font-medium sm:block ${i === step ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
                {i < STEPS.length - 1 && <div className="h-px flex-1 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {step === 0 && (
                <div className="space-y-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setPackageType('bundle')}
                      className={`rounded-2xl border-2 p-6 text-left transition-colors ${
                        packageType === 'bundle' ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-brand">Best Value</p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">Full Bundle</p>
                      <p className="text-sm text-muted-foreground">All 13 chapters, lifetime access</p>
                      <p className="mt-4 font-display text-2xl font-bold text-foreground">{formatBDT(BUNDLE_PRICE)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">Free Priority Support + 7-day guarantee</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPackageType('chapters')}
                      className={`rounded-2xl border-2 p-6 text-left transition-colors ${
                        packageType === 'chapters' ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Flexible</p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">Individual Chapters</p>
                      <p className="text-sm text-muted-foreground">Pick exactly what you need</p>
                      <p className="mt-4 font-display text-2xl font-bold text-foreground">from ৳300</p>
                      <p className="mt-1 text-xs text-muted-foreground">No refunds on individual chapters</p>
                    </button>
                  </div>

                  {packageType === 'chapters' && (
                    <div>
                      <p className="font-display font-semibold text-foreground">Select chapters</p>
                      <div className="mt-3 max-h-80 space-y-2 overflow-y-auto rounded-xl border border-border p-3 scrollbar-thin">
                        {chapters.map((c) => (
                          <label
                            key={c.id}
                            className="flex cursor-pointer items-center justify-between gap-3 rounded-lg p-3 hover:bg-secondary"
                          >
                            <div className="flex items-center gap-3">
                              <Checkbox checked={selectedChapters.includes(c.id)} onCheckedChange={() => toggleChapter(c.id)} />
                              <span className="text-sm text-foreground">
                                {String(c.id).padStart(2, '0')}. {c.title}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-foreground">{formatBDT(c.price)}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="font-display font-semibold text-foreground">Optional add-ons</p>
                    <div className="mt-3 space-y-2">
                      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-border p-4 hover:bg-secondary">
                        <div className="flex items-center gap-3">
                          <Checkbox checked={selectedAddons.insight} onCheckedChange={(v) => setSelectedAddons((s) => ({ ...s, insight: Boolean(v) }))} />
                          <div>
                            <p className="text-sm font-medium text-foreground">Market Insight Daily</p>
                            <p className="text-xs text-muted-foreground">1 month</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-foreground">{formatBDT(addons[0].price)}</span>
                      </label>
                      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-border p-4 hover:bg-secondary">
                        <div className="flex items-center gap-3">
                          <Checkbox checked={selectedAddons.consultation} onCheckedChange={(v) => setSelectedAddons((s) => ({ ...s, consultation: Boolean(v) }))} />
                          <div>
                            <p className="text-sm font-medium text-foreground">1-on-1 Consultation</p>
                            <p className="text-xs text-muted-foreground">3 months</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-foreground">{formatBDT(addons[1].price)}</span>
                      </label>
                      <label
                        className={`flex items-center justify-between gap-3 rounded-xl border border-border p-4 ${
                          priorityIncluded ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-secondary'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={priorityIncluded || selectedAddons.priority}
                            disabled={priorityIncluded}
                            onCheckedChange={(v) => setSelectedAddons((s) => ({ ...s, priority: Boolean(v) }))}
                          />
                          <div>
                            <p className="text-sm font-medium text-foreground">Priority Support</p>
                            <p className="text-xs text-muted-foreground">{priorityIncluded ? 'Included free with Bundle' : 'Optional'}</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-foreground">{priorityIncluded ? 'FREE' : formatBDT(addons[2].price)}</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" className="mt-1.5" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" className="mt-1.5" value={info.dob} onChange={(e) => setInfo({ ...info, dob: e.target.value })} />
                  </div>
                  <p className="text-sm text-muted-foreground">Provide at least one contact method below.</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" className="mt-1.5" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} placeholder="+880 1XXXXXXXXX" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" className="mt-1.5" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="telegram">Telegram Username</Label>
                    <Input id="telegram" className="mt-1.5" value={info.telegram} onChange={(e) => setInfo({ ...info, telegram: e.target.value })} placeholder="@yourusername" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address (Optional)</Label>
                    <Textarea id="address" className="mt-1.5" value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} placeholder="Street, city, country" />
                  </div>
                  {!contactFilled && (
                    <p className="text-xs text-destructive">Please provide at least one of: phone, email, or Telegram username.</p>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div className="max-h-64 overflow-y-auto rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground scrollbar-thin">
                    <p className="font-display font-semibold text-foreground">Terms &amp; Conditions</p>
                    <p className="mt-3">
                      By enrolling in Exclusive Mentorship you acknowledge that all purchases are for educational content only and do not constitute financial advice.
                      Individual chapter purchases are final and non-refundable. Only the Full Bundle carries a 7-day money-back guarantee from the date of confirmed payment.
                    </p>
                    <p className="mt-3">
                      Access is granted for personal use only and may not be shared, resold, or redistributed. Content, pricing, and add-on availability may be updated
                      from time to time without prior notice, though enrolled access already granted will not be revoked.
                    </p>
                    <p className="mt-3">
                      Payment is accepted only via the crypto methods listed at checkout. Enrollment is confirmed manually after proof of payment is reviewed via Telegram.
                      Please ensure all information submitted is accurate, as it is used to verify and process your enrollment.
                    </p>
                    <p className="mt-3">
                      Trading financial markets carries substantial risk of loss and is not suitable for everyone. This mentorship is educational in nature; you are solely
                      responsible for your own trading decisions and outcomes.
                    </p>
                  </div>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4">
                    <Checkbox checked={terms.agree} onCheckedChange={(v) => setTerms((t) => ({ ...t, agree: Boolean(v) }))} className="mt-0.5" />
                    <span className="text-sm text-foreground">আমি সকল Terms &amp; Conditions সম্পূর্ণ পড়েছি ও সম্মত আছি।</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4">
                    <Checkbox checked={terms.risk} onCheckedChange={(v) => setTerms((t) => ({ ...t, risk: Boolean(v) }))} className="mt-0.5" />
                    <span className="text-sm text-foreground">Trading risk সম্পর্কে আমি সচেতন।</span>
                  </label>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {paymentMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        className={`rounded-xl border-2 p-4 text-left transition-colors ${
                          paymentMethod === m.id ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                        }`}
                      >
                        <p className="text-sm font-semibold text-foreground">{m.label}</p>
                      </button>
                    ))}
                  </div>

                  {paymentMethod && (
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <p className="text-sm font-medium text-foreground">{paymentMethods.find((m) => m.id === paymentMethod).label} Address</p>
                      <div className="mt-2 flex items-center gap-2 rounded-lg bg-secondary p-3">
                        <code className="flex-1 overflow-x-auto whitespace-nowrap text-xs text-foreground">
                          {paymentMethods.find((m) => m.id === paymentMethod).address}
                        </code>
                        <button
                          type="button"
                          onClick={() => handleCopy(paymentMethods.find((m) => m.id === paymentMethod).address)}
                          className="flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                        >
                          <Copy size={13} /> {copied ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">{paymentMethods.find((m) => m.id === paymentMethod).note}</p>
                    </div>
                  )}

                  <div className="rounded-2xl border border-brand/40 bg-accent/50 p-6">
                    <p className="text-sm text-muted-foreground">Grand Total Due</p>
                    <p className="mt-1 font-display text-3xl font-bold text-foreground">{formatBDT(total)}</p>
                    <p className="mt-3 text-xs text-muted-foreground">≈ {(total / 123).toFixed(2)} USDT <span className="text-foreground/60">(1 USD = 123 Taka)</span></p>
                  </div>

                  <a
                    href="https://t.me/exclusive_mentorship_bot"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border p-4 text-sm font-semibold text-brand hover:bg-secondary"
                  >
                    <LifeBuoy size={16} /> New to crypto payments? Get Support before paying
                  </a>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 rounded-2xl border border-border bg-card p-8 text-center">
                  <ShieldCheck className="mx-auto text-brand" size={40} />
                  <h2 className="font-display text-2xl font-bold text-foreground">Review &amp; Confirm</h2>
                  <div className="mx-auto max-w-sm space-y-2 text-left text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Package</span><span className="font-medium text-foreground">{packageType === 'bundle' ? 'Full Bundle' : `${selectedChapters.length} Chapter(s)`}</span></div>
                    <div className="flex justify-between"><span>Payment Method</span><span className="font-medium text-foreground">{paymentLabel}</span></div>
                    <div className="flex justify-between border-t border-border pt-2"><span>Total Due</span><span className="font-display text-lg font-bold text-foreground">{formatBDT(total)}</span></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Once you have sent the payment, click below — you'll be redirected to our Telegram bot with all your details pre-filled to send your proof of payment.
                  </p>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 text-base font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
                  >
                    {sent ? (
                      <>
                        <Send size={17} /> Send Proof of Payment
                      </>
                    ) : (
                      'Confirm & Join'
                    )}
                  </button>
                  {sent && (
                    <p className="text-xs text-muted-foreground">
                      Didn't open?{' '}
                      <a href={telegramUrl} target="_blank" rel="noreferrer" className="font-semibold text-brand hover:underline">
                        Click here to open Telegram
                      </a>
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 4 && (
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground disabled:opacity-40"
              >
                <ArrowLeft size={15} /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(4, s + 1))}
                disabled={!canProceed}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-40"
              >
                Next <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
