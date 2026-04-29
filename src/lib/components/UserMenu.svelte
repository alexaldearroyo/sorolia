<script>
  import UserCircle from 'lucide-svelte/icons/user-circle';
  import LogOut from 'lucide-svelte/icons/log-out';
  import UserCog from 'lucide-svelte/icons/user-cog';
  import Settings from 'lucide-svelte/icons/settings';
  import Repeat from 'lucide-svelte/icons/repeat';
  import Check from 'lucide-svelte/icons/check';
  import { roleBadgeClass, roleLabel } from '../permissions.js';

  let {
    currentUser,
    users = [],
    canSettings = false,
    onAccount,
    onSettings,
    onSwitchUser,
    onLogout
  } = $props();

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

  function pick(uid) {
    onSwitchUser?.(uid);
    close();
  }
</script>

<div bind:this={containerEl} class="relative">
  <button
    type="button"
    class="flex items-center gap-2 rounded-lg py-1 pl-1 pr-2 text-left hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700"
    onclick={toggle}
    aria-haspopup="menu"
    aria-expanded={open}
    aria-label={`Account menu for ${currentUser?.name ?? 'demo user'}`}
  >
    <span
      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leah-900/10 text-leah-800 ring-1 ring-leah-900/15"
      aria-hidden="true"
    >
      <UserCircle class="h-5 w-5" strokeWidth={2} />
    </span>
    <span class="hidden text-xs leading-tight text-zinc-500 sm:block">
      <span class="block font-semibold text-zinc-900">{currentUser?.name ?? 'Guest'}</span>
      <span
        class="mt-0.5 inline-flex items-center rounded-full border px-1.5 py-0 text-[10px] font-bold uppercase tracking-wide {roleBadgeClass(
          currentUser?.role
        )}"
      >
        {roleLabel(currentUser?.role)}
      </span>
    </span>
  </button>

  {#if open}
    <div
      role="menu"
      class="absolute right-0 top-[calc(100%+0.5rem)] z-40 w-72 origin-top-right rounded-xl border border-zinc-200 bg-white p-2 shadow-xl"
    >
      <div class="flex items-center gap-3 border-b border-zinc-100 px-2 py-2">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full bg-leah-900/10 text-leah-800 ring-1 ring-leah-900/10"
          aria-hidden="true"
        >
          <UserCircle class="h-5 w-5" strokeWidth={2} />
        </span>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-bold text-zinc-900">{currentUser?.name ?? '—'}</p>
          <p class="truncate text-xs text-zinc-500">{currentUser?.email ?? '—'}</p>
        </div>
        <span
          class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide {roleBadgeClass(
            currentUser?.role
          )}"
        >
          {roleLabel(currentUser?.role)}
        </span>
      </div>

      <button
        type="button"
        class="mt-1 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
        onclick={() => {
          close();
          onAccount?.();
        }}
        role="menuitem"
      >
        <UserCog class="h-4 w-4" aria-hidden="true" />
        My account
      </button>

      {#if canSettings}
        <button
          type="button"
          class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
          onclick={() => {
            close();
            onSettings?.();
          }}
          role="menuitem"
        >
          <Settings class="h-4 w-4" aria-hidden="true" />
          Workspace settings
        </button>
      {/if}

      <div class="my-1 border-t border-zinc-100"></div>
      <p class="px-2 pt-1 text-[10px] font-bold uppercase tracking-wide text-zinc-500">Switch profile</p>
      <ul class="mt-1 grid gap-0.5">
        {#each users as user}
          <li>
            <button
              type="button"
              class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50 {currentUser?.id ===
              user.id
                ? 'bg-zinc-50 font-semibold text-zinc-900'
                : ''}"
              onclick={() => pick(user.id)}
              role="menuitemradio"
              aria-checked={currentUser?.id === user.id}
            >
              <Repeat class="h-4 w-4 text-zinc-400" aria-hidden="true" />
              <span class="flex-1 truncate">{user.name}</span>
              <span
                class="inline-flex items-center rounded-full border px-1.5 py-0 text-[9px] font-bold uppercase tracking-wide {roleBadgeClass(
                  user.role
                )}"
              >
                {roleLabel(user.role)}
              </span>
              {#if currentUser?.id === user.id}
                <Check class="h-3.5 w-3.5 text-leah-700" aria-hidden="true" />
              {/if}
            </button>
          </li>
        {/each}
      </ul>

      <div class="my-1 border-t border-zinc-100"></div>
      <button
        type="button"
        class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-rose-700 hover:bg-rose-50"
        onclick={() => {
          close();
          onLogout?.();
        }}
        role="menuitem"
      >
        <LogOut class="h-4 w-4" aria-hidden="true" />
        Log out
      </button>
    </div>
  {/if}
</div>
