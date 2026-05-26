<script>
  import UserPlus from 'lucide-svelte/icons/user-plus';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Lock from 'lucide-svelte/icons/lock';
  import { listCapabilities, roleBadgeClass, roleLabel } from '../permissions.js';

  let {
    users,
    roles,
    currentUser,
    canManage = false,
    onChangeRole,
    onRemoveUser,
    onInviteUser
  } = $props();

  let showInvite = $state(false);
  let inviteName = $state('');
  let inviteEmail = $state('');
  let inviteRole = $state('user');
  let inviteError = $state('');

  function submitInvite() {
    inviteError = '';
    if (inviteName.trim().length < 2) {
      inviteError = 'Name needs at least 2 characters.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inviteEmail.trim())) {
      inviteError = 'Enter a valid email.';
      return;
    }
    onInviteUser?.({ name: inviteName.trim(), email: inviteEmail.trim(), role: inviteRole });
    inviteName = '';
    inviteEmail = '';
    inviteRole = 'user';
    showInvite = false;
  }

  const capsByRole = $derived(
    roles.map((r) => ({
      role: r,
      caps: listCapabilities(r.id)
    }))
  );
</script>

<div class="grid gap-6">
  <section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <header class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">People with access</h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">{users.length} profiles · roles control what each user can do.</p>
      </div>
      {#if canManage}
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-3 py-2 text-sm font-semibold text-white hover:bg-leah-950"
          onclick={() => (showInvite = !showInvite)}
        >
          <UserPlus class="h-4 w-4" aria-hidden="true" />
          {showInvite ? 'Cancel invite' : 'Invite teammate'}
        </button>
      {/if}
    </header>

    {#if showInvite && canManage}
      <div class="mt-4 grid gap-3 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/60 p-4 sm:grid-cols-[1fr_1fr_auto_auto] dark:border-slate-700 dark:bg-slate-800/40">
        <input
          bind:value={inviteName}
          placeholder="Full name"
          class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <input
          bind:value={inviteEmail}
          placeholder="email@company.eu"
          type="email"
          class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <select bind:value={inviteRole} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
          {#each roles as r}
            <option value={r.id}>{r.label}</option>
          {/each}
        </select>
        <button
          type="button"
          class="rounded-lg bg-leah-900 px-3 py-2 text-sm font-semibold text-white hover:bg-leah-950"
          onclick={submitInvite}
        >
          Add
        </button>
        {#if inviteError}
          <p class="text-xs font-medium text-rose-700 sm:col-span-4">{inviteError}</p>
        {/if}
      </div>
    {/if}

    <div class="mt-4 overflow-x-auto rounded-lg border border-zinc-200 dark:border-slate-700">
      <table class="w-full min-w-[640px] text-left text-sm">
        <thead class="sticky top-0 z-10">
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            <th class="px-4 py-3" scope="col">Name</th>
            <th class="px-4 py-3" scope="col">Email</th>
            <th class="px-4 py-3" scope="col">Role</th>
            <th class="px-4 py-3 text-right" scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {#each users as user}
            {@const isSelf = user.id === currentUser?.id}
            <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 dark:border-slate-800 dark:hover:bg-slate-800/60">
              <td class="px-4 py-3 font-semibold text-zinc-900 dark:text-slate-100">
                {user.name}
                {#if isSelf}<span class="ml-1 text-xs font-normal text-zinc-500 dark:text-slate-400">· you</span>{/if}
              </td>
              <td class="px-4 py-3 text-zinc-600 dark:text-slate-300">{user.email}</td>
              <td class="px-4 py-3">
                {#if canManage && !isSelf}
                  <select
                    value={user.role}
                    onchange={(e) => onChangeRole?.(user.id, e.currentTarget.value)}
                    class="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  >
                    {#each roles as r}
                      <option value={r.id}>{r.label}</option>
                    {/each}
                  </select>
                {:else}
                  <span
                    class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide {roleBadgeClass(
                      user.role
                    )}"
                  >
                    {roleLabel(user.role)}
                  </span>
                {/if}
              </td>
              <td class="px-4 py-3 text-right">
                {#if canManage && !isSelf}
                  <button
                    type="button"
                    class="rounded-md border border-rose-200 bg-white p-2 text-rose-800 hover:bg-rose-50 dark:border-rose-700 dark:bg-slate-900 dark:text-rose-200 dark:hover:bg-rose-900/30"
                    onclick={() => onRemoveUser?.(user.id)}
                    aria-label="Remove {user.name}"
                    title="Remove"
                  >
                    <Trash2 class="h-4 w-4" aria-hidden="true" />
                  </button>
                {:else if isSelf}
                  <span class="text-xs text-zinc-400 dark:text-slate-500">—</span>
                {:else}
                  <span class="inline-flex items-center gap-1 text-xs text-zinc-400 dark:text-slate-500">
                    <Lock class="h-3.5 w-3.5" aria-hidden="true" /> Owner only
                  </span>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <header>
      <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">What each role can do</h2>
      <p class="text-sm text-zinc-500 dark:text-slate-400">Capabilities are checked at the page level — sidebar and buttons hide accordingly.</p>
    </header>
    <div class="mt-4 grid gap-3 md:grid-cols-3">
      {#each capsByRole as { role, caps }}
        <article class="rounded-xl border border-zinc-200 bg-zinc-50/40 p-4 dark:border-slate-700 dark:bg-slate-800/40">
          <p
            class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide {roleBadgeClass(
              role.id
            )}"
          >
            {role.label}
          </p>
          <h3 class="mt-2 text-sm font-bold text-zinc-900 dark:text-slate-100">{role.description}</h3>
          <p class="mt-2 text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">{caps.length} capabilities</p>
          <ul class="mt-2 grid gap-1 text-xs text-zinc-600 dark:text-slate-300">
            {#each caps as cap}
              <li class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-leah-700" aria-hidden="true"></span>
                <code class="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-zinc-700 dark:bg-slate-900 dark:text-slate-200">{cap}</code>
              </li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>
</div>
