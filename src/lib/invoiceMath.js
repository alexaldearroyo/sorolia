/**
 * Invoice line math. All inputs are coerced to numbers so the modal can keep
 * editable string state and we still compute clean totals.
 */

/** @param {{qty: number | string, unitPrice: number | string, discount?: number | string, vatRate?: number | string}} item */
export function lineNetTotal(item) {
  const qty = Number(item.qty) || 0;
  const unit = Number(item.unitPrice) || 0;
  const discount = Math.min(100, Math.max(0, Number(item.discount ?? 0) || 0));
  return qty * unit * (1 - discount / 100);
}

export function lineVatAmount(item) {
  const rate = Number(item.vatRate ?? 0);
  return Math.round(lineNetTotal(item) * (rate / 100));
}

export function lineGrossTotal(item) {
  return Math.round(lineNetTotal(item) + lineVatAmount(item));
}

/**
 * Aggregates a list of line items.
 * @param {Array<{qty: number | string, unitPrice: number | string, discount?: number | string, vatRate?: number | string}>} items
 */
export function summarizeLines(items = []) {
  let net = 0;
  let vat = 0;
  const byVat = new Map();
  for (const item of items) {
    const lineNet = lineNetTotal(item);
    const lineVat = lineVatAmount(item);
    net += lineNet;
    vat += lineVat;
    const rate = Number(item.vatRate ?? 0);
    const prev = byVat.get(rate) ?? { net: 0, vat: 0 };
    byVat.set(rate, { net: prev.net + lineNet, vat: prev.vat + lineVat });
  }
  return {
    net: Math.round(net),
    vat: Math.round(vat),
    gross: Math.round(net + vat),
    byVat: Array.from(byVat.entries())
      .sort(([a], [b]) => a - b)
      .map(([rate, totals]) => ({
        rate,
        net: Math.round(totals.net),
        vat: Math.round(totals.vat)
      }))
  };
}

export function emptyLineItem() {
  return { description: '', qty: 1, unitPrice: 0, discount: 0, vatRate: 19 };
}
