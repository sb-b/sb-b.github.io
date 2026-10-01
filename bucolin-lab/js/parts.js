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

function newsEntry(item) {
  const tag = `<span class="tag" data-tag="${item.tag}">${t('tag.' + item.tag)}</span>`;
  const when = item.date ? `<span class="meta">${formatDate(String(item.date))}</span>` : '';
  const more = (item.more || []).map(line => `<li>${rich(loc(line))}</li>`);

  return `
    <article class="entry" id="${item.id}">
      <p class="kicker">${tag}${when}</p>
      <p>${rich(loc(item.body))}</p>
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
