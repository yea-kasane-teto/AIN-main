export function renderFilters(container, filters, selected, onSelect) {
  container.replaceChildren(...filters.map((filter) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-chip${filter.id === selected ? ' is-selected' : ''}`;
    button.textContent = filter.label;
    button.setAttribute('aria-pressed', String(filter.id === selected));
    button.addEventListener('click', () => onSelect(filter.id));
    return button;
  }));
}
