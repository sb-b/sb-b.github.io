function homePage() {
  const labSection = (title, href, moreKey, content, gridClass = '') => `
    <section class="lab-section">
      <div class="lab-section-head">
        <h2>${title}</h2>
        <a class="lab-more" href="${href}">${t(moreKey)} &rarr;</a>
      </div>
      <div class="lab-section-body ${gridClass}">
        ${content}
      </div>
    </section>
  `;

  const newsCard = (item) => {
    const imgSrc = item.image || item.img || item.photo;
    const href = item.id ? `news.html#${esc(item.id)}` : 'news.html';
    const media = imgSrc
      ? `<img src="${esc(imgSrc)}" alt="" loading="lazy">`
      : `<div class="news-card-placeholder" aria-hidden="true"></div>`;

    return `
      <article class="news-card" data-href="${href}">
        <a class="news-card-media" href="${href}" tabindex="-1">${media}</a>
        <div class="news-card-body">
          <div class="news-card-clip">${newsItem(item)}</div>
          <a class="news-card-more" href="${href}">... &rarr;</a>
        </div>
      </article>
    `;
  };

  return `
    <div class="hero">
      <h1 class="logo"><span class="sr-only" lang="en">${esc(LAB.name)}, ${esc(LAB.longName)}</span></h1>
      <div class="hero-content">
        <p class="lead">${esc(loc(LAB.intro))}</p>
        <p class="links">
          <a href="research.html">${t('nav.research')}</a>
          <a href="publications.html">${t('nav.publications')}</a>
          <a href="people.html">${t('nav.people')}</a>
        </p>
      </div>
    </div>

    ${labSection(
      t('home.news'),
      'news.html',
      'home.allNews',
      NEWS.slice(0, 4).map(newsCard).join(''),
      'news-grid-4'
    )}

    ${labSection(
      t('research.ongoing'),
      'research.html',
      'home.allResearch',
      ONGOING_PROJECTS.map(projectEntry).join(''),
      'card-grid card-grid-2'
    )}

    ${labSection(
      t('home.recent'),
      'publications.html',
      'home.allPapers',
      PUBLICATIONS.slice(0, 4).map(reference).join(''),
      'pub-list'
    )}
  `;
}

/* Kartın herhangi bir yerine tıklanınca (içindeki linkler hariç) ilgili habere git */
document.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('.news-card[data-href]');
  if (card) window.location.href = card.dataset.href;
});

start(homePage);
