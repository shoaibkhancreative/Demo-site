import { formatBDT } from '@/data/pricing';

const BOT_URL = 'https://t.me/exclusive_mentorship_bot';

export function buildTelegramUrl(checkout, chapters) {
  const lines = [];
  lines.push('New Enrollment Request');
  lines.push('------------------------');

  if (checkout.packageType === 'bundle') {
    lines.push('Package: Full Bundle (All 13 Chapters) - Lifetime Access');
  } else {
    const names = checkout.selectedChapters
      .map((id) => chapters.find((c) => c.id === id))
      .filter(Boolean)
      .map((c) => `${String(c.id).padStart(2, '0')}. ${c.title}`);
    lines.push(`Package: Individual Chapters (${names.length})`);
    names.forEach((n) => lines.push(`  - ${n}`));
  }

  const addonLabels = [];
  if (checkout.addons.insight) addonLabels.push('Market Insight Daily (1 month)');
  if (checkout.addons.consultation) addonLabels.push('1-on-1 Consultation (3 months)');
  if (checkout.packageType === 'bundle') {
    addonLabels.push('Priority Support (Included Free)');
  } else if (checkout.addons.priority) {
    addonLabels.push('Priority Support');
  }
  if (addonLabels.length) {
    lines.push('Add-ons:');
    addonLabels.forEach((a) => lines.push(`  - ${a}`));
  }

  lines.push('------------------------');
  lines.push(`Total Due: ${formatBDT(checkout.total)}`);
  lines.push(`Payment Method: ${checkout.paymentMethodLabel || 'Not selected'}`);
  lines.push('------------------------');
  lines.push('Contact Details:');
  lines.push(`Name: ${checkout.info.name}`);
  lines.push(`Date of Birth: ${checkout.info.dob}`);
  if (checkout.info.phone) lines.push(`Phone: ${checkout.info.phone}`);
  if (checkout.info.email) lines.push(`Email: ${checkout.info.email}`);
  if (checkout.info.telegram) lines.push(`Telegram: ${checkout.info.telegram}`);
  if (checkout.info.address) lines.push(`Address: ${checkout.info.address}`);
  lines.push('------------------------');
  lines.push('I have sent the payment and attached proof below.');

  const text = lines.join('\n');
  return `${BOT_URL}?text=${encodeURIComponent(text)}`;
}

export { BOT_URL };
