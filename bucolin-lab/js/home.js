function homePage() {
  const more = (href, key) => `<a class="more" href="${href}">${t(key)}</a>`;

  return `
    <div class="hero">
      <h1 class="logo"><span class="sr-only" lang="en">${esc(LAB.name)}, ${esc(LAB.longName)}</span></h1>
      <p class="lead">${esc(loc(LAB.intro))}</p>
      <p class="links">
        <a href="research.html">${t('nav.research')}</a>
        <a href="people.html">${t('nav.people')}</a>
      </p>
    </div>

    ${section(t('home.news'),
      NEWS.slice(0, 3).map(newsEntry).join('') + more('news.html', 'home.allNews'))}

    ${section(t('research.ongoing'),
      ONGOING_PROJECTS.map(projectEntry).join('') + more('research.html', 'home.allResearch'))}

    ${section(t('home.recent'),
      PUBLICATIONS.slice(0, 3).map(reference).join('') + more('publications.html', 'home.allPapers'))}
  `;
}

start(homePage);
