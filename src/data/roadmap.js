export const learningUnits = [
  { id: 'base', number: '01', code: 'base', name: 'AI 기초', subtitle: '인공지능의 기본 개념', description: 'AI·ML·DL의 개념과 관계를 살펴보고, 데이터와 학습 방식의 기초를 배워요.', lessons: ['AI · ML · DL', '데이터', '학습 방식'], accent: 'blue', icon: '✳' },
  { id: 'math', number: '02', code: 'math', name: '필수 수학', subtitle: 'AI를 이해하는 수학 도구', description: '벡터와 행렬 연산, 텐서, 편미분 등 AI에 꼭 필요한 수학 개념을 배워요.', lessons: ['벡터와 행렬 연산', '텐서', '편미분'], accent: 'mint', icon: '∑' },
  { id: 'ml', number: '03', code: 'ML', name: '머신러닝', subtitle: '데이터에서 규칙 찾기', description: '데이터에서 패턴을 학습해 예측과 분류를 수행하는 머신러닝의 기본 개념과 원리를 배워요.', lessons: ['지도 · 비지도 학습', '회귀와 분류', '학습 결과 평가'], accent: 'lavender', icon: '⌁' },
  { id: 'dl', number: '04', code: 'DL', name: '딥러닝', subtitle: '신경망으로 복잡한 패턴 학습', description: '여러 층의 신경망이 데이터를 학습하는 과정과 딥러닝의 핵심 원리를 배워요.', lessons: ['인공 신경망', '활성화 함수', '역전파와 최적화'], accent: 'peach', icon: '⠿' },
  { id: 'model', number: '05', code: 'model', name: '모델', subtitle: '대표적인 인공지능 구조', description: 'CNN, RNN, LSTM, Attention, Transformer의 구조와 정보 처리 방식을 배워요.', lessons: ['CNN · RNN · LSTM', 'Attention', 'Transformer'], accent: 'sky', icon: '⌘' },
  { id: 'depth', number: '06', code: 'depth', name: '심화', subtitle: 'AI의 확장된 활용', description: 'LLM과 생성형 AI부터 강화학습과 이상탐지까지 심화 주제를 살펴봐요.', lessons: ['LLM · 생성형 AI', '강화학습', '이상탐지'], accent: 'lemon', icon: '↗' },
];

export const filters = [
  { id: 'all', label: '전체 보기' },
  { id: 'base', label: 'AI 기초' },
  { id: 'math', label: '필수 수학' },
  { id: 'ml', label: '머신러닝' },
  { id: 'dl', label: '딥러닝' },
  { id: 'model', label: '모델' },
  { id: 'depth', label: '심화' },
];
