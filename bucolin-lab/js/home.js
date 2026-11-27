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

    ${labSection(
      t('home.news'),
      'news.html',
      'home.allNews',
      NEWS.slice(0, 3).map(newsItem).join(''),
      'card-grid card-grid-3'
    )}
  `;
}

start(homePage);
