<script>
  import Bell from 'lucide-svelte/icons/bell';
  import BellOff from 'lucide-svelte/icons/bell-off';
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import Clock from 'lucide-svelte/icons/clock';
  import Package from 'lucide-svelte/icons/package';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Users from 'lucide-svelte/icons/users';
  import X from 'lucide-svelte/icons/x';

  let { notifications = [], onSelect, onDismiss } = $props();

  let open = $state(false);
  let containerEl = $state();

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }

  $effect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (!containerEl?.contains(e.target)) close();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKey);
    };
  });

  const total = $derived(notifications.length);
  const high = $derived(notifications.filter((n) => n.severity === 'high').length);

  function iconFor(kind) {
    switch (kind) {
      case 'invoice-overdue':
        return AlertTriangle;
      case 'invoice-due-soon':
        return Clock;
      case 'inventory-out':
      case 'inventory-low':
        return Package;
      case 'project-review':
        return FolderKanban;
      case 'customer-risk':
        return Users;
      default:
        return Bell;
    }
  }

  function severityClass(s) {
    if (s === 'high') return 'bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-500/20 dark:text-rose-200 dark:ring-rose-700/40';
    if (s === 'medium') return 'bg-amber-100 text-amber-800 ring-amber-200 dark:bg-amber-500/20 dark:text-amber-100 dark:ring-amber-700/40';
    return 'bg-sky-100 text-sky-800 ring-sky-200 dark:bg-sky-500/20 dark:text-sky-100 dark:ring-sky-700/40';
  }

  function pick(n) {
    close();
    onSelect?.(n);
  }

  function dismiss(e, id) {
    e.stopPropagation();
    onDismiss?.(id);
  }

  function dismissAll() {
    onDismiss?.('__all__');
  }
</script>

<div bind:this={containerEl} class="relative">
  <button
    type="button"
    class="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-leah-800 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 dark:text-slate-200 dark:hover:bg-slate-800"
    onclick={toggle}
    aria-haspopup="dialog"
    aria-expanded={open}
    aria-label={total === 0 ? 'No notifications' : `${total} notification${total === 1 ? '' : 's'}`}
  >
    {#if total === 0}
      <BellOff class="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    {:else}
      <Bell class="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      <span
        class="absolute -right-0.5 -top-0.5 inline-flex min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold leading-4 text-white {high >
        0
          ? 'bg-rose-600'
          : 'bg-amber-500'}"
        aria-hidden="true"
      >
        {total}
      </span>
    {/if}
  </button>

  {#if open}
    <div
      role="dialog"
      aria-label="Notifications"
      class="absolute right-0 top-[calc(100%+0.5rem)] z-40 w-[min(22rem,90vw)] rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
      <header class="flex items-center justify-between gap-2 border-b border-zinc-100 px-3 py-2 dark:border-slate-800">
        <h2 class="text-sm font-bold text-zinc-900 dark:text-slate-100">Notifications</h2>
        <div class="flex items-center gap-2 text-xs">
          <span class="text-zinc-500 dark:text-slate-400">{total} item{total === 1 ? '' : 's'}</span>
          {#if total > 0}
            <button
              type="button"
              class="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              onclick={dismissAll}
            >
              Clear all
            </button>
          {/if}
        </div>
      </header>
      {#if total === 0}
        <p class="px-4 py-8 text-center text-sm text-zinc-500 dark:text-slate-400">
          You are caught up · no overdues, low stock or upcoming reviews.
        </p>
      {:else}
        <ul class="max-h-[70vh] divide-y divide-zinc-100 overflow-y-auto dark:divide-slate-800">
          {#each notifications as n}
            {@const Icon = iconFor(n.kind)}
            <li>
              <div class="group flex w-full items-start gap-3 px-3 py-3 text-left transition hover:bg-zinc-50 focus:outline-none focus-visible:bg-zinc-50 dark:hover:bg-slate-800/60">
                <button
                  type="button"
                  class="flex flex-1 min-w-0 items-start gap-3 text-left"
                  onclick={() => pick(n)}
                >
                  <span
                    class="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 {severityClass(
                      n.severity
                    )}"
                    aria-hidden="true"
                  >
                    <Icon class="h-3.5 w-3.5" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="block text-sm font-semibold text-zinc-900 dark:text-slate-100">{n.title}</span>
                    {#if n.body}
                      <span class="mt-0.5 block text-xs text-zinc-500 dark:text-slate-400">{n.body}</span>
                    {/if}
                  </span>
                </button>
                <button
                  type="button"
                  class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-200 hover:text-zinc-700 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                  aria-label="Dismiss notification"
                  onclick={(e) => dismiss(e, n.id)}
                >
                  <X class="h-3.5 w-3.5" />
                </button>
              </div>
            </li>
          {/each}
        </ul>
      {/if}
      <footer class="border-t border-zinc-100 px-3 py-2 text-[11px] text-zinc-400 dark:border-slate-800 dark:text-slate-500">
        Derived live from your workspace data
      </footer>
    </div>
  {/if}
</div>
