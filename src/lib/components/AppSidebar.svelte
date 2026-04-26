<script>
  import LayoutGrid from 'lucide-svelte/icons/layout-grid';
  import UserCircle from 'lucide-svelte/icons/user-circle';
  import Settings from 'lucide-svelte/icons/settings';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';

  let { menu, active, mobileNavOpen = false, sidebarCollapsed = $bindable(), onSelect } = $props();

  let isMd = $state(
    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  );

  let asideEl = $state();

  $effect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => {
      isMd = mq.matches;
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  });

  $effect(() => {
    if (!mobileNavOpen || isMd || !asideEl) return;
    queueMicrotask(() => {
      const target = /** @type {HTMLElement | null} */ (
        asideEl?.querySelector('nav button, button')
      );
      target?.focus?.({ preventScroll: true });
    });
  });

  /** Mobile drawer always shows labels; desktop respects the collapsed flag. */
  let showLabels = $derived(!isMd || !sidebarCollapsed);
</script>

<aside
  bind:this={asideEl}
  id="app-sidebar"
  class="flex shrink-0 flex-col gap-4 border-r border-leah-800 bg-leah-900 p-3 text-white shadow-none transition-[transform,width] duration-200 ease-out md:relative md:top-0 md:z-auto md:h-full md:min-h-0 md:max-w-none md:gap-5 md:self-stretch md:py-4 md:shadow-none {mobileNavOpen
    ? 'pointer-events-auto translate-x-0'
    : 'pointer-events-none -translate-x-full'} fixed bottom-0 left-0 top-12 z-40 w-[min(18rem,88vw)] max-w-sm md:pointer-events-auto md:bottom-auto md:translate-x-0 {sidebarCollapsed
    ? 'md:w-14 md:overflow-hidden md:px-2'
    : 'md:w-56 md:px-3'}"
  aria-label="Main navigation"
  inert={!isMd && !mobileNavOpen}
>
  <button
    type="button"
    class="flex w-full items-center gap-3 rounded-lg p-1.5 text-left font-bold tracking-tight text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 {sidebarCollapsed
      ? 'justify-center md:justify-center'
      : ''}"
    onclick={() => onSelect('home')}
    aria-label="Apps · Dashboard"
    title={sidebarCollapsed && isMd ? 'Apps · Dashboard' : undefined}
  >
    <LayoutGrid class="h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
    {#if showLabels}
      <span class="truncate">Apps</span>
    {/if}
  </button>

  <nav class="grid grid-cols-1 gap-1" aria-label="Modules">
    {#each menu as item}
      {@const Icon = item.icon}
      <button
        type="button"
        title={sidebarCollapsed && isMd ? item.label : undefined}
        aria-keyshortcuts={`Alt+${item.key}`}
        class="flex items-center gap-2 rounded-lg py-2.5 text-left text-sm font-medium text-sky-100/90 transition hover:bg-leah-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:px-3 {active === item.id
          ? 'bg-leah-800 text-white shadow-inner'
          : ''} {sidebarCollapsed && isMd ? 'justify-center md:px-0' : 'justify-start'}"
        onclick={() => onSelect(item.id)}
      >
        <span class="flex min-w-0 items-center gap-2">
          <Icon class="h-4 w-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden="true" />
          {#if showLabels}
            <span class="truncate">{item.label}</span>
          {/if}
        </span>
      </button>
    {/each}
  </nav>

  <div class="mt-auto flex flex-col gap-1 border-t border-white/10 pt-3 md:border-0 md:pt-0">
    <button
      type="button"
      class="flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white {sidebarCollapsed && isMd
        ? 'justify-center md:px-0'
        : 'px-3'}"
      onclick={() => onSelect('account')}
      title={sidebarCollapsed && isMd ? 'Account' : undefined}
    >
      <UserCircle class="h-4 w-4 shrink-0" aria-hidden="true" />
      {#if showLabels}
        <span>Account</span>
      {/if}
    </button>
    <button
      type="button"
      class="flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white {sidebarCollapsed && isMd
        ? 'justify-center md:px-0'
        : 'px-3'}"
      onclick={() => onSelect('settings')}
      title={sidebarCollapsed && isMd ? 'Settings' : undefined}
    >
      <Settings class="h-4 w-4 shrink-0" aria-hidden="true" />
      {#if showLabels}
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
