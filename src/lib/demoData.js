export const workspace = {
  company: 'Voltstack Europe GmbH',
  tagline: 'Lia · Finance workspace',
  short: 'Voltstack',
  env: 'Demo'
};

export const invoiceRows = [
  { id: 'INV-2026-0148', created: '28/03/2026', due: '12/04/2026', customer: 'Klärmann Stahlhandel GmbH', status: 'Overdue', amount: 18940 },
  { id: 'INV-2026-0156', created: '02/04/2026', due: '16/04/2026', customer: 'BioWerk Bayern AG', status: 'Open', amount: 6240 },
  { id: 'INV-2026-0152', created: '01/04/2026', due: '15/04/2026', customer: 'Nordlicht Datacenter UG', status: 'Paid', amount: 28400 },
  { id: 'INV-2026-0159', created: '04/04/2026', due: '18/04/2026', customer: 'Studio Merz & Kollegen', status: 'Paid', amount: 3840 },
  { id: 'INV-2026-0161', created: '05/04/2026', due: '19/04/2026', customer: 'Velvet Labs SAS (Paris)', status: 'Offer', amount: 12750 },
  { id: 'INV-2026-0164', created: '08/04/2026', due: '22/04/2026', customer: 'Kaiser Fertigung GmbH', status: 'Open', amount: 9560 },
  { id: 'INV-2026-0166', created: '09/04/2026', due: '23/04/2026', customer: 'Bergbau Süd Logistik', status: 'Open', amount: 4180 }
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

export const expenseItems = [
  { vendor: 'Siemensstadt Office Park · Miete', type: 'Fixed', amount: 8900, date: '01/04/2026' },
  { vendor: 'Atlassian Cloud (Jira + Confluence)', type: 'Software', amount: 612, date: '03/04/2026' },
  { vendor: 'Deutsche Bahn · München Kundenreise', type: 'Travel', amount: 284, date: '05/04/2026' },
  { vendor: 'Hetzner Cloud · prod-eu-3', type: 'Infrastructure', amount: 1042, date: '08/04/2026' },
  { vendor: 'Kanzlei Brinkmann · Retainer Q2', type: 'Legal', amount: 2400, date: '10/04/2026' }
];

export const kanbanColumns = ['Offer', 'Open', 'Paid', 'Overdue'];
