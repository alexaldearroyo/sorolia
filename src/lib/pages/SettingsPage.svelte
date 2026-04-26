<script>
  let { stats, onBack } = $props();
</script>

<section class="max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-8">
  <p class="text-sm text-zinc-500">
    Counts below mirror the interconnected demo workspace. On desktop, module jumps use
    <kbd class="rounded border border-zinc-300 bg-zinc-100 px-1 font-mono text-xs">Alt</kbd>
    + the assigned module letter, even though it is not shown in the sidebar (only when focus is not in a text field).
  </p>
  <ul class="mt-6 grid gap-2 text-sm text-zinc-700">
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">
      General · Fiscal year · <span class="font-semibold text-leah-900">{stats.customers}</span> customers in
      master data
    </li>
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">
      Invoicing · Payment terms · <span class="font-semibold text-leah-900">{stats.invoices}</span> live invoices
    </li>
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">
      Inventory · <span class="font-semibold text-leah-900">{stats.inventory}</span> SKUs linked to suppliers
    </li>
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">
      Delivery · <span class="font-semibold text-leah-900">{stats.projects}</span> projects ·
      <span class="font-semibold text-leah-900">{stats.employees}</span> rostered people
    </li>
  </ul>
  <button
    type="button"
    class="mt-8 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
    onclick={onBack}
  >
    Back to dashboard
  </button>
</section>
