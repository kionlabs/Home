const siteUrl = 'https://kionlabs.vercel.app';

const pages: Record<string, { title: string; description: string; canonicalPath?: string }> = {
  '/': {
    title: 'KION Labs | AI 실무 교육과 비즈니스 자동화',
    description: 'KION Labs는 AI 실무 교육, 업무 자동화, 데이터 분석과 MVP 구축을 연결해 현장의 문제를 해결합니다.',
  },
  '/guide': {
    title: 'AI 교육 프로그램 및 서비스 안내 | KION Labs',
    description: 'AI 툴킷 입문부터 업무 자동화, MVP 빌딩과 정착 지원까지 KION Labs의 실전 프로그램을 확인하세요.',
  },
  '/portfolio': {
    title: '교육 및 웹앱 구축 포트폴리오 | KION Labs',
    description: 'KION Labs의 AI 교육 플랫폼, 업무 솔루션, 웹앱 구축 프로젝트와 진행 중인 고객 의뢰 사례를 소개합니다.',
  },
  '/classroom': {
    title: '수업 자료실과 출강 기록 | KION Labs',
    description: 'KION Labs의 출강 기록, 수업 자료와 실습 안내를 한곳에서 확인하세요.',
  },
  '/courses/step1': {
    title: 'KION AI 툴킷 마스터 | KION Labs',
    description: 'AI 도구 설치부터 실무 적용까지 직접 경험하는 4시간 실전 입문 과정입니다.',
  },
  '/courses/step2': {
    title: '비즈니스 업무 자동화 과정 | KION Labs',
    description: '내 비즈니스 데이터를 활용해 반복 업무를 자동화하고 실무에 적용하는 과정입니다.',
  },
  '/courses/step3': {
    title: '실전 MVP 빌딩 과정 | KION Labs',
    description: '아이디어를 데이터베이스와 배포까지 연결해 실제 작동하는 서비스로 구현하는 과정입니다.',
  },
  '/courses/step4': {
    title: 'KION 빌더 풀패키지 | KION Labs',
    description: '진단부터 맞춤형 시스템 구축과 배포, 운영 지원까지 연결하는 프로그램입니다.',
  },
  '/courses/support': {
    title: 'AI 정착 지원 및 1:1 상담 | KION Labs',
    description: 'AI 교육 이후 실무 적용 과정에서 막히는 문제를 함께 해결하는 1:1 지원 프로그램입니다.',
  },
  '/privacy': {
    title: '개인정보 처리방침 | KION Labs',
    description: 'KION Labs 홈페이지의 개인정보 처리방침을 안내합니다.',
  },
  '/terms': {
    title: '서비스 이용약관 | KION Labs',
    description: 'KION Labs 서비스의 이용약관을 안내합니다.',
  },
};

const aliases: Record<string, string> = {
  '/guide/automation': '/courses/step2',
  '/guide/mvp': '/courses/step3',
  '/guide/fullpackage': '/courses/step4',
  '/guide/support': '/courses/support',
};

export const indexablePaths = Object.keys(pages);
export const prerenderPaths = [...indexablePaths, ...Object.keys(aliases), '/admin'];

export function getSeo(pathname: string) {
  const canonicalPath = aliases[pathname] ?? pathname;
  const page = pathname === '/admin'
    ? { title: '관리자 | KION Labs', description: 'KION Labs 관리자 로그인' }
    : pages[canonicalPath] ?? pages['/'];
  return {
    title: page.title,
    description: page.description,
    url: `${siteUrl}${canonicalPath}`,
  };
}
