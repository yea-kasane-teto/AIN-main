const slideDetails = {
  base: {
    description: '인공지능과 머신러닝, 딥러닝은 어떻게 연결될까요? 데이터로 배우는 AI의 기본 원리를 차근차근 알아봐요.',
    footnote: '처음 시작하는 AI의 큰 그림',
  },
  math: {
    description: '벡터와 행렬부터 텐서, 미분까지. AI가 데이터를 표현하고 답을 찾아갈 때 쓰는 수학 도구를 익혀요.',
    footnote: 'AI를 이해하는 든든한 수학 도구',
  },
  ml: {
    description: '데이터에서 규칙을 찾는 지도·비지도 학습부터 회귀와 분류, 모델을 평가하는 방법까지 살펴봐요.',
    footnote: '데이터에서 패턴을 발견하는 방법',
  },
  dl: {
    description: '인공 신경망은 어떻게 복잡한 패턴을 배울까요? 신경망의 구조부터 역전파와 최적화까지 만나봐요.',
    footnote: '신경망이 학습하는 원리 알아보기',
  },
  model: {
    description: 'CNN, RNN, LSTM부터 Attention과 Transformer까지. 문제에 따라 달라지는 AI 모델의 구조를 비교해봐요.',
    footnote: '대표적인 AI 모델의 특징과 쓰임',
  },
  depth: {
    description: 'LLM과 생성형 AI부터 강화학습과 이상탐지까지, 인공지능의 확장된 주제와 새로운 활용을 탐구해요.',
    footnote: 'AI의 넓은 가능성을 더 깊이 탐구하기',
  },
};

const topicLabels = {
  base: ['AI · ML · DL', '데이터와 학습', 'AI 활용 사례'],
  math: ['벡터와 행렬', '텐서', '편미분'],
  ml: ['지도 · 비지도 학습', '회귀와 분류', '모델 평가'],
  dl: ['인공 신경망', '역전파', '최적화'],
  model: ['CNN · RNN · LSTM', 'Attention', 'Transformer'],
  depth: ['LLM · 생성형 AI', '강화학습', '이상탐지'],
};

const baseLearningUrl = 'https://yea-kasane-teto.github.io/AIN-sehyeon/?module=base';
const mathLearningUrl = 'https://yea-kasane-teto.github.io/AIN-sanghyo/?module=math';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function createSlide(unit, index, total) {
  const details = slideDetails[unit.id] || {};
  const slide = document.createElement('article');
  const number = escapeHtml(unit.number);
  const name = escapeHtml(unit.name);
  const lessons = unit.lessons.slice(0, 3).map(escapeHtml);

  slide.className = `hero-slide hero-theme-${escapeHtml(unit.id)}`;
  slide.dataset.unitId = unit.id;
  slide.setAttribute('role', 'group');
  slide.setAttribute('aria-roledescription', '슬라이드');
  slide.setAttribute('aria-label', `${index + 1} / ${total}: ${unit.name}`);
  slide.hidden = index !== 0;
  slide.innerHTML = `
    <div class="hero-copy">
      <div class="eyebrow"><span class="eyebrow-mark"></span> AI LEARNING AREA · ${number}</div>
      <h1 id="heroSlideTitle-${escapeHtml(unit.id)}">${name}</h1>
      <p class="hero-description">${escapeHtml(details.description || unit.description)}</p>
      ${unit.id === 'math'
        ? `<a class="primary-button" href="${mathLearningUrl}" aria-label="필수 수학 학습 페이지로 이동">필수 수학 학습 시작하기 <span aria-hidden="true">↗</span></a>`
        : unit.id === 'base'
          ? `<a class="primary-button" href="${baseLearningUrl}" aria-label="AI 기초 학습 페이지로 이동">학습 로드맵 살펴보기 <span aria-hidden="true">↗</span></a>`
          : `<a class="primary-button" href="#roadmap" aria-label="학습 로드맵에서 ${name} 영역 살펴보기">로드맵에서 살펴보기 <span aria-hidden="true">↗</span></a>`}
      <div class="hero-footnote"><span class="sparkle" aria-hidden="true">✳</span>${escapeHtml(details.footnote || unit.subtitle)}</div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="hero-orbit hero-orbit-one"></div>
      <div class="hero-orbit hero-orbit-two"></div>
      <div class="hero-visual-number">${number}</div>
      <div class="hero-visual-card">
        <span class="hero-visual-kicker">LEARNING AREA</span>
        <span class="hero-category-icon"><svg viewBox="0 0 24 24">${unit.icon}</svg></span>
        <span class="hero-visual-name">${name}</span>
      </div>
      ${lessons.map((lesson, lessonIndex) => `<span class="hero-topic-chip hero-topic-${lessonIndex + 1}">${lesson}</span>`).join('')}
      <span class="hero-art-sparkle hero-art-sparkle-one">✳</span>
      <span class="hero-art-sparkle hero-art-sparkle-two">✦</span>
    </div>`;
  return slide;
}

function initHeroCarousel() {
  const carousel = document.querySelector('#heroCarousel');
  const slidesContainer = document.querySelector('#heroSlides');
  const pagination = document.querySelector('#heroPagination');
  const previousButton = document.querySelector('#heroPrevious');
  const nextButton = document.querySelector('#heroNext');
  const slideCount = document.querySelector('#heroSlideCount');
  if (!carousel || !slidesContainer || !pagination || !previousButton || !nextButton || !slideCount) return;

  const units = [...document.querySelectorAll('#unitGrid .unit-card')].map((card) => {
    const id = card.dataset.unitId;
    return {
      id,
      number: card.querySelector('.unit-number')?.textContent.trim() || '',
      name: card.querySelector('h3')?.textContent.trim() || '',
      description: card.querySelector('.unit-description')?.textContent.trim() || '',
      subtitle: slideDetails[id]?.footnote || '',
      lessons: topicLabels[id] || [],
      icon: card.querySelector('.unit-icon svg')?.innerHTML || '',
    };
  });
  if (!units.length) return;

  const slides = units.map((unit, index) => createSlide(unit, index, units.length));
  const dots = units.map((unit, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hero-dot';
    dot.setAttribute('aria-label', `${index + 1}번 카테고리: ${unit.name}`);
    dot.setAttribute('aria-current', String(index === 0));
    dot.addEventListener('click', () => showSlide(index));
    return dot;
  });

  slidesContainer.replaceChildren(...slides);
  pagination.replaceChildren(...dots);

  let activeIndex = 0;
  let isPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timerId = null;

  function showSlide(index) {
    activeIndex = (index + units.length) % units.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.hidden = !isActive;
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    dots.forEach((dot, dotIndex) => dot.setAttribute('aria-current', String(dotIndex === activeIndex)));
    slideCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(units.length).padStart(2, '0')}`;
  }

  function stopAutoplay() {
    window.clearInterval(timerId);
    timerId = null;
  }

  function startAutoplay() {
    stopAutoplay();
    const focusInside = carousel.contains(document.activeElement);
    if (isPaused || document.hidden || carousel.matches(':hover') || focusInside) return;
    timerId = window.setInterval(() => showSlide(activeIndex + 1), 7000);
  }

  previousButton.addEventListener('click', () => showSlide(activeIndex - 1));
  nextButton.addEventListener('click', () => showSlide(activeIndex + 1));
  carousel.addEventListener('pointerenter', stopAutoplay);
  carousel.addEventListener('pointerleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) startAutoplay();
  });
  document.addEventListener('visibilitychange', startAutoplay);

  showSlide(0);
  startAutoplay();
}

initHeroCarousel();
