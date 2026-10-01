// Loaded in <head> so the theme and language are settled before anything is drawn.
//
// The site opens in English. It is in Turkish for a visitor who picked TR in the
// header before, or who followed a link ending in ?lang=tr. The theme follows the
// visitor's system until they pick one with the button.

const prefs = {
  get(key) {
    try { return localStorage.getItem('bucolin-' + key); } catch (e) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem('bucolin-' + key, value); } catch (e) { /* private mode, nothing to do */ }
  },
};

// In a block of its own: site.js has a root and a lang too, and all these
// scripts share one scope.
{
  const root = document.documentElement;

  let theme = prefs.get('theme');
  if (theme !== 'light' && theme !== 'dark') {
    theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.dataset.theme = theme;

  let asked = new URLSearchParams(location.search).get('lang');
  if (asked !== 'en' && asked !== 'tr') asked = null;
  if (asked) prefs.set('lang', asked);

  const lang = asked || prefs.get('lang');
  root.lang = lang === 'tr' ? 'tr' : 'en';
}
