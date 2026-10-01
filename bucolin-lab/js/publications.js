function publicationsPage() {
  const years = [...new Set(PUBLICATIONS.map(paper => paper.year))];

  const sections = years.map(year => {
    const papers = PUBLICATIONS.filter(paper => paper.year === year);
    return yearSection(year, papers.map(reference).join(''));
  });

  return pageHead('title.publications') + sections.join('');
}

start(publicationsPage);
