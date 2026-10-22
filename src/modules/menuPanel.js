(() => {
  const button = document.querySelector('#menuButton');
  const panel = document.querySelector('#menuPanel');
  if (!button || !panel) return;

  const setOpen = (open, returnFocus = false) => {
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    if (returnFocus) button.focus();
  };

  button.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  document.addEventListener('click', (event) => {
    if (panel.classList.contains('is-open') && !panel.contains(event.target) && !button.contains(event.target)) {
      setOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) setOpen(false, true);
  });
})();
