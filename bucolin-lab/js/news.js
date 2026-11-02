const TAGS = ['paper', 'award', 'people', 'resource'];
let showing = 'all';

// one small drawing for each kind of news, on the timeline and on the filter buttons
const ICONS = {
  paper: '<path d="M3.75 1.75h5.5l3 3v9.5h-8.5z"/><path d="M9.25 1.75v3h3M6 8.5h4M6 11.25h4"/>',
  award: '<circle cx="8" cy="6" r="4.25"/><path d="M5.5 9.5 4.75 14.5 8 12.75l3.25 1.75-.75-5"/>',
  people: '<circle cx="8" cy="5.25" r="2.75"/><path d="M2.75 14.25c.6-3 2.7-4.5 5.25-4.5s4.65 1.5 5.25 4.5"/>',
  resource: '<path d="M8 1.75 14.25 5 8 8.25 1.75 5z"/><path d="m1.75 8 6.25 3.25L14.25 8M1.75 11l6.25 3.25L14.25 11"/>',
};

function icon(tag) {
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[tag]}</svg>`;
}

// A sentence ends at . ! or ? when a space and a capital letter come next.
const SENTENCE_END = /[.!?]["”’)*]*(?=\s+["“‘(*\[]*\p{Lu})/gu;
// ...but not after an initial or a title ("E. Sümeyra", "Prof. Dr. ...")
const NOT_AN_END = /(?:^|[\s(.])(?:\p{Lu}|Dr|Prof|Assoc|Asst|Doç|Öğr|Arş|Gör|St)$/u;

// Splits an announcement after its first sentence, so that sentence can be set larger.
// A full stop inside a link, bold words or a quoted title does not count.
function firstSentence(text) {
  for (const match of text.matchAll(SENTENCE_END)) {
    if (NOT_AN_END.test(text.slice(0, match.index))) continue;
    const cut = match.index + match[0].length;
    const head = text.slice(0, cut);
    const times = mark => head.split(mark).length - 1;
    const closed = times('**') % 2 === 0 && times('"') % 2 === 0
      && times('[') === times(']') && times('{') === times('}');
    if (closed) return [head, text.slice(cut).trim()];
  }
  return [text, ''];
}

// The news page's own version of newsEntry() in parts.js: the item hangs on the
// timeline by a round node, and its first sentence leads.
function newsItem(item) {
  const [first, rest] = firstSentence(loc(item.body));
  const tag = `<span class="tag" data-tag="${item.tag}">${t('tag.' + item.tag)}</span>`;
  const when = item.date ? `<span class="meta">${formatDate(String(item.date))}</span>` : '';
  const more = (item.more || []).map(line => `<li>${rich(loc(line))}</li>`);

  return `
    <article class="item" id="${item.id}" data-tag="${item.tag}">
      <span class="node">${icon(item.tag)}</span>
      <p class="kicker">${tag}${when}</p>
      <h3 class="first">${rich(first)}</h3>
      ${rest ? `<p class="rest">${rich(rest)}</p>` : ''}
      ${more.length ? `<ul class="more-lines">${more.join('')}</ul>` : ''}
    </article>`;
}

function newsPage() {
  const items = NEWS.filter(item => showing === 'all' || item.tag === showing);

  const button = (tag, label) => {
    const n = NEWS.filter(item => tag === 'all' || item.tag === tag).length;
    return `<button data-show="${tag}" aria-pressed="${tag === showing}">`
      + `${tag === 'all' ? '' : icon(tag)}${label} <span class="n">${n}</span></button>`;
  };
  const filters = `
    <div class="filters" role="group" aria-label="${t('news.filter')}">
      ${button('all', t('news.all'))}
      ${TAGS.map(tag => button(tag, t('tags.' + tag))).join('')}
    </div>`;

  // the margin says what is being shown, and how many of them there are
  const label = showing === 'all' ? t('news.all') : t('tags.' + showing);

  return pageHead('title.news', filters)
    + section(label, `<div class="timeline">${items.map(newsItem).join('')}</div>`, items.length);
}

document.getElementById('main').addEventListener('click', event => {
  const button = event.target.closest('[data-show]');
  if (!button) return;
  showing = button.dataset.show;
  draw();
  document.querySelector(`[data-show="${showing}"]`).focus({ preventScroll: true });
});

start(newsPage);
