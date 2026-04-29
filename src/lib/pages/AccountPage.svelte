<script>
  import Save from 'lucide-svelte/icons/save';
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';
  import LogOut from 'lucide-svelte/icons/log-out';
  import { roleBadgeClass, roleLabel } from '../permissions.js';

  let {
    currentUser,
    onSaveProfile,
    theme = 'light',
    onChangeTheme,
    locale = 'en-GB',
    onChangeLocale,
    onLogout
  } = $props();

  let displayName = $state('');
  let email = $state('');
  let saved = $state(false);

  $effect(() => {
    displayName = currentUser?.name ?? '';
    email = currentUser?.email ?? '';
  });

  function save() {
    onSaveProfile?.({ name: displayName.trim(), email: email.trim() });
    saved = true;
    setTimeout(() => (saved = false), 2400);
  }
</script>

<section class="grid gap-5">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <header class="flex items-start justify-between gap-3">
      <div>
        <h2 class="text-lg font-bold text-zinc-900">Profile</h2>
        <p class="text-sm text-zinc-500">Shown in the topbar and on audit log entries.</p>
      </div>
      <span
        class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide {roleBadgeClass(
          currentUser?.role
        )}"
      >
        {roleLabel(currentUser?.role)}
      </span>
    </header>
    <div class="mt-4 grid gap-4 sm:grid-cols-2">
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Display name
        <input bind:value={displayName} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Email
        <input bind:value={email} type="email" class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
    </div>
    <div class="mt-4 flex items-center justify-between">
      <p class="text-xs text-zinc-500">
        {#if saved}<span class="font-semibold text-emerald-700">Saved.</span>{:else}In-memory · resets on reload.{/if}
      </p>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2 text-sm font-semibold text-white hover:bg-leah-950"
        onclick={save}
      >
        <Save class="h-4 w-4" aria-hidden="true" />
        Save profile
      </button>
    </div>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <header>
      <h2 class="text-lg font-bold text-zinc-900">Preferences</h2>
      <p class="text-sm text-zinc-500">Local-only, persisted in this browser.</p>
    </header>
    <div class="mt-4 grid gap-4 sm:grid-cols-2">
      <div>
        <p class="text-xs font-bold uppercase tracking-wide text-zinc-500">Theme</p>
        <div class="mt-2 inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
          <button
            type="button"
            class="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold {theme === 'light'
              ? 'bg-white text-leah-900 shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'}"
            onclick={() => onChangeTheme?.('light')}
            aria-pressed={theme === 'light'}
          >
            <Sun class="h-4 w-4" aria-hidden="true" /> Light
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold {theme === 'dark'
              ? 'bg-white text-leah-900 shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'}"
            onclick={() => onChangeTheme?.('dark')}
            aria-pressed={theme === 'dark'}
          >
            <Moon class="h-4 w-4" aria-hidden="true" /> Dark
          </button>
        </div>
        <p class="mt-2 text-[11px] text-zinc-500">Dark theme is decorative in the demo (sidebar already navy).</p>
      </div>
      <div>
        <p class="text-xs font-bold uppercase tracking-wide text-zinc-500">Locale</p>
        <select
          value={locale}
          onchange={(e) => onChangeLocale?.(e.currentTarget.value)}
          class="mt-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
        >
          <option value="en-GB">English (GB)</option>
          <option value="de-DE">Deutsch (DE)</option>
          <option value="es-ES">Español (ES)</option>
        </select>
        <p class="mt-2 text-[11px] text-zinc-500">Cosmetic switch in the demo · numbers stay EUR.</p>
      </div>
    </div>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <header>
      <h2 class="text-lg font-bold text-zinc-900">Session</h2>
      <p class="text-sm text-zinc-500">Switch role from the topbar avatar at any time.</p>
    </header>
    <button
      type="button"
      class="mt-3 inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-900 hover:bg-rose-100"
      onclick={onLogout}
    >
      <LogOut class="h-4 w-4" aria-hidden="true" />
      Log out
    </button>
  </article>
</section>
