export function initSearch(onSearch = () => {}) {
  const input = document.querySelector('#searchInput');
  if (!input) return;

  const roadmap = document.querySelector('#roadmap');
  const initialQuery = new URLSearchParams(window.location.search).get('q') || '';
  input.value = initialQuery;
  if (initialQuery) onSearch(initialQuery);

  input.addEventListener('input', () => onSearch(input.value));
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const query = input.value.trim();
      if (!roadmap) {
        const destination = new URL('./index.html', window.location.href);
        if (query) destination.searchParams.set('q', query);
        destination.hash = 'roadmap';
        window.location.href = destination.toString();
        return;
      }

      const currentUrl = new URL(window.location.href);
      if (query) currentUrl.searchParams.set('q', query);
      else currentUrl.searchParams.delete('q');
      window.history.replaceState(null, '', currentUrl);
      roadmap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      input.blur();
    }
    if (event.key === 'Escape') {
      input.value = '';
      onSearch('');
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('q');
      window.history.replaceState(null, '', currentUrl);
      input.blur();
    }
  });
}
