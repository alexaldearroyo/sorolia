<script>
  import X from 'lucide-svelte/icons/x';
  import Mail from 'lucide-svelte/icons/mail';
  import HardDrive from 'lucide-svelte/icons/hard-drive';
  import Camera from 'lucide-svelte/icons/camera';
  import ImageIcon from 'lucide-svelte/icons/image';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';

  /**
   * @type {{
   *   open?: boolean,
   *   defaultEmail?: string,
   *   onClose: () => void,
   *   onConfirm: (payload: { saveToVault: boolean, sendEmail: boolean, emailTo: string }) => void
   * }}
   */
  let { open = false, defaultEmail = '', onClose, onConfirm } = $props();

  /** @type {'camera' | 'processing' | 'review'} */
  let phase = $state('camera');
  let flashOn = $state(false);
  let dialogEl = $state();
  let saveToVault = $state(true);
  let sendEmail = $state(false);
  let emailTo = $state('');
  let error = $state('');

  let processingTimer = /** @type {ReturnType<typeof setTimeout> | undefined} */ (undefined);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
  }

  function resetReviewForm() {
    saveToVault = true;
    sendEmail = false;
    emailTo = defaultEmail?.trim() ?? '';
    error = '';
  }

  $effect(() => {
    if (!open) {
      phase = 'camera';
      flashOn = false;
      if (processingTimer) clearTimeout(processingTimer);
      return;
    }
    phase = 'camera';
    resetReviewForm();
  });

  $effect(() => {
    if (!open) return;
    return useEscape(handleEscape);
  });

  $effect(() => {
    if (!open || phase !== 'review') return;
    return lockDialogFocus(() => dialogEl);
  });

  function handleEscape() {
    if (phase === 'review') {
      phase = 'camera';
      return;
    }
    onClose();
  }

  function handleBackdropClose() {
    onClose();
  }

  function simulateCapture() {
    if (phase !== 'camera') return;
    flashOn = true;
    phase = 'processing';
    processingTimer = setTimeout(() => {
      flashOn = false;
      phase = 'review';
      resetReviewForm();
    }, 650);
  }

  function submit() {
    error = '';
    if (!saveToVault && !sendEmail) {
      error = 'Select at least one option (Save or Email).';
      return;
    }
    if (sendEmail) {
      if (!emailTo.trim()) {
        error = 'Enter an email address.';
        return;
      }
      if (!isValidEmail(emailTo)) {
        error = 'Enter a valid email address.';
        return;
      }
    }
    onConfirm({
      saveToVault,
      sendEmail,
      emailTo: emailTo.trim()
    });
  }
</script>

{#if open}
  <!-- Step 1 & 2: simulated device camera -->
  {#if phase === 'camera' || phase === 'processing'}
    <div class="fixed inset-0 z-[70] flex flex-col bg-zinc-950 text-white" role="presentation">
      {#if flashOn}
        <div class="pointer-events-none absolute inset-0 z-20 bg-white" aria-hidden="true"></div>
      {/if}

      <header class="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <button
          type="button"
          class="rounded-lg p-2 text-white/80 hover:bg-white/10"
          onclick={onClose}
          aria-label="Close"
        >
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
        <div class="text-center">
          <p class="text-sm font-bold">Capture receipt</p>
          <p class="text-[10px] font-semibold uppercase tracking-wide text-amber-300/90">Prototype · simulated camera</p>
        </div>
        <span class="w-9" aria-hidden="true"></span>
      </header>

      <div class="relative flex flex-1 flex-col items-center justify-center gap-4 px-4 py-6">
        <div
          class="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-2xl"
          style="aspect-ratio: 3/4;"
        >
          <!-- Simulated live viewfinder -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 {phase === 'processing' ? 'opacity-60' : ''}"
            aria-hidden="true"
          ></div>

          <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            {#if phase === 'processing'}
              <p class="text-sm font-semibold text-white">Processing…</p>
            {:else}
              <Camera class="mb-2 h-8 w-8 text-white/50" aria-hidden="true" />
              <p class="text-sm font-medium text-white/90">Align the receipt in the frame</p>
              <p class="mt-1 text-xs text-white/50">Tap the shutter to simulate a photo</p>
            {/if}
          </div>
        </div>

        <p class="max-w-sm text-center text-[11px] leading-relaxed text-white/50">
          In production this step uses the device camera via the browser
        </p>
      </div>

      <footer class="relative z-10 flex flex-col items-center gap-3 border-t border-white/10 px-4 py-5">
        <button
          type="button"
          class="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-white bg-white/10 transition enabled:hover:bg-white/20 disabled:opacity-40"
          onclick={simulateCapture}
          disabled={phase === 'processing'}
          aria-label="Take photo"
        >
          <span class="h-14 w-14 rounded-full bg-white shadow-inner"></span>
        </button>
        <button
          type="button"
          class="text-xs font-semibold text-white/60 hover:text-white"
          onclick={onClose}
        >
          Cancel
        </button>
      </footer>
    </div>
  {/if}

  <!-- Step 3: review & forward (app dialog style) -->
  {#if phase === 'review'}
    <div class="fixed inset-0 z-[71] flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button
        type="button"
        class="absolute inset-0 bg-zinc-900/50 backdrop-blur-[1px]"
        aria-label="Close"
        onclick={handleBackdropClose}
      ></button>
      <div
        bind:this={dialogEl}
        role="dialog"
        aria-modal="true"
        aria-labelledby="receipt-review-title"
        class="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
      >
        <header class="flex items-start justify-between gap-3 border-b border-zinc-100 px-6 py-4 dark:border-slate-800">
          <div>
            <span class="mb-1.5 inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-1 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200">
              Prototype
            </span>
            <h2 id="receipt-review-title" class="text-lg font-bold text-zinc-900 dark:text-slate-100">
              Receipt captured
            </h2>
            <p class="mt-0.5 text-xs text-zinc-500 dark:text-slate-400">Choose how to forward this image.</p>
          </div>
          <button
            type="button"
            class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-slate-800"
            onclick={onClose}
            aria-label="Close"
          >
            <X class="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div class="flex-1 overflow-y-auto px-6 py-5">
          <div class="overflow-hidden rounded-xl border border-zinc-200/80 dark:border-slate-700">
            <div
              class="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-100 via-leah-50 to-amber-50/80 p-6 dark:from-slate-800 dark:via-leah-950/40 dark:to-slate-900"
              aria-hidden="true"
            >
              <ImageIcon class="h-12 w-12 text-leah-600/50 dark:text-leah-400/40" aria-hidden="true" />
              <p class="text-[11px] font-medium text-leah-800/70 dark:text-leah-300/60">Simulated capture preview</p>
            </div>
          </div>

          <div class="mt-5 rounded-xl border border-zinc-200/80 bg-white p-4 dark:border-slate-700 dark:bg-slate-900/50">
            <p class="text-sm font-bold text-zinc-900 dark:text-slate-100">Do you want to forward it?</p>
            <div class="mt-4 grid gap-3">
              <label
                class="flex cursor-pointer items-start gap-3 rounded-lg border border-zinc-100 px-3 py-2.5 hover:bg-zinc-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
              >
                <input
                  type="checkbox"
                  bind:checked={sendEmail}
                  class="mt-0.5 h-4 w-4 rounded border-zinc-300 text-leah-900 focus:ring-leah-700"
                />
                <span class="min-w-0 flex-1">
                  <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-slate-100">
                    <Mail class="h-3.5 w-3.5 text-leah-700 dark:text-leah-400" aria-hidden="true" />
                    Email
                  </span>
                  {#if sendEmail}
                    <input
                      type="email"
                      bind:value={emailTo}
                      autocomplete="email"
                      placeholder="name@company.com"
                      class="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                    />
                  {/if}
                </span>
              </label>

              <label
                class="flex cursor-pointer items-start gap-3 rounded-lg border border-zinc-100 px-3 py-2.5 hover:bg-zinc-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
              >
                <input
                  type="checkbox"
                  bind:checked={saveToVault}
                  class="mt-0.5 h-4 w-4 rounded border-zinc-300 text-leah-900 focus:ring-leah-700"
                />
                <span>
                  <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-slate-100">
                    <HardDrive class="h-3.5 w-3.5 text-leah-700 dark:text-leah-400" aria-hidden="true" />
                    Save
                  </span>
                  <span class="mt-0.5 block text-xs font-normal text-zinc-500 dark:text-slate-400">
                    Workspace vault or your device.
                  </span>
                </span>
              </label>
            </div>

            {#if error}
              <p class="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-800 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
                {error}
              </p>
            {/if}
          </div>
        </div>

        <footer class="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-100 px-6 py-4 dark:border-slate-800">
          <button
            type="button"
            class="text-xs font-semibold text-leah-800 hover:underline dark:text-leah-400"
            onclick={() => (phase = 'camera')}
          >
            ← Retake (demo)
          </button>
          <div class="flex gap-2">
            <button
              type="button"
              class="rounded-lg border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              onclick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              class="rounded-lg bg-leah-900 px-4 py-2 text-xs font-semibold text-white hover:bg-leah-950"
              onclick={submit}
            >
              Confirm
            </button>
          </div>
        </footer>
      </div>
    </div>
  {/if}
{/if}
