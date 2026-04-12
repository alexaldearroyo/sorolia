<script>
  import { onMount } from 'svelte';

  const menu = [
    { id: 'home', label: 'Home', key: 'H' },
    { id: 'invoices', label: 'Invoices', key: 'I' },
    { id: 'expenses', label: 'Expenses', key: 'E' },
    { id: 'inventory', label: 'Inventory', key: 'N' },
    { id: 'customers', label: 'Customers', key: 'C' },
    { id: 'projects', label: 'PM', key: 'P' },
    { id: 'hr', label: 'HR', key: 'R' }
  ];

  const invoiceRows = [
    { id: 'FR-240901', created: '03/04/2026', due: '17/04/2026', customer: 'ABCDEF GmbH', status: 'Overdue', amount: 7400 },
    { id: 'FR-240902', created: '05/04/2026', due: '21/04/2026', customer: 'Morgen AG', status: 'Open', amount: 3250 },
    { id: 'FR-240903', created: '06/04/2026', due: '20/04/2026', customer: 'Northwind GmbH', status: 'Paid', amount: 9800 },
    { id: 'FR-240904', created: '07/04/2026', due: '28/04/2026', customer: 'Studio Klein', status: 'Paid', amount: 1520 },
    { id: 'FR-240905', created: '09/04/2026', due: '30/04/2026', customer: 'Velvet Labs', status: 'Offer', amount: 4600 },
    { id: 'FR-240906', created: '10/04/2026', due: '03/05/2026', customer: 'Kaiser Works', status: 'Open', amount: 6800 },
    { id: 'FR-240907', created: '11/04/2026', due: '25/04/2026', customer: 'Bergbau Süd', status: 'Open', amount: 2100 }
  ];

  const expenseBars = [
    { label: 'Jan', expenses: 24, income: 52, pending: 12 },
    { label: 'Feb', expenses: 31, income: 58, pending: 18 },
    { label: 'Mar', expenses: 27, income: 64, pending: 15 },
    { label: 'Apr', expenses: 38, income: 72, pending: 22 },
    { label: 'May', expenses: 33, income: 69, pending: 19 },
    { label: 'Jun', expenses: 41, income: 81, pending: 25 }
  ];

  const expenseItems = [
    { vendor: 'Office rent', type: 'Fixed', amount: 2400, date: '01/04/2026' },
    { vendor: 'Jira + tooling', type: 'Software', amount: 410, date: '04/04/2026' },
    { vendor: 'Travel to client', type: 'Travel', amount: 730, date: '06/04/2026' },
    { vendor: 'Cloud hosting', type: 'Infrastructure', amount: 980, date: '09/04/2026' },
    { vendor: 'Legal retainer', type: 'Services', amount: 1200, date: '10/04/2026' }
  ];

  const kanbanColumns = ['Offer', 'Open', 'Paid', 'Overdue'];

  let loggedIn = $state(false);
  let active = $state('home');
  let filter = $state('All');
  let period = $state('Monthly');
  let userName = $state('Mate');
  let password = $state('demo');
  let invoiceView = $state('list');
  let appsOpen = $state(false);

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

  const currency = (value) =>
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  function statusBadgeClass(status) {
    switch (status.toLowerCase()) {
      case 'offer':
        return 'bg-zinc-200 text-zinc-700 ring-zinc-300/80';
      case 'open':
        return 'bg-amber-100 text-amber-950 ring-amber-300/80';
      case 'paid':
        return 'bg-emerald-100 text-emerald-900 ring-emerald-300/80';
      case 'overdue':
        return 'bg-rose-100 text-rose-950 ring-rose-300/80';
      default:
        return 'bg-zinc-100 text-zinc-600 ring-zinc-200';
    }
  }

  function selectPage(id) {
    active = id;
    appsOpen = false;
  }

  function pageTitle() {
    if (active === 'home') return 'Dashboard';
    if (active === 'account') return 'My account';
    if (active === 'settings') return 'Settings';
    return menu.find((item) => item.id === active)?.label ?? active;
  }

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

  onMount(() => {
    const closeApps = (e) => {
      if (!(e.target instanceof HTMLElement) || !e.target.closest('[data-apps-dropdown]')) appsOpen = false;
    };
    document.addEventListener('click', closeApps);
    return () => document.removeEventListener('click', closeApps);
  });
</script>

{#if !loggedIn}
  <main
    class="grid min-h-screen items-center gap-8 bg-gradient-to-br from-cmr-900/95 via-cmr-950 to-zinc-900 p-5 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-10 md:p-10"
    style="background-image: linear-gradient(135deg, rgba(22, 60, 53, 0.92), rgba(15, 42, 38, 0.92)), url('/product-mark.jpeg'); background-size: cover; background-position: center;"
  >
    <section
      class="rounded-xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/25 md:p-10"
    >
      <div class="flex items-center gap-3 font-extrabold tracking-tight text-cmr-900">
        <img src="/product-mark.jpeg" alt="" class="h-11 w-11 rounded-lg object-cover" />
        <span class="text-lg">CMR Finance</span>
      </div>
      <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-odoo-600">Demo · inspired by ERP suites like Odoo</p>
      <h1 class="mt-6 max-w-[12ch] text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 md:text-5xl">
        Run the month before the month runs you.
      </h1>
      <p class="mt-4 text-sm leading-relaxed text-zinc-600">
        Invoices, expenses and cash in one workspace — list views, kanban-style boards and exports, similar to how modular ERP
        apps group accounting workflows.
      </p>
      <label class="mt-8 grid gap-2 text-sm font-semibold text-zinc-700">
        Name
        <input
          bind:value={userName}
          aria-label="Name"
          class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none ring-odoo-500/0 transition focus:border-odoo-500 focus:ring-4 focus:ring-odoo-500/20"
        />
      </label>
      <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Password
        <input
          type="password"
          bind:value={password}
          aria-label="Password"
          autocomplete="current-password"
          class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none ring-odoo-500/0 transition focus:border-odoo-500 focus:ring-4 focus:ring-odoo-500/20"
        />
      </label>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          class="min-h-11 rounded-lg bg-cmr-900 px-5 font-semibold text-white shadow-sm transition hover:bg-cmr-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-odoo-500/35"
          onclick={() => (loggedIn = true)}
        >
          Log in
        </button>
        <a href="/" class="text-sm font-bold text-odoo-600 hover:text-odoo-700 hover:underline">Forgot password</a>
      </div>
    </section>

    <aside
      class="flex flex-col justify-center gap-8 rounded-xl border border-white/25 bg-white/10 p-8 text-white backdrop-blur-md md:min-h-[320px]"
      aria-label="Preview dashboard"
    >
      <div class="flex items-center justify-between gap-4">
        <span class="text-sm font-medium text-emerald-100/90">Live status (sample data)</span>
        <strong class="text-3xl font-extrabold tracking-tight md:text-4xl">{currency(totals.pending)}</strong>
      </div>
      <div class="flex h-52 items-end gap-3 pt-4">
        {#each expenseBars as item}
          <span
            class="min-w-[14px] flex-1 rounded-t-lg bg-emerald-400/90"
            style={`height:${item.income}%`}
          ></span>
        {/each}
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
          <b class="block text-2xl font-bold">{invoiceRows.length}</b>
          <small class="text-xs text-emerald-100/85">Invoices</small>
        </div>
        <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
          <b class="block text-2xl font-bold">{openCount}</b>
          <small class="text-xs text-emerald-100/85">Open</small>
        </div>
        <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
          <b class="block text-2xl font-bold">{overdueCount}</b>
          <small class="text-xs text-emerald-100/85">Overdue</small>
        </div>
      </div>
    </aside>
  </main>
{:else}
  <div class="flex h-screen min-h-0 flex-col bg-zinc-100">
    <header
      class="z-20 flex h-12 shrink-0 items-center gap-3 border-b border-zinc-200 bg-white px-3 shadow-sm md:h-14 md:px-4"
    >
      <div class="relative flex items-center gap-2" data-apps-dropdown>
        <button
          type="button"
          class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-odoo-500"
          aria-expanded={appsOpen}
          aria-haspopup="true"
          onclick={(e) => {
            e.stopPropagation();
            appsOpen = !appsOpen;
          }}
        >
          <span class="hidden sm:inline">Apps</span>
          <svg class="h-5 w-5 text-odoo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
          </svg>
        </button>
        {#if appsOpen}
          <div
            class="absolute left-0 top-full z-30 mt-1 w-56 rounded-lg border border-zinc-200 bg-white py-1 shadow-lg"
            role="menu"
          >
            {#each menu as item}
              <button
                type="button"
                role="menuitem"
                class="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-zinc-800 hover:bg-zinc-50"
                onclick={() => selectPage(item.id)}
              >
                {item.label}
                <kbd class="rounded border border-zinc-200 bg-zinc-50 px-1.5 text-[10px] font-mono text-zinc-500">Alt+{item.key}</kbd>
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <nav class="hidden min-w-0 flex-1 items-center gap-2 text-sm text-zinc-500 md:flex" aria-label="Breadcrumb">
        <span class="truncate font-semibold text-odoo-600">CMR Finance</span>
        <span class="text-zinc-300" aria-hidden="true">/</span>
        <span class="truncate font-medium text-zinc-800">{pageTitle()}</span>
      </nav>

      <input
        type="search"
        placeholder="Search… (demo)"
        disabled
        class="hidden max-w-xs flex-1 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-500 md:block md:flex-none"
        aria-label="Search disabled in demo"
      />

      <span
        class="hidden rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-900 md:inline"
        title="Odoo often shows the active company / DB"
      >
        Demo DB
      </span>

      <div class="ml-auto flex items-center gap-2">
        <span class="hidden text-right text-xs leading-tight text-zinc-500 sm:block">
          <span class="block font-semibold text-zinc-800">{userName}</span>
          <span>Administrator</span>
        </span>
        <button
          type="button"
          class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-odoo-500"
          onclick={() => {
            loggedIn = false;
            appsOpen = false;
          }}
        >
          Log out
        </button>
      </div>
    </header>

    <div class="flex min-h-0 flex-1">
      <aside
        class="flex w-full shrink-0 flex-col gap-6 border-b border-cmr-800 bg-cmr-900 p-4 text-white md:w-56 md:border-b-0 md:border-r md:border-cmr-800"
        aria-label="Main menu"
      >
        <button
          type="button"
          class="flex items-center gap-3 rounded-lg p-1 text-left font-bold tracking-tight hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          onclick={() => selectPage('home')}
          aria-label="Go home"
        >
          <img src="/product-mark.jpeg" alt="" class="h-10 w-10 rounded-lg object-cover" />
          <span>CMR</span>
        </button>

        <nav class="grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-1" aria-label="Modules">
          {#each menu as item}
            <button
              type="button"
              class="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-emerald-100/90 transition hover:bg-cmr-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 {active === item.id
                ? 'bg-cmr-700 text-white shadow-inner'
                : ''}"
              onclick={() => selectPage(item.id)}
            >
              <span class="truncate">{item.label}</span>
              <kbd
                class="hidden shrink-0 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-100 md:inline-block"
              >
                {item.key}
              </kbd>
            </button>
          {/each}
        </nav>

        <div class="mt-auto grid gap-1 border-t border-white/10 pt-4 md:border-0 md:pt-0">
          <button
            type="button"
            class="rounded-lg px-3 py-2 text-left text-sm text-emerald-100/80 hover:bg-cmr-700 hover:text-white"
            onclick={() => selectPage('account')}
          >
            Account
          </button>
          <button
            type="button"
            class="rounded-lg px-3 py-2 text-left text-sm text-emerald-100/80 hover:bg-cmr-700 hover:text-white"
            onclick={() => selectPage('settings')}
          >
            Settings
          </button>
        </div>
      </aside>

      <main class="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-medium text-zinc-500">Welcome back, {userName}</p>
            <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">{pageTitle()}</h1>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              class="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-cmr-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-odoo-500"
            >
              Export
            </button>
            <button
              type="button"
              class="rounded-lg bg-cmr-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cmr-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-odoo-500/50"
              onclick={() => (active = 'invoices')}
            >
              New invoice
            </button>
          </div>
        </div>

        <p class="mb-6 rounded-lg border border-odoo-500/20 bg-odoo-500/5 px-4 py-3 text-sm text-zinc-700">
          <strong class="text-odoo-700">Tip:</strong> With focus outside fields, use
          <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">Alt</kbd>
          +
          <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">H I E …</kbd>
          to jump modules (like pinned shortcuts in a dense ERP UI).
        </p>

        {#if active === 'home'}
          <section class="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Current status">
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Paid income</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(totals.revenue)}</strong>
              <small class="mt-1 block text-xs font-medium text-emerald-700">+14% vs last month</small>
            </article>
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Pending income</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(totals.pending)}</strong>
              <small class="mt-1 block text-xs text-zinc-500">{openCount} open, {overdueCount} overdue</small>
            </article>
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Overdue risk</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-rose-700">{currency(totals.overdue)}</strong>
              <small class="mt-1 block text-xs text-zinc-500">Follow-up queue</small>
            </article>
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Expenses (Apr.)</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(expenseTotal)}</strong>
              <small class="mt-1 block text-xs text-zinc-500">Ready for tax export</small>
            </article>
          </section>

          <section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 class="text-lg font-bold text-zinc-900">Cash movement</h2>
                  <p class="text-sm text-zinc-500">{period} view · stacked bars</p>
                </div>
                <button
                  type="button"
                  class="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-cmr-900 hover:bg-zinc-100"
                  onclick={() => (period = period === 'Monthly' ? 'Weekly' : 'Monthly')}
                >
                  {period}
                </button>
              </div>
              <div class="mt-6 flex h-56 items-stretch gap-3 border-b border-zinc-200 pb-2" aria-label="Income expense chart">
                {#each expenseBars as item}
                  <div class="flex min-w-0 flex-1 flex-col justify-end">
                    <div class="grid h-full grid-cols-3 items-end gap-1">
                      <span
                        class="min-h-[6px] rounded-t-md bg-emerald-500"
                        style={`height:${item.income}%`}
                        title="Income"
                      ></span>
                      <span
                        class="min-h-[6px] rounded-t-md bg-rose-500"
                        style={`height:${item.expenses}%`}
                        title="Expenses"
                      ></span>
                      <span
                        class="min-h-[6px] rounded-t-md bg-amber-400"
                        style={`height:${item.pending}%`}
                        title="Pending"
                      ></span>
                    </div>
                    <small class="mt-2 block text-center text-xs font-medium text-zinc-500">{item.label}</small>
                  </div>
                {/each}
              </div>
              <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600">
                <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-emerald-500"></i> Income</span>
                <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Expenses</span>
                <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> Pending</span>
              </div>
            </article>

            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 class="text-lg font-bold text-zinc-900">Latest invoices</h2>
                  <p class="text-sm text-zinc-500">{paidCount} paid · {invoiceRows.length} total</p>
                </div>
                <button
                  type="button"
                  class="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-cmr-900 hover:bg-zinc-100"
                  onclick={() => (active = 'invoices')}
                >
                  View all
                </button>
              </div>
              <div class="mt-4 grid gap-2">
                {#each invoiceRows.slice(0, 5) as invoice}
                  <button
                    type="button"
                    class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-zinc-200 hover:bg-zinc-50 sm:grid-cols-[100px_1fr_auto]"
                    onclick={() => (active = 'invoices')}
                  >
                    <span class="font-mono text-xs font-semibold text-zinc-500">{invoice.id}</span>
                    <strong class="text-sm text-zinc-900">{invoice.customer}</strong>
                    <span
                      class="inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(
                        invoice.status
                      )}"
                    >
                      {invoice.status}
                    </span>
                  </button>
                {/each}
              </div>
            </article>
          </section>
        {:else if active === 'invoices'}
          <section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-xl font-bold text-zinc-900">Invoices</h2>
                <p class="mt-1 text-sm text-zinc-500">List or kanban — common patterns in accounting apps.</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'list'
                      ? 'bg-white text-cmr-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'}"
                    onclick={() => (invoiceView = 'list')}
                  >
                    List
                  </button>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'kanban'
                      ? 'bg-white text-cmr-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'}"
                    onclick={() => (invoiceView = 'kanban')}
                  >
                    Kanban
                  </button>
                </div>
                <button
                  type="button"
                  class="rounded-lg bg-cmr-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cmr-950"
                >
                  New invoice
                </button>
              </div>
            </div>

            <div class="mt-5 flex flex-wrap gap-2" aria-label="Invoice filters">
              {#each ['All', 'Offer', 'Open', 'Paid', 'Overdue'] as option}
                <button
                  type="button"
                  class="rounded-full border px-3.5 py-1.5 text-sm font-semibold transition {filter === option
                    ? 'border-cmr-900 bg-cmr-900 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'}"
                  onclick={() => (filter = option)}
                >
                  {option}
                </button>
              {/each}
            </div>

            {#if invoiceView === 'list'}
              <div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200">
                <table class="w-full min-w-[720px] text-left text-sm">
                  <thead>
                    <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500">
                      <th class="px-4 py-3" scope="col">Invoice</th>
                      <th class="px-4 py-3" scope="col">Created</th>
                      <th class="px-4 py-3" scope="col">Due</th>
                      <th class="px-4 py-3" scope="col">Customer</th>
                      <th class="px-4 py-3" scope="col">Status</th>
                      <th class="px-4 py-3 text-right" scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each visibleInvoices as invoice}
                      <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80">
                        <td class="px-4 py-3 font-mono font-semibold text-zinc-800">{invoice.id}</td>
                        <td class="px-4 py-3 text-zinc-600">{invoice.created}</td>
                        <td class="px-4 py-3 text-zinc-600">{invoice.due}</td>
                        <td class="px-4 py-3 font-medium text-zinc-900">{invoice.customer}</td>
                        <td class="px-4 py-3">
                          <span
                            class="inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(invoice.status)}"
                          >
                            {invoice.status}
                          </span>
                        </td>
                        <td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900">
                          {currency(invoice.amount)}
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {:else}
              <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {#each kanbanColumns as col}
                  <div class="rounded-xl border border-zinc-200 bg-zinc-50/50 p-3">
                    <h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">{col}</h3>
                    <div class="flex flex-col gap-2">
                      {#each visibleInvoices.filter((i) => i.status === col) as invoice}
                        <div class="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                          <p class="font-mono text-xs font-semibold text-zinc-500">{invoice.id}</p>
                          <p class="mt-1 text-sm font-semibold text-zinc-900">{invoice.customer}</p>
                          <p class="mt-2 text-sm font-bold tabular-nums text-odoo-700">{currency(invoice.amount)}</p>
                          <p class="mt-1 text-xs text-zinc-500">Due {invoice.due}</p>
                        </div>
                      {:else}
                        <p class="py-6 text-center text-xs text-zinc-400">No cards</p>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </section>
        {:else if active === 'expenses'}
          <section class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.9fr)]">
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 class="text-lg font-bold text-zinc-900">Expenses</h2>
                  <p class="text-sm text-zinc-500">Lines that feed dashboards and tax exports.</p>
                </div>
                <button
                  type="button"
                  class="rounded-lg bg-cmr-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cmr-950"
                >
                  Add expense
                </button>
              </div>
              <ul class="mt-6 grid gap-2">
                {#each expenseItems as item}
                  <li
                    class="flex flex-col gap-1 rounded-lg border border-zinc-100 bg-zinc-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <span class="font-semibold text-zinc-900">{item.vendor}</span>
                      <span class="mt-0.5 block text-sm text-zinc-500">{item.type} · {item.date}</span>
                    </div>
                    <span class="text-lg font-bold tabular-nums text-zinc-900">{currency(item.amount)}</span>
                  </li>
                {/each}
              </ul>
            </article>

            <article
              class="flex flex-col justify-center gap-4 rounded-xl border border-cmr-800 bg-gradient-to-br from-cmr-900 to-cmr-950 p-6 text-white shadow-lg"
            >
              <h2 class="text-lg font-bold">Tax export</h2>
              <p class="text-sm leading-relaxed text-emerald-100/90">
                April expenses categorized — review before closing the period (similar to accountant hand-off in ERP).
              </p>
              <p class="text-3xl font-extrabold tracking-tight">{currency(expenseTotal)}</p>
              <button
                type="button"
                class="w-full rounded-lg bg-white py-3 text-sm font-bold text-cmr-900 shadow-sm hover:bg-emerald-50"
              >
                Export CSV
              </button>
            </article>
          </section>
        {:else if active === 'account'}
          <section
            class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm"
          >
            <div
              class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-odoo-500/15 text-2xl font-bold text-odoo-600"
            >
              {userName.slice(0, 1).toUpperCase()}
            </div>
            <h2 class="mt-4 text-xl font-bold text-zinc-900">My account</h2>
            <p class="mt-2 text-sm text-zinc-500">Profile and security (demo placeholder).</p>
            <p class="mt-6 text-sm text-zinc-700">Signed in as <strong>{userName}</strong></p>
            <button
              type="button"
              class="mt-8 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              onclick={() => (active = 'home')}
            >
              Back to dashboard
            </button>
          </section>
        {:else if active === 'settings'}
          <section class="max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-8 shadow-sm">
            <h2 class="text-xl font-bold text-zinc-900">Settings</h2>
            <p class="mt-2 text-sm text-zinc-500">Company, taxes, document layouts — stub for a full Odoo-like settings tree.</p>
            <ul class="mt-6 grid gap-2 text-sm text-zinc-700">
              <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">General · Fiscal year</li>
              <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Invoicing · Payment terms</li>
              <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Users · Access rights</li>
            </ul>
            <button
              type="button"
              class="mt-8 rounded-lg bg-cmr-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cmr-950"
              onclick={() => (active = 'home')}
            >
              Back to dashboard
            </button>
          </section>
        {:else}
          <section
            class="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm"
          >
            <h2 class="text-2xl font-bold text-zinc-900">{menu.find((item) => item.id === active)?.label ?? active}</h2>
            <p class="max-w-md text-sm leading-relaxed text-zinc-500">
              Placeholder module — in Odoo you would install the corresponding app (Inventory, CRM, etc.) and get menus, list
              views, and forms here.
            </p>
            <button
              type="button"
              class="rounded-lg bg-cmr-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cmr-950"
              onclick={() => (active = 'home')}
            >
              Back to dashboard
            </button>
          </section>
        {/if}
      </main>
    </div>
  </div>
{/if}
