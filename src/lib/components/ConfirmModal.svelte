<script>
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import X from 'lucide-svelte/icons/x';
  import { lockDialogFocus } from '../dialogFocus.js';

  /**
   * @typedef {{
   *   title: string,
   *   message: string,
   *   confirmLabel?: string,
   *   cancelLabel?: string,
   *   tone?: 'danger' | 'info' | 'warn',
   *   prompt?: { label: string, placeholder?: string, defaultValue?: string, required?: boolean },
   *   onConfirm: (promptValue?: string) => void
   * }} ConfirmRequest
   */

  let {
    /** @type {ConfirmRequest | null} */
    request = null,
    onClose
  } = $props();

  const open = $derived(request !== null);
  const tone = $derived(request?.tone ?? 'danger');

  let dialogEl = $state();
  let promptValue = $state('');
  let promptError = $state('');

  $effect(() => {
    if (!request) {
      promptValue = '';
      promptError = '';
      return;
    }
    promptValue = request.prompt?.defaultValue ?? '';
    promptError = '';
  });

  $effect(() => {
    if (!request) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter' && !request?.prompt) confirm();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  $effect(() => {
    if (!request) return;
    return lockDialogFocus(() => dialogEl);
  });

  function confirm() {
    if (request?.prompt?.required && !promptValue.trim()) {
      promptError = 'This field is required.';
      return;
    }
    request?.onConfirm(promptValue.trim());
    onClose();
  }
</script>

{#if open && request}
  <div
    class="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
    role="presentation"
  >
    <button
      type="button"
      class="absolute inset-0 bg-zinc-900/55 backdrop-blur-[1px]"
      aria-label="Close"
      onclick={onClose}
    ></button>
    <div
      bind:this={dialogEl}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-message"
      class="relative z-10 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl"
    >
      <div class="flex items-start gap-4">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full {tone === 'danger'
            ? 'bg-rose-100 text-rose-700'
            : tone === 'warn'
              ? 'bg-amber-100 text-amber-800'
              : 'bg-sky-100 text-sky-700'}"
          aria-hidden="true"
        >
          <AlertTriangle class="h-5 w-5" />
        </span>
        <div class="min-w-0 flex-1">
          <h2 id="confirm-modal-title" class="text-base font-bold text-zinc-900">{request.title}</h2>
          <p id="confirm-modal-message" class="mt-1 text-sm leading-relaxed text-zinc-600">
            {request.message}
          </p>
          {#if request.prompt}
            <label class="mt-3 block text-sm font-semibold text-zinc-700">
              {request.prompt.label}
              <input
                bind:value={promptValue}
                placeholder={request.prompt.placeholder ?? ''}
                class="mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm font-normal {promptError ? 'border-rose-500' : 'border-zinc-200'}"
              />
            </label>
            {#if promptError}
              <p class="mt-1 text-xs font-medium text-rose-700">{promptError}</p>
            {/if}
          {/if}
        </div>
        <button
          type="button"
          class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100"
          onclick={onClose}
          aria-label="Close"
        >
          <X class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div class="mt-5 flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          class="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
          onclick={onClose}
        >
          {request.cancelLabel ?? 'Cancel'}
        </button>
        <button
          type="button"
          class="rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus-visible:ring-2 {tone ===
          'danger'
            ? 'bg-rose-700 hover:bg-rose-800 focus-visible:ring-rose-400'
            : tone === 'warn'
              ? 'bg-amber-600 hover:bg-amber-700 focus-visible:ring-amber-300'
              : 'bg-leah-900 hover:bg-leah-950 focus-visible:ring-leah-700/50'}"
          onclick={confirm}
        >
          {request.confirmLabel ?? 'Confirm'}
        </button>
      </div>
    </div>
  </div>
{/if}
