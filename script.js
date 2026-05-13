/* ============================================
   PORTFOLIO — SCRIPTS
   ============================================ */

// ---- Mobile menu toggle ----
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  toggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    toggle.classList.remove('active');
  });
});

// ---- Scroll reveal ----
const revealElements = document.querySelectorAll(
  '.section-header, .project-card, .timeline-entry, .about-photo, .about-content, .contact-inner, .project-meta, .project-content > *'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => observer.observe(el));

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
