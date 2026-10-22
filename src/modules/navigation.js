(() => {
  const shell = document.querySelector('#appShell');
  const sidebar = document.querySelector('#sidebar');
  const menuButton = document.querySelector('#menuButton');
  const menuPanel = document.querySelector('#menuPanel');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  if (!shell || !sidebar || !menuButton || !sidebarToggle) return;

  const mobileQuery = window.matchMedia('(max-width: 740px)');
  let isOpen = !mobileQuery.matches;

  const setOpen = (open, focusTarget = null) => {
    isOpen = open;
    shell.classList.toggle('sidebar-collapsed', !open);
    sidebarToggle.setAttribute('aria-expanded', String(open));
    sidebarToggle.setAttribute('aria-label', open ? '\uC0AC\uC774\uB4DC\uBC14 \uC811\uAE30' : '\uC0AC\uC774\uB4DC\uBC14 \uD3BC\uCE58\uAE30');
    sidebarToggle.querySelector('span:last-child').textContent = open ? '\uC0AC\uC774\uB4DC\uBC14 \uC811\uAE30' : '\uC0AC\uC774\uB4DC\uBC14 \uD3BC\uCE58\uAE30';
    sidebarToggle.querySelector('.side-icon').textContent = open ? '‹' : '›';
    if (focusTarget) focusTarget.focus();
  };

  setOpen(isOpen);
  sidebarToggle.addEventListener('click', () => setOpen(!isOpen, sidebarToggle));
  document.addEventListener('click', (event) => {
    if (mobileQuery.matches && isOpen && !sidebar.contains(event.target) && !menuButton.contains(event.target) && !menuPanel?.contains(event.target)) {
      setOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen && !menuPanel?.classList.contains('is-open')) setOpen(false, sidebarToggle);
  });
  mobileQuery.addEventListener('change', (event) => setOpen(!event.matches, event.matches && isOpen ? sidebarToggle : null));
})();
