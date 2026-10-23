const iconMarkup = {
  book: '<path d="M12 6.5C10.5 4.7 7.7 4 4 4v14c3.7 0 6.5.7 8 2.5"/><path d="M12 6.5C13.5 4.7 16.3 4 20 4v14c-3.7 0-6.5.7-8 2.5"/><path d="M12 6.5v14"/>',
  sigma: '<path d="M18.5 4.5h-13l7 7.5-7 7.5h13"/>',
  chart: '<path d="M5 19v-5"/><path d="M10 19V9"/><path d="M15 19V5"/><path d="M20 19v-8"/>',
  network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="m10.8 7.2-4.6 8.6M13.2 7.2l4.6 8.6M7.5 18h9"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M8.2 14.5a7 7 0 1 1 7.6 0c-.9.7-1.3 1.5-1.4 2.5h-4.8c-.1-1-.5-1.8-1.4-2.5Z"/>',
};

export function createUnitCard(unit) {
  const card = document.createElement(unit.href ? 'a' : 'article');
  if (unit.href) {
    card.href = unit.href;
    card.setAttribute('aria-label', `${unit.name} 학습 페이지 열기`);
  }
  card.className = 'unit-card';
  card.dataset.unitId = unit.id;
  card.innerHTML = '<span class="unit-icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + (iconMarkup[unit.icon] || '') + '</svg></span>' +
    '<div class="unit-content"><div class="unit-title-wrap"><span class="unit-number">' + unit.number + '</span><h3>' + unit.name + '</h3></div>' +
    '<p class="unit-description">' + unit.description + '</p></div>';
  return card;
}
