import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Layers3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Category = '전체' | '교육' | '업무 솔루션' | '실험·도구';
type Project = {
  name: string;
  category: Exclude<Category, '전체'>;
  summary: string;
  details: string;
  stack: string[];
  status?: string;
  url?: string;
  blogUrl?: string;
  thumbnail?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: '인그리드', category: '교육', featured: true, status: '실제 학교 운영',
    summary: '현직 교사와 함께 학교 현장에서 운영하는 평가·학습 기록 플랫폼',
    details: '논술형 평가와 학교 활동의 생성부터 학생 답안 제출, 교사 피드백, 수업 노트와 출결 신고까지 연결합니다. 학생은 웹과 Android 앱으로 참여하며 실제 수업에 맞춰 기능을 지속 개선하고 있습니다.',
    stack: ['Django', 'MySQL', 'Android', 'AI 보조'],
    url: 'https://schoolingrid.com/', thumbnail: '/assets/portfolio/ingrid.jpg',
  },
  {
    name: 'Interview Scheduler', category: '업무 솔루션', featured: true, status: '협업 개발 중',
    summary: '면접 예약부터 영업·학교 배정·강사 운영까지 연결한 교육사업 관리 플랫폼',
    details: '지원자 예약과 관리자별 면접 일정, 기관 영업 활동, 학교 배정, 강사별 현황을 하나의 업무 흐름으로 연결합니다. Google Calendar 연동과 Android 명함 OCR도 지원합니다.',
    stack: ['Next.js', 'Supabase', 'Google Calendar', 'Android OCR'],
    url: 'https://interview-scheduler26.vercel.app/', thumbnail: '/assets/portfolio/meetpick.jpg',
  },
  {
    name: '잇다과외', category: '교육', featured: true, status: '고객 프로젝트 · 진행 중',
    summary: '맞춤 과외 홈페이지 제작과 네이버 블로그 운영',
    details: '학교별 학습 안내와 시범수업 신청 기능을 구축하고, 네이버 블로그 운영을 대행하며 홈페이지와 콘텐츠 연동을 진행하고 있습니다.',
    stack: ['Next.js', '상담 관리', '블로그 운영'],
    url: 'https://itda-edu.vercel.app/', thumbnail: '/assets/portfolio/itda.jpg',
    blogUrl: 'https://blog.naver.com/itda-edu',
  },
  {
    name: 'DawaHub', category: '업무 솔루션', featured: true, status: '고객 프로젝트 · 진행 중',
    summary: '지역 서비스 홈페이지 제작과 네이버 블로그 운영',
    details: '골동품 매입·유품정리·특수청소 안내와 견적 상담 화면을 구축하고, 네이버 블로그 운영을 대행하며 콘텐츠 연동을 진행하고 있습니다.',
    stack: ['웹사이트', '견적 상담', '블로그 운영'],
    url: 'https://dawahub.vercel.app/', thumbnail: '/assets/portfolio/dawahub.jpg',
    blogUrl: 'https://blog.naver.com/dawa_specialclean',
  },
  {
    name: '유통 업무 ERP', category: '업무 솔루션', featured: true, status: '고객 프로젝트 · 진행 중',
    summary: '행사 일정과 현장 운영, 매출·정산을 잇는 통합 ERP',
    details: '직원, 팀, 마트, 행사와 재무 정보를 한곳에서 관리하는 업무 시스템을 개발하고 있습니다.',
    stack: ['Next.js', 'ERP', '업무 데이터'],
    thumbnail: '/assets/portfolio/daesan.jpg',
  },
  {
    name: 'WISE EDU', category: '교육',
    summary: 'AICE 학습과 모의평가를 위한 교육 플랫폼',
    details: '학습 콘텐츠, 모의평가, 응시 기록과 결과 확인을 하나의 학습 흐름으로 연결했습니다.',
    stack: ['Next.js', 'Supabase', 'AICE'], url: 'https://wiseedu.vercel.app/',
  },
  {
    name: '머루 마음공방', category: '교육',
    summary: '학생의 애착 인형으로 만드는 AI 동화 수업 도구',
    details: '인형 사진과 감정을 바탕으로 여섯 장면의 이야기를 만들고, 이미지와 음성을 편집할 수 있습니다.',
    stack: ['Next.js', 'AI 이미지', 'AI 음성'],
  },
  {
    name: '수업프로그램 허브', category: '교육',
    summary: '교사를 위한 수업 자료와 웹앱 공유 공간',
    details: '수업별 링크, 웹앱, 영상, 첨부 자료를 모아 교사가 필요한 프로그램을 쉽게 찾도록 했습니다.',
    stack: ['JavaScript', 'Supabase', 'Vercel'],
  },
  {
    name: '할 일 대시보드', category: '업무 솔루션',
    summary: '일정과 작업 상태를 함께 관리하는 웹앱',
    details: '회원 관리, 작업 등록, 달력, 상태별 작업 현황을 하나의 대시보드에 담았습니다.',
    stack: ['React', 'Supabase', 'Vercel'], url: 'https://my-todolist-team.vercel.app/',
  },
  {
    name: 'AI 시험지 채점', category: '실험·도구',
    summary: '시험지 파일을 올려 채점 결과를 확인하는 프로토타입',
    details: '파일 업로드, 채점 결과 화면, 사용 안내를 갖춘 평가 자동화 실험입니다.',
    stack: ['React', 'Vite', 'AI'],
  },
  {
    name: 'PPT Diff', category: '실험·도구',
    summary: '두 발표자료의 텍스트와 표 변경점을 비교하는 도구',
    details: 'PPTX의 내용과 표를 추출해 변경 내역을 살펴보는 Streamlit MVP입니다.',
    stack: ['Python', 'Streamlit', '문서 분석'],
  },
];

const categories: Category[] = ['전체', '교육', '업무 솔루션', '실험·도구'];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.category === '교육' ? GraduationCap : project.category === '업무 솔루션' ? BriefcaseBusiness : Layers3;
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-brand-primary/10 bg-white shadow-sm">
      {project.thumbnail && (
        project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} 실제 사이트 보기`} className="block aspect-[16/10] overflow-hidden bg-brand-bg-soft">
            <img src={project.thumbnail} alt={`${project.name} 실제 사이트 화면`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]" />
          </a>
        ) : (
          <div className="aspect-[16/10] overflow-hidden bg-brand-bg-soft"><img src={project.thumbnail} alt={`${project.name} 작업 화면 미리보기`} loading="lazy" className="h-full w-full object-cover object-top" /></div>
        )
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent"><Icon size={19} /></span>
          <span className="text-right text-xs font-semibold text-brand-primary/55">{project.status || project.category}</span>
        </div>
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-2 font-semibold leading-snug text-brand-primary/80">{project.summary}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-primary/60">{project.details}</p>
        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-brand-primary/10 pt-4">
          {project.stack.map((item) => <span key={item} className="text-xs text-brand-primary/55">#{item}</span>)}
        </div>
        {(project.url || project.blogUrl) && <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-brand-accent hover:underline">실제 사이트 보기 <ArrowUpRight size={16} /></a>}
          {project.blogUrl && <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary/70 hover:text-brand-accent hover:underline">운영 블로그 보기 <ArrowUpRight size={16} /></a>}
        </div>}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [category, setCategory] = useState<Category>('전체');
  const visibleProjects = category === '전체' ? projects : projects.filter((project) => project.category === category);
  const featured = visibleProjects.filter((project) => project.featured);
  const others = visibleProjects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-brand-bg-soft text-brand-primary">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-8">
        <header className="max-w-3xl pb-10">
          <p className="mb-3 text-sm font-bold text-brand-accent">KION Labs Portfolio</p>
          <h1 className="text-4xl font-extrabold md:text-5xl">포트폴리오</h1>
          <p className="mt-5 text-base leading-relaxed text-brand-primary/70 md:text-lg">교육 현장의 문제부터 조직의 반복 업무까지, 직접 만든 도구와 서비스를 소개합니다.</p>
        </header>

        <div className="flex flex-wrap gap-2 border-b border-brand-primary/10 pb-6" role="group" aria-label="프로젝트 분야">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`cursor-pointer rounded-md px-4 py-2 text-sm font-bold transition-colors ${category === item ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary/70 hover:text-brand-accent'}`}>{item}</button>)}
        </div>

        {featured.length > 0 && <section className="py-8" aria-labelledby="featured-projects"><div className="mb-5 flex flex-wrap items-end justify-between gap-2"><h2 id="featured-projects" className="text-2xl font-bold">주요 프로젝트</h2><span className="text-sm text-brand-primary/55">실제 운영 및 진행 중</span></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{featured.map((project) => <div key={project.name}><ProjectCard project={project} /></div>)}</div></section>}
        {others.length > 0 && <section className="pb-10 pt-8" aria-labelledby="other-projects"><h2 id="other-projects" className="mb-5 text-2xl font-bold">다른 프로젝트</h2><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{others.map((project) => <div key={project.name}><ProjectCard project={project} /></div>)}</div></section>}

        <div className="border-t border-brand-primary/10 pt-10">
          <h2 className="text-2xl font-bold">비슷한 프로젝트를 계획하고 계신가요?</h2>
          <p className="mt-3 text-brand-primary/65">필요한 기능과 활용 환경을 알려주시면 함께 구현 방향을 살펴보겠습니다.</p>
          <Link to="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 font-bold text-white hover:opacity-90">프로젝트 상담하기 <ArrowUpRight size={18} /></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
