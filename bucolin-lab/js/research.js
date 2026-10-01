function researchPage() {
  const group = (key, projects) =>
    projects.length ? section(t(key), projects.map(projectEntry).join(''), projects.length) : '';

  return pageHead('title.research')
    + group('research.ongoing', ONGOING_PROJECTS)
    + group('research.completed', COMPLETED_PROJECTS);
}

start(researchPage);
