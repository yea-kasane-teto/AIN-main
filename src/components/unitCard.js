export function createUnitCard(unit) {
  const card = document.createElement('article');
  card.className = `unit-card accent-${unit.accent}`;
  card.dataset.unitId = unit.id;
  const lessonMarkup = unit.lessons.map((lesson) => `<li>${lesson}</li>`).join('');
  card.innerHTML = `
    <div class="unit-index"><span class="unit-number">${unit.number}</span><span class="unit-icon" aria-hidden="true">${unit.icon}</span></div>
    <div class="unit-content">
      <div class="unit-title-wrap"><span class="unit-subtitle">${unit.subtitle}</span><h3>${unit.name}</h3></div>
      <p class="unit-description">${unit.description}</p>
      <ul class="unit-topics" aria-label="배우는 내용">${lessonMarkup}</ul>
    </div>`;
  return card;
}
