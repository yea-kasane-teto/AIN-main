export const learningUnits = [
  { id: 'base', number: '01', code: 'base', name: 'AI 기초', subtitle: '인공지능의 기본 개념', description: 'AI·ML·DL, 데이터, 학습 방식을 배웁니다.', lessons: ['AI · ML · DL', '데이터', '학습 방식'], icon: 'book', href: 'https://yea-kasane-teto.github.io/AIN-sehyeon/?module=base' },
  { id: 'math', number: '02', code: 'math', name: '필수 수학', subtitle: 'AI를 이해하는 수학 도구', description: '벡터와 행렬 연산, 텐서, 편미분을 배웁니다.', lessons: ['벡터와 행렬 연산', '텐서', '편미분'], icon: 'sigma', href: 'https://yea-kasane-teto.github.io/AIN-sanghyo/?module=math' },
  { id: 'ml', number: '03', code: 'ML', name: '머신러닝', subtitle: '데이터에서 규칙 찾기', description: '머신러닝의 핵심 개념과 대표적인 학습 방법을 배웁니다.', lessons: ['지도 · 비지도 학습', '회귀와 분류', '학습 결과 평가'], icon: 'chart' },
  { id: 'dl', number: '04', code: 'DL', name: '딥러닝', subtitle: '신경망으로 복잡한 패턴 학습', description: '신경망과 딥러닝의 기본 구조와 학습 원리를 배웁니다.', lessons: ['인공 신경망', '활성화 함수', '역전파와 최적화'], icon: 'network' },
  { id: 'model', number: '05', code: 'model', name: '모델', subtitle: '대표적인 인공지능 구조', description: 'CNN, RNN, LSTM, Attention, Transformer를 배웁니다.', lessons: ['CNN · RNN · LSTM', 'Attention', 'Transformer'], icon: 'layers' },
  { id: 'depth', number: '06', code: 'depth', name: '심화', subtitle: 'AI의 확장된 활용', description: 'LLM, 생성형 AI, 강화학습, 이상탐지를 배웁니다.', lessons: ['LLM · 생성형 AI', '강화학습', '이상탐지'], icon: 'bulb' },
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
