(function () {
  const content = window.SITE_CONTENT || {};
  const getValue = (path) => path.split('.').reduce((value, key) => value && Object.prototype.hasOwnProperty.call(value, key) ? value[key] : undefined, content);
  document.querySelectorAll('[data-content]').forEach(element => {
    const value = getValue(element.dataset.content);
    if (typeof value === 'string') element.textContent = value;
  });
  document.querySelectorAll('[data-list]').forEach(element => {
    const items = getValue(element.dataset.list);
    if (!Array.isArray(items)) return;
    element.replaceChildren(...items.map(item => {
      const entry = document.createElement(element.tagName === 'OL' ? 'li' : 'article');
      if (entry.tagName === 'ARTICLE') entry.className = 'feature-item';
      const heading = document.createElement('h3'), paragraph = document.createElement('p');
      heading.textContent = item.title; paragraph.textContent = item.copy;
      entry.append(heading, paragraph); return entry;
    }));
  });
  const agency = content.agency || {};
  if (agency.email) {
    document.querySelectorAll('[data-email-link]').forEach(link => { link.href = `mailto:${agency.email}`; link.textContent = agency.email; });
    document.querySelectorAll('[data-email-cta]').forEach(link => { link.href = `mailto:${agency.email}`; });
    document.querySelectorAll('[data-email-intent]').forEach(link => {
      const subject = getValue(`contact.${link.dataset.emailIntent}Subject`);
      link.href = `mailto:${agency.email}${subject ? '?subject=' + encodeURIComponent(subject) : ''}`;
    });
  }
  document.querySelectorAll('[data-phone-link]').forEach(link => { if (agency.phone) link.textContent = agency.phone; if (agency.phoneHref) link.href = agency.phoneHref; });
  document.querySelectorAll('[data-linkedin-link]').forEach(link => { if (agency.linkedin) link.href = agency.linkedin; });
  document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
  const toggle = document.querySelector('[data-nav-toggle]'), nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;
  const mobile = window.matchMedia('(max-width: 860px)');
  function setOpen(open, returnFocus = false) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setOpen(false);
    if (!mobile.matches) return;
    const destination = document.querySelector(link.getAttribute('href'));
    if (destination) { destination.setAttribute('tabindex', '-1'); destination.focus({preventScroll:true}); }
  }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setOpen(false); });
  document.addEventListener('focusin', event => { if (!event.target.closest('.site-header')) setOpen(false); });
  mobile.addEventListener('change', () => setOpen(false));
  toggle.hidden = false;
  document.documentElement.classList.add('has-js');
})();
