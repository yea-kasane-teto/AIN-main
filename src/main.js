import { filters, learningUnits } from './data/roadmap.js';
import { renderFilters } from './components/filterBar.js';
import { createUnitCard } from './components/unitCard.js';
import { initSearch } from './modules/search.js';

const state = { filter: 'all', query: '' };
const grid = document.querySelector('#unitGrid');
const filterRow = document.querySelector('#filterRow');
const emptyState = document.querySelector('#emptyState');
const count = document.querySelector('#unitCount');

function renderUnits() {
  const query = state.query.trim().toLocaleLowerCase('ko');
  const visibleUnits = learningUnits.filter((unit) => {
    const matchesFilter = state.filter === 'all' || unit.id === state.filter;
    const searchable = [unit.name, unit.subtitle, unit.description, unit.code, ...unit.lessons].join(' ').toLocaleLowerCase('ko');
    return matchesFilter && (!query || searchable.includes(query));
  });
  grid.replaceChildren(...visibleUnits.map(createUnitCard));
  emptyState.hidden = visibleUnits.length > 0;
  count.textContent = state.filter === 'all' && !query ? `${learningUnits.length}개의 학습 영역` : `${visibleUnits.length}개의 학습 영역`;
}

function updateFilter(filter) {
  state.filter = filter;
  renderFilters(filterRow, filters, state.filter, updateFilter);
  renderUnits();
}

renderFilters(filterRow, filters, state.filter, updateFilter);
renderUnits();
initSearch((query) => { state.query = query; renderUnits(); });
