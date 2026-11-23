const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
}
const filterForm = document.querySelector('[data-filter-form]');
if (filterForm) {
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = (filterForm.querySelector('[name="query"]')?.value || '').trim().toLowerCase();
    const category = filterForm.querySelector('[name="category"]')?.value || 'all';
    document.querySelectorAll('[data-product-card]').forEach((card) => {
      const name = (card.dataset.name || '').toLowerCase();
      const type = card.dataset.category || '';
      card.hidden = !(name.includes(query) && (category === 'all' || type === category));
    });
  });
}
const forms = document.querySelectorAll('[data-demo-form]');
forms.forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = form.querySelector('[data-form-message]');
  if (message) message.textContent = 'Спасибо! Форма демонстрационная — данные никуда не отправляются.';
}));
