<script>
  const menu = [
    { id: 'home', label: 'Home', key: 'H' },
    { id: 'invoices', label: 'Invoices', key: 'I' },
    { id: 'expenses', label: 'Expenses', key: 'E' },
    { id: 'inventory', label: 'Inventory', key: 'N' },
    { id: 'customers', label: 'Customers', key: 'C' },
    { id: 'projects', label: 'PM', key: 'P' },
    { id: 'hr', label: 'HR', key: 'R' }
  ];

  const invoiceRows = [
    { id: 'FR-240901', created: '03/04/2026', due: '17/04/2026', customer: 'ABCDEF GmbH', status: 'Overdue', amount: 7400 },
    { id: 'FR-240902', created: '05/04/2026', due: '21/04/2026', customer: 'Morgen AG', status: 'Open', amount: 3250 },
    { id: 'FR-240903', created: '06/04/2026', due: '20/04/2026', customer: 'Northwind GmbH', status: 'Paid', amount: 9800 },
    { id: 'FR-240904', created: '07/04/2026', due: '28/04/2026', customer: 'Studio Klein', status: 'Paid', amount: 1520 },
    { id: 'FR-240905', created: '09/04/2026', due: '30/04/2026', customer: 'Velvet Labs', status: 'Offer', amount: 4600 },
    { id: 'FR-240906', created: '10/04/2026', due: '03/05/2026', customer: 'Kaiser Works', status: 'Open', amount: 6800 }
  ];

  const expenseBars = [
    { label: 'Jan', expenses: 24, income: 52, pending: 12 },
    { label: 'Feb', expenses: 31, income: 58, pending: 18 },
    { label: 'Mar', expenses: 27, income: 64, pending: 15 },
    { label: 'Apr', expenses: 38, income: 72, pending: 22 },
    { label: 'May', expenses: 33, income: 69, pending: 19 },
    { label: 'Jun', expenses: 41, income: 81, pending: 25 }
  ];

  const expenseItems = [
    { vendor: 'Office rent', type: 'Fixed', amount: 2400, date: '01/04/2026' },
    { vendor: 'Jira + tooling', type: 'Software', amount: 410, date: '04/04/2026' },
    { vendor: 'Travel to client', type: 'Travel', amount: 730, date: '06/04/2026' },
    { vendor: 'Cloud hosting', type: 'Infrastructure', amount: 980, date: '09/04/2026' }
  ];

  let loggedIn = false;
  let active = 'home';
  let filter = 'All';
  let period = 'Monthly';
  let userName = 'Mate';

  $: visibleInvoices = filter === 'All' ? invoiceRows : invoiceRows.filter((row) => row.status === filter);
  $: totals = invoiceRows.reduce(
    (acc, row) => {
      acc.revenue += row.status === 'Paid' ? row.amount : 0;
      acc.pending += row.status === 'Open' || row.status === 'Overdue' ? row.amount : 0;
      acc.overdue += row.status === 'Overdue' ? row.amount : 0;
      return acc;
    },
    { revenue: 0, pending: 0, overdue: 0 }
  );

  const currency = (value) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  function selectPage(id) {
    active = id;
  }
</script>

{#if !loggedIn}
  <main class="login-screen">
    <section class="login-panel">
      <div class="brand-row">
        <img src="/product-mark.jpeg" alt="Product mark" />
        <span>CMR Finance</span>
      </div>
      <h1>Run the month before the month runs you.</h1>
      <p>Invoices, expenses and cash status in one focused workspace.</p>
      <label>
        Name
        <input bind:value={userName} aria-label="Name" />
      </label>
      <label>
        Password
        <input type="password" value="demo-password" aria-label="Password" />
      </label>
      <div class="login-actions">
        <button on:click={() => (loggedIn = true)}>Log in</button>
        <a href="/">Forgot password</a>
      </div>
    </section>
    <aside class="login-preview" aria-label="Preview dashboard">
      <div class="preview-topline">
        <span>Live status</span>
        <strong>{currency(totals.pending)}</strong>
      </div>
      <div class="mini-bars">
        {#each expenseBars as item}
          <span style={`height:${item.income}%`}></span>
        {/each}
      </div>
      <div class="preview-grid">
        <div><b>6</b><small>Invoices</small></div>
        <div><b>2</b><small>Open</small></div>
        <div><b>1</b><small>Overdue</small></div>
      </div>
    </aside>
  </main>
{:else}
  <div class="app-shell">
    <aside class="sidebar">
      <button class="logo-button" on:click={() => selectPage('home')} aria-label="Go home">
        <img src="/product-mark.jpeg" alt="" />
        <span>CMR</span>
      </button>
      <nav aria-label="Main menu">
        {#each menu as item}
          <button class:active={active === item.id} on:click={() => selectPage(item.id)}>
            <span>{item.label}</span>
            <kbd>{item.key}</kbd>
          </button>
        {/each}
      </nav>
      <div class="sidebar-bottom">
        <button on:click={() => selectPage('account')}>Account</button>
        <button on:click={() => selectPage('settings')}>Settings</button>
      </div>
    </aside>

    <main class="workspace">
      <header class="topbar">
        <div>
          <p>Welcome back, {userName}</p>
          <h1>{active === 'home' ? 'Dashboard' : menu.find((item) => item.id === active)?.label ?? active}</h1>
        </div>
        <div class="topbar-actions">
          <button class="secondary">Export</button>
          <button on:click={() => (active = 'invoices')}>New invoice</button>
        </div>
      </header>

      {#if active === 'home'}
        <section class="metric-grid" aria-label="Current status">
          <article>
            <span>Paid income</span>
            <strong>{currency(totals.revenue)}</strong>
            <small>+14% vs last month</small>
          </article>
          <article>
            <span>Pending income</span>
            <strong>{currency(totals.pending)}</strong>
            <small>2 open, 1 overdue</small>
          </article>
          <article>
            <span>Overdue risk</span>
            <strong>{currency(totals.overdue)}</strong>
            <small>Needs follow-up today</small>
          </article>
          <article>
            <span>Expenses</span>
            <strong>{currency(4520)}</strong>
            <small>Ready for tax export</small>
          </article>
        </section>

        <section class="split-layout">
          <article class="chart-panel">
            <div class="panel-head">
              <div>
                <h2>Cash movement</h2>
                <p>{period} view</p>
              </div>
              <button class="secondary" on:click={() => (period = period === 'Monthly' ? 'Weekly' : 'Monthly')}>{period}</button>
            </div>
            <div class="chart" aria-label="Income expense chart">
              {#each expenseBars as item}
                <div class="bar-group">
                  <span class="income" style={`height:${item.income}%`}></span>
                  <span class="expenses" style={`height:${item.expenses}%`}></span>
                  <span class="pending" style={`height:${item.pending}%`}></span>
                  <small>{item.label}</small>
                </div>
              {/each}
            </div>
            <div class="legend">
              <span><i class="income-dot"></i>Income</span>
              <span><i class="expense-dot"></i>Expenses</span>
              <span><i class="pending-dot"></i>Pending</span>
            </div>
          </article>

          <article class="status-panel">
            <div class="panel-head">
              <div>
                <h2>Latest invoices</h2>
                <p>Current status</p>
              </div>
              <button class="secondary" on:click={() => (active = 'invoices')}>View all</button>
            </div>
            <div class="invoice-stack">
              {#each invoiceRows.slice(0, 5) as invoice}
                <button class="invoice-card" on:click={() => (active = 'invoices')}>
                  <span>{invoice.id}</span>
                  <strong>{invoice.customer}</strong>
                  <em class={`status ${invoice.status.toLowerCase()}`}>{invoice.status}</em>
                </button>
              {/each}
            </div>
          </article>
        </section>
      {:else if active === 'invoices'}
        <section class="table-page">
          <div class="page-intro">
            <div>
              <h2>Invoices</h2>
              <p>Create offers, track invoice status and export the filtered list.</p>
            </div>
            <button>New invoice</button>
          </div>
          <div class="filters" aria-label="Invoice filters">
            {#each ['All', 'Offer', 'Open', 'Paid', 'Overdue'] as option}
              <button class:active={filter === option} on:click={() => (filter = option)}>{option}</button>
            {/each}
          </div>
          <div class="invoice-table">
            <div class="table-row table-head">
              <span>Invoice</span><span>Created</span><span>Due date</span><span>Customer</span><span>Status</span><span>Amount</span>
            </div>
            {#each visibleInvoices as invoice}
              <div class="table-row">
                <strong>{invoice.id}</strong>
                <span>{invoice.created}</span>
                <span>{invoice.due}</span>
                <span>{invoice.customer}</span>
                <em class={`status ${invoice.status.toLowerCase()}`}>{invoice.status}</em>
                <span>{currency(invoice.amount)}</span>
              </div>
            {/each}
          </div>
        </section>
      {:else if active === 'expenses'}
        <section class="split-layout">
          <article class="chart-panel">
            <div class="panel-head">
              <div>
                <h2>Expenses</h2>
                <p>Manual entries feeding the dashboard.</p>
              </div>
              <button>Add expense</button>
            </div>
            <div class="expense-list">
              {#each expenseItems as item}
                <div>
                  <span>{item.vendor}</span>
                  <small>{item.type} · {item.date}</small>
                  <strong>{currency(item.amount)}</strong>
                </div>
              {/each}
            </div>
          </article>
          <article class="status-panel accent-panel">
            <h2>Tax export</h2>
            <p>April expenses are categorized and ready for review before declaration.</p>
            <strong>{currency(expenseItems.reduce((sum, item) => sum + item.amount, 0))}</strong>
            <button>Export CSV</button>
          </article>
        </section>
      {:else}
        <section class="empty-page">
          <h2>{menu.find((item) => item.id === active)?.label ?? active}</h2>
          <p>This module is reserved in the navigation and ready for the next use case.</p>
          <button on:click={() => (active = 'home')}>Back to dashboard</button>
        </section>
      {/if}
    </main>
  </div>
{/if}
