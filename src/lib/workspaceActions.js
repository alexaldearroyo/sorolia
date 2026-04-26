function nextNumericId(prefix, rows, idField = 'id') {
  const re = new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(\\d+)$`);
  let max = 0;
  for (const row of rows) {
    const m = String(row[idField]).match(re);
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

export function buildExpensesCsvRows(expenseItems, customers) {
  const header = ['id', 'date', 'type', 'vendor', 'amount_eur', 'supplier_customer'];
  const lines = [header.join(',')];
  for (const e of expenseItems) {
    const supplier = e.supplierCustomerId
      ? customerName(customers, e.supplierCustomerId).replaceAll('"', '""')
      : '';
    lines.push(
      [
        e.id,
        e.date,
        e.type,
        `"${String(e.vendor).replaceAll('"', '""')}"`,
        e.amount,
        `"${supplier}"`
      ].join(',')
    );
  }
  return lines.join('\n');
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
  return new Date(y, mo - 1, d).toLocaleDateString('de-DE');
}

export function buildNewInvoice(invoices, { customerId, amount, dueDe, status }) {
  const id = nextNumericId('INV-2026', invoices);
  return {
    id,
    customerId,
    created: new Date().toLocaleDateString('de-DE'),
    due: dueDe,
    status: status || 'Open',
    amount: Math.max(0, Math.round(Number(amount) || 0))
  };
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

export function createExpenseRow({ vendor, type, amount, date, supplierCustomerId, id }) {
  const rowId = id || `exp-${Date.now()}`;
  return {
    id: rowId,
    vendor: vendor || 'New vendor',
    type: type || 'General',
    amount: Number(amount) || 0,
    date: date || new Date().toLocaleDateString('de-DE'),
    supplierCustomerId: supplierCustomerId || null
  };
}
