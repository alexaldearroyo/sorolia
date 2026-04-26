<script>
  let { onBack } = $props();
</script>

<section class="max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-8">
  <h2 class="text-xl font-bold text-zinc-900">Settings</h2>
  <p class="mt-2 text-sm text-zinc-500">Company, taxes, sequences — tree placeholder.</p>
  <ul class="mt-6 grid gap-2 text-sm text-zinc-700">
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">General · Fiscal year</li>
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Invoicing · Payment terms</li>
    <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Users · Access rights</li>
  </ul>
  <button
    type="button"
    class="mt-8 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
    onclick={onBack}
  >
    Back to dashboard
  </button>
</section>
