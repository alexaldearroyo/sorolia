export const workspace = {
  company: 'Voltstack Europe GmbH',
  tagline: 'Emi · Finance workspace',
  short: 'Voltstack',
  env: 'Demo'
};

export const companySeed = {
  legalName: 'Voltstack Europe GmbH',
  tradeName: 'Voltstack',
  street: 'Spreestraße 12',
  city: 'Berlin',
  postalCode: '10178',
  country: 'DE',
  vatId: 'DE314159265',
  iban: 'DE89 3704 0044 0532 0130 00',
  bic: 'COBADEFFXXX',
  registry: 'HRB 184220 B (Berlin-Charlottenburg)',
  phone: '+49 30 5557 1200',
  email: 'finance@voltstack.eu',
  website: 'https://voltstack.eu'
};

export const companySettingsSeed = {
  fiscalYearStart: '01-01',
  defaultVat: 19,
  vatRates: [0, 7, 19],
  defaultTaxKey: '3',
  paymentTermsDays: 14,
  lowCapitalThreshold: 10000,
  invoicePrefix: 'INV-2026',
  invoiceNextNumber: 167,
  expensePrefix: 'EXP-2026',
  expenseNextNumber: 6,
  currency: 'EUR',
  locale: 'de-DE',
  weekStart: 'Mon'
};

/** Cosmetic FX table — used to render `currency()` for invoices in non-EUR currencies. */
export const fxRatesSeed = {
  base: 'EUR',
  rates: { EUR: 1, USD: 1.08, GBP: 0.86, CHF: 0.96 }
};

export const usersSeed = [
  {
    id: 'u-1',
    name: 'Mate Owner',
    email: 'mate@voltstack.eu',
    role: 'owner',
    initials: 'MO',
    color: '#7c3aed'
  },
  {
    id: 'u-2',
    name: 'Lena Admin',
    email: 'lena@voltstack.eu',
    role: 'admin',
    initials: 'LA',
    color: '#0ea5e9'
  },
  {
    id: 'u-3',
    name: 'Hugo User',
    email: 'hugo@voltstack.eu',
    role: 'user',
    initials: 'HU',
    color: '#10b981'
  }
];

export const rolesSeed = [
  {
    id: 'owner',
    label: 'Owner',
    rank: 3,
    description: 'Full control · billing, settings, users, deletes and resets.'
  },
  {
    id: 'admin',
    label: 'Admin',
    rank: 2,
    description: 'Run the workspace · create, edit, delete records and export.'
  },
  {
    id: 'user',
    label: 'User',
    rank: 1,
    description: 'Read-only on most modules · can post own expenses.'
  }
];

/**
 * Customers carry billing details, multiple contacts and a preferred currency
 * so invoices can default sensibly and the preview looks like the real thing.
 */
export const customersSeed = [
  {
    id: 'cust-1',
    name: 'Klärmann Stahlhandel GmbH',
    country: 'DE',
    segment: 'Industrial',
    kind: 'both',
    health: 'At risk',
    email: 'ap@klaerstahl.de',
    phone: '+49 234 5567 100',
    vatId: 'DE258994001',
    address: 'Industriestraße 14, 44793 Bochum',
    paymentTermsDays: 30,
    currency: 'EUR',
    notes: 'Slow payer · escalate via Mira before dunning.',
    contacts: [
      { id: 'c1', role: 'Billing', name: 'Heike Bauer', email: 'h.bauer@klaerstahl.de', phone: '+49 234 5567 101' },
      { id: 'c2', role: 'Procurement', name: 'Tomas Klärmann', email: 't.klaer@klaerstahl.de', phone: '+49 234 5567 110' }
    ]
  },
  {
    id: 'cust-2',
    name: 'BioWerk Bayern AG',
    country: 'DE',
    segment: 'Food',
    health: 'Good',
    email: 'finanz@biowerk.bayern',
    phone: '+49 89 4458 220',
    vatId: 'DE301552000',
    address: 'Lindenallee 4, 80339 München',
    paymentTermsDays: 14,
    currency: 'EUR',
    notes: 'Pays early · prefers PDF invoices via secure portal.',
    contacts: [
      { id: 'c1', role: 'Billing', name: 'Andrea Linsen', email: 'a.linsen@biowerk.bayern', phone: '+49 89 4458 221' }
    ]
  },
  {
    id: 'cust-3',
    name: 'Nordlicht Datacenter UG',
    country: 'DE',
    segment: 'Infra',
    kind: 'both',
    health: 'Good',
    email: 'billing@nordlicht-dc.de',
    phone: '+49 40 5512 8800',
    vatId: 'DE294001220',
    address: 'Kaitorpromenade 9, 22769 Hamburg',
    paymentTermsDays: 21,
    currency: 'EUR',
    notes: 'Active project · bi-weekly check with Leni.',
    contacts: [
      { id: 'c1', role: 'Billing', name: 'Pia Hansen', email: 'p.hansen@nordlicht-dc.de', phone: '+49 40 5512 8801' },
      { id: 'c2', role: 'Tech', name: 'Sönke Lammers', email: 's.lammers@nordlicht-dc.de', phone: '+49 40 5512 8810' }
    ]
  },
  {
    id: 'cust-4',
    name: 'Studio Merz & Kollegen',
    country: 'DE',
    segment: 'Services',
    health: 'Good',
    email: 'office@merz-kollegen.de',
    phone: '+49 711 4477 990',
    vatId: 'DE271449908',
    address: 'Königstraße 27, 70173 Stuttgart',
    paymentTermsDays: 14,
    currency: 'EUR',
    notes: 'Small retainer · steady relationship.',
    contacts: [{ id: 'c1', role: 'Billing', name: 'Anke Merz', email: 'a.merz@merz-kollegen.de', phone: '+49 711 4477 991' }]
  },
  {
    id: 'cust-5',
    name: 'Velvet Labs SAS (Paris)',
    country: 'FR',
    segment: 'Software',
    kind: 'both',
    health: 'Watch',
    email: 'compta@velvet-labs.fr',
    phone: '+33 1 5532 9900',
    vatId: 'FR67901223455',
    address: '48 Rue Saint-Antoine, 75004 Paris',
    paymentTermsDays: 30,
    currency: 'EUR',
    notes: 'Integration on hold · waiting on legal review.',
    contacts: [
      { id: 'c1', role: 'Billing', name: 'Camille Rouvier', email: 'c.rouvier@velvet-labs.fr', phone: '+33 1 5532 9901' },
      { id: 'c2', role: 'Legal', name: 'Nicolas Faure', email: 'n.faure@velvet-labs.fr', phone: '+33 1 5532 9905' }
    ]
  },
  {
    id: 'cust-6',
    name: 'Kaiser Fertigung GmbH',
    country: 'DE',
    segment: 'Industrial',
    kind: 'supplier',
    health: 'Good',
    email: 'ap@kaiser-fertigung.de',
    phone: '+49 7141 220 7700',
    vatId: 'DE188003344',
    address: 'Werkstraße 1, 71636 Ludwigsburg',
    paymentTermsDays: 30,
    currency: 'EUR',
    notes: 'Planning new automation line.',
    contacts: [{ id: 'c1', role: 'Procurement', name: 'Friedrich Kaiser', email: 'f.kaiser@kaiser-fertigung.de', phone: '+49 7141 220 7701' }]
  },
  {
    id: 'cust-7',
    name: 'Bergbau Süd Logistik',
    country: 'DE',
    segment: 'Logistics',
    health: 'Good',
    email: 'invoices@bergbau-sued.de',
    phone: '+49 851 90100',
    vatId: 'DE204488118',
    address: 'Donaustraße 88, 94032 Passau',
    paymentTermsDays: 14,
    currency: 'EUR',
    notes: 'Quarterly contract · stable.',
    contacts: [{ id: 'c1', role: 'Billing', name: 'Greta Walther', email: 'g.walther@bergbau-sued.de' }]
  },
  {
    id: 'cust-8',
    name: 'Siemensstadt Office Park GmbH',
    country: 'DE',
    segment: 'Real estate',
    kind: 'supplier',
    health: 'Good',
    email: 'service@siemensstadt-park.de',
    phone: '+49 30 4006 5520',
    vatId: 'DE150022007',
    address: 'Rohrdamm 60, 13629 Berlin',
    paymentTermsDays: 7,
    currency: 'EUR',
    notes: 'Landlord · monthly rent direct debit.',
    contacts: [{ id: 'c1', role: 'Property manager', name: 'Erik Vollmer', email: 'e.vollmer@siemensstadt-park.de' }]
  }
];

/**
 * Each invoice carries:
 * - lines (with qty/unitPrice/vatRate)
 * - notes (free text · usually a PO ref)
 * - poRef (optional explicit purchase order)
 * - currency (defaults to EUR)
 * - amountPaid (for partial payments)
 * - dunning timeline (issued / reminder steps)
 * - sourceTemplate (when created from a recurring template)
 */
export const invoicesSeed = [
  {
    id: 'INV-2026-0148',
    customerId: 'cust-1',
    created: '28/03/2026',
    due: '12/04/2026',
    status: 'Overdue',
    amount: 18940,
    amountPaid: 0,
    currency: 'EUR',
    poRef: 'PO-KS-2026-014',
    notes: 'Rate card Q1 2026 · PO KS-014.',
    items: [
      { description: 'HV switchgear cabinet (SWG-2400)', qty: 4, unitPrice: 3650, vatRate: 19 },
      { description: 'On-site commissioning · 12h', qty: 12, unitPrice: 110, vatRate: 19 }
    ],
    dunning: [
      { kind: 'issued', at: '28/03/2026', note: 'Sent via portal' },
      { kind: 'reminder', at: '13/04/2026', note: 'Reminder 1 · friendly' },
      { kind: 'reminder', at: '20/04/2026', note: 'Reminder 2 · payment plan offered' }
    ]
  },
  {
    id: 'INV-2026-0156',
    customerId: 'cust-2',
    created: '02/04/2026',
    due: '16/04/2026',
    status: 'Open',
    amount: 6240,
    amountPaid: 0,
    currency: 'EUR',
    poRef: 'PO-BWB-25Q2',
    notes: 'Monthly retainer · April · PO BWB-25Q2.',
    items: [
      { description: 'Compliance retainer (April)', qty: 1, unitPrice: 4800, vatRate: 19 },
      { description: 'Cold-chain audit hours', qty: 8, unitPrice: 130, vatRate: 19 }
    ],
    dunning: [{ kind: 'issued', at: '02/04/2026', note: 'Sent via portal' }],
    sourceTemplate: 'tpl-1'
  },
  {
    id: 'INV-2026-0152',
    customerId: 'cust-3',
    created: '01/04/2026',
    due: '15/04/2026',
    status: 'Paid',
    amount: 28400,
    amountPaid: 28400,
    currency: 'EUR',
    poRef: 'PO-NLDC-2026-009',
    notes: 'Rack refresh milestone 1.',
    items: [
      { description: '42U cold-aisle rack kit (RCK-42U)', qty: 6, unitPrice: 3200, vatRate: 19 },
      { description: 'Logistics + install', qty: 1, unitPrice: 7200, vatRate: 19 }
    ],
    dunning: [
      { kind: 'issued', at: '01/04/2026', note: 'Sent via portal' },
      { kind: 'paid', at: '11/04/2026', note: 'SEPA · ref TX-9928' }
    ]
  },
  {
    id: 'INV-2026-0159',
    customerId: 'cust-4',
    created: '04/04/2026',
    due: '18/04/2026',
    status: 'Paid',
    amount: 3840,
    amountPaid: 3840,
    currency: 'EUR',
    poRef: '',
    notes: 'Quarterly retainer · Q2.',
    items: [{ description: 'Architecture retainer · Q2', qty: 1, unitPrice: 3840, vatRate: 19 }],
    dunning: [
      { kind: 'issued', at: '04/04/2026', note: 'Sent by email' },
      { kind: 'paid', at: '11/04/2026', note: 'Wire · ref M-Q2' }
    ],
    sourceTemplate: 'tpl-2'
  },
  {
    id: 'INV-2026-0161',
    customerId: 'cust-5',
    created: '05/04/2026',
    due: '19/04/2026',
    status: 'Offer',
    amount: 12750,
    amountPaid: 0,
    currency: 'EUR',
    poRef: '',
    notes: 'Integration scoping offer · pending legal sign-off.',
    items: [
      { description: 'Integration scoping · 60h block', qty: 60, unitPrice: 180, vatRate: 19 },
      { description: 'Architecture review (fixed)', qty: 1, unitPrice: 1850, vatRate: 19 }
    ],
    dunning: [{ kind: 'issued', at: '05/04/2026', note: 'Quote shared · awaiting acceptance' }]
  },
  {
    id: 'INV-2026-0164',
    customerId: 'cust-6',
    created: '08/04/2026',
    due: '22/04/2026',
    status: 'Partially paid',
    amount: 9560,
    amountPaid: 4500,
    currency: 'EUR',
    poRef: 'PO-KAI-26-031',
    notes: 'Discovery phase · 50% upfront, balance on delivery.',
    items: [{ description: 'Automation discovery (lump-sum)', qty: 1, unitPrice: 9560, vatRate: 19 }],
    dunning: [
      { kind: 'issued', at: '08/04/2026', note: 'Sent via portal' },
      { kind: 'partial', at: '11/04/2026', note: 'Partial payment 4 500 € received' }
    ]
  },
  {
    id: 'INV-2026-0166',
    customerId: 'cust-7',
    created: '09/04/2026',
    due: '23/04/2026',
    status: 'Open',
    amount: 4180,
    amountPaid: 0,
    currency: 'EUR',
    poRef: 'PO-BSL-Q2',
    notes: 'Quarterly compliance · PO BSL-Q2.',
    items: [
      { description: 'GxP audit support · day rate', qty: 4, unitPrice: 950, vatRate: 19 },
      { description: 'Travel reimbursement (flat)', qty: 1, unitPrice: 380, vatRate: 0 }
    ],
    dunning: [{ kind: 'issued', at: '09/04/2026', note: 'Sent by email' }]
  },
  {
    id: 'INV-2026-0140',
    customerId: 'cust-3',
    created: '14/02/2026',
    due: '28/02/2026',
    status: 'Paid',
    amount: 16650,
    amountPaid: 16650,
    currency: 'EUR',
    poRef: 'PO-NLDC-2026-005',
    notes: 'Rack refresh kickoff fee.',
    items: [
      { description: 'Rack refresh kickoff', qty: 1, unitPrice: 8000, vatRate: 19 },
      { description: 'Site survey & lift planning', qty: 1, unitPrice: 5990, vatRate: 19 }
    ],
    dunning: [
      { kind: 'issued', at: '14/02/2026', note: 'Sent via portal' },
      { kind: 'paid', at: '24/02/2026', note: 'SEPA · ref TX-9111' }
    ]
  },
  {
    id: 'INV-2026-0143',
    customerId: 'cust-2',
    created: '02/03/2026',
    due: '16/03/2026',
    status: 'Paid',
    amount: 6240,
    amountPaid: 6240,
    currency: 'EUR',
    poRef: 'PO-BWB-25Q1',
    notes: 'Monthly retainer · March.',
    items: [
      { description: 'Compliance retainer (March)', qty: 1, unitPrice: 4800, vatRate: 19 },
      { description: 'Cold-chain audit hours', qty: 8, unitPrice: 130, vatRate: 19 }
    ],
    dunning: [
      { kind: 'issued', at: '02/03/2026', note: 'Sent via portal' },
      { kind: 'paid', at: '12/03/2026', note: 'SEPA · ref TX-8810' }
    ],
    sourceTemplate: 'tpl-1'
  },
  {
    id: 'INV-2026-0167',
    customerId: 'cust-5',
    created: '12/04/2026',
    due: '12/05/2026',
    status: 'Open',
    amount: 4860,
    amountPaid: 0,
    currency: 'USD',
    poRef: '',
    notes: 'Architecture day · billed in USD.',
    items: [{ description: 'Senior architect · 18h block', qty: 18, unitPrice: 270, vatRate: 0 }],
    dunning: [{ kind: 'issued', at: '12/04/2026', note: 'Sent by email' }]
  }
];

/** Recurring invoice templates rendered on the Invoices page Monthly section. */
export const invoiceTemplatesSeed = [
  {
    id: 'tpl-1',
    name: 'BioWerk · Compliance retainer',
    customerId: 'cust-2',
    cadence: 'monthly',
    nextRunDe: '02/05/2026',
    poRef: 'PO-BWB-25Q2',
    notes: 'Auto-generated monthly retainer.',
    items: [
      { description: 'Compliance retainer ({{month}})', qty: 1, unitPrice: 4800, vatRate: 19 },
      { description: 'Cold-chain audit hours', qty: 8, unitPrice: 130, vatRate: 19 }
    ]
  },
  {
    id: 'tpl-2',
    name: 'Studio Merz · Architecture retainer',
    customerId: 'cust-4',
    cadence: 'quarterly',
    nextRunDe: '04/07/2026',
    poRef: '',
    notes: 'Architecture retainer · quarterly.',
    items: [{ description: 'Architecture retainer · Q3', qty: 1, unitPrice: 3840, vatRate: 19 }]
  }
];

export const expenseItemsSeed = [
  {
    id: 'exp-1',
    vendor: 'Siemensstadt Office Park · Miete',
    type: 'Fixed',
    amount: 8900,
    date: '01/04/2026',
    supplierCustomerId: 'cust-8',
    submittedById: 'u-1'
  },
  {
    id: 'exp-2',
    vendor: 'Atlassian Cloud (Jira + Confluence)',
    type: 'Software',
    amount: 612,
    date: '03/04/2026',
    supplierCustomerId: null,
    submittedById: 'u-2'
  },
  {
    id: 'exp-3',
    vendor: 'Deutsche Bahn · München Kundenreise',
    type: 'Travel',
    amount: 284,
    date: '05/04/2026',
    supplierCustomerId: null,
    submittedById: 'u-3'
  },
  {
    id: 'exp-4',
    vendor: 'Hetzner Cloud · prod-eu-3',
    type: 'Infrastructure',
    amount: 1042,
    date: '08/04/2026',
    supplierCustomerId: null,
    submittedById: 'u-2'
  },
  {
    id: 'exp-5',
    vendor: 'Kanzlei Brinkmann · Retainer Q2',
    type: 'Legal',
    amount: 2400,
    date: '10/04/2026',
    supplierCustomerId: null,
    submittedById: 'u-1'
  }
];

export const inventorySeed = [
  { id: 'sku-1', code: 'SWG-2400', name: 'HV switchgear cabinet', qty: 12, reorder: 8, supplierCustomerId: 'cust-1' },
  { id: 'sku-2', code: 'PLC-X1', name: 'Safety PLC module', qty: 4, reorder: 10, supplierCustomerId: 'cust-6' },
  { id: 'sku-3', code: 'RCK-42U', name: '42U cold-aisle rack kit', qty: 22, reorder: 6, supplierCustomerId: 'cust-3' },
  { id: 'sku-4', code: 'LIC-ERP', name: 'ERP connector seats (annual)', qty: 150, reorder: 40, supplierCustomerId: 'cust-5' }
];

/** Projects also carry start/end dates so we can paint a timeline. */
export const projectsSeed = [
  {
    id: 'pr-1',
    name: 'Nordlicht rack refresh',
    customerId: 'cust-3',
    status: 'Active',
    budget: 92000,
    owner: 'Leni Vogt',
    nextReview: '18/04/2026',
    startDate: '15/02/2026',
    endDate: '30/06/2026'
  },
  {
    id: 'pr-2',
    name: 'Merz studio retainer',
    customerId: 'cust-4',
    status: 'Active',
    budget: 24000,
    owner: 'Jonas Brandt',
    nextReview: '22/04/2026',
    startDate: '01/01/2026',
    endDate: '31/12/2026'
  },
  {
    id: 'pr-3',
    name: 'Kaiser line automation',
    customerId: 'cust-6',
    status: 'Planning',
    budget: 180000,
    owner: 'Mira Scholz',
    nextReview: '28/04/2026',
    startDate: '01/05/2026',
    endDate: '31/10/2026'
  },
  {
    id: 'pr-4',
    name: 'Velvet Labs integration',
    customerId: 'cust-5',
    status: 'On hold',
    budget: 45000,
    owner: 'Elena Rossi',
    nextReview: '05/05/2026',
    startDate: '01/03/2026',
    endDate: '15/09/2026'
  }
];

export const employeesSeed = [
  { id: 'emp-1', name: 'Leni Vogt', role: 'Project lead', department: 'Delivery', projectId: 'pr-1' },
  { id: 'emp-2', name: 'Jonas Brandt', role: 'Account manager', department: 'Sales', projectId: 'pr-2' },
  { id: 'emp-3', name: 'Mira Scholz', role: 'Solutions engineer', department: 'Delivery', projectId: 'pr-3' },
  { id: 'emp-4', name: 'Elena Rossi', role: 'Integration specialist', department: 'Delivery', projectId: 'pr-4' },
  { id: 'emp-5', name: 'Noah Adebayo', role: 'Controller', department: 'Finance', projectId: null }
];

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

export const cashQuarterly = [
  { label: 'Q1', expenses: 33, income: 58, pending: 18 },
  { label: 'Q2', expenses: 36, income: 64, pending: 22 },
  { label: 'Q3', expenses: 31, income: 59, pending: 16 },
  { label: 'Q4', expenses: 39, income: 67, pending: 26 }
];

export const kanbanColumns = ['Offer', 'Open', 'Partially paid', 'Paid', 'Overdue'];
