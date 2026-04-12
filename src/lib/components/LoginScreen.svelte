<script>
  import LogIn from 'lucide-svelte/icons/log-in';

  let {
    userName = $bindable(),
    password = $bindable(),
    onLogin,
    totals,
    openCount,
    overdueCount,
    invoiceCount,
    cashMonthly,
    currency
  } = $props();
</script>

<main
  class="grid min-h-screen items-center gap-8 p-5 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-10 md:p-10"
  style="background-image: linear-gradient(135deg, rgba(19, 36, 71, 0.94), rgba(10, 22, 40, 0.92)), url('/product-mark.jpeg'); background-size: cover; background-position: center;"
>
  <section class="rounded-xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/25 md:p-10">
    <div class="flex items-center gap-3 font-extrabold tracking-tight text-leah-900">
      <img src="/product-mark.jpeg" alt="" class="h-11 w-11 rounded-lg object-cover" />
      <span class="text-lg">Leah</span>
    </div>
    <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-leah-700">Finance workspace · demo data</p>
    <h1 class="mt-6 max-w-[14ch] text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 md:text-5xl">
      Your month, under control.
    </h1>
    <p class="mt-4 text-sm leading-relaxed text-zinc-600">
      Cash, invoices and spend in one place — list and kanban views, exports, and a sidebar that works like the tools your
      team already uses.
    </p>
    <label class="mt-8 grid gap-2 text-sm font-semibold text-zinc-700">
      Name
      <input
        bind:value={userName}
        aria-label="Name"
        class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"
      />
    </label>
    <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
      Password
      <input
        type="password"
        bind:value={password}
        aria-label="Password"
        autocomplete="current-password"
        class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"
      />
    </label>
    <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-leah-900 px-5 font-semibold text-white shadow-sm transition hover:bg-leah-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-leah-700/35"
        onclick={onLogin}
      >
        <LogIn class="h-4 w-4" aria-hidden="true" />
        Log in
      </button>
      <a href="/" class="text-sm font-bold text-leah-800 hover:text-leah-900 hover:underline">Forgot password</a>
    </div>
  </section>

  <aside
    class="flex flex-col justify-center gap-8 rounded-xl border border-white/25 bg-white/10 p-8 text-white backdrop-blur-md md:min-h-[320px]"
    aria-label="Preview dashboard"
  >
    <div class="flex items-center justify-between gap-4">
      <span class="text-sm font-medium text-sky-100/90">Outstanding AR (demo)</span>
      <strong class="text-3xl font-extrabold tracking-tight md:text-4xl">{currency(totals.pending)}</strong>
    </div>
    <div class="flex h-52 items-end gap-2 pt-4">
      {#each cashMonthly as item}
        <span class="min-w-[12px] flex-1 rounded-t-lg bg-sky-400/90" style={`height:${item.income}%`}></span>
      {/each}
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
        <b class="block text-2xl font-bold">{invoiceCount}</b>
        <small class="text-xs text-sky-100/85">Invoices</small>
      </div>
      <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
        <b class="block text-2xl font-bold">{openCount}</b>
        <small class="text-xs text-sky-100/85">Open</small>
      </div>
      <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
        <b class="block text-2xl font-bold">{overdueCount}</b>
        <small class="text-xs text-sky-100/85">Overdue</small>
      </div>
    </div>
  </aside>
</main>
