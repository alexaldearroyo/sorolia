import { fxRatesSeed } from './demoData.js';

/**
 * Cosmetic FX: every currency converts to the workspace base via fxRatesSeed.
 * Real apps would store rates per posting date; the demo keeps a static table.
 */

const SYMBOLS = { EUR: '€', USD: '$', GBP: '£', CHF: 'CHF' };

export function currencyLabel(code) {
  return SYMBOLS[code] ?? code;
}

export function convert(amount, from, to) {
  if (!amount || from === to) return amount;
  const rates = fxRatesSeed.rates;
  const base = fxRatesSeed.base;
  const inBase = from === base ? amount : amount / (rates[from] ?? 1);
  return to === base ? inBase : inBase * (rates[to] ?? 1);
}

export function formatMoney(amount, code = 'EUR', locale = 'de-DE') {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: code,
      maximumFractionDigits: 0
    }).format(amount);
  } catch {
    return `${amount} ${code}`;
  }
}
