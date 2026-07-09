export const BUNDLE_PRICE = 7999;

export const addons = [
  { id: 'insight', name: 'Market Insight Daily', duration: '1 month', price: 2999 },
  { id: 'consultation', name: '1-on-1 Consultation', duration: '3 months', price: 14999 },
  { id: 'priority', name: 'Priority Support', duration: 'Lifetime with plan', price: 999 },
];

export const paymentMethods = [
  { id: 'binance', label: 'Binance UID', address: '123456789', note: 'Send via Binance Pay / internal transfer to this UID.' },
  { id: 'trc20', label: 'USDT (TRC20 - Tron)', address: 'TA1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7', note: 'Tron network only. Sending on another network will result in loss of funds.' },
  { id: 'bep20', label: 'USDT (BEP20 - BSC)', address: '0xA1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8S9t0', note: 'BNB Smart Chain only. Sending on another network will result in loss of funds.' },
];

export const formatBDT = (amount) => `\u09F3${Number(amount).toLocaleString('en-US')}`;
