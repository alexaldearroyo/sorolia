/**
 * Capability-based permissions. Pages query `can(role, 'capability.action')`
 * instead of checking role IDs directly so we can ship granular changes
 * without rewriting the UI.
 */

const MATRIX = {
  owner: new Set([
    'invoices.read',
    'invoices.write',
    'invoices.delete',
    'invoices.cancel',
    'expenses.read',
    'expenses.write',
    'expenses.delete',
    'customers.read',
    'customers.write',
    'customers.delete',
    'inventory.read',
    'inventory.adjust',
    'inventory.write',
    'inventory.delete',
    'projects.read',
    'projects.write',
    'hr.read',
    'calendar.read',
    'workspace.export',
    'workspace.reset',
    'workspace.import',
    'settings.read',
    'settings.write',
    'team.read',
    'team.manage',
    'audit.read',
    'audit.export',
    'billing.manage',
    'notifications.read'
  ]),
  admin: new Set([
    'invoices.read',
    'invoices.write',
    'invoices.delete',
    'invoices.cancel',
    'expenses.read',
    'expenses.write',
    'expenses.delete',
    'customers.read',
    'customers.write',
    'customers.delete',
    'inventory.read',
    'inventory.adjust',
    'inventory.write',
    'inventory.delete',
    'projects.read',
    'projects.write',
    'hr.read',
    'calendar.read',
    'workspace.export',
    'team.read',
    'audit.read',
    'notifications.read'
  ]),
  user: new Set([
    'invoices.read',
    'expenses.read',
    'expenses.write',
    'customers.read',
    'inventory.read',
    'projects.read',
    'calendar.read',
    'notifications.read'
  ])
};

/**
 * @param {string | null | undefined} role
 * @param {string} capability
 */
export function can(role, capability) {
  if (!role) return false;
  const set = MATRIX[role];
  if (!set) return false;
  return set.has(capability);
}

/**
 * Returns a plain object describing which capabilities the role has,
 * useful for table rendering on the Team page.
 * @param {string} role
 */
export function listCapabilities(role) {
  const set = MATRIX[role] ?? new Set();
  return Array.from(set.values()).sort();
}

/** Sidebar items some roles never see. */
export const HIDDEN_PAGES_BY_ROLE = {
  user: new Set(['hr', 'team', 'audit', 'settings'])
};

export function isPageVisible(role, pageId) {
  const hidden = HIDDEN_PAGES_BY_ROLE[role];
  return !hidden || !hidden.has(pageId);
}

/** Friendly label for the role badge. */
export function roleLabel(role) {
  switch (role) {
    case 'owner':
      return 'Owner';
    case 'admin':
      return 'Admin';
    case 'user':
      return 'User';
    default:
      return 'Guest';
  }
}

export function roleBadgeClass(role) {
  switch (role) {
    case 'owner':
      return 'border-violet-300 bg-violet-100 text-violet-900';
    case 'admin':
      return 'border-sky-300 bg-sky-100 text-sky-900';
    case 'user':
      return 'border-emerald-300 bg-emerald-100 text-emerald-900';
    default:
      return 'border-zinc-300 bg-zinc-100 text-zinc-700';
  }
}
