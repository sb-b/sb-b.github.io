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

  const newsItems = NEWS.slice(0, 5);

  const newsSlide = (item, i) => {
    const imgSrc = item.image || item.img || item.photo;
    const media = imgSrc
      ? `<img src="${esc(imgSrc)}" alt="" loading="${i === 0 ? 'eager' : 'lazy'}">`
      : `<div class="news-slide-placeholder" aria-hidden="true"></div>`;

    return `
      <div class="news-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${newsItems.length}">
        <div class="news-slide-media">${media}</div>
        <div class="news-slide-body">${newsItem(item)}</div>
      </div>
    `;
  };

  const newsSlider = `
    <div class="news-slider" id="news-slider" data-index="0" data-count="${newsItems.length}">
      <div class="news-viewport">
        <div class="news-track">
          ${newsItems.map(newsSlide).join('')}
        </div>
      </div>
      <div class="slider-controls">
        <div class="slider-dots" role="tablist" aria-label="News slides">
          ${newsItems.map((_, i) => `
            <button type="button" class="slider-dot" data-slide="${i}"
              aria-label="Slide ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>
          `).join('')}
        </div>
        <div class="slider-arrows">
          <button type="button" class="slider-btn" data-dir="-1" aria-label="Previous slide">&larr;</button>
          <button type="button" class="slider-btn" data-dir="1" aria-label="Next slide">&rarr;</button>
        </div>
      </div>
    </div>
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
      t('home.news'),
      'news.html',
      'home.allNews',
      newsSlider
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

/* Slider controls (delegated so they survive language switches) */
function goToSlide(slider, nextIndex) {
  const count = Number(slider.dataset.count) || 1;
  const idx = ((nextIndex % count) + count) % count;
  slider.dataset.index = idx;

  const track = slider.querySelector('.news-track');
  if (track) track.style.transform = `translateX(-${idx * 100}%)`;

  slider.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.setAttribute('aria-current', i === idx ? 'true' : 'false');
  });
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.slider-btn');
  if (btn) {
    const slider = btn.closest('.news-slider');
    if (slider) goToSlide(slider, Number(slider.dataset.index) + Number(btn.dataset.dir));
    return;
  }

  const dot = e.target.closest('.slider-dot');
  if (dot) {
    const slider = dot.closest('.news-slider');
    if (slider) goToSlide(slider, Number(dot.dataset.slide));
  }
});

/* Auto-advance every 6 seconds unless hovered or reduced-motion is enabled */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    const slider = document.getElementById('news-slider');
    if (slider && !slider.matches(':hover')) {
      goToSlide(slider, Number(slider.dataset.index) + 1);
    }
  }, 6000);
}

start(homePage);
