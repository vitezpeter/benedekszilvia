document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Dropdown Accessibility
  const dropdowns = document.querySelectorAll('.has-dropdown > a');
  dropdowns.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const expanded = link.getAttribute('aria-expanded') === 'true';
      link.setAttribute('aria-expanded', !expanded);
    });
  });
});