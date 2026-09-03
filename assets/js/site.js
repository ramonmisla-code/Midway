(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-site-nav]');
  var header = document.querySelector('[data-site-header]');

  if (!toggle || !nav || !header) return;

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    header.classList.toggle('menu-is-open', open);
    document.body.classList.toggle('menu-is-open', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1040) setMenu(false);
  });
})();
