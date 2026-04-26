<script>
  import UserCircle from 'lucide-svelte/icons/user-circle';
  import LogOut from 'lucide-svelte/icons/log-out';
  import Building2 from 'lucide-svelte/icons/building-2';
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import Search from 'lucide-svelte/icons/search';
  import Menu from 'lucide-svelte/icons/menu';
  import X from 'lucide-svelte/icons/x';

  let { workspace, pageTitle, userName, mobileNavOpen, onToggleMobileNav, onAccount, onLogout } =
    $props();
</script>

<header
  class="z-20 flex h-12 min-w-0 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 shadow-sm md:h-14 md:gap-3 md:px-4"
>
  <button
    type="button"
    class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:hidden"
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

  <div class="flex min-w-0 flex-1 items-center gap-2 md:flex-none md:gap-3">
    <div
      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-leah-800 to-leah-900 text-sm font-extrabold text-white"
      aria-hidden="true"
    >
      {workspace.short.slice(0, 1)}
    </div>
    <div class="min-w-0 flex-1 md:flex-none">
      <div class="flex min-w-0 max-w-full items-center gap-0.5 sm:max-w-xs md:max-w-md">
        <Building2 class="hidden h-4 w-4 shrink-0 text-leah-800 sm:block" aria-hidden="true" />
        <span class="min-w-0 truncate pl-0.5 text-sm font-bold text-zinc-900 sm:pl-1">{workspace.company}</span>
        <ChevronDown class="hidden h-4 w-4 shrink-0 text-zinc-400 sm:block" aria-hidden="true" />
      </div>
      <p class="truncate text-xs text-zinc-500">{workspace.tagline}</p>
    </div>
  </div>

  <nav
    class="mx-1 hidden min-w-0 max-w-[11rem] shrink-0 items-center gap-2 truncate text-sm text-zinc-400 lg:flex"
    aria-label="Breadcrumb"
  >
    <span class="text-zinc-300" aria-hidden="true">/</span>
    <span class="truncate font-medium text-zinc-700">{pageTitle}</span>
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

  <div class="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-lg text-leah-800 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:hidden"
      onclick={onAccount}
      aria-label={'My account, ' + userName}
    >
      <UserCircle class="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </button>
    <button
      type="button"
      class="hidden items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 text-left hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:flex"
      onclick={onAccount}
      aria-label={'My account, ' + userName}
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
      onclick={onLogout}
    >
      <LogOut class="h-4 w-4" aria-hidden="true" />
      <span class="hidden sm:inline">Log out</span>
    </button>
  </div>
</header>
