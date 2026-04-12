<script>
  import LayoutGrid from 'lucide-svelte/icons/layout-grid';
  import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
  import FileText from 'lucide-svelte/icons/file-text';
  import Receipt from 'lucide-svelte/icons/receipt';
  import Package from 'lucide-svelte/icons/package';
  import Users from 'lucide-svelte/icons/users';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import UserCircle from 'lucide-svelte/icons/user-circle';
  import Settings from 'lucide-svelte/icons/settings';
  import LogIn from 'lucide-svelte/icons/log-in';
  import LogOut from 'lucide-svelte/icons/log-out';
  import Building2 from 'lucide-svelte/icons/building-2';
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Download from 'lucide-svelte/icons/download';
  import Plus from 'lucide-svelte/icons/plus';
  import Search from 'lucide-svelte/icons/search';

  const workspace = {
    company: 'Voltstack Europe GmbH',
    tagline: 'Leah · Finance workspace',
    short: 'Voltstack',
    env: 'Demo'
  };

  const menu = [
    { id: 'home', label: 'Dashboard', key: 'H', icon: LayoutDashboard },
    { id: 'invoices', label: 'Invoices', key: 'I', icon: FileText },
    { id: 'expenses', label: 'Expenses', key: 'E', icon: Receipt },
    { id: 'inventory', label: 'Inventory', key: 'N', icon: Package },
    { id: 'customers', label: 'Customers', key: 'C', icon: Users },
    { id: 'projects', label: 'Project Management', key: 'P', icon: FolderKanban },
    { id: 'hr', label: 'Human Resources', key: 'R', icon: Briefcase }
  ];

  const invoiceRows = [
    { id: 'INV-2026-0148', created: '28/03/2026', due: '12/04/2026', customer: 'Klärmann Stahlhandel GmbH', status: 'Overdue', amount: 18940 },
    { id: 'INV-2026-0156', created: '02/04/2026', due: '16/04/2026', customer: 'BioWerk Bayern AG', status: 'Open', amount: 6240 },
    { id: 'INV-2026-0152', created: '01/04/2026', due: '15/04/2026', customer: 'Nordlicht Datacenter UG', status: 'Paid', amount: 28400 },
    { id: 'INV-2026-0159', created: '04/04/2026', due: '18/04/2026', customer: 'Studio Merz & Kollegen', status: 'Paid', amount: 3840 },
    { id: 'INV-2026-0161', created: '05/04/2026', due: '19/04/2026', customer: 'Velvet Labs SAS (Paris)', status: 'Offer', amount: 12750 },
    { id: 'INV-2026-0164', created: '08/04/2026', due: '22/04/2026', customer: 'Kaiser Fertigung GmbH', status: 'Open', amount: 9560 },
    { id: 'INV-2026-0166', created: '09/04/2026', due: '23/04/2026', customer: 'Bergbau Süd Logistik', status: 'Open', amount: 4180 }
  ];

  /** Stacked bar chart: relative scale 0–100 per series (cash rhythm, not literal €). */
  const cashMonthly = [
    { label: 'Nov', expenses: 31, income: 54, pending: 12 },
    { label: 'Dec', expenses: 38, income: 48, pending: 22 },
    { label: 'Jan', expenses: 29, income: 56, pending: 15 },
    { label: 'Feb', expenses: 34, income: 61, pending: 18 },
    { label: 'Mar', expenses: 30, income: 58, pending: 14 },
    { label: 'Apr', expenses: 37, income: 71, pending: 24 }
  ];

  const cashWeekly = [
    { label: '31 Mar–6 Apr', expenses: 52, income: 68, pending: 28 },
    { label: '7–13 Apr', expenses: 44, income: 74, pending: 21 },
    { label: '14–20 Apr', expenses: 61, income: 62, pending: 35 },
    { label: '21–27 Apr', expenses: 48, income: 81, pending: 19 }
  ];

  const expenseItems = [
    { vendor: 'Siemensstadt Office Park · Miete', type: 'Fixed', amount: 8900, date: '01/04/2026' },
    { vendor: 'Atlassian Cloud (Jira + Confluence)', type: 'Software', amount: 612, date: '03/04/2026' },
    { vendor: 'Deutsche Bahn · München Kundenreise', type: 'Travel', amount: 284, date: '05/04/2026' },
    { vendor: 'Hetzner Cloud · prod-eu-3', type: 'Infrastructure', amount: 1042, date: '08/04/2026' },
    { vendor: 'Kanzlei Brinkmann · Retainer Q2', type: 'Legal', amount: 2400, date: '10/04/2026' }
  ];

  const kanbanColumns = ['Offer', 'Open', 'Paid', 'Overdue'];

  const SIDEBAR_COLLAPSED_KEY = 'leah-sidebar-collapsed';

  function loadSidebarCollapsed() {
    if (typeof localStorage === 'undefined') return false;
    try {
      return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true';
    } catch {
      return false;
    }
  }

  let loggedIn = $state(false);
  let active = $state('home');
  let filter = $state('All');
  let period = $state('Monthly');
  let userName = $state('Mate');
  let password = $state('demo');
  let invoiceView = $state('list');
  let sidebarCollapsed = $state(loadSidebarCollapsed());

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

  const currency = (value) =>
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  function statusBadgeClass(status) {
    switch (status.toLowerCase()) {
      case 'offer':
        return 'bg-zinc-200 text-zinc-700 ring-zinc-300/80';
      case 'open':
        return 'bg-amber-100 text-amber-950 ring-amber-300/80';
      case 'paid':
        return 'bg-sky-100 text-sky-950 ring-sky-300/80';
      case 'overdue':
        return 'bg-rose-100 text-rose-950 ring-rose-300/80';
      default:
        return 'bg-zinc-100 text-zinc-600 ring-zinc-200';
    }
  }

  function selectPage(id) {
    active = id;
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
  <main
    class="grid min-h-screen items-center gap-8 p-5 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-10 md:p-10"
    style="background-image: linear-gradient(135deg, rgba(19, 36, 71, 0.94), rgba(10, 22, 40, 0.92)), url('/product-mark.jpeg'); background-size: cover; background-position: center;"
  >
    <section class="rounded-xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/25 md:p-10">
      <div class="flex items-center gap-3 font-extrabold tracking-tight text-leah-900">
        <img src="/product-mark.jpeg" alt="" class="h-11 w-11 rounded-lg object-cover" />
        <span class="text-lg">Leah</span>
      </div>
      <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-leah-700">Finance workspace · demo data</p>
      <h1 class="mt-6 max-w-[14ch] text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 md:text-5xl">
        Your month, under control.
      </h1>
      <p class="mt-4 text-sm leading-relaxed text-zinc-600">
        Cash, invoices and spend in one place — list and kanban views, exports, and a sidebar that works like the tools your
        team already uses.
      </p>
      <label class="mt-8 grid gap-2 text-sm font-semibold text-zinc-700">
        Name
        <input
          bind:value={userName}
          aria-label="Name"
          class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"
        />
      </label>
      <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Password
        <input
          type="password"
          bind:value={password}
          aria-label="Password"
          autocomplete="current-password"
          class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"
        />
      </label>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-leah-900 px-5 font-semibold text-white shadow-sm transition hover:bg-leah-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-leah-700/35"
          onclick={() => (loggedIn = true)}
        >
          <LogIn class="h-4 w-4" aria-hidden="true" />
          Log in
        </button>
        <a href="/" class="text-sm font-bold text-leah-800 hover:text-leah-900 hover:underline">Forgot password</a>
      </div>
    </section>

    <aside
      class="flex flex-col justify-center gap-8 rounded-xl border border-white/25 bg-white/10 p-8 text-white backdrop-blur-md md:min-h-[320px]"
      aria-label="Preview dashboard"
    >
      <div class="flex items-center justify-between gap-4">
        <span class="text-sm font-medium text-sky-100/90">Outstanding AR (demo)</span>
        <strong class="text-3xl font-extrabold tracking-tight md:text-4xl">{currency(totals.pending)}</strong>
      </div>
      <div class="flex h-52 items-end gap-2 pt-4">
        {#each cashMonthly as item}
          <span class="min-w-[12px] flex-1 rounded-t-lg bg-sky-400/90" style={`height:${item.income}%`}></span>
        {/each}
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
          <b class="block text-2xl font-bold">{invoiceRows.length}</b>
          <small class="text-xs text-sky-100/85">Invoices</small>
        </div>
        <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
          <b class="block text-2xl font-bold">{openCount}</b>
          <small class="text-xs text-sky-100/85">Open</small>
        </div>
        <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
          <b class="block text-2xl font-bold">{overdueCount}</b>
          <small class="text-xs text-sky-100/85">Overdue</small>
        </div>
      </div>
    </aside>
  </main>
{:else}
  <div class="flex h-screen min-h-0 flex-col bg-zinc-100">
    <header
      class="z-20 flex h-12 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 shadow-sm md:h-14 md:gap-3 md:px-4"
    >
      <div class="flex min-w-0 items-center gap-2 md:gap-3">
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-leah-800 to-leah-900 text-sm font-extrabold text-white"
          aria-hidden="true"
        >
          {workspace.short.slice(0, 1)}
        </div>
        <div class="min-w-0">
          <div class="flex max-w-[200px] items-center gap-0.5 sm:max-w-xs md:max-w-md">
            <Building2 class="hidden h-4 w-4 shrink-0 text-leah-800 sm:block" aria-hidden="true" />
            <span class="truncate pl-0.5 text-sm font-bold text-zinc-900 sm:pl-1">{workspace.company}</span>
            <ChevronDown class="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
          </div>
          <p class="truncate text-xs text-zinc-500">{workspace.tagline}</p>
        </div>
      </div>

      <nav class="mx-1 hidden min-w-0 items-center gap-2 text-sm text-zinc-400 lg:flex" aria-label="Breadcrumb">
        <span class="text-zinc-300" aria-hidden="true">/</span>
        <span class="truncate font-medium text-zinc-700">{pageTitle()}</span>
      </nav>

      <div class="relative mx-1 hidden max-w-md flex-1 md:block">
        <Search
          class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search in workspace… (demo)"
          disabled
          class="w-full cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm text-zinc-500"
          aria-label="Search disabled in demo"
        />
      </div>

      <span
        class="hidden rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900 md:inline"
      >
        {workspace.env ?? 'Demo'}
      </span>

      <div class="ml-auto flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          class="hidden items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 text-left hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:flex"
          onclick={() => selectPage('account')}
          aria-label={`My account, ${userName}`}
        >
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leah-900/10 text-leah-800 ring-1 ring-leah-900/15"
            aria-hidden="true"
          >
            <UserCircle class="h-5 w-5" strokeWidth={2} />
          </span>
          <span class="text-xs leading-tight text-zinc-500">
            <span class="block font-semibold text-zinc-900">{userName}</span>
            <span class="block text-zinc-500">Admin</span>
          </span>
        </button>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:px-3"
          onclick={() => (loggedIn = false)}
        >
          <LogOut class="h-4 w-4" aria-hidden="true" />
          <span class="hidden sm:inline">Log out</span>
        </button>
      </div>
    </header>

    <div class="flex min-h-0 flex-1">
      <aside
        class="flex w-full shrink-0 flex-col gap-4 border-b border-leah-800 bg-leah-900 p-3 text-white transition-[width] duration-200 ease-out md:gap-5 md:border-b-0 md:border-r md:border-leah-800 md:py-4 {sidebarCollapsed
          ? 'md:w-14 md:overflow-hidden md:px-2'
          : 'md:w-56 md:px-3'}"
        aria-label="Main menu"
      >
        <button
          type="button"
          class="flex w-full items-center gap-3 rounded-lg p-1.5 text-left font-bold tracking-tight text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 {sidebarCollapsed
            ? 'justify-center md:justify-center'
            : ''}"
          onclick={() => selectPage('home')}
          aria-label="Apps · Dashboard"
          title={sidebarCollapsed ? 'Apps · Dashboard' : undefined}
        >
          <LayoutGrid class="h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
          {#if !sidebarCollapsed}
            <span class="truncate">Apps</span>
          {/if}
        </button>

        <nav
          class="grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-1"
          aria-label="Modules"
        >
          {#each menu as item}
            {@const Icon = item.icon}
            <button
              type="button"
              title={sidebarCollapsed ? item.label : undefined}
              class="flex items-center gap-2 rounded-lg py-2.5 text-left text-sm font-medium text-sky-100/90 transition hover:bg-leah-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:px-3 {active === item.id
                ? 'bg-leah-800 text-white shadow-inner'
                : ''} {sidebarCollapsed ? 'justify-center md:px-0' : 'justify-between'}"
              onclick={() => selectPage(item.id)}
            >
              <span class="flex min-w-0 items-center gap-2">
                <Icon class="h-4 w-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden="true" />
                {#if !sidebarCollapsed}
                  <span class="truncate">{item.label}</span>
                {/if}
              </span>
              {#if !sidebarCollapsed}
                <kbd
                  class="hidden shrink-0 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-sky-100 md:inline-block"
                >
                  {item.key}
                </kbd>
              {/if}
            </button>
          {/each}
        </nav>

        <div class="mt-auto flex flex-col gap-1 border-t border-white/10 pt-3 md:border-0 md:pt-0">
          <button
            type="button"
            class="flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white {sidebarCollapsed
              ? 'justify-center md:px-0'
              : 'px-3'}"
            onclick={() => selectPage('account')}
            title={sidebarCollapsed ? 'Account' : undefined}
          >
            <UserCircle class="h-4 w-4 shrink-0" aria-hidden="true" />
            {#if !sidebarCollapsed}
              <span>Account</span>
            {/if}
          </button>
          <button
            type="button"
            class="flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white {sidebarCollapsed
              ? 'justify-center md:px-0'
              : 'px-3'}"
            onclick={() => selectPage('settings')}
            title={sidebarCollapsed ? 'Settings' : undefined}
          >
            <Settings class="h-4 w-4 shrink-0" aria-hidden="true" />
            {#if !sidebarCollapsed}
              <span>Settings</span>
            {/if}
          </button>

          <button
            type="button"
            class="hidden items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white md:flex {sidebarCollapsed
              ? 'justify-center px-0'
              : 'px-3'}"
            onclick={() => (sidebarCollapsed = !sidebarCollapsed)}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {#if sidebarCollapsed}
              <ChevronRight class="h-4 w-4 shrink-0" aria-hidden="true" />
            {:else}
              <ChevronLeft class="h-4 w-4 shrink-0" aria-hidden="true" />
              <span class="truncate">Collapse</span>
            {/if}
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
              class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700"
            >
              <Download class="h-4 w-4" aria-hidden="true" />
              Export
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50"
              onclick={() => (active = 'invoices')}
            >
              <Plus class="h-4 w-4" aria-hidden="true" />
              New invoice
            </button>
          </div>
        </div>

        <p class="mb-6 rounded-lg border border-leah-700/20 bg-leah-900/5 px-4 py-3 text-sm text-zinc-700">
          <strong class="text-leah-900">Shortcuts:</strong> click outside any field, then
          <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">Alt</kbd>
          +
          <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">H (Dashboard) I E …</kbd>
          to switch modules. Sidebar can collapse like GitLab / ClickUp (desktop).
        </p>

        {#if active === 'home'}
          <section class="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Current status">
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Paid income (YTD)</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(totals.revenue)}</strong>
              <small class="mt-1 block text-xs font-medium text-sky-700">+8,4% vs prior year</small>
            </article>
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Outstanding AR</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(totals.pending)}</strong>
              <small class="mt-1 block text-xs text-zinc-500">{openCount} open · {overdueCount} overdue</small>
            </article>
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">Overdue exposure</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-rose-700">{currency(totals.overdue)}</strong>
              <small class="mt-1 block text-xs text-zinc-500">Dunning · Klärmann + others</small>
            </article>
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <span class="text-sm font-medium text-zinc-500">OpEx (Apr.)</span>
              <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(expenseTotal)}</strong>
              <small class="mt-1 block text-xs text-zinc-500">Posted · DATEV export ready</small>
            </article>
          </section>

          <section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 class="text-lg font-bold text-zinc-900">Cash movement</h2>
                  <p class="text-sm text-zinc-500">
                    {period === 'Monthly' ? 'Last 6 closed months · normalized stack' : 'April · weekly buckets'}
                  </p>
                </div>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"
                  onclick={() => (period = period === 'Monthly' ? 'Weekly' : 'Monthly')}
                >
                  {period === 'Monthly' ? 'Monthly' : 'Weekly'}
                </button>
              </div>
              <div class="mt-6 flex h-56 items-stretch gap-2 border-b border-zinc-200 pb-2 sm:gap-3" aria-label="Cash chart">
                {#each cashBars as item}
                  <div class="flex min-w-0 flex-1 flex-col justify-end">
                    <div class="grid h-full grid-cols-3 items-end gap-1">
                      <span
                        class="min-h-[6px] rounded-t-md bg-sky-500"
                        style={`height:${item.income}%`}
                        title="Inflows"
                      ></span>
                      <span
                        class="min-h-[6px] rounded-t-md bg-rose-500"
                        style={`height:${item.expenses}%`}
                        title="Outflows"
                      ></span>
                      <span
                        class="min-h-[6px] rounded-t-md bg-amber-400"
                        style={`height:${item.pending}%`}
                        title="In transit"
                      ></span>
                    </div>
                    <small class="mt-2 block text-center text-[10px] font-medium leading-tight text-zinc-500 sm:text-xs">
                      {item.label}
                    </small>
                  </div>
                {/each}
              </div>
              <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600">
                <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span>
                <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span>
                <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span>
              </div>
            </article>

            <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 class="text-lg font-bold text-zinc-900">Latest invoices</h2>
                  <p class="text-sm text-zinc-500">{paidCount} paid · {invoiceRows.length} in pipeline</p>
                </div>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"
                  onclick={() => (active = 'invoices')}
                >
                  <FileText class="h-4 w-4" aria-hidden="true" />
                  View all
                </button>
              </div>
              <div class="mt-4 grid gap-2">
                {#each invoiceRows.slice(0, 5) as invoice}
                  <button
                    type="button"
                    class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-zinc-200 hover:bg-zinc-50 sm:grid-cols-[108px_1fr_auto]"
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
                <p class="mt-1 text-sm text-zinc-500">Customer invoices · EUR · net 14</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                  <button
                    type="button"
                    class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'list'
                      ? 'bg-white text-leah-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'}"
                    onclick={() => (invoiceView = 'list')}
                  >
                    List
                  </button>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'kanban'
                      ? 'bg-white text-leah-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'}"
                    onclick={() => (invoiceView = 'kanban')}
                  >
                    Kanban
                  </button>
                </div>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
                >
                  <Plus class="h-4 w-4" aria-hidden="true" />
                  New invoice
                </button>
              </div>
            </div>

            <div class="mt-5 flex flex-wrap gap-2" aria-label="Invoice filters">
              {#each ['All', 'Offer', 'Open', 'Paid', 'Overdue'] as option}
                <button
                  type="button"
                  class="rounded-full border px-3.5 py-1.5 text-sm font-semibold transition {filter === option
                    ? 'border-leah-900 bg-leah-900 text-white'
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
                          <p class="mt-2 text-sm font-bold tabular-nums text-leah-800">{currency(invoice.amount)}</p>
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
                  <p class="text-sm text-zinc-500">Cost centers · DE · April 2026</p>
                </div>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
                >
                  <Plus class="h-4 w-4" aria-hidden="true" />
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
              class="flex flex-col justify-center gap-4 rounded-xl border border-leah-800 bg-gradient-to-br from-leah-900 to-leah-950 p-6 text-white shadow-lg"
            >
              <h2 class="text-lg font-bold">Tax export</h2>
              <p class="text-sm leading-relaxed text-sky-100/90">
                April booking complete — review before closing (GoBD-friendly export stub).
              </p>
              <p class="text-3xl font-extrabold tracking-tight">{currency(expenseTotal)}</p>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-leah-900 shadow-sm hover:bg-sky-50"
              >
                <Download class="h-4 w-4" aria-hidden="true" />
                Export CSV
              </button>
            </article>
          </section>
        {:else if active === 'account'}
          <section class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm">
            <div
              class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leah-900/10 text-2xl font-bold text-leah-800"
            >
              {userName.slice(0, 1).toUpperCase()}
            </div>
            <h2 class="mt-4 text-xl font-bold text-zinc-900">My account</h2>
            <p class="mt-2 text-sm text-zinc-500">Profile and security (demo).</p>
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
            <p class="mt-2 text-sm text-zinc-500">Company, taxes, sequences — tree placeholder.</p>
            <ul class="mt-6 grid gap-2 text-sm text-zinc-700">
              <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">General · Fiscal year</li>
              <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Invoicing · Payment terms</li>
              <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Users · Access rights</li>
            </ul>
            <button
              type="button"
              class="mt-8 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
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
              Module placeholder — here you would load the real app (inventory, CRM, HR, …) with menus and views.
            </p>
            <button
              type="button"
              class="rounded-lg bg-leah-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
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
