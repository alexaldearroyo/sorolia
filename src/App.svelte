<script>
  import {
    workspace,
    invoiceRows,
    cashMonthly,
    cashWeekly,
    expenseItems,
    kanbanColumns
  } from './lib/demoData.js';
  import { menu } from './lib/navigation.js';
  import { currency } from './lib/format.js';
  import { SIDEBAR_COLLAPSED_KEY, loadSidebarCollapsed } from './lib/sidebarStorage.js';
  import LoginScreen from './lib/components/LoginScreen.svelte';
  import TopBar from './lib/components/TopBar.svelte';
  import AppSidebar from './lib/components/AppSidebar.svelte';
  import WorkspaceChrome from './lib/components/WorkspaceChrome.svelte';
  import DashboardPage from './lib/pages/DashboardPage.svelte';
  import InvoicesPage from './lib/pages/InvoicesPage.svelte';
  import ExpensesPage from './lib/pages/ExpensesPage.svelte';
  import AccountPage from './lib/pages/AccountPage.svelte';
  import SettingsPage from './lib/pages/SettingsPage.svelte';
  import ModulePlaceholder from './lib/pages/ModulePlaceholder.svelte';

  let loggedIn = $state(false);
  let active = $state('home');
  let filter = $state('All');
  let period = $state('Monthly');
  let userName = $state('Mate');
  let password = $state('demo');
  let invoiceView = $state('list');
  let sidebarCollapsed = $state(loadSidebarCollapsed());
  let mobileNavOpen = $state(false);

  let cashBars = $derived(period === 'Monthly' ? cashMonthly : cashWeekly);

  let visibleInvoices = $derived(
    filter === 'All' ? invoiceRows : invoiceRows.filter((row) => row.status === filter)
  );

  let totals = $derived(
    invoiceRows.reduce(
      (acc, row) => {
        acc.revenue += row.status === 'Paid' ? row.amount : 0;
        acc.pending += row.status === 'Open' || row.status === 'Overdue' ? row.amount : 0;
        acc.overdue += row.status === 'Overdue' ? row.amount : 0;
        return acc;
      },
      { revenue: 0, pending: 0, overdue: 0 }
    )
  );

  let openCount = $derived(invoiceRows.filter((r) => r.status === 'Open').length);
  let overdueCount = $derived(invoiceRows.filter((r) => r.status === 'Overdue').length);
  let paidCount = $derived(invoiceRows.filter((r) => r.status === 'Paid').length);
  let expenseTotal = $derived(expenseItems.reduce((sum, item) => sum + item.amount, 0));

  let pageTitle = $derived(
    active === 'home'
      ? 'Dashboard'
      : active === 'account'
        ? 'My account'
        : active === 'settings'
          ? 'Settings'
          : menu.find((item) => item.id === active)?.label ?? active
  );

  function selectPage(id) {
    active = id;
    mobileNavOpen = false;
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
        <WorkspaceChrome {userName} {pageTitle} onNewInvoice={() => (active = 'invoices')} />

        {#if active === 'home'}
          <DashboardPage
            bind:period
            {totals}
            {openCount}
            {overdueCount}
            {paidCount}
            {expenseTotal}
            {cashBars}
            {invoiceRows}
            {currency}
            onViewInvoices={() => (active = 'invoices')}
          />
        {:else if active === 'invoices'}
          <InvoicesPage bind:filter bind:invoiceView {visibleInvoices} {kanbanColumns} {currency} />
        {:else if active === 'expenses'}
          <ExpensesPage {expenseItems} {expenseTotal} {currency} />
        {:else if active === 'account'}
          <AccountPage {userName} onBack={() => selectPage('home')} />
        {:else if active === 'settings'}
          <SettingsPage onBack={() => selectPage('home')} />
        {:else}
          <ModulePlaceholder
            title={menu.find((item) => item.id === active)?.label ?? active}
            onBack={() => selectPage('home')}
          />
        {/if}
      </main>
    </div>
  </div>
{/if}
