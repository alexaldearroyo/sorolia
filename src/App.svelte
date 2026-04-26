<script>
  import {
    workspace,
    cashMonthly,
    cashWeekly,
    cashQuarterly,
    kanbanColumns,
    customersSeed,
    invoicesSeed,
    expenseItemsSeed,
    inventorySeed,
    projectsSeed,
    employeesSeed
  } from './lib/demoData.js';
  import {
    collectWorkspaceEvents,
    countEventsBetween,
    isoKeyFromDate
  } from './lib/calendarUtils.js';
  import { menu } from './lib/navigation.js';
  import { currency } from './lib/format.js';
  import { SIDEBAR_COLLAPSED_KEY, loadSidebarCollapsed } from './lib/sidebarStorage.js';
  import {
    enrichInvoices,
    customerName,
    buildNewInvoice,
    createExpenseRow,
    buildWorkspaceExportSnapshot,
    buildExpensesCsvRows,
    nextCustomerId,
    customerHasReferences
  } from './lib/workspaceActions.js';
  import LoginScreen from './lib/components/LoginScreen.svelte';
  import TopBar from './lib/components/TopBar.svelte';
  import AppSidebar from './lib/components/AppSidebar.svelte';
  import WorkspaceChrome from './lib/components/WorkspaceChrome.svelte';
  import ConfirmModal from './lib/components/ConfirmModal.svelte';
  import Plus from 'lucide-svelte/icons/plus';
  import DashboardPage from './lib/pages/DashboardPage.svelte';
  import InvoicesPage from './lib/pages/InvoicesPage.svelte';
  import ExpensesPage from './lib/pages/ExpensesPage.svelte';
  import AccountPage from './lib/pages/AccountPage.svelte';
  import SettingsPage from './lib/pages/SettingsPage.svelte';
  import CustomersPage from './lib/pages/CustomersPage.svelte';
  import InventoryPage from './lib/pages/InventoryPage.svelte';
  import ProjectsPage from './lib/pages/ProjectsPage.svelte';
  import HRPage from './lib/pages/HRPage.svelte';
  import CalendarPage from './lib/pages/CalendarPage.svelte';

  let loggedIn = $state(false);
  let active = $state('home');
  let filter = $state('All');
  let period = $state('Monthly');
  let chartLayout = $state('stacked');
  let userName = $state('Mate');
  let password = $state('demo');
  let invoiceView = $state('list');
  let sidebarCollapsed = $state(loadSidebarCollapsed());
  let mobileNavOpen = $state(false);

  let invoiceCustomerFilter = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let invoiceEditor = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let expenseEditor = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let customerEditor = $state(null);
  let projectCustomerFilter = $state(null);
  let inventoryHighlightSupplierId = $state(null);
  let pendingExpenseEditId = $state(null);

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

  let cashBars = $derived(
    period === 'Monthly' ? cashMonthly : period === 'Weekly' ? cashWeekly : cashQuarterly
  );

  let upcomingFortnight = $derived.by(() => {
    const ev = collectWorkspaceEvents(invoices, expenseItems, projects);
    const now = new Date();
    const end = new Date(now);
    end.setDate(end.getDate() + 14);
    return countEventsBetween(ev, isoKeyFromDate(now), isoKeyFromDate(end));
  });

  let enrichedInvoices = $derived(enrichInvoices(invoices, customers));

  let visibleInvoices = $derived.by(() => {
    let rows = enrichedInvoices;
    if (invoiceCustomerFilter) {
      rows = rows.filter((r) => r.customerId === invoiceCustomerFilter);
    }
    if (filter !== 'All') {
      rows = rows.filter((row) => row.status === filter);
    }
    return rows;
  });

  let totals = $derived(
    invoices.reduce(
      (acc, row) => {
        acc.revenue += row.status === 'Paid' ? row.amount : 0;
        acc.pending += row.status === 'Open' || row.status === 'Overdue' ? row.amount : 0;
        acc.overdue += row.status === 'Overdue' ? row.amount : 0;
        return acc;
      },
      { revenue: 0, pending: 0, overdue: 0 }
    )
  );

  let openCount = $derived(invoices.filter((r) => r.status === 'Open').length);
  let overdueCount = $derived(invoices.filter((r) => r.status === 'Overdue').length);
  let paidCount = $derived(invoices.filter((r) => r.status === 'Paid').length);
  let expenseTotal = $derived(expenseItems.reduce((sum, item) => sum + item.amount, 0));

  let inventoryLowCount = $derived(inventory.filter((r) => r.qty <= r.reorder).length);
  let atRiskCustomers = $derived(customers.filter((c) => c.health === 'At risk').length);
  let activeProjectsCount = $derived(
    projects.filter((p) => p.status === 'Active' || p.status === 'Planning').length
  );

  let workspaceStats = $derived({
    customers: customers.length,
    invoices: invoices.length,
    expenses: expenseItems.length,
    inventory: inventory.length,
    projects: projects.length,
    employees: employees.length
  });

  let invoiceCustomerLabel = $derived(
    invoiceCustomerFilter ? customerName(customers, invoiceCustomerFilter) : ''
  );

  let projectCustomerLabel = $derived(
    projectCustomerFilter ? customerName(customers, projectCustomerFilter) : ''
  );

  let visibleProjects = $derived(
    projectCustomerFilter
      ? projects.filter((p) => p.customerId === projectCustomerFilter)
      : projects
  );

  let invoiceDraftRow = $derived(
    invoiceEditor?.mode === 'edit'
      ? invoices.find((i) => i.id === invoiceEditor.id) ?? null
      : null
  );

  let pageTitle = $derived(
    active === 'home'
      ? 'Dashboard'
      : active === 'account'
        ? 'My account'
        : active === 'settings'
          ? 'Settings'
          : menu.find((item) => item.id === active)?.label ?? active
  );

  let pageSubtitle = $derived.by(() => {
    switch (active) {
      case 'home':
        return 'Live workspace overview · same data graph as every module';
      case 'invoices':
        return `Customer invoices · EUR · ${invoices.length} in pipeline`;
      case 'expenses':
        return `Cost centers · ${expenseItems.length} postings · CSV export ready`;
      case 'calendar':
        return 'Invoice due dates · expense postings · project reviews';
      case 'customers':
        return `Master directory · AR and projects roll up here · ${customers.length} accounts`;
      case 'inventory':
        return `SKUs tied to supplier customers · ${inventory.length} lines`;
      case 'projects':
        return `Budget vs customer revenue · ${projects.length} initiatives`;
      case 'hr':
        return `People mapped to delivery projects · ${employees.length} profiles`;
      case 'account':
        return 'Workspace snapshot tied to the same demo graph as Finance';
      case 'settings':
        return 'Company, taxes, sequences — UI stub';
      default:
        return '';
    }
  });

  /** @type {null | { label: string, icon?: any, onClick: () => void }} */
  let primaryAction = $derived.by(() => {
    switch (active) {
      case 'home':
      case 'invoices':
        return { label: 'New invoice', icon: Plus, onClick: handleNewInvoice };
      case 'expenses':
        return {
          label: 'New expense',
          icon: Plus,
          onClick: () => (expenseEditor = { mode: 'create' })
        };
      case 'customers':
        return {
          label: 'New customer',
          icon: Plus,
          onClick: () => (customerEditor = { mode: 'create' })
        };
      default:
        return null;
    }
  });

  function selectPage(id, opts = {}) {
    active = id;
    mobileNavOpen = false;

    if (id === 'invoices') {
      invoiceCustomerFilter = opts.customerId ?? null;
    } else {
      invoiceCustomerFilter = null;
      invoiceEditor = null;
    }

    if (id === 'projects') {
      projectCustomerFilter = opts.customerId ?? null;
    } else {
      projectCustomerFilter = null;
    }

    if (id === 'inventory') {
      inventoryHighlightSupplierId = opts.supplierCustomerId ?? null;
    } else {
      inventoryHighlightSupplierId = null;
    }

    if (id === 'expenses') {
      pendingExpenseEditId = opts.expenseEditId ?? null;
    } else {
      pendingExpenseEditId = null;
    }
  }

  function consumeExpenseDeepLink() {
    pendingExpenseEditId = null;
  }

  function openCalendarInvoiceEdit(id) {
    selectPage('invoices');
    invoiceEditor = { mode: 'edit', id };
  }

  function openCalendarExpenseEdit(id) {
    selectPage('expenses', { expenseEditId: id });
  }

  function openCalendarProjectById(pid) {
    const p = projects.find((x) => x.id === pid);
    selectPage('projects', { customerId: p?.customerId });
  }

  function paidForCustomer(customerId) {
    return invoices
      .filter((i) => i.customerId === customerId && i.status === 'Paid')
      .reduce((s, i) => s + i.amount, 0);
  }

  function handleNewInvoice() {
    selectPage('invoices');
    invoiceEditor = { mode: 'create' };
  }

  function saveInvoiceCreate(payload) {
    invoices = [...invoices, buildNewInvoice(invoices, payload)];
    invoiceEditor = null;
  }

  function saveInvoiceUpdate(id, patch) {
    invoices = invoices.map((i) => (i.id === id ? { ...i, ...patch } : i));
    invoiceEditor = null;
  }

  function deleteInvoice(id) {
    const row = invoices.find((i) => i.id === id);
    requestConfirm({
      title: `Delete ${row?.id ?? 'invoice'}?`,
      message: row
        ? `${row.id} for ${customerName(customers, row.customerId)} will be removed from the demo workspace.`
        : 'This invoice will be removed from the demo workspace.',
      confirmLabel: 'Delete invoice',
      tone: 'danger',
      onConfirm: () => {
        invoices = invoices.filter((i) => i.id !== id);
        invoiceEditor = null;
      }
    });
  }

  function adjustInventoryQty(id, delta) {
    inventory = inventory.map((r) =>
      r.id === id ? { ...r, qty: Math.max(0, r.qty + delta) } : r
    );
  }

  function upsertExpense(payload) {
    if (payload.id) {
      expenseItems = expenseItems.map((e) =>
        e.id === payload.id
          ? {
              ...e,
              vendor: payload.vendor,
              type: payload.type,
              amount: payload.amount,
              date: payload.date,
              supplierCustomerId: payload.supplierCustomerId ?? null
            }
          : e
      );
    } else {
      expenseItems = [...expenseItems, createExpenseRow(payload)];
    }
  }

  function deleteExpense(id) {
    const row = expenseItems.find((e) => e.id === id);
    requestConfirm({
      title: 'Delete expense?',
      message: row
        ? `“${row.vendor}” will be removed from the demo workspace.`
        : 'This expense line will be removed from the demo workspace.',
      confirmLabel: 'Delete expense',
      tone: 'danger',
      onConfirm: () => {
        expenseItems = expenseItems.filter((e) => e.id !== id);
        expenseEditor = null;
      }
    });
  }

  function upsertCustomer(payload) {
    if (payload.id) {
      customers = customers.map((c) =>
        c.id === payload.id
          ? {
              ...c,
              name: payload.name,
              country: payload.country,
              segment: payload.segment,
              health: payload.health
            }
          : c
      );
    } else {
      customers = [
        ...customers,
        {
          id: nextCustomerId(customers),
          name: payload.name,
          country: payload.country,
          segment: payload.segment,
          health: payload.health
        }
      ];
    }
  }

  function deleteCustomerRecord(id) {
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
      message: 'This customer will be removed from the demo workspace.',
      confirmLabel: 'Delete customer',
      tone: 'danger',
      onConfirm: () => {
        customers = customers.filter((c) => c.id !== id);
        customerEditor = null;
      }
    });
  }

  function downloadWorkspaceJson() {
    const data = buildWorkspaceExportSnapshot({
      workspace,
      customers,
      invoices,
      expenses: expenseItems,
      inventory,
      projects,
      employees
    });
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'emi-workspace-export.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function downloadExpensesCsv() {
    const csv = buildExpensesCsvRows(expenseItems, customers);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'emi-expenses.csv';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function openProjectFromHR(projectId) {
    const p = projects.find((x) => x.id === projectId);
    selectPage('projects', { customerId: p?.customerId });
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

  const VALID_PAGES = new Set([
    'home',
    'invoices',
    'expenses',
    'calendar',
    'customers',
    'inventory',
    'projects',
    'hr',
    'account',
    'settings'
  ]);

  function readHashPage() {
    if (typeof window === 'undefined') return null;
    const raw = (window.location.hash || '').replace(/^#\/?/, '').trim();
    if (!raw) return null;
    return VALID_PAGES.has(raw) ? raw : null;
  }

  let routerBootstrapped = $state(false);

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (!loggedIn) return;
    if (routerBootstrapped) return;
    const fromHash = readHashPage();
    if (fromHash && fromHash !== active) {
      selectPage(fromHash);
    } else {
      window.history.replaceState(null, '', `#/${active}`);
    }
    routerBootstrapped = true;
  });

  $effect(() => {
    if (typeof window === 'undefined') return;
    const onHashChange = () => {
      const next = readHashPage();
      if (next && next !== active) selectPage(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  });

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (!loggedIn) return;
    const target = `#/${active}`;
    if (window.location.hash !== target) {
      window.history.replaceState(null, '', target);
    }
  });
</script>

{#if !loggedIn}
  <LoginScreen bind:userName bind:password onLogin={() => (loggedIn = true)} />
{:else}
  <div class="flex h-screen min-h-0 flex-col bg-zinc-100">
    <TopBar
      {workspace}
      {pageTitle}
      {userName}
      {mobileNavOpen}
      onToggleMobileNav={() => (mobileNavOpen = !mobileNavOpen)}
      onAccount={() => selectPage('account')}
      onLogout={() => (loggedIn = false)}
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

      <AppSidebar {menu} {active} {mobileNavOpen} bind:sidebarCollapsed onSelect={selectPage} />

      <main class="min-h-0 min-w-0 flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
        <WorkspaceChrome
          {userName}
          {pageTitle}
          {pageSubtitle}
          {primaryAction}
          onExportWorkspace={downloadWorkspaceJson}
        />

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
            {currency}
            {inventoryLowCount}
            {atRiskCustomers}
            {activeProjectsCount}
            {upcomingFortnight}
            onViewInvoices={() => selectPage('invoices')}
            onGoCustomers={() => selectPage('customers')}
            onGoInventory={() => selectPage('inventory')}
            onGoProjects={() => selectPage('projects')}
            onGoHR={() => selectPage('hr')}
            onGoCalendar={() => selectPage('calendar')}
          />
        {:else if active === 'invoices'}
          <InvoicesPage
            bind:filter
            bind:invoiceView
            {visibleInvoices}
            {kanbanColumns}
            {currency}
            {customers}
            {invoiceCustomerFilter}
            {invoiceCustomerLabel}
            {invoiceEditor}
            invoiceDraftRow={invoiceDraftRow}
            onClearInvoiceCustomerFilter={() => (invoiceCustomerFilter = null)}
            onCloseInvoiceEditor={() => (invoiceEditor = null)}
            onSaveInvoiceCreate={saveInvoiceCreate}
            onSaveInvoiceUpdate={saveInvoiceUpdate}
            onDeleteInvoice={deleteInvoice}
            onEditInvoice={(id) => (invoiceEditor = { mode: 'edit', id })}
          />
        {:else if active === 'expenses'}
          <ExpensesPage
            bind:expenseEditor
            {expenseItems}
            {expenseTotal}
            {customers}
            {currency}
            onUpsertExpense={upsertExpense}
            onDeleteExpense={deleteExpense}
            onDownloadCsv={downloadExpensesCsv}
            pendingExpenseEditId={pendingExpenseEditId}
            onConsumedExpenseDeepLink={consumeExpenseDeepLink}
          />
        {:else if active === 'calendar'}
          <CalendarPage
            {invoices}
            {expenseItems}
            {projects}
            onOpenInvoiceEdit={openCalendarInvoiceEdit}
            onOpenExpenseEdit={openCalendarExpenseEdit}
            onOpenProjectById={openCalendarProjectById}
          />
        {:else if active === 'customers'}
          <CustomersPage
            bind:customerEditor
            {customers}
            {invoices}
            {projects}
            {currency}
            onUpsertCustomer={upsertCustomer}
            onDeleteCustomer={deleteCustomerRecord}
            onOpenInvoices={(cid) => selectPage('invoices', { customerId: cid })}
            onOpenProjects={(cid) => selectPage('projects', { customerId: cid })}
            onOpenInventory={(cid) => selectPage('inventory', { supplierCustomerId: cid })}
          />
        {:else if active === 'inventory'}
          <InventoryPage
            {inventory}
            {customers}
            highlightSupplierId={inventoryHighlightSupplierId}
            onAdjustQty={adjustInventoryQty}
            onOpenSupplier={(cid) => selectPage('customers')}
          />
        {:else if active === 'projects'}
          <ProjectsPage
            projects={visibleProjects}
            totalProjects={projects.length}
            {customers}
            {currency}
            paidByCustomerId={paidForCustomer}
            projectCustomerFilter={projectCustomerFilter}
            projectCustomerLabel={projectCustomerLabel}
            onClearProjectCustomerFilter={() => (projectCustomerFilter = null)}
            onOpenCustomer={() => selectPage('customers')}
            onOpenInvoices={(cid) => selectPage('invoices', { customerId: cid })}
          />
        {:else if active === 'hr'}
          <HRPage {employees} {projects} {customers} onOpenProject={openProjectFromHR} />
        {:else if active === 'account'}
          <AccountPage
            {userName}
            stats={workspaceStats}
            {currency}
            {expenseTotal}
            onBack={() => selectPage('home')}
          />
        {:else if active === 'settings'}
          <SettingsPage stats={workspaceStats} onBack={() => selectPage('home')} />
        {/if}
      </main>
    </div>
  </div>

  <ConfirmModal request={confirmRequest} onClose={() => (confirmRequest = null)} />
{/if}
