// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Swatch click-to-copy (copies the hex value)
document.querySelectorAll('.swatch').forEach((swatch) => {
  swatch.addEventListener('click', async () => {
    const hex = swatch.style.getPropertyValue('--sw').trim();
    try {
      await navigator.clipboard.writeText(hex);
    } catch (err) {
      // Clipboard API unavailable — fail silently, UI still confirms visually
    }
    swatch.classList.add('swatch-copied');
    setTimeout(() => swatch.classList.remove('swatch-copied'), 1200);
  });
});

// Scroll-triggered fade-ins
const revealTargets = document.querySelectorAll(
  '.case-card, .swatch, .about-grid, .contact-row'
);
revealTargets.forEach((el) => el.classList.add('fade-up'));

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in-view'));
}
