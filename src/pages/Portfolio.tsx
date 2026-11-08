import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Layers3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Category = '전체' | '교육' | '업무 솔루션' | '실험·도구';

const projects: {
  name: string;
  category: Exclude<Category, '전체'>;
  summary: string;
  details: string;
  stack: string[];
  status?: string;
  url?: string;
}[] = [
  {
    name: 'Ingrid',
    category: '교육',
    summary: '교사의 평가와 학생 성장 기록을 돕는 에듀테크 플랫폼',
    details: '학생 답안 분석과 피드백 작성, 논술 및 학교 활동 기록을 한곳에서 관리하도록 설계했습니다.',
    stack: ['Python', 'AI', '교육 데이터'],
  },
  {
    name: 'WISE EDU',
    category: '교육',
    summary: 'AICE 학습과 모의평가를 위한 교육 플랫폼',
    details: '학습 콘텐츠, 모의평가, 응시 기록과 결과 확인을 하나의 학습 흐름으로 연결했습니다.',
    stack: ['Next.js', 'Supabase', 'AICE'],
    url: 'https://wiseedu.vercel.app/',
  },
  {
    name: '머루 마음공방',
    category: '교육',
    summary: '학생의 애착 인형으로 만드는 AI 동화 수업 도구',
    details: '인형 사진과 감정을 바탕으로 여섯 장면의 이야기를 만들고, 이미지와 음성을 편집할 수 있습니다.',
    stack: ['Next.js', 'AI 이미지', 'AI 음성'],
  },
  {
    name: '수업프로그램 허브',
    category: '교육',
    summary: '교사를 위한 수업 자료와 웹앱 공유 공간',
    details: '수업별 링크, 웹앱, 영상, 첨부 자료를 모아 교사가 필요한 프로그램을 쉽게 찾도록 했습니다.',
    stack: ['JavaScript', 'Supabase', 'Vercel'],
  },
  {
    name: '잇다과외 (SSCoach)',
    category: '교육',
    summary: '학생별 학습 계획과 상담을 연결하는 맞춤 과외 서비스',
    details: '학교별 학습 안내, 온라인 과외 정보, 시범수업 상담 신청과 신청 관리 기능을 구축하고 있습니다.',
    stack: ['Next.js', '상담 관리', '에듀테크'],
    status: '진행 중',
  },
  {
    name: '유통 업무 ERP',
    category: '업무 솔루션',
    summary: '행사 일정, 매출, 정산을 연결한 업무 시스템',
    details: '흩어진 영업 운영 정보를 한 화면에서 다루는 통합 ERP MVP입니다.',
    stack: ['Next.js', 'ERP', '대시보드'],
  },
  {
    name: 'MeetPick',
    category: '업무 솔루션',
    summary: '면접 일정을 조율하는 채용 업무 도구',
    details: '지원자와 담당자의 면접 일정을 관리하는 캠페인 중심의 웹앱입니다.',
    stack: ['Next.js', '일정 관리', '채용'],
  },
  {
    name: 'HeriHub',
    category: '업무 솔루션',
    summary: '지역 서비스의 상담과 콘텐츠 운영을 잇는 웹 플랫폼',
    details: '서비스별 안내, 간편 견적 접수, 고객 후기와 블로그 콘텐츠를 관리하는 화면을 구축하고 있습니다.',
    stack: ['웹사이트', 'Supabase', '운영 관리'],
    status: '진행 중',
  },
  {
    name: '할 일 대시보드',
    category: '업무 솔루션',
    summary: '일정과 작업 상태를 함께 관리하는 웹앱',
    details: '회원 관리, 작업 등록, 달력, 상태별 작업 현황을 하나의 대시보드에 담았습니다.',
    stack: ['React', 'Supabase', 'Vercel'],
    url: 'https://my-todolist-team.vercel.app/',
  },
  {
    name: 'AI 시험지 채점',
    category: '실험·도구',
    summary: '시험지 파일을 올려 채점 결과를 확인하는 프로토타입',
    details: '파일 업로드, 채점 결과 화면, 사용 안내를 갖춘 평가 자동화 실험입니다.',
    stack: ['React', 'Vite', 'AI'],
  },
  {
    name: 'PPT Diff',
    category: '실험·도구',
    summary: '두 발표자료의 텍스트와 표 변경점을 비교하는 도구',
    details: 'PPTX의 내용과 표를 추출해 변경 내역을 살펴보는 Streamlit MVP입니다.',
    stack: ['Python', 'Streamlit', '문서 분석'],
  },
];

const categories: Category[] = ['전체', '교육', '업무 솔루션', '실험·도구'];

export default function Portfolio() {
  const [category, setCategory] = useState<Category>('전체');
  const visibleProjects = category === '전체' ? projects : projects.filter((project) => project.category === category);

  return (
    <div className="min-h-screen bg-brand-bg-soft text-brand-primary">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-8">
        <header className="max-w-3xl pb-10">
          <p className="mb-3 text-sm font-bold text-brand-accent">KION Labs Portfolio</p>
          <h1 className="text-4xl font-extrabold md:text-5xl">포트폴리오</h1>
          <p className="mt-5 text-base leading-relaxed text-brand-primary/70 md:text-lg">
            교육 현장의 문제부터 조직의 반복 업무까지, 직접 만든 도구와 서비스를 소개합니다.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 border-b border-brand-primary/10 pb-6" role="group" aria-label="프로젝트 분야">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-md px-4 py-2 text-sm font-bold transition-colors ${category === item ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary/70 hover:text-brand-accent'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 py-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => {
            const Icon = project.category === '교육' ? GraduationCap : project.category === '업무 솔루션' ? BriefcaseBusiness : Layers3;
            return (
              <article key={project.name} className="flex h-full flex-col rounded-lg border border-brand-primary/10 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent"><Icon size={21} /></span>
                  <span className="text-xs font-semibold text-brand-primary/50">
                    {project.category}{project.status ? ` · ${project.status}` : ''}
                  </span>
                </div>
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="mt-2 font-semibold text-brand-primary/80">{project.summary}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-primary/60">{project.details}</p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-brand-primary/10 pt-4">
                  {project.stack.map((item) => <span key={item} className="text-xs text-brand-primary/55">#{item}</span>)}
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 self-start text-sm font-bold text-brand-accent hover:underline">
                    프로젝트 보기 <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        <div className="border-t border-brand-primary/10 pt-10">
          <h2 className="text-2xl font-bold">비슷한 프로젝트를 계획하고 계신가요?</h2>
          <p className="mt-3 text-brand-primary/65">필요한 기능과 활용 환경을 알려주시면 함께 구현 방향을 살펴보겠습니다.</p>
          <Link to="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 font-bold text-white hover:opacity-90">
            프로젝트 상담하기 <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
