<script>
  import X from 'lucide-svelte/icons/x';
  import Printer from 'lucide-svelte/icons/printer';
  import Download from 'lucide-svelte/icons/download';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';
  import { summarizeLines, lineNetTotal } from '../invoiceMath.js';
  import { formatMoney, convert, currencyLabel } from '../fx.js';

  let { invoice = null, customer = null, company = null, onClose, onEdit = null, canEdit = false } = $props();

  let dialogEl = $state();

  $effect(() => {
    if (!invoice) return;
    return useEscape(onClose);
  });

  $effect(() => {
    if (!invoice) return;
    return lockDialogFocus(() => dialogEl);
  });

  const totals = $derived(summarizeLines(invoice?.items ?? []));
  const code = $derived(invoice?.currency ?? customer?.currency ?? 'EUR');
  const fxNote = $derived.by(() => {
    if (!invoice) return null;
    if (code === 'EUR') return null;
    const eur = convert(totals.gross, code, 'EUR');
    return `≈ ${formatMoney(eur, 'EUR', 'de-DE')} at workspace base`;
  });
  const balance = $derived.by(() => {
    if (!invoice) return 0;
    return Math.max(0, (totals.gross || invoice.amount || 0) - Number(invoice.amountPaid ?? 0));
  });

  function fmt(value) {
    return formatMoney(value, code, 'de-DE');
  }

  function printPreview() {
    window.print?.();
  }

  function downloadPdf() {
    /*
     * PDF in-browser without extra deps just calls the OS print dialog and
     * lets the user pick "Save as PDF". The print stylesheet hides the chrome.
     */
    window.print?.();
  }

  const dunning = $derived(
    Array.isArray(invoice?.dunning) ? [...invoice.dunning].sort((a, b) => a.at.localeCompare(b.at)) : []
  );

  function dunningLabel(kind) {
    if (kind === 'issued') return 'Issued';
    if (kind === 'reminder') return 'Reminder';
    if (kind === 'paid') return 'Paid';
    if (kind === 'partial') return 'Partial payment';
    if (kind === 'cancelled') return 'Cancelled';
    return kind;
  }

  function dunningClass(kind) {
    if (kind === 'paid') return 'bg-emerald-100 text-emerald-800';
    if (kind === 'partial') return 'bg-sky-100 text-sky-800';
    if (kind === 'reminder') return 'bg-amber-100 text-amber-800';
    if (kind === 'cancelled') return 'bg-violet-100 text-violet-800';
    return 'bg-zinc-100 text-zinc-700';
  }

  let isCreditNote = $derived(Boolean(invoice?.isCreditNote));
  let isCancelled = $derived(invoice?.status === 'Cancelled');
  let isOffer = $derived(invoice?.status === 'Offer');
  let docTypeLabel = $derived(
    isCreditNote ? 'Credit note · Storno' : isCancelled ? 'Cancelled invoice' : isOffer ? 'Offer · proposal' : 'Invoice'
  );
</script>

{#if invoice}
  <div class="fixed inset-0 z-[65] flex items-end justify-center p-4 sm:items-center" role="presentation" data-print-root="true">
    <button
      type="button"
      class="absolute inset-0 bg-zinc-900/50 backdrop-blur-[1px] print:hidden"
      aria-label="Close"
      onclick={onClose}
    ></button>
    <div
      bind:this={dialogEl}
      role="dialog"
      aria-modal="true"
      aria-labelledby="invoice-preview-title"
      class="emi-print-card relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col rounded-2xl border border-zinc-200 bg-white shadow-2xl"
    >
      <header class="flex items-start justify-between gap-3 border-b border-zinc-100 px-6 py-4 print:hidden">
        <h2 id="invoice-preview-title" class="text-base font-bold text-zinc-900">
          {isCreditNote ? 'Credit note preview' : isCancelled ? 'Cancelled invoice preview' : isOffer ? 'Offer preview' : 'Invoice preview'}
        </h2>
        <div class="flex items-center gap-1">
          {#if isOffer && canEdit && onEdit && invoice?.id}
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg border border-leah-700 bg-leah-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-leah-800"
              onclick={() => { onEdit(invoice.id); onClose?.(); }}
            >
              Edit offer
            </button>
          {/if}
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
            onclick={downloadPdf}
            title="Use the print dialog to save as PDF"
          >
            <Download class="h-4 w-4" aria-hidden="true" />
            PDF
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
            onclick={printPreview}
          >
            <Printer class="h-4 w-4" aria-hidden="true" />
            Print
          </button>
          <button
            type="button"
            class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
            onclick={onClose}
            aria-label="Close"
          >
            <X class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto px-5 py-5">
        <div class="rounded-xl border bg-white p-6 text-zinc-800 shadow-sm {isCreditNote ? 'border-violet-300' : isCancelled ? 'border-zinc-300' : 'border-zinc-200'}">
          {#if isCreditNote || isCancelled}
            <div class="mb-5 flex items-start gap-3 rounded-lg border px-4 py-3 text-xs leading-relaxed {isCreditNote ? 'border-violet-200 bg-violet-50 text-violet-900' : 'border-zinc-300 bg-zinc-100 text-zinc-700'}">
              <strong class="rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest {isCreditNote ? 'bg-violet-700 text-white' : 'bg-zinc-700 text-white'}">
                {isCreditNote ? 'Storno' : 'Cancelled'}
              </strong>
              {#if isCreditNote && invoice.referenceInvoiceId}
                <span class="flex-1">This document cancels invoice <strong class="font-mono">{invoice.referenceInvoiceId}</strong>. The reversed line items create a negative gross total for tax purposes.</span>
              {:else if isCancelled && invoice.creditNoteId}
                <span class="flex-1">This invoice was cancelled by credit note <strong class="font-mono">{invoice.creditNoteId}</strong>{invoice.cancelReason ? ` — ${invoice.cancelReason}` : ''}. It is preserved on file for audit/tax compliance.</span>
              {:else}
                <span class="flex-1">This document is part of a credit-note workflow.</span>
              {/if}
            </div>
          {/if}
          <div class="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-100 pb-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide {isCreditNote ? 'text-violet-700' : 'text-leah-700'}">{docTypeLabel}{currencyLabel(code) !== '€' ? ` · ${code}` : ''}</p>
              <h3 class="mt-1 text-2xl font-extrabold tracking-tight text-zinc-900 {isCancelled && !isCreditNote ? 'line-through decoration-2' : ''}">{invoice.id ?? 'Draft'}</h3>
              {#if invoice.title}
                <p class="mt-1 text-sm font-semibold italic text-zinc-700">{invoice.title}</p>
              {/if}
              <p class="mt-1 text-xs text-zinc-500">Created {invoice.created ?? '—'}{isOffer ? '' : ` · Due ${invoice.due ?? '—'}`}</p>
              {#if invoice.poRef}
                <p class="mt-1 text-xs text-zinc-500">PO {invoice.poRef}</p>
              {/if}
              {#if isCancelled && invoice.cancelledAt}
                <p class="mt-1 text-xs font-semibold text-zinc-600">Cancelled on {invoice.cancelledAt}</p>
              {/if}
            </div>
            <div class="text-right text-xs leading-relaxed text-zinc-600">
              <p class="text-sm font-bold text-zinc-900">{company?.legalName ?? '—'}</p>
              <p>{company?.street ?? ''}</p>
              <p>{company?.postalCode ?? ''} {company?.city ?? ''}</p>
              <p>{company?.country ?? ''}</p>
              <p class="mt-2">VAT {company?.vatId ?? '—'}</p>
              <p>{company?.email ?? ''}</p>
            </div>
          </div>

          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Bill to</p>
              <p class="mt-1 text-sm font-bold text-zinc-900">{customer?.name ?? '—'}</p>
              {#if customer?.address}<p class="text-xs text-zinc-600">{customer.address}</p>{/if}
              {#if customer?.country}<p class="text-xs text-zinc-600">{customer.country}</p>{/if}
              {#if customer?.vatId}<p class="mt-1 text-xs text-zinc-600">VAT {customer.vatId}</p>{/if}
              {#if customer?.email}<p class="text-xs text-zinc-600">{customer.email}</p>{/if}
              {#if customer?.contacts?.length}
                <p class="mt-2 text-[10px] font-bold uppercase tracking-wide text-zinc-500">Contacts</p>
                {#each customer.contacts as person}
                  <p class="text-xs text-zinc-600">{person.role}: {person.name}</p>
                {/each}
              {/if}
            </div>
            <div class="text-sm sm:text-right">
              <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Status</p>
              <p class="mt-1 inline-flex rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-700">
                {invoice.status}
              </p>
              <p class="mt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">Payment terms</p>
              <p class="mt-1 text-sm text-zinc-700">{customer?.paymentTermsDays ?? company?.paymentTermsDays ?? '—'} days</p>
              {#if invoice.amountPaid}
                <p class="mt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">Paid so far</p>
                <p class="mt-1 text-sm text-zinc-700 tabular-nums">{fmt(invoice.amountPaid)}</p>
              {/if}
            </div>
          </div>

          <table class="mt-6 w-full text-left text-sm">
            <thead>
              <tr class="border-b border-zinc-200 text-xs font-bold uppercase tracking-wide text-zinc-500">
                <th class="py-2" scope="col">Description</th>
                <th class="py-2 text-right" scope="col">Qty</th>
                <th class="py-2 text-right" scope="col">Unit</th>
                <th class="py-2 text-right" scope="col">VAT</th>
                <th class="py-2 text-right" scope="col">Net</th>
              </tr>
            </thead>
            <tbody>
              {#each invoice.items ?? [] as item}
                <tr class="border-b border-zinc-100">
                  <td class="py-2 pr-2 text-zinc-800">{item.description || '—'}</td>
                  <td class="py-2 text-right tabular-nums text-zinc-700">{item.qty}</td>
                  <td class="py-2 text-right tabular-nums text-zinc-700">{fmt(Number(item.unitPrice) || 0)}</td>
                  <td class="py-2 text-right tabular-nums text-zinc-500">{Number(item.vatRate ?? 0)}%</td>
                  <td class="py-2 text-right tabular-nums text-zinc-900">{fmt(lineNetTotal(item))}</td>
                </tr>
              {:else}
                <tr><td colspan="5" class="py-4 text-center text-sm text-zinc-400">No line items.</td></tr>
              {/each}
            </tbody>
          </table>

          <div class="mt-4 ml-auto w-full max-w-xs space-y-1 text-sm">
            <div class="flex justify-between text-zinc-600">
              <span>Net</span>
              <span class="tabular-nums">{fmt(totals.net)}</span>
            </div>
            {#each totals.byVat as bucket}
              <div class="flex justify-between text-xs text-zinc-500">
                <span>VAT {bucket.rate}% on {fmt(bucket.net)}</span>
                <span class="tabular-nums">{fmt(bucket.vat)}</span>
              </div>
            {/each}
            <div class="mt-2 flex justify-between border-t border-zinc-200 pt-2 text-base font-bold text-zinc-900">
              <span>Gross total</span>
              <span class="tabular-nums">{fmt(totals.gross)}</span>
            </div>
            {#if invoice.amountPaid}
              <div class="flex justify-between text-xs text-emerald-700">
                <span>Paid</span>
                <span class="tabular-nums">−{fmt(invoice.amountPaid)}</span>
              </div>
              <div class="flex justify-between text-sm font-semibold text-zinc-900">
                <span>Balance</span>
                <span class="tabular-nums">{fmt(balance)}</span>
              </div>
            {/if}
            {#if fxNote}
              <p class="text-right text-[10px] uppercase tracking-wide text-zinc-400">{fxNote}</p>
            {/if}
          </div>

          {#if dunning.length}
            <details class="mt-5 group" open={isCreditNote || isCancelled}>
              <summary class="flex cursor-pointer list-none items-center justify-between gap-2 rounded-md py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-500 hover:text-zinc-700 [&::-webkit-details-marker]:hidden">
                <span>Dunning timeline · {dunning.length} entries</span>
                <span class="text-zinc-400 transition group-open:rotate-90" aria-hidden="true">›</span>
              </summary>
              <ol class="mt-2 space-y-1 text-xs text-zinc-700">
                {#each dunning as step}
                  <li class="flex items-start gap-2">
                    <span class="inline-flex shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide {dunningClass(step.kind)}">
                      {dunningLabel(step.kind)}
                    </span>
                    <span class="flex-1">
                      <span class="font-semibold text-zinc-800">{step.at}</span>
                      {#if step.note}<span class="text-zinc-500"> · {step.note}</span>{/if}
                    </span>
                  </li>
                {/each}
              </ol>
            </details>
          {/if}

          {#if invoice.notes}
            <p class="mt-6 rounded-lg bg-zinc-50 px-4 py-3 text-xs leading-relaxed text-zinc-600">
              <span class="block text-[10px] font-bold uppercase tracking-wide text-zinc-500">Notes</span>
              {invoice.notes}
            </p>
          {/if}

          <p class="mt-8 border-t border-zinc-100 pt-4 text-[11px] text-zinc-400">
            Bank · IBAN {company?.iban ?? '—'} · BIC {company?.bic ?? '—'} · Registry {company?.registry ?? '—'}
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}
