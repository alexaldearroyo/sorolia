<script>
  let { title, onBack } = $props();
</script>

<section
  class="flex min-h-[min(420px,70dvh)] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-white p-6 text-center shadow-sm sm:min-h-[420px] sm:p-10"
>
  <h2 class="text-2xl font-bold text-zinc-900">{title}</h2>
  <p class="max-w-md text-sm leading-relaxed text-zinc-500">
    Module placeholder — here you would load the real app (inventory, CRM, HR, …) with menus and views.
  </p>
  <button
    type="button"
    class="rounded-lg bg-leah-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
    onclick={onBack}
  >
    Back to dashboard
  </button>
</section>
