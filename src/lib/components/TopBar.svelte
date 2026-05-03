<script>
  import Building2 from 'lucide-svelte/icons/building-2';
  import Search from 'lucide-svelte/icons/search';
  import Menu from 'lucide-svelte/icons/menu';
  import X from 'lucide-svelte/icons/x';
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import Package from 'lucide-svelte/icons/package';
  import UserMenu from './UserMenu.svelte';
  import NotificationsPanel from './NotificationsPanel.svelte';
  import { t } from '../i18n.js';

  let {
    workspace,
    pageTitle,
    currentUser,
    users = [],
    canSettings = false,
    notifications = [],
    mobileNavOpen,
    backTarget = null,
    capitalAlert = null,
    onCapitalAlertClick = () => {},
    onCapitalRestock = () => {},
    onToggleMobileNav,
    onAccount,
    onSettings,
    onSwitchUser,
    onLogout,
    onOpenSearch,
    onSelectNotification,
    onDismissNotification
  } = $props();
</script>

<header
  class="z-20 flex h-12 min-w-0 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 shadow-sm transition-colors md:h-14 md:gap-3 md:px-4 dark:border-slate-800 dark:bg-slate-900"
>
  {#if backTarget}
    <button
      type="button"
      class="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:px-3 md:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      onclick={backTarget.onClick}
    >
      <ArrowLeft class="h-4 w-4" aria-hidden="true" />
      <span class="hidden md:inline">{backTarget.label}</span>
    </button>
  {:else}
    <button
      type="button"
      class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      onclick={onToggleMobileNav}
      aria-expanded={mobileNavOpen}
      aria-controls="app-sidebar"
      aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
    >
      {#if mobileNavOpen}
        <X class="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      {:else}
        <Menu class="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      {/if}
    </button>
  {/if}

  <div class="flex min-w-0 flex-1 items-center gap-2 md:flex-none md:gap-2">
    <Building2 class="h-4 w-4 shrink-0 text-leah-800 dark:text-leah-700" aria-hidden="true" />
    <span class="min-w-0 truncate text-sm font-semibold text-zinc-800 dark:text-slate-100" title={workspace.tagline}>
      {workspace.company}
    </span>
  </div>

  <nav
    class="mx-1 hidden min-w-0 max-w-[12rem] shrink-0 items-center gap-1.5 truncate text-sm text-zinc-400 lg:flex"
    aria-label="Breadcrumb"
  >
    <span class="text-zinc-300 dark:text-slate-600" aria-hidden="true">/</span>
    <span class="truncate font-medium text-zinc-700 dark:text-slate-200">{pageTitle}</span>
  </nav>

  <button
    type="button"
    class="relative mx-1 hidden max-w-md flex-1 cursor-text items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-3 pr-2 text-left text-sm text-zinc-500 hover:border-zinc-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 xl:flex dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800"
    onclick={onOpenSearch}
    aria-label="Search workspace"
    aria-keyshortcuts="Control+K Meta+K"
  >
    <Search class="h-4 w-4 text-zinc-400" aria-hidden="true" />
    <span class="flex-1 truncate text-zinc-500 dark:text-slate-400">{t('topbar.search.hint', 'Search workspace…')}</span>
    <span class="rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
      ⌘ K
    </span>
  </button>

  <button
    type="button"
    class="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-leah-800 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 xl:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
    onclick={onOpenSearch}
    aria-label="Open search"
  >
    <Search class="h-4 w-4" aria-hidden="true" />
  </button>

  {#if capitalAlert}
    <div class="flex shrink-0 items-center gap-1 sm:gap-1.5">
      <button
        type="button"
        class="hidden items-center gap-1.5 rounded-full border-2 px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 sm:inline-flex {capitalAlert.severity === 'critical'
          ? 'animate-pulse border-rose-700 bg-rose-600 text-white hover:bg-rose-700'
          : 'border-amber-500 bg-amber-100 text-amber-900 hover:bg-amber-200 dark:border-amber-600 dark:bg-amber-900/60 dark:text-amber-100 dark:hover:bg-amber-900'}"
        onclick={onCapitalAlertClick}
        title="Working capital below threshold · click to open dashboard"
      >
        <AlertTriangle class="h-3.5 w-3.5" aria-hidden="true" />
        <span>{capitalAlert.label}</span>
      </button>
      <button
        type="button"
        class="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-zinc-800 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:inline-flex dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        onclick={onCapitalRestock}
        title="Open inventory filtered to low stock"
      >
        <Package class="h-3.5 w-3.5" aria-hidden="true" />
        Restock
      </button>
      <button
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center rounded-lg sm:hidden {capitalAlert.severity === 'critical'
          ? 'animate-pulse bg-rose-600 text-white'
          : 'bg-amber-200 text-amber-900'}"
        onclick={onCapitalAlertClick}
        aria-label={capitalAlert.label}
        title={capitalAlert.label}
      >
        <AlertTriangle class="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        onclick={onCapitalRestock}
        aria-label="Open low-stock inventory"
        title="Low stock · open inventory"
      >
        <Package class="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  {/if}

  <span
    class="hidden rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900 md:inline xl:order-none dark:border-sky-700 dark:bg-sky-900/40 dark:text-sky-200"
  >
    {workspace.env ?? 'Demo'}
  </span>

  <div class="flex shrink-0 items-center gap-1 sm:gap-2 xl:ml-auto">
    <NotificationsPanel {notifications} onSelect={onSelectNotification} onDismiss={onDismissNotification} />
    <UserMenu
      {currentUser}
      {users}
      {canSettings}
      {onAccount}
      {onSettings}
      {onSwitchUser}
      {onLogout}
    />
  </div>
</header>
