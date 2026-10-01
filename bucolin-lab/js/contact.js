function contactPage() {
  const { institute } = LAB;

  const place = `
    <address lang="tr">${institute.address.map(esc).join('<br>')}</address>
    <p class="links">${out(t('contact.map'), institute.map)}</p>`;

  const phone = `
    <p>
      <a href="tel:${institute.phone.replace(/\s/g, '')}">${esc(institute.phone)}</a>
      <span class="muted">(${t('contact.office')})</span>
    </p>`;

  const online = `
    <ul>
      <li>${out('Hugging Face', LAB.huggingface)}</li>
      <li>${out(loc(institute.name), institute.url)}</li>
    </ul>`;

  const block = (key, content) => section(t(key), `<div class="contact">${content}</div>`);

  return pageHead('title.contact')
    + block('contact.address', place)
    + block('contact.phone', phone)
    + block('contact.online', online);
}

start(contactPage);
