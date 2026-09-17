import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wrench, Users, Laptop, CreditCard, CheckCircle2, AlertTriangle, ShieldCheck, Layout, Database, Terminal } from 'lucide-react';

export default function CourseStep2() {
  const scrollToContact = () => {
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#contact';
      }
    }, 100);
  };

  const openPayAppPopup = (url: string) => {
    const width = 480;
    const height = 750;
    const left = Math.max(0, (window.innerWidth - width) / 2 + (window.screenX || window.screenLeft || 0));
    const top = Math.max(0, (window.innerHeight - height) / 2 + (window.screenY || window.screenTop || 0));
    window.open(url, 'PayAppPayment', `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`);
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef] selection:bg-brand-accent/20 selection:text-brand-primary font-sans text-brand-primary">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1b254b] to-[#0f172a] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs md:text-sm text-brand-accent font-medium mb-4">
              <Link to="/guide" className="hover:underline">실전 AI 커리큘럼</Link>
              <span>&gt;</span>
              <span className="text-white/80">STEP 02 · 실무 전환</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              비즈니스 업무 자동화 — 내 컴퓨터에 AI 개발자 앉히기
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
              단순한 이론을 넘어, 내 비즈니스 데이터를 직접 제어하고 배포하는 2단계 실전 코스
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openPayAppPopup('https://www.payapp.kr/L/z4kR5C')}
                className="bg-[#e05638] hover:bg-[#d04628] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all cursor-pointer"
              >
                지금 결제 및 수강 신청
              </button>
              <Link to="/#contact" onClick={scrollToContact}>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-2xl text-lg border border-white/20 transition-all cursor-pointer">
                  상담 문의하기
                </button>
              </Link>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-lg font-extrabold">
                388,000원 <span className="text-xs font-normal text-white/70">/ 1회 (4시간) 기준</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="py-16 max-w-5xl mx-auto px-4 md:px-8 space-y-16">
        {/* Section 01. 한눈에 보기 (4 Grid Cards) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">01.</span> 한눈에 보기
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Wrench size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">사용 도구</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">Antigravity, Supabase, Github, Vercel</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강 정원</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">1:1 코칭 또는 그룹 (최대 6인)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Laptop size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">준비물</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">노트북, GitHub 및 Supabase 계정</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <CreditCard size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강료</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">388,000원 (1회 4시간)</p>
            </div>
          </div>
        </section>

        {/* Section 02. 이런 분께 추천합니다 & 맞지 않는 분 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[#e05638]">02.</span> 추천 대상 및 수강 대상
          </h2>

          <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-brand-primary mb-2">이런 분께 꼭 필요합니다</h3>
            {[
              "매일 반복되는 데이터 정리, 엑셀 수동 입력에 지쳐 자동화가 시급한 대표님",
              "나만의 데이터를 수집하고 관리하는 내부 관리용 대시보드가 필요한 실무 리더",
              "코딩을 전혀 모르지만, 내 아이디어를 실제 돌아가는 웹 서비스로 띄워보고 싶은 예비 창업가"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#fbf9f4]">
                <CheckCircle2 className="text-[#e05638] shrink-0 mt-0.5" size={20} />
                <p className="font-medium text-brand-primary/90 text-sm md:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#fff8f6] p-6 rounded-2xl border border-[#f7ded7] flex items-start gap-3">
            <AlertTriangle className="text-[#e05638] shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-sm text-[#e05638] mb-1">※ 이런 분께는 맞지 않을 수 있습니다</h4>
              <p className="text-xs md:text-sm text-brand-primary/80 leading-relaxed">
                단순 이론 수업이나 교재 위주의 코딩 문법 학습만을 원하시는 분 (KION Labs는 100% 실무에 바로 적용되는 실전 결과물 구축 중심입니다.)
              </p>
            </div>
          </div>
        </section>

        {/* Section 03. 상세 커리큘럼 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">03.</span> 상세 커리큘럼
          </h2>
          <div className="space-y-4">
            {[
              { part: "Part 1", title: "개발 환경 동기화", desc: "Antigravity IDE 설치 및 내 로컬 컴퓨터 환경 세팅" },
              { part: "Part 2", title: "클라우드 데이터베이스 설계", desc: "Supabase 프로젝트 생성 및 맞춤형 테이블(스키마/RLS 보안) 설계" },
              { part: "Part 3", title: "실전 웹앱 빌딩", desc: "프론트엔드(Vite/React)와 Supabase를 실시간 연동하는 CRUD 구현" },
              { part: "Part 4", title: "세상에 띄우기", desc: "GitHub 저장소 연동 및 Vercel을 통한 무중단 실시간 배포 자동화" },
              { part: "Part 5", title: "비즈니스 파이프라인", desc: "상담 신청 폼 등 실제 비즈니스에 작동하는 완성형 자동화 구축" }
            ].map((cur, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-xs font-bold text-[#e05638] bg-[#fcf0ec] px-4 py-2 rounded-xl border border-[#f7ded7] shrink-0 w-fit">
                  {cur.part}
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl text-brand-primary">{cur.title}</h3>
                  <p className="text-sm text-brand-primary/70 leading-relaxed">{cur.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04. 수강 후 결과물 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">04.</span> 수강 후 완성되는 결과물
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Layout size={20} />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Portfolio</span>
              <h3 className="font-bold text-lg text-brand-primary">개인/회사 소개 및 포트폴리오 사이트</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                나만의 고유한 도메인과 신뢰도 높은 모던 웹 디자인으로 내 비즈니스를 브랜드화합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Database size={20} />
              </div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">CRM</span>
              <h3 className="font-bold text-lg text-brand-primary">실시간 데이터 수집 및 관리자 대시보드</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                고객 문의, DB 수집, 상태 트래킹을 한눈에 파악할 수 있는 안전한 맞춤형 대시보드를 연동합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Terminal size={20} />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Web App</span>
              <h3 className="font-bold text-lg text-brand-primary">내 비즈니스 전용 업무 자동화 웹앱</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                반복적인 처리 로직을 클릭 한번으로 실행해 팀의 생산성을 수배로 끌어올립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 05. 운영 안내 및 환불 규정 */}
        <section className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="text-[#e05638]" /> 운영 안내 및 환불 규정
          </h2>

          <div className="space-y-4 text-sm text-brand-primary/80">
            <div>
              <h4 className="font-bold text-brand-primary mb-1">수업 진행 방식</h4>
              <p className="text-brand-primary/70">1:1 맞춤 밀착 코칭 또는 소규모 그룹(최대 6인) 실습으로 진행되며, 사전 접속 환경 안내가 발송됩니다.</p>
            </div>

            <div className="pt-4 border-t border-black/5">
              <h4 className="font-bold text-brand-primary mb-2">취소 및 환불 규정</h4>
              <ul className="list-disc list-inside space-y-1 text-brand-primary/70">
                <li><span className="font-semibold text-brand-primary">시작 7일 전까지:</span> 결제 금액의 100% 전액 환불</li>
                <li><span className="font-semibold text-brand-primary">시작 3~6일 전까지:</span> 결제 금액의 50% 환불</li>
                <li><span className="font-semibold text-brand-primary">시작 2일 전 ~ 당일:</span> 환불 불가</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center pt-8">
          <Link to="/#contact" onClick={scrollToContact}>
            <button className="bg-[#e05638] hover:bg-[#d04628] hover:-translate-y-0.5 transition-all cursor-pointer text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-[#e05638]/20">
              상담 및 수강 신청하기
            </button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
