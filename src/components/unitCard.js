export function createUnitCard(unit) {
  const card = document.createElement('article');
  card.className = `unit-card accent-${unit.accent}`;
  card.dataset.unitId = unit.id;
  const lessonMarkup = unit.lessons.map((lesson, index) => `<li><span class="lesson-index">${String(index + 1).padStart(2, '0')}</span><span>${lesson}</span><span class="lesson-arrow">↗</span></li>`).join('');
  card.innerHTML = `
    <div class="card-topline"><span class="unit-number">${unit.number}</span><span class="unit-code">${unit.code}</span><span class="unit-icon" aria-hidden="true">${unit.icon}</span></div>
    <div class="unit-title-wrap"><span class="unit-subtitle">${unit.subtitle}</span><h3>${unit.name}</h3></div>
    <p class="unit-description">${unit.description}</p>
    <div class="lesson-preview"><div class="lesson-preview-heading">이런 내용을 배워요<span>${unit.lessons.length} LESSONS</span></div><ol>${lessonMarkup}</ol></div>
    <div class="unit-action"><span>학습 로드맵 미리보기</span><span class="action-arrow" aria-hidden="true">↗</span></div>`;
  return card;
}
