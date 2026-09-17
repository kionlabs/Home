import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wrench, Users, Laptop, CreditCard, CheckCircle2, ShieldCheck, Rocket, Cpu, RefreshCw } from 'lucide-react';

export default function CourseStep3() {
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
              <span className="text-white/80">STEP 03 · 자체 구축</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              실전 MVP 빌딩 — 내 서비스를 세상에 띄우기까지
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
              데이터베이스 연동부터 실시간 배포 자동화까지, 아이디어를 실제 돌아가는 비즈니스 서비스로 완성합니다.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#contact" onClick={scrollToContact}>
                <button className="bg-[#e05638] hover:bg-[#d04628] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all cursor-pointer">
                  상담 및 수강 신청하기
                </button>
              </Link>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-lg font-extrabold">
                490,000원부터 <span className="text-xs font-normal text-white/70">/ 회차별 (분할 결제 지원)</span>
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
              <p className="font-bold text-sm md:text-base text-brand-primary">Next.js, Supabase, Vercel, GitHub</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강 정원</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">1:1 집중 밀착 코칭</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Laptop size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">준비물</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">노트북, GitHub 계정</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <CreditCard size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강료</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">490,000원부터 (단계별 결제)</p>
            </div>
          </div>
        </section>

        {/* Section 02. 이런 분께 추천합니다 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">02.</span> 이런 분께 추천합니다
          </h2>
          <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-4">
            {[
              "기획은 끝났는데, 기술적인 문제로 구현과 배포 단계에서 막히시는 분",
              "데이터베이스(Supabase)를 활용해 고객 정보를 관리하는 실제 서비스가 필요하신 분",
              "매번 수동으로 업데이트하는 게 아니라, GitHub-Vercel 자동 배포 체계를 갖추고 싶은 분"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#fbf9f4]">
                <CheckCircle2 className="text-[#e05638] shrink-0 mt-0.5" size={20} />
                <p className="font-medium text-brand-primary/90 text-sm md:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 03. 상세 커리큘럼 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">03.</span> 상세 커리큘럼
          </h2>
          <div className="space-y-4">
            {[
              { part: "Part 1", title: "데이터 설계", desc: "Supabase를 이용한 테이블 구조 설계 및 RLS 보안 정책 구축" },
              { part: "Part 2", title: "백엔드 연동", desc: "상담 신청 폼과 데이터베이스 간 실시간 API 연동" },
              { part: "Part 3", title: "자동화 배포", desc: "GitHub 연동 및 Vercel 자동화 배포 파이프라인 구축" },
              { part: "Part 4", title: "실전 최적화", desc: "메타 태그(OG) 설정, 카카오톡 미리보기 최적화 등 실무 운영 디테일" },
              { part: "Part 5", title: "런칭", desc: "나만의 웹 서비스 URL 확보 및 비즈니스 시작" }
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
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#e05638] flex items-center justify-center">
                <Rocket size={20} />
              </div>
              <span className="text-xs font-bold text-[#e05638] uppercase tracking-wider block">MVP 서비스</span>
              <h3 className="font-bold text-lg text-brand-primary">즉시 사용 가능한 실전용 MVP 서비스</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                아이디어에서 머물던 기능들을 실제 고객이 접근할 수 있는 라이브 서비스로 완성합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Cpu size={20} />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">자동화 시스템</span>
              <h3 className="font-bold text-lg text-brand-primary">상담 신청부터 DB 관리까지 파이프라인 구축</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                고객 데이터 수집 및 관리 파이프라인을 자동 구축하여 실시간 비즈니스 운영이 가능해집니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <RefreshCw size={20} />
              </div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">런칭 경험</span>
              <h3 className="font-bold text-lg text-brand-primary">GitHub-Vercel 유지보수 시스템</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                지속적인 기능 수정 및 업데이트가 자동으로 커밋/배포되는 모던 개발 파이프라인을 소유하게 됩니다.
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
              <p className="text-brand-primary/70">1:1 전담 밀착 코칭으로 진행되며, 프로젝트 요구사항 분석 후 최적화된 일정 및 환경이 설정됩니다.</p>
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
