<script>
  import Wallet from 'lucide-svelte/icons/wallet';
  import ShieldCheck from 'lucide-svelte/icons/shield-check';
  import Zap from 'lucide-svelte/icons/zap';
  import Layers from 'lucide-svelte/icons/layers';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import Sparkles from 'lucide-svelte/icons/sparkles';
  import Landmark from 'lucide-svelte/icons/landmark';

  let { userName = $bindable(), password = $bindable(), onLogin } = $props();
  const homeHref = import.meta.env.BASE_URL;

  let nameError = $state('');
  let showHint = $state(false);
  let nameInput = $state();

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (!nameInput) return;
    queueMicrotask(() => {
      try {
        nameInput.focus({ preventScroll: true });
      } catch {
        nameInput.focus?.();
      }
    });
  });

  function attemptLogin() {
    const trimmed = userName.trim();
    if (trimmed.length < 2) {
      nameError = 'Enter your name (at least 2 characters) to open the demo.';
      return;
    }
    nameError = '';
    userName = trimmed;
    onLogin();
  }

  function clearNameError() {
    if (nameError) nameError = '';
  }

  function onKeydown(e) {
    if (e.key === 'Enter') attemptLogin();
  }

  const features = [
    {
      icon: Wallet,
      title: 'Cash & receivables',
      text: 'See what is owed, what is at risk and what you have already collected at a glance.'
    },
    {
      icon: Layers,
      title: 'List and kanban invoices',
      text: 'Dense lists, kanban boards and exports in one workspace.'
    },
    {
      icon: ShieldCheck,
      title: 'Audit-friendly exports',
      text: 'Trails and CSV-style hand-offs ready for month-end and your advisor.'
    },
    {
      icon: Zap,
      title: 'Keyboard shortcuts',
      text: 'Alt + letter to jump modules without losing focus.'
    }
  ];
</script>

<div class="relative flex min-h-screen flex-col overflow-x-hidden bg-[#070d18] text-white">
  <!-- Calm background: no photos, no fake chart texture -->
  <div class="pointer-events-none absolute inset-0" aria-hidden="true">
    <div class="absolute inset-0 bg-[linear-gradient(165deg,#0a1628_0%,#0f1f3d_42%,#0a1628_100%)]"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_0%_0%,rgba(56,189,248,0.12),transparent_50%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(37,99,235,0.14),transparent_50%)]"
    ></div>
    <div
      class="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]"
    ></div>
  </div>

  <main class="relative z-10 flex flex-1 flex-col">
    <div class="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-10 sm:px-8 lg:px-10 lg:py-14 xl:py-16">
      <!-- Top bar: full width so the row below (hero | card) shares the same vertical start -->
      <header class="mb-8 flex shrink-0 items-center justify-between gap-4 lg:mb-10">
        <a
          href={homeHref}
          class="group flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
        >
          <span
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-leah-800 shadow-lg shadow-sky-900/30 ring-1 ring-white/20"
            aria-hidden="true"
          >
            <Landmark class="h-6 w-6 text-white" strokeWidth={2.25} />
          </span>
          <span class="text-left">
            <span class="block text-lg font-extrabold tracking-tight text-white">Emi</span>
            <span class="text-xs font-medium text-sky-200/75">Finance workspace</span>
          </span>
        </a>
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-100/90"
        >
          <Sparkles class="h-3.5 w-3.5 text-amber-300/90" aria-hidden="true" />
          Interactive demo
        </span>
      </header>

      <div class="grid min-w-0 flex-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
        <!-- Hero: shares row height with sign-in card (items-stretch) -->
        <div class="min-w-0 max-w-xl lg:max-w-none">
          <p
            class="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/[0.08] px-3 py-1 text-xs font-semibold text-sky-100"
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Sample data · no sign-up
          </p>

          <h1
            class="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-5xl"
          >
            Run the month
            <span
              class="mt-1 block bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent"
            >
              before it runs you.
            </span>
          </h1>

          <p class="mt-5 max-w-xl text-pretty text-base leading-relaxed text-sky-100/70 sm:text-lg">
            One workspace for collections, invoices and spend — with lists, shortcuts and exports tuned for month-end work.
          </p>

          <ul class="mt-10 max-w-xl space-y-4" aria-label="Highlights">
            {#each features as item}
              {@const Icon = item.icon}
              <li class="flex gap-4">
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] ring-1 ring-white/10"
                >
                  <Icon class="h-5 w-5 text-sky-200" strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <span class="block font-semibold text-white">{item.title}</span>
                  <span class="mt-0.5 block text-sm leading-snug text-sky-100/60">{item.text}</span>
                </span>
              </li>
            {/each}
          </ul>

          <p class="mt-10 text-xs text-sky-200/45">
            Fictional sample org · Voltstack Europe GmbH
          </p>
        </div>

        <!-- Sign-in only: no dashboard preview or charts on the marketing surface -->
        <div
          class="mx-auto flex w-full max-w-md flex-col lg:mx-0 lg:h-full lg:max-w-none lg:justify-self-end lg:pl-4 xl:pl-8"
        >
          <section
            class="flex flex-1 flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] sm:p-8"
            aria-labelledby="login-heading"
          >
            <h2 id="login-heading" class="text-xl font-bold tracking-tight text-zinc-900">Sign in</h2>
            <p class="mt-1 text-sm text-zinc-500">Any name and the demo password are fine to explore.</p>

            <label class="mt-6 grid gap-2 text-sm font-semibold text-zinc-700">
              Name
              <input
                bind:this={nameInput}
                bind:value={userName}
                oninput={clearNameError}
                onkeydown={onKeydown}
                aria-invalid={nameError ? 'true' : 'false'}
                aria-describedby={nameError ? 'login-name-error' : undefined}
                aria-label="Name"
                class="min-h-12 w-full rounded-xl border bg-white px-4 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:ring-4 focus:ring-leah-700/12 {nameError
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-zinc-200 focus:border-leah-700'}"
                placeholder="e.g. Alex"
              />
              {#if nameError}
                <span id="login-name-error" class="text-xs font-medium text-rose-700">{nameError}</span>
              {/if}
            </label>
            <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
              Password
              <input
                type="password"
                bind:value={password}
                onkeydown={onKeydown}
                aria-label="Password"
                autocomplete="current-password"
                class="min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/12"
                placeholder="any value works in the demo"
              />
            </label>

            <button
              type="button"
              class="group mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-leah-900 px-5 text-sm font-semibold text-white shadow-lg shadow-leah-900/20 transition hover:bg-leah-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-leah-600/40"
              onclick={attemptLogin}
            >
              <span>Open the demo</span>
              <ArrowRight
                class="h-4 w-4 transition group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>

            <div
              class="mt-auto flex flex-col gap-2 border-t border-zinc-100 pt-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <button
                type="button"
                class="text-center text-sm font-semibold text-leah-800 hover:text-leah-900 hover:underline sm:text-left"
                onclick={() => (showHint = !showHint)}
                aria-expanded={showHint}
              >
                {showHint ? 'Hide demo tip' : 'Forgot password?'}
              </button>
              <span class="text-center text-xs text-zinc-400 sm:text-right">Demo · no backend</span>
            </div>
            {#if showHint}
              <p
                class="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs leading-relaxed text-sky-900"
              >
                There is no backend — any name with at least two characters and any password unlock the demo
                workspace. Refreshing keeps your active page thanks to the URL hash.
              </p>
            {/if}
          </section>
        </div>
      </div>
    </div>
  </main>

  <footer
    class="relative z-10 border-t border-white/[0.06] px-5 py-4 text-center text-[11px] text-sky-200/40 sm:px-8 sm:text-xs"
  >
    Emi · front-end demo · {new Date().getFullYear()}
  </footer>
</div>
