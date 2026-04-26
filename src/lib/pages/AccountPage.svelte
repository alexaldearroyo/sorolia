<script>
  let { userName, onBack } = $props();
</script>

<section
  class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-5 text-center shadow-sm sm:p-8"
>
  <div
    class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leah-900/10 text-2xl font-bold text-leah-800"
  >
    {userName.slice(0, 1).toUpperCase()}
  </div>
  <h2 class="mt-4 text-xl font-bold text-zinc-900">My account</h2>
  <p class="mt-2 text-sm text-zinc-500">Profile and security (demo).</p>
  <p class="mt-6 text-sm text-zinc-700">Signed in as <strong>{userName}</strong></p>
  <button
    type="button"
    class="mt-8 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
    onclick={onBack}
  >
    Back to dashboard
  </button>
</section>
