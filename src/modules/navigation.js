(() => {
  const shell = document.querySelector('#appShell');
  const sidebar = document.querySelector('#sidebar');
  const menuButton = document.querySelector('#menuButton');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  if (!shell || !sidebar || !menuButton || !sidebarToggle) return;

  const mobileQuery = window.matchMedia('(max-width: 740px)');
  let isOpen = !mobileQuery.matches;

  const setOpen = (open, returnFocus = false) => {
    isOpen = open;
    shell.classList.toggle('sidebar-collapsed', !open);
    sidebar.inert = !open;
    sidebar.setAttribute('aria-hidden', String(!open));
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    sidebarToggle.setAttribute('aria-expanded', String(open));
    sidebarToggle.querySelector('span:last-child').textContent = open ? '사이드바 접기' : '사이드바 펼치기';
    sidebarToggle.querySelector('.side-icon').textContent = open ? '‹' : '›';
    if (returnFocus) menuButton.focus();
  };

  setOpen(isOpen);
  menuButton.addEventListener('click', () => setOpen(!isOpen));
  sidebarToggle.addEventListener('click', () => setOpen(false, true));
  document.addEventListener('click', (event) => {
    if (mobileQuery.matches && isOpen && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      setOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) setOpen(false, true);
  });
  mobileQuery.addEventListener('change', (event) => setOpen(!event.matches, event.matches && isOpen));
})();
