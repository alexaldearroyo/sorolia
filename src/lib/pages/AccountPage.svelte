<script>
  import RotateCcw from 'lucide-svelte/icons/rotate-ccw';

  let { userName, stats, currency, expenseTotal, onBack, onResetDemo } = $props();
</script>

<section
  class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-5 text-center shadow-sm sm:p-8"
>
  <div
    class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leah-900/10 text-2xl font-bold text-leah-800"
  >
    {userName.slice(0, 1).toUpperCase()}
  </div>
  <p class="mt-6 text-sm text-zinc-700">Signed in as <strong>{userName}</strong></p>

  <dl class="mt-8 grid grid-cols-2 gap-3 text-left text-sm">
    <div class="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2">
      <dt class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Customers</dt>
      <dd class="mt-1 text-lg font-bold text-zinc-900">{stats.customers}</dd>
    </div>
    <div class="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2">
      <dt class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Invoices</dt>
      <dd class="mt-1 text-lg font-bold text-zinc-900">{stats.invoices}</dd>
    </div>
    <div class="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2">
      <dt class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Projects</dt>
      <dd class="mt-1 text-lg font-bold text-zinc-900">{stats.projects}</dd>
    </div>
    <div class="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2">
      <dt class="text-xs font-semibold uppercase tracking-wide text-zinc-500">People</dt>
      <dd class="mt-1 text-lg font-bold text-zinc-900">{stats.employees}</dd>
    </div>
  </dl>
  <p class="mt-4 text-xs text-zinc-500">
    Live OpEx roll-up: <strong class="text-zinc-800">{currency(expenseTotal)}</strong> across
    {stats.expenses} expense lines
  </p>

  <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
    <button
      type="button"
      class="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
      onclick={onBack}
    >
      Back to dashboard
    </button>
    {#if onResetDemo}
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-900 hover:bg-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        onclick={onResetDemo}
      >
        <RotateCcw class="h-4 w-4" aria-hidden="true" />
        Reset demo data
      </button>
    {/if}
  </div>
  {#if onResetDemo}
    <p class="mt-3 text-[11px] text-zinc-400">
      Restores customers, invoices, expenses, inventory, projects and people from the seed dataset.
    </p>
  {/if}
</section>
