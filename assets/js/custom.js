// Fade-in on scroll
function fadeInOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    fadeEls.forEach(el => el.classList.add('visible'));
  }
}

document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Dark mode toggle
function setupDarkModeToggle() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.setAttribute('aria-pressed', document.body.classList.contains('dark'));
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  });
  // Keyboard accessibility
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });
  // Persist mode
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    toggle.setAttribute('aria-pressed', 'true');
  }
}
document.addEventListener('DOMContentLoaded', setupDarkModeToggle); 