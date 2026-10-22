export function initSearch(onSearch) {
  const input = document.querySelector('#searchInput');
  input.addEventListener('input', () => onSearch(input.value));
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.querySelector('#roadmap').scrollIntoView({ behavior: 'smooth', block: 'start' });
      input.blur();
    }
    if (event.key === 'Escape') {
      input.value = '';
      onSearch('');
      input.blur();
    }
  });
}
