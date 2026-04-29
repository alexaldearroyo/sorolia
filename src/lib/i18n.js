/**
 * Tiny translator. Strings are flat key → string. Missing keys fall back to
 * English. The locale store is set from prefs in App.svelte.
 */

const dictionaries = {
  'en-GB': {
    'app.welcome': 'Welcome back',
    'app.export.workspace': 'Export workspace',
    'app.search.placeholder': 'Search workspace…',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.close': 'Close',
    'common.edit': 'Edit',
    'common.create': 'Create',
    'common.export': 'Export',
    'common.csv': 'CSV',
    'common.preview': 'Preview',
    'common.print': 'Print',
    'common.back': 'Back',
    'common.dismiss': 'Dismiss',
    'topbar.search.hint': 'Search workspace…',
    'menu.dashboard': 'Dashboard',
    'menu.invoices': 'Invoices',
    'menu.expenses': 'Expenses',
    'menu.calendar': 'Calendar',
    'menu.inventory': 'Inventory',
    'menu.customers': 'Customers',
    'menu.projects': 'Projects',
    'menu.people': 'People',
    'menu.team': 'Team',
    'menu.audit': 'Audit log',
    'menu.settings': 'Settings',
    'menu.account': 'My account',
    'login.signin': 'Sign in',
    'login.profile': 'Profile',
    'login.password': 'Password',
    'login.open': 'Open as'
  },
  'de-DE': {
    'app.welcome': 'Willkommen zurück',
    'app.export.workspace': 'Workspace exportieren',
    'app.search.placeholder': 'Im Workspace suchen…',
    'common.cancel': 'Abbrechen',
    'common.save': 'Speichern',
    'common.delete': 'Löschen',
    'common.close': 'Schließen',
    'common.edit': 'Bearbeiten',
    'common.create': 'Anlegen',
    'common.export': 'Exportieren',
    'common.csv': 'CSV',
    'common.preview': 'Vorschau',
    'common.print': 'Drucken',
    'common.back': 'Zurück',
    'common.dismiss': 'Verwerfen',
    'topbar.search.hint': 'Im Workspace suchen…',
    'menu.dashboard': 'Übersicht',
    'menu.invoices': 'Rechnungen',
    'menu.expenses': 'Ausgaben',
    'menu.calendar': 'Kalender',
    'menu.inventory': 'Lager',
    'menu.customers': 'Kunden',
    'menu.projects': 'Projekte',
    'menu.people': 'Personen',
    'menu.team': 'Team',
    'menu.audit': 'Audit-Log',
    'menu.settings': 'Einstellungen',
    'menu.account': 'Mein Konto',
    'login.signin': 'Anmelden',
    'login.profile': 'Profil',
    'login.password': 'Passwort',
    'login.open': 'Öffnen als'
  },
  'es-ES': {
    'app.welcome': 'Bienvenido/a',
    'app.export.workspace': 'Exportar workspace',
    'app.search.placeholder': 'Buscar en el workspace…',
    'common.cancel': 'Cancelar',
    'common.save': 'Guardar',
    'common.delete': 'Borrar',
    'common.close': 'Cerrar',
    'common.edit': 'Editar',
    'common.create': 'Crear',
    'common.export': 'Exportar',
    'common.csv': 'CSV',
    'common.preview': 'Previsualizar',
    'common.print': 'Imprimir',
    'common.back': 'Volver',
    'common.dismiss': 'Descartar',
    'topbar.search.hint': 'Buscar en el workspace…',
    'menu.dashboard': 'Panel',
    'menu.invoices': 'Facturas',
    'menu.expenses': 'Gastos',
    'menu.calendar': 'Calendario',
    'menu.inventory': 'Inventario',
    'menu.customers': 'Clientes',
    'menu.projects': 'Proyectos',
    'menu.people': 'Personas',
    'menu.team': 'Equipo',
    'menu.audit': 'Registro auditoría',
    'menu.settings': 'Ajustes',
    'menu.account': 'Mi cuenta',
    'login.signin': 'Acceder',
    'login.profile': 'Perfil',
    'login.password': 'Contraseña',
    'login.open': 'Entrar como'
  }
};

let currentLocale = 'en-GB';
const listeners = new Set();

export function setLocale(locale) {
  if (!dictionaries[locale]) return;
  currentLocale = locale;
  listeners.forEach((fn) => fn(locale));
}

export function getLocale() {
  return currentLocale;
}

export function subscribeLocale(fn) {
  listeners.add(fn);
  fn(currentLocale);
  return () => listeners.delete(fn);
}

export function t(key, fallback) {
  const dict = dictionaries[currentLocale] ?? dictionaries['en-GB'];
  return dict[key] ?? dictionaries['en-GB'][key] ?? fallback ?? key;
}

export const supportedLocales = Object.keys(dictionaries);
