// Shared by every page: the language, the header and footer, and the small
// helpers the page scripts use to put their HTML together.
//
// Each page script ends with start(render), where render returns the HTML for <main>.
// Switching language just calls that again.

const root = document.documentElement;
const page = document.body.dataset.page;
const NAV = ['news', 'people', 'research', 'publications', 'contact'];

let lang = root.lang;   // 'en' or 'tr', picked in prefs.js
let draw = () => {};


// ---- text ----

// interface text, from data/strings.js
function t(key, values = {}, inLang = lang) {
  const text = STRINGS[inLang][key] ?? STRINGS.en[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => values[name]);
}

// same, for text with a number in it: "1 paper" but "3 papers"
function count(key, n) {
  const one = n === 1 && STRINGS[lang][key + '.one'];
  return t(one ? key + '.one' : key, { n });
}

// content written as { en, tr } in the data files; plain strings pass through
function loc(value) {
  if (!value || typeof value === 'string') return value || '';
  return value[lang] || value.en;
}

function esc(text) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  return String(text).replace(/[&<>"]/g, c => entities[c]);
}

// Escapes the text, then turns [label](address) into a link, **words** into
// bold, and {en|some words} into words marked as English for screen readers.
// An address may have one pair of brackets in it, as Wikipedia's do.
function rich(text) {
  return esc(text)
    .replace(/\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\{(en|tr)\|([^}]+)\}/g, '<span lang="$1">$2</span>');
}

// '2025' stays as it is, '2025-01' becomes January 2025, '2025-01-09' gets its day too
function formatDate(date) {
  const [year, month, day] = date.split('-').map(Number);
  if (!month) return String(year);
  const options = { year: 'numeric', month: 'long' };
  if (day) options.day = 'numeric';
  return new Date(year, month - 1, day || 1).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', options);
}


// ---- pieces of markup ----

const ARROW = '<svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M2.5 1H8v5.5M8 1 1 8" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';

// A link that leaves the site. The arrow is tied to the last word of the label,
// otherwise it can end up on a line by itself.
function out(label, url) {
  const cut = label.lastIndexOf(' ') + 1;
  return `<a href="${esc(url)}">${esc(label.slice(0, cut))}<span class="keep">${esc(label.slice(cut))}${ARROW}</span></a>`;
}

// page title, with the title in the other language underneath
function pageHead(key, extra = '') {
  const other = lang === 'en' ? 'tr' : 'en';
  return `
    <header class="page-head">
      <h1>${t(key)}</h1>
      <span class="gloss" lang="${other}" aria-hidden="true">${t(key, {}, other).toLocaleLowerCase(other)}</span>
      ${extra}
    </header>`;
}

// a block with its label in the left margin
function section(label, content, n) {
  const counter = n ? ` <span class="count">${n}</span>` : '';
  return `
    <section class="section">
      <h2 class="label">${label}${counter}</h2>
      <div>${content}</div>
    </section>`;
}

// same thing with a year in the margin
function yearSection(year, content) {
  return `
    <section class="section">
      <h2 class="label year">${year}</h2>
      <div>${content}</div>
    </section>`;
}

function header() {
  const other = lang === 'en' ? 'tr' : 'en';
  const dark = root.dataset.theme === 'dark';
  const links = NAV.map(name => {
    const current = name === page ? ' aria-current="page"' : '';
    return `<li><a href="${name}.html"${current}>${t('nav.' + name)}</a></li>`;
  });

  return `
    <a class="skip" href="#main">${t('skip')}</a>
    <div class="wrap bar">
      <a class="wordmark" href="index.html"><span lang="en">BUCOLIN</span><span class="sr-only">, ${t('nav.home')}</span></a>
      <nav class="site-nav" id="nav" aria-label="${t('nav.label')}">
        <ul>${links.join('')}</ul>
      </nav>
      <div class="tools">
        <button class="lang-switch" data-do="lang" lang="${other}" aria-label="EN / TR, ${t('lang.switch', {}, other)}">
          <span${lang === 'en' ? ' class="on"' : ''}>EN</span><span class="sep">/</span><span${lang === 'tr' ? ' class="on"' : ''}>TR</span>
        </button>
        <button class="theme-switch" data-do="theme" aria-label="${t(dark ? 'theme.light' : 'theme.dark')}">
          <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 2.75a7.25 7.25 0 0 1 0 14.5z" fill="currentColor"/>
          </svg>
        </button>
        <button class="menu-toggle" data-do="menu" aria-expanded="false" aria-controls="nav">${t('menu')}</button>
      </div>
    </div>`;
}

function footer() {
  const pages = ['home', ...NAV].map(name => {
    const file = name === 'home' ? 'index' : name;
    return `<li><a href="${file}.html">${t('nav.' + name)}</a></li>`;
  });

  return `
    <div class="wrap">
      <div class="cols">
        <div class="about">
          <span class="wordmark" lang="en">BUCOLIN</span>
          <p><span lang="en">${esc(LAB.longName)}</span><br>${esc(loc(LAB.institute.name))}</p>
        </div>
        <nav aria-label="${t('footer.pages')}">
          <h2>${t('footer.pages')}</h2>
          <ul>${pages.join('')}</ul>
        </nav>
        <div>
          <h2>${t('footer.elsewhere')}</h2>
          <ul>
            <li>${out('Hugging Face', LAB.huggingface)}</li>
            <li>${out(loc(LAB.institute.name), LAB.institute.url)}</li>
          </ul>
        </div>
      </div>
    </div>`;
}


// ---- drawing the page ----

function start(render, after) {
  const head = document.getElementById('site-header');
  const main = document.getElementById('main');
  const foot = document.getElementById('site-footer');

  draw = () => {
    document.title = page === 'home' ? `${LAB.name} · ${LAB.longName}` : `${t('title.' + page)} · ${LAB.name}`;
    head.removeAttribute('data-open');
    head.innerHTML = header();
    main.innerHTML = render();
    foot.innerHTML = footer();
    if (after) after();
  };
  draw();

  // the browser looked for #something before the page had any content
  if (location.hash.length > 1) {
    let target = null;
    try {
      target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch (e) { /* a mangled address, nothing to scroll to */ }
    if (target) target.scrollIntoView();
  }
}

function setLang(next) {
  lang = next;
  root.lang = next;
  prefs.set('lang', next);

  // if the address says ?lang=, keep it in step, or a reload would switch back
  const url = new URL(location.href);
  if (url.searchParams.has('lang')) {
    url.searchParams.set('lang', next);
    history.replaceState(null, '', url);
  }

  draw();
  document.querySelector('[data-do="lang"]').focus({ preventScroll: true });
}

function setTheme(next) {
  root.dataset.theme = next;
  const button = document.querySelector('[data-do="theme"]');
  button.setAttribute('aria-label', t(next === 'dark' ? 'theme.light' : 'theme.dark'));
}

function toggleMenu(open) {
  const head = document.getElementById('site-header');
  const button = head.querySelector('[data-do="menu"]');
  head.toggleAttribute('data-open', open);
  button.setAttribute('aria-expanded', open);
  button.textContent = t(open ? 'menu.close' : 'menu');
  // the links come before the button in the page, so Tab would not reach them
  if (open) head.querySelector('.site-nav a').focus({ preventScroll: true });
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-do]');
  if (!button) return;

  const what = button.dataset.do;
  if (what === 'lang') setLang(lang === 'en' ? 'tr' : 'en');
  if (what === 'theme') {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    prefs.set('theme', next);
    setTheme(next);
  }
  if (what === 'menu') toggleMenu(button.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', event => {
  const head = document.getElementById('site-header');
  if (event.key === 'Escape' && head.hasAttribute('data-open')) {
    toggleMenu(false);
    head.querySelector('[data-do="menu"]').focus({ preventScroll: true });
  }
});

// tabbing past the end of the open menu closes it
document.getElementById('site-header').addEventListener('focusout', event => {
  const head = event.currentTarget;
  const leaving = event.relatedTarget && !head.contains(event.relatedTarget);
  if (leaving && head.hasAttribute('data-open')) toggleMenu(false);
});

// follow the system theme for as long as the visitor has not picked one here
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (!prefs.get('theme')) setTheme(event.matches ? 'dark' : 'light');
});

// a page brought back with the Back button was drawn before the last switch
window.addEventListener('pageshow', event => {
  if (!event.persisted) return;

  const theme = prefs.get('theme');
  if ((theme === 'light' || theme === 'dark') && theme !== root.dataset.theme) setTheme(theme);

  const stored = prefs.get('lang');
  if ((stored === 'en' || stored === 'tr') && stored !== lang) {
    lang = stored;
    root.lang = stored;
    draw();
  }
});
