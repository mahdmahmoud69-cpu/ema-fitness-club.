const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

// Close the mobile menu after choosing a section.
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

// Expand workout descriptions without sending visitors to the phone number.
document.querySelectorAll('.details-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const willOpen = details.hasAttribute('hidden');
    if (willOpen) details.removeAttribute('hidden');
    else details.setAttribute('hidden', '');
    button.setAttribute('aria-expanded', String(willOpen));
    button.querySelector('span').textContent = willOpen ? '−' : '＋';
    button.firstChild.textContent = willOpen ? 'إخفاء التفاصيل ' : 'اعرف تفاصيل أكتر ';
  });
});

// Highlight the current navigation section while scrolling.
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}

document.getElementById('year').textContent = new Date().getFullYear();
