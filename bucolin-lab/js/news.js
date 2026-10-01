const TAGS = ['paper', 'award', 'people', 'resource'];
let showing = 'all';

function newsPage() {
  const items = NEWS.filter(item => showing === 'all' || item.tag === showing);

  const button = (tag, label) =>
    `<button data-show="${tag}" aria-pressed="${tag === showing}">${label}</button>`;
  const filters = `
    <div class="filters" role="group" aria-label="${t('news.filter')}">
      ${button('all', t('news.all'))}
      ${TAGS.map(tag => button(tag, t('tags.' + tag))).join('')}
    </div>`;

  // the margin says what is being shown, and how many of them there are
  const label = showing === 'all' ? t('news.all') : t('tags.' + showing);

  return pageHead('title.news', filters)
    + section(label, items.map(newsEntry).join(''), items.length);
}

document.getElementById('main').addEventListener('click', event => {
  const button = event.target.closest('[data-show]');
  if (!button) return;
  showing = button.dataset.show;
  draw();
  document.querySelector(`[data-show="${showing}"]`).focus({ preventScroll: true });
});

start(newsPage);
