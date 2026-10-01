// "Advisors: Şaziye Betül Özateş, Ümit Atlamaz"
function advisorLine(ids = []) {
  const advisors = ids.map(id => {
    const advisor = FACULTY.find(member => member.id === id);
    if (!advisor) console.warn(`No faculty member with the id "${id}" in data/people.js`);
    return advisor;
  }).filter(Boolean);
  if (!advisors.length) return '';

  const names = advisors.map(advisor => esc(advisor.name));
  return `${count('people.advisor', advisors.length)}: ${names.join(', ')}`;
}

function facultyMember(member) {
  const name = member.url ? out(member.name, member.url) : esc(member.name);
  return `
    <li class="person" id="${member.id}">
      <p class="name">${name}</p>
      <p>${esc(loc(member.role))}</p>
    </li>`;
}

function student(person) {
  const line = advisorLine(person.advisors) || esc(loc(person.from));
  return `
    <li class="person">
      <p class="name">${esc(person.name)}</p>
      ${line ? `<p>${line}</p>` : ''}
    </li>`;
}

function alumnus(person) {
  const degree = [person.year, loc(person.degree)].filter(Boolean).join(' ');
  const advisors = advisorLine(person.advisors);

  const lines = [];
  if (degree) lines.push(esc(degree));
  if (person.thesis) lines.push(`${t('people.thesis')}: <span lang="en">${esc(person.thesis)}</span>`);
  if (advisors) lines.push(advisors);
  if (person.now) lines.push(`${t('people.now')}: ${esc(loc(person.now))}`);

  return `
    <li class="person">
      <p class="name">${esc(person.name)}</p>
      ${lines.map(line => `<p>${line}</p>`).join('')}
    </li>`;
}

function peoplePage() {
  // a group with nobody in it is left out altogether
  const group = (key, people, show, extra = '') => {
    if (!people.length) return '';
    return section(t(key), `<ul class="people${extra}">${people.map(show).join('')}</ul>`, people.length);
  };

  return pageHead('title.people')
    + group('people.faculty', FACULTY, facultyMember, ' faculty')
    + group('people.phd', PHD_STUDENTS, student)
    + group('people.ms', MS_STUDENTS, student)
    + group('people.bachelor', BACHELOR_STUDENTS, student)
    + group('people.highschool', HIGH_SCHOOL_STUDENTS, student)
    + group('people.alumni', ALUMNI, alumnus);
}

start(peoplePage);
