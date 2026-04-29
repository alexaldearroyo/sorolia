import { customerName } from './workspaceActions.js';
import { daysUntilDue } from './format.js';

/**
 * Builds a fresh list of derived notifications from the current workspace state.
 * The list is intentionally pure: callers track read/unread elsewhere.
 *
 * @param {{ invoices: any[], inventory: any[], projects: any[], customers: any[] }} input
 */
export function deriveNotifications({ invoices, inventory, projects, customers }) {
  const out = [];
  const now = new Date();

  for (const inv of invoices) {
    if (inv.status === 'Overdue') {
      const days = daysUntilDue(inv.due, now);
      const lateDays = days != null ? Math.abs(Math.min(0, days)) : null;
      out.push({
        id: `inv-overdue-${inv.id}`,
        kind: 'invoice-overdue',
        severity: 'high',
        title: `${inv.id} is overdue`,
        body:
          lateDays != null
            ? `${customerName(customers, inv.customerId)} · ${lateDays}d past due`
            : `${customerName(customers, inv.customerId)} · past due`,
        link: { page: 'invoices', editInvoiceId: inv.id }
      });
    } else if (inv.status === 'Open') {
      const days = daysUntilDue(inv.due, now);
      if (days != null && days >= 0 && days <= 3) {
        out.push({
          id: `inv-due-${inv.id}`,
          kind: 'invoice-due-soon',
          severity: 'medium',
          title: `${inv.id} due ${days === 0 ? 'today' : days === 1 ? 'tomorrow' : `in ${days}d`}`,
          body: customerName(customers, inv.customerId),
          link: { page: 'invoices', editInvoiceId: inv.id }
        });
      }
    }
  }

  for (const sku of inventory) {
    if (sku.qty <= 0) {
      out.push({
        id: `sku-out-${sku.id}`,
        kind: 'inventory-out',
        severity: 'high',
        title: `${sku.code} out of stock`,
        body: `${sku.name} · supplier ${customerName(customers, sku.supplierCustomerId)}`,
        link: { page: 'inventory', supplierCustomerId: sku.supplierCustomerId }
      });
    } else if (sku.qty <= sku.reorder) {
      out.push({
        id: `sku-low-${sku.id}`,
        kind: 'inventory-low',
        severity: 'medium',
        title: `${sku.code} below reorder`,
        body: `${sku.name} · ${sku.qty}/${sku.reorder} on hand`,
        link: { page: 'inventory', supplierCustomerId: sku.supplierCustomerId }
      });
    }
  }

  for (const project of projects) {
    if (!project.nextReview) continue;
    const days = daysUntilDue(project.nextReview, now);
    if (days != null && days >= 0 && days <= 7) {
      out.push({
        id: `proj-review-${project.id}`,
        kind: 'project-review',
        severity: days <= 1 ? 'medium' : 'low',
        title: `${project.name} review`,
        body: days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `In ${days}d · ${project.owner}`,
        link: { page: 'projects', customerId: project.customerId }
      });
    }
  }

  for (const customer of customers) {
    if (customer.health === 'At risk') {
      out.push({
        id: `cust-risk-${customer.id}`,
        kind: 'customer-risk',
        severity: 'low',
        title: `${customer.name} flagged at risk`,
        body: `Segment ${customer.segment} · ${customer.country}`,
        link: { page: 'customers', customerId: customer.id }
      });
    }
  }

  const severityRank = { high: 0, medium: 1, low: 2 };
  out.sort((a, b) => severityRank[a.severity] - severityRank[b.severity]);
  return out;
}
