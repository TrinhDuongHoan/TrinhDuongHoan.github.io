const navMenu = document.querySelector('#navMenu');
const hamburger = document.querySelector('#hamburger');
const navLinks = [...document.querySelectorAll('.nav-menu a')];

// Keep the full navigation available when JavaScript is disabled.
document.documentElement.classList.add('js');
hamburger.hidden = false;

function closeMenu() {
  navMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open navigation');
}

hamburger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  hamburger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navMenu.classList.contains('open')) {
    closeMenu();
    hamburger.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-inner')) closeMenu();
});
window.matchMedia('(min-width: 681px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}

const filters = [...document.querySelectorAll('.filter-button')];
const projects = [...document.querySelectorAll('[data-categories]')];
const projectStatus = document.querySelector('#project-status');
document.querySelector('.project-filters').hidden = false;

filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  projects.forEach(project => {
    const visible = filter === 'all' || project.dataset.categories.split(' ').includes(filter);
    project.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('.more-work-heading').hidden = !projects.some(project =>
    project.classList.contains('mini-project') && !project.hidden
  );
  projectStatus.textContent = `${count} projects shown. ${button.textContent} selected.`;
}));

document.querySelector('#year').textContent = new Date().getFullYear();
