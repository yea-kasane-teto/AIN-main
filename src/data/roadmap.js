export const learningUnits = [
  { id: 'base', number: '01', code: 'base', name: 'AI 기초', subtitle: '인공지능과 친해지기', description: 'AI, 머신러닝, 딥러닝은 어떻게 다를까요? 데이터와 학습의 기본 개념부터 시작해요.', lessons: ['AI와 머신러닝', '데이터와 학습', '학습 방식 알아보기'], accent: 'blue', icon: '✳' },
  { id: 'math', number: '02', code: 'math', name: '필요한 수학', subtitle: '원리를 읽는 도구', description: 'AI의 원리를 이해하는 데 꼭 필요한 함수, 벡터, 미분과 확률을 살펴봐요.', lessons: ['함수와 그래프', '벡터와 행렬', '미분과 기울기'], accent: 'mint', icon: '∑' },
  { id: 'ml', number: '03', code: 'ML', name: '머신러닝', subtitle: '데이터에서 규칙 찾기', description: '회귀와 분류, 군집화로 데이터 속 패턴을 찾고 모델이 배우는 과정을 확인해요.', lessons: ['선형 회귀', '분류와 결정 경계', '손실과 평가'], accent: 'lavender', icon: '⌁' },
  { id: 'dl', number: '04', code: 'DL', name: '딥러닝', subtitle: '신경망의 학습 과정', description: '신경망부터 활성화 함수, 역전파와 최적화까지 학습의 핵심을 직접 움직여봐요.', lessons: ['인공 신경망', '활성화 함수', '역전파와 최적화'], accent: 'peach', icon: '⠿' },
  { id: 'model', number: '05', code: 'model', name: '대표 모델', subtitle: '문제를 푸는 구조들', description: 'CNN, RNN, Attention과 Transformer가 정보를 다루는 방식을 알아봐요.', lessons: ['CNN과 이미지', 'RNN과 순서', 'Attention과 Transformer'], accent: 'sky', icon: '⌘' },
  { id: 'depth', number: '06', code: 'depth', name: '더 깊이 알아보기', subtitle: 'AI의 다음 이야기', description: 'LLM과 생성형 AI, 강화학습 등 더 넓은 인공지능의 세계를 만나봐요.', lessons: ['LLM과 언어 모델', '생성형 AI', '강화학습'], accent: 'lemon', icon: '↗' },
];

export const filters = [
  { id: 'all', label: '전체 보기' },
  { id: 'base', label: '기초' },
  { id: 'math', label: '수학' },
  { id: 'ml', label: '머신러닝' },
  { id: 'dl', label: '딥러닝' },
  { id: 'model', label: '모델' },
  { id: 'depth', label: '심화' },
];
