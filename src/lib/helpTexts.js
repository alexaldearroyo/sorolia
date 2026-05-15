/**
 * Central registry for the small `?` info-tooltips that pop next to labels.
 * Add new entries here so the InfoBox component stays content-less.
 * Keep copy short — these are reminders, not docs.
 */
export const helpTexts = {
  'dashboard.opex':
    'Operating costs for the active period — the sum of every expense posting. Purchases flagged as "purchase order" still count here (they only move stock once received).',
  'dashboard.overdue':
    'An open invoice automatically becomes "overdue" once its due date passes. You don\'t need to mark it manually.',
  'dashboard.atrisk':
    'Customers flip to "at risk" automatically when they have one or more overdue invoices. You can still override the health manually on the customer record.',
  'dashboard.inventory.low':
    'SKUs at or below their reorder point. Click to filter the inventory list.',
  'dashboard.projects':
    'Initiatives currently in Planning or Active state. People belong to projects in the People module.',
  'invoice.taxkey':
    'German Steuerschlüssel (tax key) controls how the invoice is posted in accounting. Use the standard codes 1–4 or type a custom one.',
  'invoice.vat':
    'VAT-ID is required by law on B2B invoices in the EU. For private customers, leave it blank and choose "Private person".',
  'invoice.customer.inline':
    'You can type a brand new customer here — it will be added to the customer master when you save the invoice.',
  'invoice.private':
    'Toggle this when billing a private person (not a company). VAT-ID is then optional and the invoice prints the legal name + address only.',
  'invoice.stock':
    'When a line is linked to an SKU, saving an issued invoice (anything except Offer) automatically reduces inventory by the quantity sold.',
  'expense.order':
    'Mark an expense as a purchase order to add the items to inventory (ordered, not received yet). When the goods arrive, click "Mark as received" to move the qty into on-hand stock.',
  'expense.lines':
    'Add as many lines as you need (e.g. one invoice with several positions). The total is the sum of all line amounts.',
  'inventory.fillup':
    'Quick action: bumps the on-hand stock to twice the reorder point. Use it after a delivery to refill without typing the new total.',
  'inventory.ordered':
    'An expense flagged as a purchase order shows up here as "ordered" until you mark it received. The qty will then move from ordered → on-hand.',
  'inventory.reorder':
    'The threshold below which an SKU is flagged as low. Set it to "lead time × weekly consumption" as a rule of thumb.',
  'customers.suppliers':
    'A supplier is a customer-record flagged as "supplier". Same fields, separate page so the lists stay tidy. A record can be both at once.',
  'projects.months':
    'Drag/swipe sideways to navigate months. Click a month chip to filter the timeline below to that month.'
};

/**
 * Returns the help text for a key, or null if unknown.
 * @param {string} key
 */
export function helpFor(key) {
  return helpTexts[key] ?? null;
}
