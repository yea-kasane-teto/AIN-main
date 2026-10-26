(() => {
  const shell = document.querySelector('#appShell');
  const sidebar = document.querySelector('#sidebar');
  const menuButton = document.querySelector('#menuButton');
  const menuPanel = document.querySelector('#menuPanel');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  if (!shell || !sidebar || !menuButton || !sidebarToggle) return;

  const mobileQuery = window.matchMedia('(max-width: 740px)');
  const storageKey = 'ain.sidebar.collapsed';
  let savedState = null;
  try {
    savedState = window.localStorage.getItem(storageKey);
  } catch {
    // Keep the responsive default if browser storage is unavailable.
  }
  let hasSavedPreference = savedState === 'true' || savedState === 'false';
  let isOpen = hasSavedPreference ? savedState === 'false' : !mobileQuery.matches;

  const setOpen = (open, focusTarget = null, persist = true) => {
    isOpen = open;
    shell.classList.toggle('sidebar-collapsed', !open);
    sidebarToggle.setAttribute('aria-expanded', String(open));
    const toggleLabel = open ? '\uC0AC\uC774\uB4DC\uBC14 \uC811\uAE30' : '\uC0AC\uC774\uB4DC\uBC14 \uD3BC\uCE58\uAE30';
    sidebarToggle.setAttribute('aria-label', toggleLabel);
    sidebarToggle.setAttribute('title', toggleLabel);
    sidebarToggle.querySelector('.side-icon').textContent = open ? '‹' : '›';
    if (persist) {
      try {
        window.localStorage.setItem(storageKey, String(!open));
        hasSavedPreference = true;
      } catch {
        // The sidebar still works for this page when browser storage is unavailable.
      }
    }
    if (focusTarget) focusTarget.focus();
  };

  setOpen(isOpen, null, false);
  sidebarToggle.addEventListener('click', () => setOpen(!isOpen, sidebarToggle));
  document.addEventListener('click', (event) => {
    if (mobileQuery.matches && isOpen && !sidebar.contains(event.target) && !menuButton.contains(event.target) && !menuPanel?.contains(event.target)) {
      setOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen && !menuPanel?.classList.contains('is-open')) setOpen(false, sidebarToggle);
  });
  mobileQuery.addEventListener('change', (event) => {
    if (!hasSavedPreference) setOpen(!event.matches, event.matches && isOpen ? sidebarToggle : null, false);
  });
})();
