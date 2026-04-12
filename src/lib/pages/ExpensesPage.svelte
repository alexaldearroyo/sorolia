<script>
  import Plus from 'lucide-svelte/icons/plus';
  import Download from 'lucide-svelte/icons/download';

  let { expenseItems, expenseTotal, currency } = $props();
</script>

<section class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.9fr)]">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 class="text-lg font-bold text-zinc-900">Expenses</h2>
        <p class="text-sm text-zinc-500">Cost centers · DE · April 2026</p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
      >
        <Plus class="h-4 w-4" aria-hidden="true" />
        Add expense
      </button>
    </div>
    <ul class="mt-6 grid gap-2">
      {#each expenseItems as item}
        <li
          class="flex flex-col gap-1 rounded-lg border border-zinc-100 bg-zinc-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <span class="font-semibold text-zinc-900">{item.vendor}</span>
            <span class="mt-0.5 block text-sm text-zinc-500">{item.type} · {item.date}</span>
          </div>
          <span class="text-lg font-bold tabular-nums text-zinc-900">{currency(item.amount)}</span>
        </li>
      {/each}
    </ul>
  </article>

  <article
    class="flex flex-col justify-center gap-4 rounded-xl border border-leah-800 bg-gradient-to-br from-leah-900 to-leah-950 p-6 text-white shadow-lg"
  >
    <h2 class="text-lg font-bold">Tax export</h2>
    <p class="text-sm leading-relaxed text-sky-100/90">
      April booking complete — review before closing (GoBD-friendly export stub).
    </p>
    <p class="text-3xl font-extrabold tracking-tight">{currency(expenseTotal)}</p>
    <button
      type="button"
      class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-leah-900 shadow-sm hover:bg-sky-50"
    >
      <Download class="h-4 w-4" aria-hidden="true" />
      Export CSV
    </button>
  </article>
</section>
