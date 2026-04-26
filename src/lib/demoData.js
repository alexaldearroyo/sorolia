export const workspace = {
  company: 'Voltstack Europe GmbH',
  tagline: 'Lia · Finance workspace',
  short: 'Voltstack',
  env: 'Demo'
};

/** Catálogo maestro — facturas, proyectos y parte del gasto apuntan aquí. */
export const customersSeed = [
  { id: 'cust-1', name: 'Klärmann Stahlhandel GmbH', country: 'DE', segment: 'Industrial', health: 'At risk' },
  { id: 'cust-2', name: 'BioWerk Bayern AG', country: 'DE', segment: 'Food', health: 'Good' },
  { id: 'cust-3', name: 'Nordlicht Datacenter UG', country: 'DE', segment: 'Infra', health: 'Good' },
  { id: 'cust-4', name: 'Studio Merz & Kollegen', country: 'DE', segment: 'Services', health: 'Good' },
  { id: 'cust-5', name: 'Velvet Labs SAS (Paris)', country: 'FR', segment: 'Software', health: 'Watch' },
  { id: 'cust-6', name: 'Kaiser Fertigung GmbH', country: 'DE', segment: 'Industrial', health: 'Good' },
  { id: 'cust-7', name: 'Bergbau Süd Logistik', country: 'DE', segment: 'Logistics', health: 'Good' },
  { id: 'cust-8', name: 'Siemensstadt Office Park GmbH', country: 'DE', segment: 'Real estate', health: 'Good' }
];

export const invoicesSeed = [
  { id: 'INV-2026-0148', customerId: 'cust-1', created: '28/03/2026', due: '12/04/2026', status: 'Overdue', amount: 18940 },
  { id: 'INV-2026-0156', customerId: 'cust-2', created: '02/04/2026', due: '16/04/2026', status: 'Open', amount: 6240 },
  { id: 'INV-2026-0152', customerId: 'cust-3', created: '01/04/2026', due: '15/04/2026', status: 'Paid', amount: 28400 },
  { id: 'INV-2026-0159', customerId: 'cust-4', created: '04/04/2026', due: '18/04/2026', status: 'Paid', amount: 3840 },
  { id: 'INV-2026-0161', customerId: 'cust-5', created: '05/04/2026', due: '19/04/2026', status: 'Offer', amount: 12750 },
  { id: 'INV-2026-0164', customerId: 'cust-6', created: '08/04/2026', due: '22/04/2026', status: 'Open', amount: 9560 },
  { id: 'INV-2026-0166', customerId: 'cust-7', created: '09/04/2026', due: '23/04/2026', status: 'Open', amount: 4180 }
];

export const expenseItemsSeed = [
  {
    id: 'exp-1',
    vendor: 'Siemensstadt Office Park · Miete',
    type: 'Fixed',
    amount: 8900,
    date: '01/04/2026',
    supplierCustomerId: 'cust-8'
  },
  {
    id: 'exp-2',
    vendor: 'Atlassian Cloud (Jira + Confluence)',
    type: 'Software',
    amount: 612,
    date: '03/04/2026',
    supplierCustomerId: null
  },
  {
    id: 'exp-3',
    vendor: 'Deutsche Bahn · München Kundenreise',
    type: 'Travel',
    amount: 284,
    date: '05/04/2026',
    supplierCustomerId: null
  },
  {
    id: 'exp-4',
    vendor: 'Hetzner Cloud · prod-eu-3',
    type: 'Infrastructure',
    amount: 1042,
    date: '08/04/2026',
    supplierCustomerId: null
  },
  {
    id: 'exp-5',
    vendor: 'Kanzlei Brinkmann · Retainer Q2',
    type: 'Legal',
    amount: 2400,
    date: '10/04/2026',
    supplierCustomerId: null
  }
];

/** Stock enlazado a proveedor (cliente del catálogo). */
export const inventorySeed = [
  { id: 'sku-1', code: 'SWG-2400', name: 'HV switchgear cabinet', qty: 12, reorder: 8, supplierCustomerId: 'cust-1' },
  { id: 'sku-2', code: 'PLC-X1', name: 'Safety PLC module', qty: 4, reorder: 10, supplierCustomerId: 'cust-6' },
  { id: 'sku-3', code: 'RCK-42U', name: '42U cold-aisle rack kit', qty: 22, reorder: 6, supplierCustomerId: 'cust-3' },
  { id: 'sku-4', code: 'LIC-ERP', name: 'ERP connector seats (annual)', qty: 150, reorder: 40, supplierCustomerId: 'cust-5' }
];

export const projectsSeed = [
  {
    id: 'pr-1',
    name: 'Nordlicht rack refresh',
    customerId: 'cust-3',
    status: 'Active',
    budget: 92000,
    owner: 'Leni Vogt'
  },
  {
    id: 'pr-2',
    name: 'Merz studio retainer',
    customerId: 'cust-4',
    status: 'Active',
    budget: 24000,
    owner: 'Jonas Brandt'
  },
  {
    id: 'pr-3',
    name: 'Kaiser line automation',
    customerId: 'cust-6',
    status: 'Planning',
    budget: 180000,
    owner: 'Mira Scholz'
  },
  {
    id: 'pr-4',
    name: 'Velvet Labs integration',
    customerId: 'cust-5',
    status: 'On hold',
    budget: 45000,
    owner: 'Elena Rossi'
  }
];

export const employeesSeed = [
  { id: 'emp-1', name: 'Leni Vogt', role: 'Project lead', department: 'Delivery', projectId: 'pr-1' },
  { id: 'emp-2', name: 'Jonas Brandt', role: 'Account manager', department: 'Sales', projectId: 'pr-2' },
  { id: 'emp-3', name: 'Mira Scholz', role: 'Solutions engineer', department: 'Delivery', projectId: 'pr-3' },
  { id: 'emp-4', name: 'Elena Rossi', role: 'Integration specialist', department: 'Delivery', projectId: 'pr-4' },
  { id: 'emp-5', name: 'Noah Adebayo', role: 'Controller', department: 'Finance', projectId: null }
];

/** Stacked bar chart: relative scale 0–100 per series (cash rhythm, not literal €). */
export const cashMonthly = [
  { label: 'Nov', expenses: 31, income: 54, pending: 12 },
  { label: 'Dec', expenses: 38, income: 48, pending: 22 },
  { label: 'Jan', expenses: 29, income: 56, pending: 15 },
  { label: 'Feb', expenses: 34, income: 61, pending: 18 },
  { label: 'Mar', expenses: 30, income: 58, pending: 14 },
  { label: 'Apr', expenses: 37, income: 71, pending: 24 }
];

export const cashWeekly = [
  { label: '31 Mar–6 Apr', expenses: 52, income: 68, pending: 28 },
  { label: '7–13 Apr', expenses: 44, income: 74, pending: 21 },
  { label: '14–20 Apr', expenses: 61, income: 62, pending: 35 },
  { label: '21–27 Apr', expenses: 48, income: 81, pending: 19 }
];

export const kanbanColumns = ['Offer', 'Open', 'Paid', 'Overdue'];
