import { daysUntilDue, formatDe, formatDePlusDays, parseDeDate } from './format.js';
import { summarizeLines } from './invoiceMath.js';

function nextNumericId(prefix, rows, idField = 'id') {
  const re = new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(\\d+)$`);
  let max = 0;
  for (const row of rows) {
    const m = String(row[idField]).match(re);
    if (m) max = Math.max(max, Number.parseInt(m[1], 10));
  }
  return `${prefix}-${String(max + 1).padStart(4, '0')}`;
}

/**
 * Returns the next numeric SKU id used by the inventory table, e.g. `sku-007`.
 */
export function nextInventoryId(inventory) {
  let max = 0;
  for (const row of inventory) {
    const m = /^sku-(\d+)$/i.exec(String(row.id ?? ''));
    if (m) max = Math.max(max, Number.parseInt(m[1], 10));
  }
  return `sku-${String(max + 1).padStart(3, '0')}`;
}

/**
 * Builds a normalized inventory row from an editor payload. Fields that the
 * UI does not collect default to safe values so the row is consistent with
 * the seeded shape.
 */
export function buildInventoryRow(inventory, payload) {
  const id = payload?.id || nextInventoryId(inventory);
  return {
    id,
    code: String(payload.code ?? '').trim().toUpperCase() || id.toUpperCase(),
    name: String(payload.name ?? '').trim() || 'Untitled SKU',
    qty: Math.max(0, Math.round(Number(payload.qty) || 0)),
    reorder: Math.max(0, Math.round(Number(payload.reorder) || 0)),
    orderedQty: Math.max(0, Math.round(Number(payload.orderedQty) || 0)),
    orderEta: String(payload.orderEta ?? '').trim(),
    supplierCustomerId: payload.supplierCustomerId || null,
    unitCost: Math.max(0, Math.round(Number(payload.unitCost) || 0)),
    notes: String(payload.notes ?? '').trim()
  };
}

/**
 * Applies a partial patch to an existing SKU. We re-run the row through the
 * builder so any normalization (uppercased SKU code, qty rounding, etc.) is
 * applied consistently with the create path.
 */
export function applyInventoryPatch(existing, patch) {
  return buildInventoryRow([], { ...existing, ...patch, id: existing.id });
}

/**
 * Builds the next invoice id from the active company settings + the existing
 * roster, so users see the configured prefix / next number actually applied.
 */
export function nextInvoiceId(invoices, settings) {
  const prefix = settings?.invoicePrefix?.trim() || 'INV-2026';
  const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`^${escaped}-(\\d+)$`);
  let max = Math.max(0, Number(settings?.invoiceNextNumber ?? 0) - 1);
  for (const inv of invoices) {
    const m = String(inv.id).match(re);
    if (m) max = Math.max(max, Number.parseInt(m[1], 10));
  }
  return `${prefix}-${String(max + 1).padStart(4, '0')}`;
}

export function customerName(customers, customerId) {
  return customers.find((c) => c.id === customerId)?.name ?? 'Unknown';
}

export function enrichInvoices(invoices, customers) {
  return invoices.map((inv) => ({
    ...inv,
    customer: customerName(customers, inv.customerId)
  }));
}

export function paidTotalForCustomer(invoices, customerId) {
  return invoices
    .filter((i) => i.customerId === customerId && i.status === 'Paid')
    .reduce((s, i) => s + i.amount, 0);
}

export function openInvoiceCountForCustomer(invoices, customerId) {
  return invoices.filter(
    (i) => i.customerId === customerId && (i.status === 'Open' || i.status === 'Overdue')
  ).length;
}

export function buildWorkspaceExportSnapshot({
  workspace,
  customers,
  invoices,
  expenses,
  inventory,
  projects,
  employees
}) {
  return {
    exportedAt: new Date().toISOString(),
    workspace,
    customers,
    invoices,
    expenses,
    inventory,
    projects,
    employees
  };
}

function csvCell(value) {
  if (value == null) return '';
  const s = String(value);
  if (s.includes('"') || s.includes(',') || s.includes('\n')) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
}

function csvBlob(rows) {
  return '\uFEFF' + rows.join('\n');
}

export function buildExpensesCsvRows(expenseItems, customers) {
  const header = ['id', 'date', 'type', 'vendor', 'amount_eur', 'supplier_customer', 'is_order', 'inventory_id'];
  const lines = [header.map(csvCell).join(',')];
  for (const e of expenseItems) {
    const supplier = e.supplierCustomerId ? customerName(customers, e.supplierCustomerId) : '';
    lines.push(
      [
        csvCell(e.id),
        csvCell(e.date),
        csvCell(e.type),
        csvCell(e.vendor),
        csvCell(expenseAmount(e)),
        csvCell(supplier),
        csvCell(e.isOrder ? 'yes' : ''),
        csvCell(e.inventoryId ?? '')
      ].join(',')
    );
  }
  return csvBlob(lines);
}

/**
 * Reads the total amount from an expense, supporting both the new multi-line
 * shape (`items: [{description, amount}]`) and the legacy single `amount` field.
 */
export function expenseAmount(expense) {
  if (!expense) return 0;
  if (Array.isArray(expense.items) && expense.items.length) {
    return expense.items.reduce((sum, it) => sum + (Number(it.amount) || 0), 0);
  }
  return Number(expense.amount) || 0;
}

export function buildInvoicesCsvRows(invoices, customers) {
  const header = ['id', 'created', 'due', 'status', 'customer', 'net', 'vat', 'gross_eur'];
  const lines = [header.map(csvCell).join(',')];
  for (const inv of invoices) {
    const totals = summarizeLines(inv.items ?? []);
    lines.push(
      [
        csvCell(inv.id),
        csvCell(inv.created),
        csvCell(inv.due),
        csvCell(inv.status),
        csvCell(customerName(customers, inv.customerId)),
        csvCell(totals.net || 0),
        csvCell(totals.vat || 0),
        csvCell(inv.amount)
      ].join(',')
    );
  }
  return csvBlob(lines);
}

export function buildCustomersCsvRows(customers) {
  const header = [
    'id',
    'name',
    'country',
    'segment',
    'health',
    'email',
    'phone',
    'vat_id',
    'address',
    'payment_terms_days',
    'currency',
    'contacts'
  ];
  const lines = [header.map(csvCell).join(',')];
  for (const c of customers) {
    const contacts = (c.contacts ?? [])
      .map((p) => `${p.role || 'Contact'}: ${p.name}${p.email ? ` <${p.email}>` : ''}`)
      .join(' | ');
    lines.push(
      [
        csvCell(c.id),
        csvCell(c.name),
        csvCell(c.country),
        csvCell(c.segment),
        csvCell(c.health),
        csvCell(c.email),
        csvCell(c.phone),
        csvCell(c.vatId),
        csvCell(c.address),
        csvCell(c.paymentTermsDays),
        csvCell(c.currency),
        csvCell(contacts)
      ].join(',')
    );
  }
  return csvBlob(lines);
}

/** dd.mm.yyyy or dd/mm/yyyy → yyyy-mm-dd for &lt;input type="date"&gt; */
export function deDateToIso(de) {
  const m = /^(\d{1,2})[./](\d{1,2})[./](\d{4})$/.exec(String(de).trim());
  if (!m) return '';
  const dd = String(m[1]).padStart(2, '0');
  const mm = String(m[2]).padStart(2, '0');
  return `${m[3]}-${mm}-${dd}`;
}

export function isoDateToDe(iso) {
  if (!iso) return '';
  const parts = iso.split('-').map((x) => Number.parseInt(x, 10));
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return '';
  const [y, mo, d] = parts;
  return formatDe(new Date(y, mo - 1, d));
}

function normalizeItems(items = []) {
  return items
    .filter((it) => (it?.description ?? '').toString().trim() || Number(it?.qty) || Number(it?.unitPrice))
    .map((it) => ({
      description: String(it.description ?? '').trim(),
      qty: Math.max(0, Number(it.qty) || 0),
      unitPrice: Math.max(0, Math.round(Number(it.unitPrice) || 0)),
      discount: Math.min(100, Math.max(0, Number(it.discount) || 0)),
      vatRate: Number(it.vatRate ?? 0),
      skuId: it.skuId || null
    }));
}

/**
 * Build a new invoice. When the form omits a due date we fall back to the
 * customer's payment terms or the workspace default, so the configured terms
 * actually surface in the demo. Offers do not carry a due date — they are
 * proposals that have not yet entered the dunning timeline.
 */
export function buildNewInvoice(invoices, payload, { settings, customer } = {}) {
  const items = normalizeItems(payload.items ?? []);
  const totals = summarizeLines(items);
  const id = settings ? nextInvoiceId(invoices, settings) : nextNumericId('INV-2026', invoices);
  const fallbackDays = Number(customer?.paymentTermsDays ?? settings?.paymentTermsDays ?? 14);
  const status = payload.status || 'Open';
  const due = status === 'Offer' ? '' : (payload.dueDe ?? payload.due ?? formatDePlusDays(fallbackDays));
  const currency = payload.currency || customer?.currency || settings?.currency || 'EUR';
  const created = formatDe();
  return {
    id,
    customerId: payload.customerId,
    projectId: payload.projectId || null,
    title: String(payload.title ?? '').trim(),
    created,
    due,
    status,
    amount: totals.gross || Math.max(0, Math.round(Number(payload.amount) || 0)),
    amountPaid: 0,
    currency,
    poRef: String(payload.poRef ?? '').trim(),
    notes: String(payload.notes ?? '').trim(),
    taxKey: String(payload.taxKey ?? settings?.defaultTaxKey ?? '3'),
    items,
    dunning: [{ kind: status === 'Offer' ? 'issued' : 'issued', at: created, note: status === 'Offer' ? 'Offer drafted' : 'Issued from workspace' }]
  };
}

/** Reopening needs a future due date or the row stays effectively "Overdue". */
function refreshDueOnReopen(existing, nextStatus) {
  if (nextStatus !== 'Open') return null;
  const from = String(existing.status ?? '');
  const reopening =
    from === 'Paid' || from === 'Overdue' || from === 'Partially paid' || from === 'Open';
  if (!reopening) return null;
  const days = daysUntilDue(existing.due);
  if (days != null && days >= 0) return null;
  return formatDePlusDays(14);
}

export function applyInvoicePatch(existing, patch) {
  const items = patch.items ? normalizeItems(patch.items) : existing.items ?? [];
  const totals = summarizeLines(items);
  const nextStatus = patch.status ?? existing.status;
  const next = {
    ...existing,
    ...patch,
    title: patch.title != null ? String(patch.title).trim() : existing.title ?? '',
    items,
    amount: totals.gross || Math.max(0, Math.round(Number(patch.amount ?? existing.amount) || 0)),
    taxKey: patch.taxKey != null ? String(patch.taxKey) : existing.taxKey ?? '3'
  };
  if (nextStatus === 'Offer') {
    next.due = '';
  } else if (existing.status === 'Offer' && nextStatus !== 'Offer' && !patch.due && !patch.dueDe) {
    next.due = formatDePlusDays(14);
  }
  const reopenedDue = refreshDueOnReopen(existing, nextStatus);
  if (reopenedDue && !patch.due && !patch.dueDe) {
    next.due = reopenedDue;
  }
  if (patch.status && patch.status !== existing.status) {
    const today = formatDe();
    const dunning = Array.isArray(existing.dunning) ? [...existing.dunning] : [];
    if (patch.status === 'Paid') {
      dunning.push({ kind: 'paid', at: today, note: 'Marked as paid' });
      next.amountPaid = next.amount;
    } else if (patch.status === 'Open' && existing.status === 'Offer') {
      dunning.push({ kind: 'issued', at: today, note: 'Offer converted to issued invoice' });
    } else if (patch.status === 'Open' && reopenedDue) {
      dunning.push({ kind: 'issued', at: today, note: `Reopened · new due ${reopenedDue}` });
    } else if (patch.status === 'Partially paid') {
      const partial = Number(patch.amountPaid ?? existing.amountPaid ?? 0);
      dunning.push({
        kind: 'partial',
        at: today,
        note: partial ? `Partial payment ${partial.toLocaleString('de-DE')} €` : 'Partial payment received'
      });
    } else if (patch.status === 'Overdue') {
      dunning.push({ kind: 'reminder', at: today, note: 'Marked overdue · reminder due' });
    }
    next.dunning = dunning;
  }
  if (patch.amountPaid != null) {
    next.amountPaid = Math.max(0, Math.round(Number(patch.amountPaid) || 0));
  }
  return next;
}

/**
 * True when an invoice has been issued to a customer (i.e. left the draft
 * state), so it can no longer be deleted — only cancelled via credit note.
 */
export function isIssuedInvoice(inv) {
  if (!inv) return false;
  if (inv.isCreditNote) return false;
  const s = String(inv.status ?? '');
  return s !== 'Draft' && s !== 'Cancelled';
}

/**
 * Builds the next credit-note id from settings. We mirror invoice numbering
 * so the prefix is configurable (defaults to `CN-{YEAR}` if none set) while
 * still flowing through the same incremental counter.
 */
export function nextCreditNoteId(invoices, settings) {
  const base = settings?.creditNotePrefix?.trim() || `CN-${new Date().getFullYear()}`;
  const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`^${escaped}-(\\d+)$`);
  let max = 0;
  for (const inv of invoices) {
    const m = String(inv.id).match(re);
    if (m) max = Math.max(max, Number.parseInt(m[1], 10));
  }
  return `${base}-${String(max + 1).padStart(4, '0')}`;
}

/**
 * Cancels an issued invoice by emitting a credit note (Storno / Rechnungskorrektur).
 * The original invoice is preserved with `status: 'Cancelled'` and a back-pointer
 * to the credit note; the credit note carries a negative gross amount and the
 * inverse of every line.
 *
 * Returns `{ invoices, creditNote }` so the caller can persist the new state.
 */
export function cancelInvoiceWithCreditNote(invoices, invoiceId, { settings, reason, actorName, today } = {}) {
  const original = invoices.find((i) => i.id === invoiceId);
  if (!original) return { invoices, creditNote: null };
  if (!isIssuedInvoice(original)) return { invoices, creditNote: null };

  const issuedAt = today || formatDe();
  const creditNoteId = nextCreditNoteId(invoices, settings);
  const reasonText = String(reason ?? '').trim() || 'Customer request';

  const creditNote = {
    id: creditNoteId,
    isCreditNote: true,
    referenceInvoiceId: original.id,
    customerId: original.customerId,
    projectId: original.projectId ?? null,
    created: issuedAt,
    due: issuedAt,
    status: 'Credit note',
    amount: -Math.abs(Number(original.amount) || 0),
    amountPaid: 0,
    currency: original.currency,
    poRef: original.poRef ?? '',
    notes: `Storno of ${original.id} — ${reasonText}`,
    items: (original.items ?? []).map((it) => ({
      description: `Reversal · ${it.description ?? ''}`.trim(),
      qty: -Math.abs(Number(it.qty) || 0),
      unitPrice: Math.max(0, Math.round(Number(it.unitPrice) || 0)),
      discount: Math.min(100, Math.max(0, Number(it.discount) || 0)),
      vatRate: Number(it.vatRate ?? 0)
    })),
    dunning: [
      {
        kind: 'cancelled',
        at: issuedAt,
        note: `Issued credit note ${creditNoteId}${actorName ? ` by ${actorName}` : ''}`
      }
    ]
  };

  const cancelledOriginal = {
    ...original,
    status: 'Cancelled',
    creditNoteId,
    cancelledAt: issuedAt,
    cancelReason: reasonText,
    dunning: [
      ...(Array.isArray(original.dunning) ? original.dunning : []),
      {
        kind: 'cancelled',
        at: issuedAt,
        note: `Cancelled — ${reasonText} · ${creditNoteId}${actorName ? ` by ${actorName}` : ''}`
      }
    ]
  };

  const nextInvoices = invoices.map((i) => (i.id === invoiceId ? cancelledOriginal : i));
  nextInvoices.push(creditNote);
  return { invoices: nextInvoices, creditNote };
}

/** Increments the invoice counter so settings.invoiceNextNumber stays accurate. */
export function bumpInvoiceCounter(settings) {
  if (!settings) return settings;
  return {
    ...settings,
    invoiceNextNumber: Math.max(1, Number(settings.invoiceNextNumber ?? 1)) + 1
  };
}

export function expectedDueFromTerms(customer, settings) {
  const days = Number(customer?.paymentTermsDays ?? settings?.paymentTermsDays ?? 14);
  return formatDePlusDays(days);
}

/**
 * Promote an offer to an issued Open invoice: sets status Open, applies
 * payment-terms-based due date, and appends a dunning entry.
 */
export function issueOfferAsOpen(existing, { customer, settings } = {}) {
  const days = Number(customer?.paymentTermsDays ?? settings?.paymentTermsDays ?? 14);
  const due = formatDePlusDays(days);
  return applyInvoicePatch(existing, { status: 'Open', due });
}

export function isInvoicePaid(inv) {
  if (!inv) return false;
  if (inv.isCreditNote) return false;
  if (inv.status === 'Cancelled') return false;
  if (inv.status === 'Paid') return true;
  if (Number(inv.amountPaid ?? 0) >= Number(inv.amount ?? 0) && Number(inv.amount ?? 0) > 0) return true;
  return false;
}

export function invoiceBalance(inv) {
  return Math.max(0, Number(inv?.amount ?? 0) - Number(inv?.amountPaid ?? 0));
}

/**
 * Generates the next invoice from a recurring template. Used by the recurring
 * invoices section on the Invoices page.
 */
export function instantiateTemplate(template, invoices, customers, settings) {
  const customer = customers.find((c) => c.id === template.customerId);
  const today = parseDeDate(template.nextRunDe) ?? new Date();
  const monthLabel = today.toLocaleDateString('en-GB', { month: 'long' });
  const items = (template.items ?? []).map((it) => ({
    description: String(it.description ?? '').replace('{{month}}', monthLabel),
    qty: Number(it.qty) || 0,
    unitPrice: Math.round(Number(it.unitPrice) || 0),
    discount: Math.min(100, Math.max(0, Number(it.discount) || 0)),
    vatRate: Number(it.vatRate ?? settings?.defaultVat ?? 19)
  }));
  const draft = buildNewInvoice(
    invoices,
    {
      customerId: template.customerId,
      items,
      status: 'Open',
      poRef: template.poRef ?? '',
      notes: template.notes ?? `Auto-generated from ${template.name}`
    },
    { settings, customer }
  );
  draft.sourceTemplate = template.id;
  return draft;
}

export function advanceTemplateRun(template) {
  const next = parseDeDate(template.nextRunDe);
  if (!next) return template;
  if (template.cadence === 'quarterly') {
    next.setMonth(next.getMonth() + 3);
  } else if (template.cadence === 'weekly') {
    next.setDate(next.getDate() + 7);
  } else if (template.cadence === 'yearly') {
    next.setFullYear(next.getFullYear() + 1);
  } else {
    next.setMonth(next.getMonth() + 1);
  }
  return { ...template, nextRunDe: formatDe(next) };
}

export function nextCustomerId(customers) {
  let max = 0;
  for (const c of customers) {
    const m = /^cust-(\d+)$/.exec(c.id);
    if (m) max = Math.max(max, Number.parseInt(m[1], 10));
  }
  return `cust-${max + 1}`;
}

export function customerHasReferences(customerId, { invoices, projects, inventory, expenseItems }) {
  return (
    invoices.some((i) => i.customerId === customerId) ||
    projects.some((p) => p.customerId === customerId) ||
    inventory.some((s) => s.supplierCustomerId === customerId) ||
    expenseItems.some((e) => e.supplierCustomerId === customerId)
  );
}

export function createExpenseRow({
  vendor,
  type,
  amount,
  items,
  date,
  supplierCustomerId,
  projectId,
  id,
  submittedById,
  isOrder,
  inventoryId,
  orderEta,
  orderStatus
}) {
  const rowId = id || `exp-${Date.now()}`;
  const normalizedItems = Array.isArray(items)
    ? items
        .filter((it) => (it?.description ?? '').toString().trim() || Number(it?.amount))
        .map((it) => ({
          description: String(it.description ?? '').trim(),
          amount: Math.max(0, Math.round(Number(it.amount) || 0)),
          qty: Math.max(0, Math.round(Number(it.qty) || 0))
        }))
    : [];
  const total =
    normalizedItems.length > 0
      ? normalizedItems.reduce((s, it) => s + it.amount, 0)
      : Number(amount) || 0;
  return {
    id: rowId,
    vendor: vendor || 'New vendor',
    type: type || 'General',
    amount: total,
    items: normalizedItems,
    date: date || formatDe(),
    supplierCustomerId: supplierCustomerId || null,
    projectId: projectId || null,
    submittedById: submittedById || null,
    isOrder: Boolean(isOrder),
    inventoryId: inventoryId || null,
    orderEta: orderEta || '',
    orderStatus: orderStatus || (isOrder ? 'ordered' : '')
  };
}

/**
 * When an issued invoice (anything except `Offer`) carries lines linked to an
 * SKU via `skuId`, deduct that quantity from inventory. Returns the next
 * inventory list plus a list of human-readable warnings for SKUs that ended up
 * at or below their reorder point — useful to surface in a toast.
 */
export function deductInvoiceFromInventory(inventory, invoice) {
  if (!invoice || invoice.status === 'Offer') return { inventory, warnings: [], outOf: [] };
  const lines = Array.isArray(invoice.items) ? invoice.items : [];
  if (!lines.some((it) => it?.skuId)) return { inventory, warnings: [], outOf: [] };

  const warnings = [];
  const outOf = [];
  const next = inventory.map((sku) => {
    const lineQty = lines
      .filter((it) => it.skuId === sku.id)
      .reduce((s, it) => s + (Math.max(0, Math.round(Number(it.qty) || 0)) || 0), 0);
    if (!lineQty) return sku;
    const remaining = Math.max(0, (Number(sku.qty) || 0) - lineQty);
    const updated = { ...sku, qty: remaining };
    if (remaining <= 0) outOf.push(updated);
    else if (remaining <= (Number(sku.reorder) || 0)) warnings.push(updated);
    return updated;
  });
  return { inventory: next, warnings, outOf };
}

/**
 * Receives ordered stock into on-hand inventory. Used when an expense flagged
 * as a purchase order is "marked as received".
 */
export function receiveOrderIntoInventory(inventory, inventoryId, qty) {
  if (!inventoryId || !Number(qty)) return inventory;
  const n = Math.max(0, Math.round(Number(qty)));
  return inventory.map((sku) =>
    sku.id === inventoryId
      ? {
          ...sku,
          qty: (Number(sku.qty) || 0) + n,
          orderedQty: Math.max(0, (Number(sku.orderedQty) || 0) - n)
        }
      : sku
  );
}
