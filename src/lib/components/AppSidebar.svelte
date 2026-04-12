<script>
  import LayoutGrid from 'lucide-svelte/icons/layout-grid';
  import UserCircle from 'lucide-svelte/icons/user-circle';
  import Settings from 'lucide-svelte/icons/settings';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';

  let { menu, active, sidebarCollapsed = $bindable(), onSelect } = $props();
</script>

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
    onclick={() => onSelect('home')}
    aria-label="Apps · Dashboard"
    title={sidebarCollapsed ? 'Apps · Dashboard' : undefined}
  >
    <LayoutGrid class="h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
    {#if !sidebarCollapsed}
      <span class="truncate">Apps</span>
    {/if}
  </button>

  <nav class="grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-1" aria-label="Modules">
    {#each menu as item}
      {@const Icon = item.icon}
      <button
        type="button"
        title={sidebarCollapsed ? item.label : undefined}
        class="flex items-center gap-2 rounded-lg py-2.5 text-left text-sm font-medium text-sky-100/90 transition hover:bg-leah-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:px-3 {active === item.id
          ? 'bg-leah-800 text-white shadow-inner'
          : ''} {sidebarCollapsed ? 'justify-center md:px-0' : 'justify-between'}"
        onclick={() => onSelect(item.id)}
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
      onclick={() => onSelect('account')}
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
      onclick={() => onSelect('settings')}
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
