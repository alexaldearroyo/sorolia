<script>
  import {
    workspace,
    cashMonthly,
    cashWeekly,
    kanbanColumns,
    customersSeed,
    invoicesSeed,
    expenseItemsSeed,
    inventorySeed,
    projectsSeed,
    employeesSeed
  } from './lib/demoData.js';
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
  import DashboardPage from './lib/pages/DashboardPage.svelte';
  import InvoicesPage from './lib/pages/InvoicesPage.svelte';
  import ExpensesPage from './lib/pages/ExpensesPage.svelte';
  import AccountPage from './lib/pages/AccountPage.svelte';
  import SettingsPage from './lib/pages/SettingsPage.svelte';
  import CustomersPage from './lib/pages/CustomersPage.svelte';
  import InventoryPage from './lib/pages/InventoryPage.svelte';
  import ProjectsPage from './lib/pages/ProjectsPage.svelte';
  import HRPage from './lib/pages/HRPage.svelte';

  let loggedIn = $state(false);
  let active = $state('home');
  let filter = $state('All');
  let period = $state('Monthly');
  let userName = $state('Mate');
  let password = $state('demo');
  let invoiceView = $state('list');
  let sidebarCollapsed = $state(loadSidebarCollapsed());
  let mobileNavOpen = $state(false);

  let invoiceCustomerFilter = $state(null);
  /** @type {null | { mode: 'create' } | { mode: 'edit', id: string }} */
  let invoiceEditor = $state(null);
  let projectCustomerFilter = $state(null);
  let inventoryHighlightSupplierId = $state(null);

  let customers = $state(structuredClone(customersSeed));
  let invoices = $state(structuredClone(invoicesSeed));
  let expenseItems = $state(structuredClone(expenseItemsSeed));
  let inventory = $state(structuredClone(inventorySeed));
  let projects = $state(structuredClone(projectsSeed));
  let employees = $state(structuredClone(employeesSeed));

  let cashBars = $derived(period === 'Monthly' ? cashMonthly : cashWeekly);

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
    invoices = invoices.filter((i) => i.id !== id);
    invoiceEditor = null;
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
    expenseItems = expenseItems.filter((e) => e.id !== id);
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

  /** @returns {boolean} true if deleted */
  function deleteCustomerRecord(id) {
    if (
      customerHasReferences(id, {
        invoices,
        projects,
        inventory,
        expenseItems
      })
    ) {
      window.alert(
        'Cannot delete this customer: it is still linked to invoices, projects, inventory lines or expenses. Remove or reassign those first.'
      );
      return false;
    }
    customers = customers.filter((c) => c.id !== id);
    return true;
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
    a.download = 'lia-workspace-export.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function downloadExpensesCsv() {
    const csv = buildExpensesCsvRows(expenseItems, customers);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'lia-expenses.csv';
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
          aria-label="Cerrar menú"
        ></button>
      {/if}

      <AppSidebar {menu} {active} {mobileNavOpen} bind:sidebarCollapsed onSelect={selectPage} />

      <main class="min-h-0 min-w-0 flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
        <WorkspaceChrome
          {userName}
          {pageTitle}
          onNewInvoice={handleNewInvoice}
          onExportWorkspace={downloadWorkspaceJson}
        />

        {#if active === 'home'}
          <DashboardPage
            bind:period
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
            onViewInvoices={() => selectPage('invoices')}
            onGoCustomers={() => selectPage('customers')}
            onGoInventory={() => selectPage('inventory')}
            onGoProjects={() => selectPage('projects')}
            onGoHR={() => selectPage('hr')}
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
            onOpenCreateInvoice={() => (invoiceEditor = { mode: 'create' })}
            onCloseInvoiceEditor={() => (invoiceEditor = null)}
            onSaveInvoiceCreate={saveInvoiceCreate}
            onSaveInvoiceUpdate={saveInvoiceUpdate}
            onDeleteInvoice={deleteInvoice}
            onEditInvoice={(id) => (invoiceEditor = { mode: 'edit', id })}
          />
        {:else if active === 'expenses'}
          <ExpensesPage
            {expenseItems}
            {expenseTotal}
            {customers}
            {currency}
            onUpsertExpense={upsertExpense}
            onDeleteExpense={deleteExpense}
            onDownloadCsv={downloadExpensesCsv}
          />
        {:else if active === 'customers'}
          <CustomersPage
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
{/if}
