<script>
  import {
    workspace,
    cashMonthly,
    cashWeekly,
    cashQuarterly,
    kanbanColumns,
    customersSeed,
    invoicesSeed,
    invoiceTemplatesSeed,
    expenseItemsSeed,
    inventorySeed,
    projectsSeed,
    employeesSeed,
    usersSeed,
    rolesSeed,
    companySeed,
    companySettingsSeed
  } from './lib/demoData.js';
  import {
    collectWorkspaceEvents,
    countEventsBetween,
    isoKeyFromDate
  } from './lib/calendarUtils.js';
  import { menu } from './lib/navigation.js';
  import { currency } from './lib/format.js';
  import { SIDEBAR_COLLAPSED_KEY, loadSidebarCollapsed } from './lib/sidebarStorage.js';
  import { loadPref, savePref } from './lib/prefs.js';
  import {
    enrichInvoices,
    customerName,
    buildNewInvoice,
    applyInvoicePatch,
    createExpenseRow,
    buildWorkspaceExportSnapshot,
    buildExpensesCsvRows,
    buildInvoicesCsvRows,
    buildCustomersCsvRows,
    nextCustomerId,
    customerHasReferences,
    bumpInvoiceCounter,
    instantiateTemplate,
    advanceTemplateRun,
    invoiceBalance,
    isInvoicePaid,
    isIssuedInvoice,
    cancelInvoiceWithCreditNote,
    buildInventoryRow,
    issueOfferAsOpen,
    deductInvoiceFromInventory,
    receiveOrderIntoInventory,
    expenseAmount
  } from './lib/workspaceActions.js';
  import { effectiveInvoiceStatus, effectiveCustomerHealth } from './lib/format.js';
  import { can, isPageVisible } from './lib/permissions.js';
  import { logAuditEvent, clearAuditLog, subscribeAuditLog } from './lib/auditLog.js';
  import { deriveNotifications } from './lib/notifications.js';
  import {
    loadPersistFlag,
    savePersistFlag,
    loadWorkspaceState,
    saveWorkspaceState,
    clearWorkspaceState,
    loadDismissedNoti,
    saveDismissedNoti
  } from './lib/persistence.js';
  import { setLocale } from './lib/i18n.js';
  import { pushToast } from './lib/toasts.js';
  import LoginScreen from './lib/components/LoginScreen.svelte';
  import TopBar from './lib/components/TopBar.svelte';
  import AppSidebar from './lib/components/AppSidebar.svelte';
  import WorkspaceChrome from './lib/components/WorkspaceChrome.svelte';
  import ConfirmModal from './lib/components/ConfirmModal.svelte';
  import CommandPalette from './lib/components/CommandPalette.svelte';
  import InvoicePreviewModal from './lib/components/InvoicePreviewModal.svelte';
  import ToastHost from './lib/components/ToastHost.svelte';
  import Plus from 'lucide-svelte/icons/plus';
  import DashboardPage from './lib/pages/DashboardPage.svelte';
  import InvoicesPage from './lib/pages/InvoicesPage.svelte';
  import ExpensesPage from './lib/pages/ExpensesPage.svelte';
  import AccountPage from './lib/pages/AccountPage.svelte';
  import SettingsPage from './lib/pages/SettingsPage.svelte';
  import CustomersPage from './lib/pages/CustomersPage.svelte';
  import CustomerDetailPage from './lib/pages/CustomerDetailPage.svelte';
  import InventoryPage from './lib/pages/InventoryPage.svelte';
  import ProjectsPage from './lib/pages/ProjectsPage.svelte';
  import CalendarPage from './lib/pages/CalendarPage.svelte';
  import HRPage from './lib/pages/HRPage.svelte';
  import TeamPage from './lib/pages/TeamPage.svelte';
  import AuditLogPage from './lib/pages/AuditLogPage.svelte';

  let users = $state(structuredClone(usersSeed));
  const roles = rolesSeed;

  let loggedIn = $state(false);
  /** @type {string | null} */
  let currentUserId = $state(null);
  let currentUser = $derived(users.find((u) => u.id === currentUserId) ?? null);
  let role = $derived(currentUser?.role ?? null);
  let active = $state('home');
  let filter = $state(
    loadPref('filter', 'All', ['All', 'Offer', 'Open', 'Partially paid', 'Paid', 'Overdue', 'Cancelled', 'Credit note'])
  );
  let period = $state(loadPref('period', 'Monthly', ['Monthly', 'Weekly', 'Quarterly']));
  let chartLayout = $state(loadPref('chartLayout', 'stacked', ['stacked', 'grouped']));
  let invoiceView = $state(loadPref('invoiceView', 'list', ['list', 'kanban']));
  let theme = $state(loadPref('theme', 'light', ['light', 'dark']));
  let locale = $state(loadPref('locale', 'en-GB', ['en-GB', 'de-DE', 'es-ES']));
  let sidebarCollapsed = $state(loadSidebarCollapsed());
  let mobileNavOpen = $state(false);
  let paletteOpen = $state(false);
  let persistEnabled = $state(loadPersistFlag());

  let invoiceCustomerFilter = $state(null);
  let invoiceProjectFilter = $state(null);
  let invoiceDateRange = $state({ from: '', to: '' });
  let invoiceSelection = $state(/** @type {string[]} */ ([]));
  let customerDetailId = $state(/** @type {string | null} */ (null));
  /** Bump to scroll the embedded delivery schedule into view on the Projects page. */
  let projectsScheduleScrollNonce = $state(0);
  let inventoryStockFilter = $state(/** @type {'all' | 'low' | 'out'} */ ('all'));
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let invoiceEditor = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let expenseEditor = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let customerEditor = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let inventoryEditor = $state(null);
  let projectCustomerFilter = $state(null);
  let expenseProjectFilter = $state(null);
  let inventoryHighlightSupplierId = $state(null);
  let pendingExpenseEditId = $state(null);
  /** @type {null | any} */
  let invoicePreview = $state(null);
  let dismissedNoti = $state(/** @type {string[]} */ (loadDismissedNoti()));

  /** @type {null | import('./lib/components/ConfirmModal.svelte').ConfirmRequest} */
  let confirmRequest = $state(null);
  function requestConfirm(req) {
    confirmRequest = req;
  }

  let customers = $state(structuredClone(customersSeed));
  let invoices = $state(structuredClone(invoicesSeed));
  let expenseItems = $state(structuredClone(expenseItemsSeed));
  let inventory = $state(structuredClone(inventorySeed));
  let projects = $state(structuredClone(projectsSeed));
  let employees = $state(structuredClone(employeesSeed));
  let company = $state(structuredClone(companySeed));
  let companySettings = $state(structuredClone(companySettingsSeed));
  let invoiceTemplates = $state(structuredClone(invoiceTemplatesSeed));

  /** Audit log subscribed for reactivity. */
  let auditEntries = $state([]);
  $effect(() => subscribeAuditLog((next) => (auditEntries = [...next])));

  /** Load persisted workspace state once on first hydration. */
  let hydrated = $state(false);
  $effect(() => {
    if (hydrated) return;
    if (!persistEnabled) {
      hydrated = true;
      return;
    }
    const snap = loadWorkspaceState();
    if (snap) {
      try {
        if (Array.isArray(snap.customers)) customers = snap.customers;
        if (Array.isArray(snap.invoices)) invoices = snap.invoices;
        if (Array.isArray(snap.expenseItems)) expenseItems = snap.expenseItems;
        if (Array.isArray(snap.inventory)) inventory = snap.inventory;
        if (Array.isArray(snap.projects)) projects = snap.projects;
        if (Array.isArray(snap.employees)) employees = snap.employees;
        if (Array.isArray(snap.users)) users = snap.users;
        if (Array.isArray(snap.invoiceTemplates)) invoiceTemplates = snap.invoiceTemplates;
        if (snap.company) company = snap.company;
        if (snap.companySettings) companySettings = snap.companySettings;
      } catch {
        /* ignore corrupted state */
      }
    }
    hydrated = true;
  });

  /** Save workspace state every time something material changes. */
  $effect(() => {
    if (!hydrated) return;
    if (!persistEnabled) return;
    saveWorkspaceState({
      customers,
      invoices,
      expenseItems,
      inventory,
      projects,
      employees,
      users,
      company,
      companySettings,
      invoiceTemplates
    });
  });

  $effect(() => saveDismissedNoti(dismissedNoti));

  function audit(action, resource, summary, resourceId) {
    if (!currentUser) return;
    logAuditEvent({
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action,
      resource,
      resourceId,
      summary
    });
  }

  let cashBars = $derived.by(() => {
    if (period === 'Weekly') return cashWeekly;
    if (period === 'Quarterly') return cashQuarterly;
    if (period === 'Monthly') return computedMonthlyBars;
    return cashMonthly;
  });

  /** Build monthly bars from the actual invoices + expenses so the chart feels live. */
  let computedMonthlyBars = $derived.by(() => {
    const now = new Date();
    const months = [];
    for (let i = 5; i >= 0; i -= 1) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        key: `${d.getFullYear()}-${d.getMonth()}`,
        label: d.toLocaleDateString('en-GB', { month: 'short' }),
        income: 0,
        expenses: 0,
        pending: 0
      });
    }
    const lookup = new Map(months.map((m) => [m.key, m]));

    function bucketKey(de) {
      const m = /^(\d{1,2})[./](\d{1,2})[./](\d{4})$/.exec(String(de ?? '').trim());
      if (!m) return null;
      return `${m[3]}-${Number(m[2]) - 1}`;
    }

    for (const inv of invoices) {
      const key = bucketKey(inv.created);
      const row = key && lookup.get(key);
      if (!row) continue;
      if (inv.status === 'Paid') row.income += inv.amount;
      else if (inv.status === 'Open' || inv.status === 'Overdue' || inv.status === 'Partially paid') {
        row.pending += invoiceBalance(inv);
        if (inv.amountPaid) row.income += inv.amountPaid;
      }
    }
    for (const exp of expenseItems) {
      const key = bucketKey(exp.date);
      const row = key && lookup.get(key);
      if (!row) continue;
      row.expenses += exp.amount;
    }

    const max = months.reduce((m, r) => Math.max(m, r.income, r.expenses, r.pending), 0) || 1;
    return months.map((r) => ({
      ...r,
      income: Math.round((r.income / max) * 100),
      expenses: Math.round((r.expenses / max) * 100),
      pending: Math.round((r.pending / max) * 100),
      raw: { income: r.income, expenses: r.expenses, pending: r.pending, max }
    }));
  });

  let upcomingFortnight = $derived.by(() => {
    const ev = collectWorkspaceEvents(invoices, expenseItems, projects, customers);
    const now = new Date();
    const end = new Date(now);
    end.setDate(end.getDate() + 14);
    return countEventsBetween(ev, isoKeyFromDate(now), isoKeyFromDate(end));
  });

  /* Invoices enriched with customer name *and* with their effective status
     (so "Open" past-due rows look — and filter — as "Overdue" everywhere). */
  let liveNow = $state(new Date());
  $effect(() => {
    if (typeof window === 'undefined') return;
    /* Re-flip overdues at midnight so the UI doesn't lag a refresh. */
    const tick = () => (liveNow = new Date());
    const handle = window.setInterval(tick, 5 * 60 * 1000);
    return () => window.clearInterval(handle);
  });
  let enrichedInvoices = $derived(
    enrichInvoices(invoices, customers).map((i) => ({
      ...i,
      status: effectiveInvoiceStatus(i, liveNow)
    }))
  );
  /* Customers with auto "At risk" flip applied. */
  let liveCustomers = $derived(
    customers.map((c) => ({ ...c, health: effectiveCustomerHealth(c, invoices, liveNow) }))
  );

  function dateInRange(de) {
    if (!invoiceDateRange.from && !invoiceDateRange.to) return true;
    const m = /^(\d{1,2})[./](\d{1,2})[./](\d{4})$/.exec(String(de ?? '').trim());
    if (!m) return true;
    const iso = `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
    if (invoiceDateRange.from && iso < invoiceDateRange.from) return false;
    if (invoiceDateRange.to && iso > invoiceDateRange.to) return false;
    return true;
  }

  let visibleInvoices = $derived.by(() => {
    let rows = enrichedInvoices;
    if (invoiceCustomerFilter) {
      rows = rows.filter((r) => r.customerId === invoiceCustomerFilter);
    }
    if (invoiceProjectFilter) {
      rows = rows.filter((r) => r.projectId === invoiceProjectFilter);
    }
    if (filter !== 'All') {
      rows = rows.filter((row) => row.status === filter);
    }
    rows = rows.filter((row) => dateInRange(row.created));
    return rows;
  });

  let totals = $derived(
    invoices.reduce(
      (acc, row) => {
        const eff = effectiveInvoiceStatus(row, liveNow);
        if (eff === 'Paid') acc.revenue += row.amount;
        else if (eff === 'Partially paid') {
          acc.revenue += row.amountPaid ?? 0;
          acc.pending += invoiceBalance(row);
        } else if (eff === 'Open' || eff === 'Overdue') {
          acc.pending += row.amount;
          if (eff === 'Overdue') acc.overdue += row.amount;
        }
        return acc;
      },
      { revenue: 0, pending: 0, overdue: 0 }
    )
  );

  let openCount = $derived(
    invoices.filter((r) => effectiveInvoiceStatus(r, liveNow) === 'Open').length
  );
  let overdueCount = $derived(
    invoices.filter((r) => effectiveInvoiceStatus(r, liveNow) === 'Overdue').length
  );
  let invoiceKanbanColumns = $derived(
    overdueCount > 0 ? kanbanColumns : kanbanColumns.filter((c) => c !== 'Overdue')
  );
  $effect(() => {
    if (overdueCount === 0 && filter === 'Overdue') filter = 'All';
  });
  let paidCount = $derived(invoices.filter((r) => isInvoicePaid(r)).length);
  let expenseTotal = $derived(expenseItems.reduce((sum, item) => sum + expenseAmount(item), 0));

  /* Working capital snapshot used by the header alert: paid revenue minus the
     period's expenses. Threshold is configurable in Settings. */
  let capitalAvailable = $derived(totals.revenue - expenseTotal);
  let capitalThreshold = $derived(Number(companySettings.lowCapitalThreshold ?? 10000));
  let capitalAlert = $derived.by(() => {
    if (capitalAvailable >= capitalThreshold) return null;
    const severity = capitalAvailable <= 0 ? 'critical' : 'warning';
    return {
      severity,
      amount: capitalAvailable,
      threshold: capitalThreshold,
      label:
        severity === 'critical'
          ? `Capital depleted · ${currency(capitalAvailable)}`
          : `Low capital · ${currency(capitalAvailable)}`
    };
  });
  let inventoryLowCount = $derived(inventory.filter((r) => r.qty <= r.reorder).length);
  let atRiskCustomers = $derived(liveCustomers.filter((c) => c.health === 'At risk').length);
  let activeProjectsCount = $derived(
    projects.filter((p) => p.status === 'Active' || p.status === 'Planning').length
  );

  let invoiceCustomerLabel = $derived(
    invoiceCustomerFilter ? customerName(customers, invoiceCustomerFilter) : ''
  );
  let invoiceProjectLabel = $derived(
    invoiceProjectFilter ? projects.find((p) => p.id === invoiceProjectFilter)?.name ?? '' : ''
  );

  let visibleExpenseItems = $derived(
    expenseProjectFilter ? expenseItems.filter((e) => e.projectId === expenseProjectFilter) : expenseItems
  );
  let visibleExpenseTotal = $derived(
    visibleExpenseItems.reduce((sum, item) => sum + expenseAmount(item), 0)
  );
  let expenseProjectLabel = $derived(
    expenseProjectFilter ? projects.find((p) => p.id === expenseProjectFilter)?.name ?? '' : ''
  );

  let projectCustomerLabel = $derived(
    projectCustomerFilter ? customerName(customers, projectCustomerFilter) : ''
  );

  let visibleProjects = $derived(
    projectCustomerFilter
      ? projects.filter((p) => p.customerId === projectCustomerFilter)
      : projects
  );

  let topOverdueCustomer = $derived.by(() => {
    const overdue = invoices
      .filter((i) => effectiveInvoiceStatus(i, liveNow) === 'Overdue')
      .sort((a, b) => b.amount - a.amount)[0];
    return overdue ? customerName(customers, overdue.customerId) : '';
  });

  let cashTrendPct = $derived.by(() => {
    if (cashBars.length < 2) return 0;
    const last = cashBars.at(-1);
    const prev = cashBars.at(-2);
    if (!last || !prev || !prev.income) return 0;
    return Math.round(((last.income - prev.income) / prev.income) * 1000) / 10;
  });

  let invoiceDraftRow = $derived(
    invoiceEditor?.mode === 'edit'
      ? invoices.find((i) => i.id === invoiceEditor.id) ?? null
      : null
  );

  let allNotifications = $derived(
    deriveNotifications({ invoices, inventory, projects, customers: liveCustomers })
  );

  let notifications = $derived(allNotifications.filter((n) => !dismissedNoti.includes(n.id)));

  let pageTitle = $derived.by(() => {
    if (active === 'home') return 'Dashboard';
    if (active === 'account') return 'My account';
    if (active === 'settings') return 'Settings';
    if (active === 'team') return 'Team';
    if (active === 'audit') return 'Audit log';
    if (active === 'projects') return 'Projects';
    if (active === 'calendar') return 'Calendar';
    if (active === 'suppliers') return 'Suppliers';
    if (active === 'customer-detail')
      return customers.find((c) => c.id === customerDetailId)?.name ?? 'Customer';
    return menu.find((item) => item.id === active)?.label ?? active;
  });

  let pageSubtitle = $derived.by(() => {
    switch (active) {
      case 'home':
        return 'Live workspace overview · what needs attention this week';
      case 'invoices':
        return `${invoices.length} invoices in pipeline · ${openCount} open · ${overdueCount} overdue`;
      case 'expenses':
        return `${expenseItems.length} postings · ${currency(expenseTotal)} this period`;
      case 'customers':
        return `${customers.filter((c) => (c.kind ?? 'customer') !== 'supplier').length} accounts · ${atRiskCustomers} at risk (auto)`;
      case 'suppliers':
        return `${customers.filter((c) => c.kind === 'supplier' || c.kind === 'both').length} suppliers · referenced by inventory and expenses`;
      case 'inventory':
        return `${inventory.length} SKUs · ${inventoryLowCount} below reorder`;
      case 'projects':
        return projectCustomerFilter
          ? `Budget vs customer revenue · ${visibleProjects.length} of ${projects.length} initiatives · delivery schedule below`
          : `Budget vs customer revenue · ${projects.length} initiatives · calendar integrated below`;
      case 'calendar':
        return 'Invoices and expenses by date · switch between month, week and year views';
      case 'hr':
        return `People mapped to delivery projects · ${employees.length} profiles`;
      case 'team':
        return `${users.length} profiles · ${roles.length} role tiers`;
      case 'audit':
        return `${auditEntries.length} events captured this session`;
      case 'account':
        return 'Your profile, theme and language preferences';
      case 'settings':
        return 'Company profile, taxes and demo controls';
      case 'customer-detail':
        return 'Single source of truth for this account';
      default:
        return '';
    }
  });

  let primaryAction = $derived.by(() => {
    if (active === 'home' || active === 'invoices') {
      const allowed = can(role, 'invoices.write');
      return {
        label: 'New offer',
        icon: Plus,
        onClick: handleNewInvoice,
        disabled: !allowed,
        disabledHint: 'Your role cannot create offers'
      };
    }
    if (active === 'expenses') {
      const allowed = can(role, 'expenses.write');
      return {
        label: 'New expense',
        icon: Plus,
        onClick: () => (expenseEditor = { mode: 'create' }),
        disabled: !allowed,
        disabledHint: 'Your role cannot post expenses'
      };
    }
    if (active === 'customers') {
      const allowed = can(role, 'customers.write');
      return {
        label: 'New customer',
        icon: Plus,
        onClick: () => (customerEditor = { mode: 'create' }),
        disabled: !allowed,
        disabledHint: 'Your role cannot create customers'
      };
    }
    if (active === 'suppliers') {
      const allowed = can(role, 'customers.write');
      return {
        label: 'New supplier',
        icon: Plus,
        onClick: () => (customerEditor = { mode: 'create' }),
        disabled: !allowed,
        disabledHint: 'Your role cannot create suppliers'
      };
    }
    if (active === 'inventory') {
      const allowed = can(role, 'inventory.write');
      return {
        label: 'New SKU',
        icon: Plus,
        onClick: () => (inventoryEditor = { mode: 'create' }),
        disabled: !allowed,
        disabledHint: 'Your role cannot manage SKUs'
      };
    }
    return null;
  });

  const exportablePages = new Set(['home', 'invoices', 'expenses', 'customers', 'suppliers', 'inventory', 'projects', 'hr']);
  let showExportButton = $derived(can(role, 'workspace.export') && exportablePages.has(active));

  function selectPage(id, opts = {}) {
    if (!isPageVisible(role, id)) return;
    const isBack = id !== active;
    active = id;
    mobileNavOpen = false;

    if (id === 'invoices') {
      invoiceCustomerFilter = opts.customerId ?? null;
      invoiceProjectFilter = opts.projectId ?? null;
    } else {
      invoiceCustomerFilter = null;
      invoiceProjectFilter = null;
      invoiceEditor = null;
      invoiceSelection = [];
    }

    if (id === 'projects') {
      projectCustomerFilter = opts.customerId ?? null;
      if (opts.scrollTo === 'schedule') projectsScheduleScrollNonce += 1;
    } else {
      projectCustomerFilter = null;
    }

    if (id === 'inventory') {
      inventoryHighlightSupplierId = opts.supplierCustomerId ?? null;
      inventoryStockFilter = opts.stockFilter === 'low' || opts.stockFilter === 'out' || opts.stockFilter === 'all' ? opts.stockFilter : 'all';
    } else {
      inventoryHighlightSupplierId = null;
      inventoryEditor = null;
      inventoryStockFilter = 'all';
    }

    if (id === 'expenses') {
      pendingExpenseEditId = opts.expenseEditId ?? null;
      expenseProjectFilter = opts.projectId ?? null;
    } else {
      pendingExpenseEditId = null;
      expenseProjectFilter = null;
    }

    if (id === 'customer-detail') {
      customerDetailId = opts.customerId ?? customerDetailId;
    } else if (isBack) {
      customerDetailId = null;
    }
  }

  function consumeExpenseDeepLink() {
    pendingExpenseEditId = null;
  }

  function openCustomerDetail(cid) {
    selectPage('customer-detail', { customerId: cid });
  }

  function openCalendarInvoiceEdit(id) {
    const inv = invoices.find((i) => i.id === id);
    selectPage('invoices');
    if (inv?.status === 'Offer' && can(role, 'invoices.write')) {
      invoiceEditor = { mode: 'edit', id };
    } else {
      openInvoicePreview(id);
    }
  }

  function openCalendarExpenseEdit(id) {
    selectPage('expenses', { expenseEditId: id });
  }

  function openCalendarProjectById(pid) {
    const p = projects.find((x) => x.id === pid);
    selectPage('projects', { customerId: p?.customerId, scrollTo: 'schedule' });
  }

  function convertOfferToIssued(invoiceId) {
    if (!can(role, 'invoices.write')) return;
    const row = invoices.find((i) => i.id === invoiceId);
    if (!row || row.status !== 'Offer') return;
    const customer = customers.find((c) => c.id === row.customerId);
    const next = issueOfferAsOpen(row, { customer, settings: companySettings });
    invoices = invoices.map((i) => (i.id === invoiceId ? next : i));
    audit('update', 'invoice', `${invoiceId} · issued from offer`, invoiceId);
    pushToast({ kind: 'success', title: 'Offer issued', body: `${invoiceId} is now Open · due ${next.due}` });
    invoicePreview = null;
  }

  function paidForCustomer(customerId) {
    return invoices
      .filter((i) => i.customerId === customerId)
      .reduce((s, i) => s + (i.amountPaid ?? (i.status === 'Paid' ? i.amount : 0)), 0);
  }

  function handleNewInvoice() {
    if (!can(role, 'invoices.write')) return;
    selectPage('invoices');
    invoiceEditor = { mode: 'create' };
  }

  function saveInvoiceCreate(payload) {
    /* New customer created inline from the invoice form. */
    let resolvedPayload = payload;
    if (payload.inlineCustomer) {
      const inline = {
        ...payload.inlineCustomer,
        id: nextCustomerId(customers),
        contacts: []
      };
      customers = [...customers, inline];
      audit('create', 'customer', `${inline.name} (from invoice form)`, inline.id);
      pushToast({ kind: 'success', title: 'Customer added', body: inline.name });
      resolvedPayload = { ...payload, customerId: inline.id, inlineCustomer: null };
    }
    const customer = customers.find((c) => c.id === resolvedPayload.customerId);
    const next = buildNewInvoice(invoices, resolvedPayload, { settings: companySettings, customer });
    invoices = [...invoices, next];
    companySettings = bumpInvoiceCounter(companySettings);
    audit('create', 'invoice', `${next.id} · ${customerName(customers, next.customerId)} · ${currency(next.amount)}`, next.id);
    applyStockDeduction(next);
    pushToast({ kind: 'success', title: 'Invoice created', body: `${next.id} · ${currency(next.amount)}` });
    invoiceEditor = null;
  }

  function saveInvoiceUpdate(id, patch) {
    const before = invoices.find((i) => i.id === id);
    const wasOffer = before?.status === 'Offer';
    invoices = invoices.map((i) => (i.id === id ? applyInvoicePatch(i, patch) : i));
    audit('update', 'invoice', `${id}`, id);
    /* Deduct stock when an offer transitions into an issued state. */
    if (wasOffer && patch.status && patch.status !== 'Offer') {
      const after = invoices.find((i) => i.id === id);
      if (after) applyStockDeduction(after);
    }
    pushToast({ kind: 'info', title: 'Invoice updated', body: id });
    invoiceEditor = null;
  }

  function applyStockDeduction(invoice) {
    const { inventory: nextInventory, warnings, outOf } = deductInvoiceFromInventory(inventory, invoice);
    if (nextInventory === inventory) return;
    inventory = nextInventory;
    audit(
      'update',
      'inventory',
      `Auto-deducted from ${invoice.id}`,
      invoice.id
    );
    if (outOf.length) {
      pushToast({
        kind: 'warn',
        title: `${outOf.length} SKU${outOf.length === 1 ? '' : 's'} now out of stock`,
        body: outOf.map((s) => s.code).join(' · ')
      });
    } else if (warnings.length) {
      pushToast({
        kind: 'warn',
        title: `${warnings.length} SKU${warnings.length === 1 ? '' : 's'} below reorder`,
        body: warnings.map((s) => `${s.code} ${s.qty}/${s.reorder}`).join(' · ')
      });
    }
  }

  function deleteInvoice(id) {
    const row = invoices.find((i) => i.id === id);
    if (!row) return;

    if (row.status === 'Cancelled') {
      pushToast({ kind: 'warn', title: 'Already cancelled', body: `${row.id} was cancelled via ${row.creditNoteId ?? 'credit note'}.` });
      return;
    }

    if (row.isCreditNote) {
      pushToast({
        kind: 'warn',
        title: 'Credit notes cannot be deleted',
        body: `${row.id} is a legal cancellation document and must be kept on file.`
      });
      return;
    }

    /* Offers can be deleted outright. Anything that has been issued must be
       cancelled by emitting a credit note (Storno / Rechnungskorrektur) so
       the original document is preserved for tax and audit. */
    if (!isIssuedInvoice(row)) {
      if (!can(role, 'invoices.delete')) return;
      requestConfirm({
        title: `Delete offer ${row.id}?`,
        message: `${row.id} for ${customerName(customers, row.customerId)} is still a proposal, so it can be removed without keeping a document trail.`,
        confirmLabel: 'Delete offer',
        tone: 'danger',
        onConfirm: () => {
          invoices = invoices.filter((i) => i.id !== id);
          audit('delete', 'invoice', `${row.id} · offer removed`, id);
          pushToast({ kind: 'warn', title: 'Offer deleted', body: row.id });
          invoiceEditor = null;
        }
      });
      return;
    }

    if (!can(role, 'invoices.cancel')) {
      pushToast({ kind: 'warn', title: 'Cannot cancel', body: 'Your role cannot issue credit notes.' });
      return;
    }

    requestConfirm({
      title: `Cancel ${row.id} via credit note?`,
      message: `${row.id} has already been issued to ${customerName(customers, row.customerId)} (${currency(row.amount)}). To stay tax-compliant, the original is kept and a Storno / credit note will be created with reversed line items.`,
      confirmLabel: 'Issue credit note',
      cancelLabel: 'Keep invoice',
      tone: 'warn',
      prompt: {
        label: 'Reason for cancellation',
        placeholder: 'e.g. Wrong customer reference, duplicate posting…',
        required: true
      },
      onConfirm: (reason) => {
        const { invoices: nextInvoices, creditNote } = cancelInvoiceWithCreditNote(invoices, id, {
          settings: companySettings,
          reason,
          actorName: currentUser?.name
        });
        if (!creditNote) {
          pushToast({ kind: 'warn', title: 'Could not cancel', body: row.id });
          return;
        }
        invoices = nextInvoices;
        audit('cancel', 'invoice', `${row.id} → ${creditNote.id} · ${reason}`, row.id);
        audit('create', 'credit-note', `${creditNote.id} · references ${row.id}`, creditNote.id);
        pushToast({
          kind: 'success',
          title: 'Credit note issued',
          body: `${creditNote.id} cancels ${row.id}`
        });
        invoiceEditor = null;
      }
    });
  }

  function openInvoicePreview(invoiceId) {
    const inv = invoices.find((i) => i.id === invoiceId);
    if (!inv) return;
    invoicePreview = {
      id: inv.id,
      title: inv.title ?? '',
      created: inv.created,
      customerId: inv.customerId,
      due: inv.due,
      status: inv.status,
      currency: inv.currency,
      poRef: inv.poRef,
      notes: inv.notes,
      items: inv.items ?? [],
      amountPaid: inv.amountPaid ?? 0,
      dunning: inv.dunning ?? [],
      isCreditNote: Boolean(inv.isCreditNote),
      referenceInvoiceId: inv.referenceInvoiceId ?? null,
      creditNoteId: inv.creditNoteId ?? null,
      cancelledAt: inv.cancelledAt ?? null,
      cancelReason: inv.cancelReason ?? null,
      amount: inv.amount
    };
  }

  function previewFromEditor(snapshot) {
    invoicePreview = snapshot;
  }

  function applyBulkInvoiceAction(action, ids) {
    if (!ids.length) return;
    if (action === 'mark-paid') {
      if (!can(role, 'invoices.write')) return;
      invoices = invoices.map((inv) => (ids.includes(inv.id) ? applyInvoicePatch(inv, { status: 'Paid' }) : inv));
      audit('update', 'invoice', `${ids.length} marked paid`, ids.join(','));
      pushToast({ kind: 'success', title: `${ids.length} invoices marked paid` });
    } else if (action === 'mark-open') {
      if (!can(role, 'invoices.write')) return;
      invoices = invoices.map((inv) => (ids.includes(inv.id) ? applyInvoicePatch(inv, { status: 'Open', amountPaid: 0 }) : inv));
      audit('update', 'invoice', `${ids.length} reopened`, ids.join(','));
      pushToast({ kind: 'info', title: `${ids.length} invoices reopened` });
    } else if (action === 'delete') {
      const targets = invoices.filter((inv) => ids.includes(inv.id));
      const draftIds = targets.filter((inv) => !isIssuedInvoice(inv) && !inv.isCreditNote && inv.status !== 'Cancelled').map((inv) => inv.id);
      const issuedIds = targets.filter((inv) => isIssuedInvoice(inv)).map((inv) => inv.id);
      const creditCount = targets.filter((inv) => inv.isCreditNote || inv.status === 'Cancelled').length;

      if (creditCount > 0) {
        pushToast({
          kind: 'warn',
          title: 'Skipping locked rows',
          body: `${creditCount} credit note${creditCount === 1 ? '' : 's'} or already-cancelled invoice${creditCount === 1 ? '' : 's'} cannot be removed.`
        });
      }

      if (!draftIds.length && !issuedIds.length) {
        invoiceSelection = [];
        return;
      }

      const summary = [
        draftIds.length ? `${draftIds.length} draft${draftIds.length === 1 ? '' : 's'} will be deleted` : '',
        issuedIds.length ? `${issuedIds.length} issued invoice${issuedIds.length === 1 ? '' : 's'} will be cancelled with credit notes` : ''
      ]
        .filter(Boolean)
        .join('; ');

      const canHandle =
        (!draftIds.length || can(role, 'invoices.delete')) &&
        (!issuedIds.length || can(role, 'invoices.cancel'));
      if (!canHandle) {
        pushToast({ kind: 'warn', title: 'Cannot complete bulk action', body: 'Your role lacks the permissions to cancel issued invoices.' });
        return;
      }

      requestConfirm({
        title: 'Remove selected invoices?',
        message: `${summary}. Cancellation reasons will share the note below for the audit trail.`,
        confirmLabel: 'Apply',
        cancelLabel: 'Keep',
        tone: 'warn',
        prompt: issuedIds.length
          ? {
              label: 'Cancellation reason',
              placeholder: 'e.g. Re-issued under correct VAT rate',
              required: true
            }
          : undefined,
        onConfirm: (reason) => {
          let working = invoices;

          if (draftIds.length) {
            working = working.filter((inv) => !draftIds.includes(inv.id));
            audit('delete', 'invoice', `${draftIds.length} drafts bulk-deleted`, draftIds.join(','));
          }

          for (const issuedId of issuedIds) {
            const result = cancelInvoiceWithCreditNote(working, issuedId, {
              settings: companySettings,
              reason: reason || 'Bulk cancellation',
              actorName: currentUser?.name
            });
            if (result.creditNote) {
              working = result.invoices;
              audit('cancel', 'invoice', `${issuedId} → ${result.creditNote.id}`, issuedId);
              audit('create', 'credit-note', `${result.creditNote.id} · bulk Storno of ${issuedId}`, result.creditNote.id);
            }
          }

          invoices = working;
          pushToast({
            kind: 'success',
            title: 'Bulk action applied',
            body: [
              draftIds.length ? `${draftIds.length} drafts deleted` : '',
              issuedIds.length ? `${issuedIds.length} credit notes issued` : ''
            ]
              .filter(Boolean)
              .join(' · ')
          });
          invoiceSelection = [];
        }
      });
      return;
    }
    invoiceSelection = [];
  }

  function generateFromTemplate(templateId) {
    const tpl = invoiceTemplates.find((t) => t.id === templateId);
    if (!tpl) return;
    if (!can(role, 'invoices.write')) return;
    const draft = instantiateTemplate(tpl, invoices, customers, companySettings);
    invoices = [...invoices, draft];
    companySettings = bumpInvoiceCounter(companySettings);
    invoiceTemplates = invoiceTemplates.map((t) => (t.id === templateId ? advanceTemplateRun(t) : t));
    audit('create', 'invoice', `${draft.id} · from template ${tpl.name}`, draft.id);
    pushToast({ kind: 'success', title: 'Invoice generated', body: `${draft.id} from ${tpl.name}` });
  }

  function adjustInventoryQty(id, delta) {
    if (!can(role, 'inventory.adjust')) return;
    inventory = inventory.map((r) => (r.id === id ? { ...r, qty: Math.max(0, r.qty + delta) } : r));
    audit('update', 'inventory', `Qty ${delta > 0 ? '+' : ''}${delta} on ${id}`, id);
  }

  function setInventoryQty(id, value) {
    if (!can(role, 'inventory.adjust')) return;
    inventory = inventory.map((r) => (r.id === id ? { ...r, qty: Math.max(0, value) } : r));
    audit('update', 'inventory', `Qty set to ${value} on ${id}`, id);
  }

  function fillUpInventory(id) {
    if (!can(role, 'inventory.adjust')) return;
    const row = inventory.find((r) => r.id === id);
    if (!row) return;
    /* Fill up to 2× reorder point as a sensible default. If the SKU has no
       reorder threshold yet, fall back to qty + 10 so the action always does
       something visible. */
    const target = (Number(row.reorder) || 0) > 0 ? Number(row.reorder) * 2 : (Number(row.qty) || 0) + 10;
    inventory = inventory.map((r) => (r.id === id ? { ...r, qty: target } : r));
    audit('update', 'inventory', `Filled up to ${target} on ${row.code}`, id);
    pushToast({ kind: 'success', title: 'Stock filled up', body: `${row.code} → ${target}` });
  }

  function setReorderTrigger(id, value) {
    if (!can(role, 'inventory.adjust')) return;
    const n = Math.max(0, Math.round(Number(value) || 0));
    inventory = inventory.map((r) => (r.id === id ? { ...r, reorder: n } : r));
    audit('update', 'inventory', `Reorder trigger set to ${n}`, id);
  }

  function upsertInventoryRow(payload) {
    if (!can(role, 'inventory.write')) return;
    if (payload.id) {
      const before = inventory.find((r) => r.id === payload.id);
      inventory = inventory.map((r) =>
        r.id === payload.id ? buildInventoryRow(inventory, { ...r, ...payload, id: r.id }) : r
      );
      audit('update', 'inventory', `${payload.code} · ${payload.name}`, payload.id);
      pushToast({
        kind: 'info',
        title: 'SKU updated',
        body: before ? `${payload.code} · ${payload.name}` : payload.id
      });
    } else {
      const next = buildInventoryRow(inventory, payload);
      inventory = [...inventory, next];
      audit('create', 'inventory', `${next.code} · ${next.name}`, next.id);
      pushToast({ kind: 'success', title: 'SKU added', body: `${next.code} · ${next.name}` });
    }
  }

  function deleteInventoryRow(id) {
    if (!can(role, 'inventory.delete')) return;
    const row = inventory.find((r) => r.id === id);
    requestConfirm({
      title: row ? `Delete ${row.code}?` : 'Delete SKU?',
      message: row
        ? `“${row.name}” (${row.code}) will be removed from the inventory master. Postings already referencing this SKU keep their history.`
        : 'This SKU will be removed from the inventory master.',
      confirmLabel: 'Delete SKU',
      tone: 'danger',
      onConfirm: () => {
        inventory = inventory.filter((r) => r.id !== id);
        audit('delete', 'inventory', row ? `${row.code} · ${row.name}` : id, id);
        pushToast({ kind: 'warn', title: 'SKU deleted', body: row?.code ?? id });
        inventoryEditor = null;
      }
    });
  }

  function upsertExpense(payload) {
    if (payload.id) {
      const before = expenseItems.find((e) => e.id === payload.id);
      const updated = createExpenseRow({ ...payload, id: payload.id, submittedById: before?.submittedById });
      expenseItems = expenseItems.map((e) => (e.id === payload.id ? { ...e, ...updated } : e));
      audit('update', 'expense', payload.vendor, payload.id);
      reflectOrderInInventory(before, updated);
      pushToast({ kind: 'info', title: 'Expense updated', body: payload.vendor });
    } else {
      const row = createExpenseRow({ ...payload, submittedById: currentUser?.id });
      expenseItems = [...expenseItems, row];
      audit('create', 'expense', `${row.vendor} · ${currency(row.amount)}`, row.id);
      reflectOrderInInventory(null, row);
      pushToast({ kind: 'success', title: 'Expense posted', body: `${row.vendor} · ${currency(row.amount)}` });
    }
  }

  /** Total qty across all line items of an expense. */
  function expenseOrderedQty(expense) {
    if (!expense) return 0;
    if (Array.isArray(expense.items) && expense.items.length) {
      return expense.items.reduce((s, it) => s + (Number(it.qty) || 0), 0) || 1;
    }
    return 1;
  }

  function reflectOrderInInventory(before, after) {
    const wasOrder = Boolean(before?.isOrder && before?.inventoryId);
    const isOrder = Boolean(after?.isOrder && after?.inventoryId);
    if (!wasOrder && !isOrder) return;
    const beforeQty = wasOrder ? expenseOrderedQty(before) : 0;
    const afterQty = isOrder ? expenseOrderedQty(after) : 0;
    inventory = inventory.map((sku) => {
      let nextOrdered = Number(sku.orderedQty) || 0;
      if (wasOrder && sku.id === before.inventoryId) nextOrdered -= beforeQty;
      if (isOrder && sku.id === after.inventoryId) nextOrdered += afterQty;
      return nextOrdered === (Number(sku.orderedQty) || 0)
        ? sku
        : { ...sku, orderedQty: Math.max(0, nextOrdered) };
    });
  }

  function markExpenseOrderReceived(expenseId) {
    const expense = expenseItems.find((e) => e.id === expenseId);
    if (!expense || !expense.isOrder || !expense.inventoryId) return;
    const qty = expenseOrderedQty(expense);
    inventory = receiveOrderIntoInventory(inventory, expense.inventoryId, qty);
    expenseItems = expenseItems.map((e) =>
      e.id === expenseId ? { ...e, orderStatus: 'received' } : e
    );
    audit('update', 'expense', `Order received · ${expense.vendor}`, expenseId);
    pushToast({ kind: 'success', title: 'Order received', body: expense.vendor });
  }

  function deleteExpense(id) {
    if (!can(role, 'expenses.delete')) return;
    const row = expenseItems.find((e) => e.id === id);
    requestConfirm({
      title: 'Delete expense?',
      message: row
        ? `“${row.vendor}” will be removed from the workspace.`
        : 'This expense will be removed from the workspace.',
      confirmLabel: 'Delete expense',
      tone: 'danger',
      onConfirm: () => {
        expenseItems = expenseItems.filter((e) => e.id !== id);
        audit('delete', 'expense', row?.vendor ?? id, id);
        pushToast({ kind: 'warn', title: 'Expense deleted' });
        expenseEditor = null;
      }
    });
  }

  function upsertCustomer(payload) {
    if (payload.id) {
      customers = customers.map((c) => (c.id === payload.id ? { ...c, ...payload } : c));
      audit('update', 'customer', payload.name, payload.id);
      pushToast({ kind: 'info', title: 'Customer updated', body: payload.name });
    } else {
      const next = { ...payload, id: nextCustomerId(customers) };
      customers = [...customers, next];
      audit('create', 'customer', next.name, next.id);
      pushToast({ kind: 'success', title: 'Customer created', body: next.name });
    }
  }

  function deleteCustomerRecord(id) {
    if (!can(role, 'customers.delete')) return;
    const row = customers.find((c) => c.id === id);
    if (
      customerHasReferences(id, {
        invoices,
        projects,
        inventory,
        expenseItems
      })
    ) {
      requestConfirm({
        title: 'Customer is still linked',
        message: `${row?.name ?? 'This customer'} is referenced by invoices, projects, inventory or expenses. Remove or reassign those records first.`,
        confirmLabel: 'Got it',
        cancelLabel: 'Close',
        tone: 'info',
        onConfirm: () => {}
      });
      return;
    }
    requestConfirm({
      title: `Delete ${row?.name ?? 'customer'}?`,
      message: 'This customer will be removed from the workspace.',
      confirmLabel: 'Delete customer',
      tone: 'danger',
      onConfirm: () => {
        customers = customers.filter((c) => c.id !== id);
        audit('delete', 'customer', row?.name ?? id, id);
        pushToast({ kind: 'warn', title: 'Customer deleted' });
        customerEditor = null;
        if (customerDetailId === id) selectPage('customers');
      }
    });
  }

  function downloadBlob(filename, mime, content) {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function downloadWorkspaceJson() {
    if (!can(role, 'workspace.export')) return;
    const data = buildWorkspaceExportSnapshot({
      workspace,
      customers,
      invoices,
      expenses: expenseItems,
      inventory,
      projects,
      employees
    });
    downloadBlob('emi-workspace-export.json', 'application/json;charset=utf-8', JSON.stringify(data, null, 2));
    audit('export', 'workspace', 'JSON snapshot');
    pushToast({ kind: 'success', title: 'Workspace exported', body: 'JSON snapshot downloaded' });
  }

  function downloadExpensesCsv() {
    if (!can(role, 'workspace.export')) return;
    downloadBlob('emi-expenses.csv', 'text/csv;charset=utf-8', buildExpensesCsvRows(expenseItems, customers));
    audit('export', 'expenses', `${expenseItems.length} rows · CSV`);
    pushToast({ kind: 'success', title: 'Expenses exported' });
  }

  function downloadInvoicesCsv() {
    if (!can(role, 'workspace.export')) return;
    downloadBlob('emi-invoices.csv', 'text/csv;charset=utf-8', buildInvoicesCsvRows(invoices, customers));
    audit('export', 'invoices', `${invoices.length} rows · CSV`);
    pushToast({ kind: 'success', title: 'Invoices exported' });
  }

  function downloadCustomersCsv() {
    if (!can(role, 'workspace.export')) return;
    downloadBlob('emi-customers.csv', 'text/csv;charset=utf-8', buildCustomersCsvRows(customers));
    audit('export', 'customers', `${customers.length} rows · CSV`);
    pushToast({ kind: 'success', title: 'Customers exported' });
  }

  function downloadAuditCsv() {
    if (!can(role, 'audit.export')) return;
    const header = ['at', 'actor', 'role', 'action', 'resource', 'resource_id', 'summary'];
    const rows = [header.join(',')];
    for (const e of auditEntries) {
      const cells = [
        e.at,
        e.actorName,
        e.actorRole,
        e.action,
        e.resource,
        e.resourceId ?? '',
        e.summary ?? ''
      ].map((c) => {
        const s = String(c ?? '');
        return s.includes(',') || s.includes('"') ? `"${s.replaceAll('"', '""')}"` : s;
      });
      rows.push(cells.join(','));
    }
    downloadBlob('emi-audit.csv', 'text/csv;charset=utf-8', '\uFEFF' + rows.join('\n'));
    pushToast({ kind: 'success', title: 'Audit log exported' });
  }

  function openProjectFromHR(projectId) {
    const p = projects.find((x) => x.id === projectId);
    selectPage('projects', { customerId: p?.customerId });
  }

  function resetDemoData() {
    if (!can(role, 'workspace.reset')) return;
    requestConfirm({
      title: 'Reset demo workspace?',
      message:
        'Customers, invoices, expenses, projects, inventory and people will be restored from the seed dataset. Your current edits will be discarded.',
      confirmLabel: 'Reset workspace',
      cancelLabel: 'Keep my changes',
      tone: 'info',
      onConfirm: () => {
        customers = structuredClone(customersSeed);
        invoices = structuredClone(invoicesSeed);
        expenseItems = structuredClone(expenseItemsSeed);
        inventory = structuredClone(inventorySeed);
        projects = structuredClone(projectsSeed);
        employees = structuredClone(employeesSeed);
        company = structuredClone(companySeed);
        companySettings = structuredClone(companySettingsSeed);
        invoiceTemplates = structuredClone(invoiceTemplatesSeed);
        invoiceEditor = null;
        expenseEditor = null;
        customerEditor = null;
        inventoryEditor = null;
        invoiceCustomerFilter = null;
        invoiceProjectFilter = null;
        invoiceDateRange = { from: '', to: '' };
        invoiceSelection = [];
        projectCustomerFilter = null;
        expenseProjectFilter = null;
        inventoryHighlightSupplierId = null;
        pendingExpenseEditId = null;
        customerDetailId = null;
        projectsScheduleScrollNonce = 0;
        inventoryStockFilter = 'all';
        if (persistEnabled) clearWorkspaceState();
        audit('reset', 'workspace', 'Restored from seed dataset');
        pushToast({ kind: 'info', title: 'Workspace reset', body: 'Seed data restored.' });
      }
    });
  }

  function saveSettings(draft) {
    company = {
      legalName: draft.legalName,
      tradeName: draft.tradeName,
      street: draft.street,
      city: draft.city,
      postalCode: draft.postalCode,
      country: draft.country,
      vatId: draft.vatId,
      iban: draft.iban,
      bic: draft.bic,
      registry: draft.registry,
      phone: draft.phone,
      email: draft.email,
      website: draft.website
    };
    companySettings = {
      fiscalYearStart: draft.fiscalYearStart,
      defaultVat: Number(draft.defaultVat) || 0,
      vatRates: companySettings.vatRates,
      paymentTermsDays: Number(draft.paymentTermsDays) || 0,
      lowCapitalThreshold: Math.max(0, Number(draft.lowCapitalThreshold) || 10000),
      invoicePrefix: draft.invoicePrefix,
      invoiceNextNumber: Number(draft.invoiceNextNumber) || 1,
      expensePrefix: companySettings.expensePrefix,
      expenseNextNumber: companySettings.expenseNextNumber,
      currency: draft.currency,
      locale: companySettings.locale,
      weekStart: companySettings.weekStart
    };
    audit('update', 'settings', 'Company & tax defaults');
    pushToast({ kind: 'success', title: 'Settings saved' });
  }

  function togglePersist(next) {
    persistEnabled = next;
    savePersistFlag(next);
    if (!next) {
      clearWorkspaceState();
      pushToast({ kind: 'info', title: 'Local persistence off', body: 'Edits will reset on refresh.' });
    } else {
      pushToast({ kind: 'success', title: 'Local persistence on', body: 'Your edits will survive refresh.' });
    }
  }

  function changeRole(userId, nextRole) {
    if (!can(role, 'team.manage')) return;
    users = users.map((u) => (u.id === userId ? { ...u, role: nextRole } : u));
    const target = users.find((u) => u.id === userId);
    audit('update', 'user', `${target?.name ?? userId} → ${nextRole}`, userId);
    pushToast({ kind: 'info', title: 'Role updated', body: `${target?.name ?? 'User'} → ${nextRole}` });
  }

  function inviteUser(payload) {
    if (!can(role, 'team.manage')) return;
    const id = `u-${Date.now()}`;
    const user = {
      id,
      name: payload.name,
      email: payload.email,
      role: payload.role,
      initials: payload.name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0].toUpperCase())
        .join(''),
      color: '#0ea5e9'
    };
    users = [...users, user];
    audit('create', 'user', `${user.name} · ${user.role}`, id);
    pushToast({ kind: 'success', title: 'User invited', body: `${user.name} · ${user.role}` });
  }

  function removeUser(id) {
    if (!can(role, 'team.manage')) return;
    const row = users.find((u) => u.id === id);
    requestConfirm({
      title: `Remove ${row?.name ?? 'user'}?`,
      message: 'They will lose access to this workspace.',
      confirmLabel: 'Remove',
      tone: 'danger',
      onConfirm: () => {
        users = users.filter((u) => u.id !== id);
        audit('delete', 'user', row?.name ?? id, id);
        pushToast({ kind: 'warn', title: 'User removed' });
      }
    });
  }

  function switchUser(userId) {
    const target = users.find((u) => u.id === userId);
    if (!target) return;
    currentUserId = userId;
    audit('role-switch', 'session', `Now ${target.role}`, userId);
    pushToast({ kind: 'info', title: 'Profile switched', body: `${target.name} · ${target.role}` });
    if (!isPageVisible(target.role, active)) selectPage('home');
  }

  function handleLogin({ userId, displayName }) {
    const target = users.find((u) => u.id === userId);
    if (!target) return;
    if (displayName && displayName !== target.name) {
      users = users.map((u) => (u.id === userId ? { ...u, name: displayName } : u));
    }
    currentUserId = userId;
    loggedIn = true;
    audit('login', 'session', `${displayName ?? target.name} signed in as ${target.role}`, userId);
    pushToast({ kind: 'success', title: `Welcome, ${target.name.split(' ')[0]}`, body: `Signed in as ${target.role}` });
  }

  function handleLogout() {
    audit('login', 'session', 'Signed out');
    loggedIn = false;
  }

  function saveAccountProfile({ name, email }) {
    if (!currentUser) return;
    users = users.map((u) =>
      u.id === currentUser.id ? { ...u, name: name || u.name, email: email || u.email } : u
    );
    audit('update', 'user', `Profile: ${name}`, currentUser.id);
    pushToast({ kind: 'info', title: 'Profile saved' });
  }

  function dismissNotification(id) {
    if (!id) return;
    if (id === '__all__') {
      dismissedNoti = [...new Set([...dismissedNoti, ...allNotifications.map((n) => n.id)])];
      pushToast({ kind: 'info', title: 'Notifications cleared' });
      return;
    }
    if (!dismissedNoti.includes(id)) {
      dismissedNoti = [...dismissedNoti, id];
    }
  }

  function selectNotification(notification) {
    if (!notification?.link) return;
    const link = notification.link;
    dismissNotification(notification.id);
    if (link.page === 'invoices' && link.editInvoiceId) {
      selectPage('invoices');
      if (can(role, 'invoices.write')) invoiceEditor = { mode: 'edit', id: link.editInvoiceId };
      else openInvoicePreview(link.editInvoiceId);
    } else if (link.page === 'inventory') {
      selectPage('inventory', { supplierCustomerId: link.supplierCustomerId });
    } else if (link.page === 'projects') {
      selectPage('projects', { customerId: link.customerId });
    } else if (link.page === 'customers' && link.customerId) {
      openCustomerDetail(link.customerId);
    } else {
      selectPage(link.page ?? 'home');
    }
  }

  function clearAudit() {
    if (!can(role, 'audit.read')) return;
    requestConfirm({
      title: 'Clear audit log?',
      message: 'All audit entries will be removed from this workspace.',
      confirmLabel: 'Clear',
      tone: 'danger',
      onConfirm: () => {
        clearAuditLog();
        pushToast({ kind: 'info', title: 'Audit log cleared' });
      }
    });
  }

  $effect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => {
      if (mq.matches) mobileNavOpen = false;
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  });

  $effect(() => {
    if (typeof document === 'undefined') return;
    if (mobileNavOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  });

  $effect(() => {
    if (!mobileNavOpen) return;
    const onEsc = (e) => {
      if (e.key === 'Escape') mobileNavOpen = false;
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  });

  $effect(() => {
    if (!loggedIn) return;
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        paletteOpen = true;
        return;
      }
      if (!e.altKey || e.repeat) return;
      const hit = menu.find((m) => m.key.toLowerCase() === e.key.toLowerCase());
      if (hit) {
        e.preventDefault();
        selectPage(hit.id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  $effect(() => {
    const collapsed = sidebarCollapsed;
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, collapsed ? 'true' : 'false');
    } catch {
      /* private mode / quota */
    }
  });

  $effect(() => savePref('period', period));
  $effect(() => savePref('chartLayout', chartLayout));
  $effect(() => savePref('invoiceView', invoiceView));
  $effect(() => savePref('filter', filter));
  $effect(() => savePref('theme', theme));
  $effect(() => savePref('locale', locale));

  $effect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale;
  });

  $effect(() => setLocale(locale));

  const VALID_PAGES = new Set([
    'home',
    'invoices',
    'expenses',
    'calendar',
    'customers',
    'suppliers',
    'inventory',
    'projects',
    'calendar',
    'hr',
    'account',
    'settings',
    'team',
    'audit',
    'customer-detail'
  ]);

  function navigateFromHash(page, sub) {
    if (page === 'calendar') {
      selectPage('calendar');
      return;
    }
    if (page === 'customer-detail' && sub) {
      selectPage('customer-detail', { customerId: sub });
      return;
    }
    if (page !== active && isPageVisible(role, page)) {
      selectPage(page);
    }
  }

  function readHashPage() {
    if (typeof window === 'undefined') return null;
    const raw = (window.location.hash || '').replace(/^#\/?/, '').trim();
    if (!raw) return null;
    const [page] = raw.split('/');
    return VALID_PAGES.has(page) ? raw : null;
  }

  let routerBootstrapped = $state(false);

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (!loggedIn) return;
    if (routerBootstrapped) return;
    const fromHash = readHashPage();
    if (fromHash) {
      const [page, sub] = fromHash.split('/');
      navigateFromHash(page, sub);
    } else {
      window.history.replaceState(null, '', `#/${active}`);
    }
    routerBootstrapped = true;
  });

  $effect(() => {
    if (typeof window === 'undefined') return;
    const onHashChange = () => {
      const next = readHashPage();
      if (!next) return;
      const [page, sub] = next.split('/');
      navigateFromHash(page, sub);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  });

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (!loggedIn) return;
    const target =
      active === 'customer-detail' && customerDetailId
        ? `#/customer-detail/${customerDetailId}`
        : `#/${active}`;
    if (window.location.hash !== target) {
      window.history.replaceState(null, '', target);
    }
  });

  let detailCustomer = $derived(customers.find((c) => c.id === customerDetailId) ?? null);

  let backTarget = $derived.by(() => {
    if (active === 'customer-detail') return { label: 'All customers', onClick: () => selectPage('customers') };
    if (active === 'invoices' && invoiceCustomerFilter)
      return {
        label: `Back to ${customerName(customers, invoiceCustomerFilter)}`,
        onClick: () => openCustomerDetail(invoiceCustomerFilter)
      };
    if (active === 'projects' && projectCustomerFilter)
      return {
        label: `Back to ${customerName(customers, projectCustomerFilter)}`,
        onClick: () => openCustomerDetail(projectCustomerFilter)
      };
    if (active === 'inventory' && inventoryHighlightSupplierId)
      return {
        label: `Back to ${customerName(customers, inventoryHighlightSupplierId)}`,
        onClick: () => openCustomerDetail(inventoryHighlightSupplierId)
      };
    return null;
  });

  /** Page transition class — re-keyed each route change. */
  let pageKey = $derived(
    `${active}-${customerDetailId ?? ''}-${invoiceCustomerFilter ?? ''}-${invoiceProjectFilter ?? ''}-${projectCustomerFilter ?? ''}-${expenseProjectFilter ?? ''}`
  );
</script>

{#if !loggedIn || !currentUser}
  <LoginScreen {users} {roles} onLogin={handleLogin} />
{:else}
  <div class="flex h-screen min-h-0 flex-col bg-zinc-100 transition-colors dark:bg-slate-950">
    <TopBar
      {workspace}
      {pageTitle}
      {currentUser}
      {users}
      canSettings={can(role, 'settings.read')}
      {notifications}
      {mobileNavOpen}
      backTarget={backTarget}
      capitalAlert={capitalAlert}
      onCapitalAlertClick={() => selectPage('home')}
      onCapitalRestock={() => selectPage('inventory', { stockFilter: 'low' })}
      onToggleMobileNav={() => (mobileNavOpen = !mobileNavOpen)}
      onAccount={() => selectPage('account')}
      onSettings={() => selectPage('settings')}
      onSwitchUser={switchUser}
      onLogout={handleLogout}
      onOpenSearch={() => (paletteOpen = true)}
      onSelectNotification={selectNotification}
      onDismissNotification={dismissNotification}
    />

    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col md:flex-row">
      {#if mobileNavOpen}
        <button
          type="button"
          class="fixed inset-0 z-30 bg-zinc-900/50 backdrop-blur-[1px] md:hidden"
          onclick={() => (mobileNavOpen = false)}
          aria-label="Close menu"
        ></button>
      {/if}

      <AppSidebar
        {menu}
        {active}
        {role}
        {mobileNavOpen}
        bind:sidebarCollapsed
        onSelect={selectPage}
      />

      <main class="min-h-0 min-w-0 flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
        <WorkspaceChrome
          userName={currentUser.name}
          {pageTitle}
          {pageSubtitle}
          {primaryAction}
          showExport={showExportButton}
          onExportWorkspace={downloadWorkspaceJson}
        />

        {#key pageKey}
          <div class="emi-page-fade">
            {#if active === 'home'}
              <DashboardPage
                bind:period
                bind:chartLayout
                {totals}
                {openCount}
                {overdueCount}
                {paidCount}
                {expenseTotal}
                {cashBars}
                invoiceRows={enrichedInvoices}
                expensesCount={expenseItems.length}
                employeesCount={employees.length}
                {topOverdueCustomer}
                {cashTrendPct}
                {currency}
                {inventoryLowCount}
                {atRiskCustomers}
                {activeProjectsCount}
                {upcomingFortnight}
                inventory={inventory}
                customers={liveCustomers}
                expenses={expenseItems}
                showHR={can(role, 'hr.read')}
                onViewInvoices={() => selectPage('invoices')}
                onOpenInvoice={openInvoicePreview}
                onOpenCustomer={openCustomerDetail}
                onOpenExpense={(id) => selectPage('expenses', { expenseEditId: id })}
                onGoCustomers={() => selectPage('customers')}
                onGoInventory={() => selectPage('inventory')}
                onGoProjects={() => selectPage('projects')}
                onGoExpenses={() => selectPage('expenses')}
                onGoHR={() => selectPage('hr')}
                onGoCalendar={() => selectPage('calendar')}
                invoices={invoices}
              />
            {:else if active === 'invoices'}
              <InvoicesPage
                bind:filter
                bind:invoiceView
                bind:dateRange={invoiceDateRange}
                bind:selection={invoiceSelection}
                {visibleInvoices}
                kanbanColumns={invoiceKanbanColumns}
                {overdueCount}
                {currency}
                {locale}
                {customers}
                {projects}
                {inventory}
                templates={invoiceTemplates}
                {invoiceCustomerFilter}
                {invoiceCustomerLabel}
                {invoiceProjectFilter}
                {invoiceProjectLabel}
                {invoiceEditor}
                invoiceDraftRow={invoiceDraftRow}
                companySettings={companySettings}
                canWrite={can(role, 'invoices.write')}
                canDelete={can(role, 'invoices.delete')}
                canExport={can(role, 'workspace.export')}
                onClearInvoiceCustomerFilter={() => (invoiceCustomerFilter = null)}
                onClearInvoiceProjectFilter={() => (invoiceProjectFilter = null)}
                onCloseInvoiceEditor={() => (invoiceEditor = null)}
                onSaveInvoiceCreate={saveInvoiceCreate}
                onSaveInvoiceUpdate={saveInvoiceUpdate}
                onDeleteInvoice={deleteInvoice}
                onEditInvoice={(id) => (invoiceEditor = { mode: 'edit', id })}
                onPreviewInvoice={previewFromEditor}
                onOpenInvoicePreview={openInvoicePreview}
                onExportCsv={downloadInvoicesCsv}
                onBulkAction={applyBulkInvoiceAction}
                onGenerateTemplate={generateFromTemplate}
                onCreateInvoice={handleNewInvoice}
              />
            {:else if active === 'expenses'}
              <ExpensesPage
                bind:expenseEditor
                expenseItems={visibleExpenseItems}
                expenseTotal={visibleExpenseTotal}
                {customers}
                {projects}
                {inventory}
                {expenseProjectFilter}
                {expenseProjectLabel}
                onClearExpenseProjectFilter={() => (expenseProjectFilter = null)}
                {currency}
                {locale}
                canWrite={can(role, 'expenses.write')}
                canDelete={can(role, 'expenses.delete')}
                canExport={can(role, 'workspace.export')}
                onUpsertExpense={upsertExpense}
                onDeleteExpense={deleteExpense}
                onDownloadCsv={downloadExpensesCsv}
                onMarkOrderReceived={markExpenseOrderReceived}
                pendingExpenseEditId={pendingExpenseEditId}
                onConsumedExpenseDeepLink={consumeExpenseDeepLink}
              />
            {:else if active === 'customers'}
              <CustomersPage
                bind:customerEditor
                customers={liveCustomers}
                {invoices}
                {projects}
                {currency}
                kindFilter="customer"
                canWrite={can(role, 'customers.write')}
                canDelete={can(role, 'customers.delete')}
                canExport={can(role, 'workspace.export')}
                onUpsertCustomer={upsertCustomer}
                onDeleteCustomer={deleteCustomerRecord}
                onOpenCustomerDetail={openCustomerDetail}
                onOpenInvoices={(cid) => selectPage('invoices', { customerId: cid })}
                onOpenProjects={(cid) => selectPage('projects', { customerId: cid })}
                onOpenInventory={(cid) => selectPage('inventory', { supplierCustomerId: cid })}
                onExportCsv={downloadCustomersCsv}
              />
            {:else if active === 'suppliers'}
              <CustomersPage
                bind:customerEditor
                customers={liveCustomers}
                {invoices}
                {projects}
                {currency}
                kindFilter="supplier"
                canWrite={can(role, 'customers.write')}
                canDelete={can(role, 'customers.delete')}
                canExport={can(role, 'workspace.export')}
                onUpsertCustomer={upsertCustomer}
                onDeleteCustomer={deleteCustomerRecord}
                onOpenCustomerDetail={openCustomerDetail}
                onOpenInvoices={(cid) => selectPage('invoices', { customerId: cid })}
                onOpenProjects={(cid) => selectPage('projects', { customerId: cid })}
                onOpenInventory={(cid) => selectPage('inventory', { supplierCustomerId: cid })}
                onExportCsv={downloadCustomersCsv}
              />
            {:else if active === 'customer-detail' && detailCustomer}
              <CustomerDetailPage
                customer={detailCustomer}
                {invoices}
                {projects}
                {inventory}
                expenses={expenseItems}
                {customers}
                {currency}
                canEdit={can(role, 'customers.write')}
                onBack={() => selectPage('customers')}
                onEdit={() => (customerEditor = { mode: 'edit', id: detailCustomer.id })}
                onOpenInvoiceList={(cid) => selectPage('invoices', { customerId: cid })}
                onOpenInvoice={(iid) => {
                  const inv = invoices.find((i) => i.id === iid);
                  selectPage('invoices');
                  if (inv?.status === 'Offer' && can(role, 'invoices.write')) {
                    invoiceEditor = { mode: 'edit', id: iid };
                  } else {
                    openInvoicePreview(iid);
                  }
                }}
                onOpenProjectList={(cid) => selectPage('projects', { customerId: cid })}
                onOpenInventory={(cid) => selectPage('inventory', { supplierCustomerId: cid })}
              />
            {:else if active === 'inventory'}
              <InventoryPage
                bind:inventoryEditor
                bind:stockFilter={inventoryStockFilter}
                {inventory}
                {customers}
                highlightSupplierId={inventoryHighlightSupplierId}
                canAdjust={can(role, 'inventory.adjust')}
                canWrite={can(role, 'inventory.write')}
                canDelete={can(role, 'inventory.delete')}
                onAdjustQty={adjustInventoryQty}
                onSetQty={setInventoryQty}
                onFillUp={fillUpInventory}
                onSetReorder={setReorderTrigger}
                onUpsertInventoryRow={upsertInventoryRow}
                onDeleteInventoryRow={deleteInventoryRow}
                onOpenSupplier={(cid) => openCustomerDetail(cid)}
              />
            {:else if active === 'projects'}
              <ProjectsPage
                projects={visibleProjects}
                totalProjects={projects.length}
                {customers}
                {currency}
                {locale}
                paidByCustomerId={paidForCustomer}
                projectCustomerFilter={projectCustomerFilter}
                projectCustomerLabel={projectCustomerLabel}
                onClearProjectCustomerFilter={() => (projectCustomerFilter = null)}
                onOpenCustomer={(cid) => openCustomerDetail(cid)}
                onOpenInvoices={(projectId) => selectPage('invoices', { projectId })}
                onOpenExpenses={(projectId) => selectPage('expenses', { projectId })}
                invoices={invoices}
                expenseItems={expenseItems}
                onOpenInvoiceEdit={openCalendarInvoiceEdit}
                onOpenExpenseEdit={openCalendarExpenseEdit}
                onOpenProjectById={openCalendarProjectById}
                scheduleScrollNonce={projectsScheduleScrollNonce}
              />
            {:else if active === 'calendar'}
              <CalendarPage
                invoices={invoices}
                expenseItems={expenseItems}
                projects={[]}
                {customers}
                {locale}
                onOpenInvoiceEdit={openCalendarInvoiceEdit}
                onOpenExpenseEdit={openCalendarExpenseEdit}
                onOpenProjectById={openCalendarProjectById}
              />
            {:else if active === 'hr' && can(role, 'hr.read')}
              <HRPage {employees} {projects} {customers} onOpenProject={openProjectFromHR} />
            {:else if active === 'team' && can(role, 'team.read')}
              <TeamPage
                {users}
                {roles}
                {currentUser}
                canManage={can(role, 'team.manage')}
                onChangeRole={changeRole}
                onRemoveUser={removeUser}
                onInviteUser={inviteUser}
              />
            {:else if active === 'audit' && can(role, 'audit.read')}
              <AuditLogPage
                entries={auditEntries}
                canExport={can(role, 'audit.export')}
                canClear={can(role, 'audit.read')}
                onExport={downloadAuditCsv}
                onClear={clearAudit}
              />
            {:else if active === 'account'}
              <AccountPage
                {currentUser}
                {theme}
                {locale}
                onSaveProfile={saveAccountProfile}
                onChangeTheme={(t) => (theme = t)}
                onChangeLocale={(l) => (locale = l)}
                onLogout={handleLogout}
              />
            {:else if active === 'settings' && can(role, 'settings.read')}
              <SettingsPage
                {company}
                settings={companySettings}
                canWrite={can(role, 'settings.write')}
                canReset={can(role, 'workspace.reset')}
                {persistEnabled}
                onSave={saveSettings}
                onResetDemo={resetDemoData}
                onTogglePersist={togglePersist}
              />
            {:else}
              <p class="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                That page is not available for your role. Switch profile from the topbar avatar to explore other tiers.
              </p>
            {/if}
          </div>
        {/key}
      </main>
    </div>
  </div>

  <ConfirmModal request={confirmRequest} onClose={() => (confirmRequest = null)} />
  <CommandPalette
    open={paletteOpen}
    {customers}
    {invoices}
    {inventory}
    {projects}
    {employees}
    onClose={() => (paletteOpen = false)}
    onPickCustomer={(cid) => openCustomerDetail(cid)}
    onPickInvoice={(iid) => {
      const inv = invoices.find((i) => i.id === iid);
      selectPage('invoices');
      if (inv?.status === 'Offer' && can(role, 'invoices.write')) {
        invoiceEditor = { mode: 'edit', id: iid };
      } else {
        openInvoicePreview(iid);
      }
    }}
    onPickInventorySupplier={(cid) => selectPage('inventory', { supplierCustomerId: cid })}
    onPickProject={(cid) => selectPage('projects', { customerId: cid })}
    onPickEmployeeProject={(pid) => openProjectFromHR(pid)}
  />
  <InvoicePreviewModal
    invoice={invoicePreview}
    customer={invoicePreview ? customers.find((c) => c.id === invoicePreview.customerId) : null}
    {company}
    canEdit={can(role, 'invoices.write')}
    onEdit={(id) => {
      selectPage('invoices');
      invoiceEditor = { mode: 'edit', id };
    }}
    onConvertOffer={convertOfferToIssued}
    onClose={() => (invoicePreview = null)}
  />
  <ToastHost />
{/if}
