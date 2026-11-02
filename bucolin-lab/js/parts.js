// Entries that show up on more than one page: a news item, a project, a paper.

function findPaper(id) {
  const paper = PUBLICATIONS.find(paper => paper.id === id);
  if (!paper) console.warn(`No paper with the id "${id}" in data/publications.js`);
  return paper;
}

// A paper as a reference: authors. year. title. venue
// It stays in English in both languages, as citations do.
function reference(paper) {
  const title = paper.url
    ? `<a class="title" href="${esc(paper.url)}">${esc(paper.title)}</a>`
    : `<span class="title">${esc(paper.title)}</span>`;
  return `<p class="reference" id="${paper.id}" lang="en">${esc(paper.authors)}. ${paper.year}. ${title}. ${esc(paper.venue)}</p>`;
}

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

// A news item, hanging on the timeline by a round node, its first sentence leading.
// Put a list of these inside <div class="timeline">.
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

function projectEntry(project) {
  let period = '';
  if (project.from) period = project.to ? `${project.from}–${project.to}` : `${project.from} –`;
  const meta = [project.funder, period].filter(Boolean).join(', ');
  const papers = (project.papers || []).map(findPaper).filter(Boolean);

  return `
    <article class="entry">
      <h3>${esc(loc(project.title))}</h3>
      ${meta ? `<p class="meta">${esc(meta)}</p>` : ''}
      ${project.with ? `<p class="muted">${esc(t('research.with', { names: project.with.join(', ') }))}</p>` : ''}
      ${papers.length ? `<div class="papers">${papers.map(reference).join('')}</div>` : ''}
    </article>`;
}
