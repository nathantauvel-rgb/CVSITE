// ===== SCROLL REVEAL =====
(function() {
  const selectors = [
    '.profile__card',
    '.search-card',
    '.strength',
    '.timeline__item',
    '.contact-card',
    '.section__title',
    '.contact__sub',
    '.profile__text'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 80}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
