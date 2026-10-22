export function initNavigation() {
  const shell = document.querySelector('#appShell');
  const sidebar = document.querySelector('#sidebar');
  const menuButton = document.querySelector('#menuButton');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const setOpen = (open) => {
    shell.classList.toggle('sidebar-collapsed', !open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    sidebarToggle.setAttribute('aria-expanded', String(open));
    sidebarToggle.querySelector('span:last-child').textContent = open ? '사이드바 접기' : '사이드바 펼치기';
  };
  menuButton.addEventListener('click', () => setOpen(shell.classList.contains('sidebar-collapsed')));
  sidebarToggle.addEventListener('click', () => setOpen(shell.classList.contains('sidebar-collapsed')));
  sidebar.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}
