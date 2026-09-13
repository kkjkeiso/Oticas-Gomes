(() => {
  const header = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('[data-nav]');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const themeToggle = document.getElementById('themeToggle');

  const THEME_KEY = 'oticasgomes:theme';
  themeToggle.addEventListener('click', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = document.documentElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  });

  function onScroll() {
    const scrollY = window.scrollY;
    header.classList.toggle('is-scrolled', scrollY > 40);
    backToTop.classList.toggle('is-visible', scrollY > 600);

    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    scrollProgress.style.width = max > 0 ? `${(scrollY / max) * 100}%` : '0%';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.matches('[data-nav]')) {
      header.classList.remove('is-menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Highlights the nav tab matching the current page (anchor-based highlighting
  // for the in-page index sections is handled separately by home.js).
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) return;
    const linkFile = href.split('/').pop().split('#')[0];
    if (linkFile === currentFile) link.classList.add('is-active');
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

  const COOKIE_KEY = 'oticasgomes:cookies-accepted';
  if (!localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => cookieBanner.classList.add('is-visible'), 800);
  }
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, '1');
    cookieBanner.classList.remove('is-visible');
  });
})();
