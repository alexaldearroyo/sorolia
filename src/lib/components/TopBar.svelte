<script>
  import Building2 from 'lucide-svelte/icons/building-2';
  import Search from 'lucide-svelte/icons/search';
  import Menu from 'lucide-svelte/icons/menu';
  import X from 'lucide-svelte/icons/x';
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
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
