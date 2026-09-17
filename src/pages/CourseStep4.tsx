import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wrench, Users, Laptop, CreditCard, CheckCircle2, ShieldCheck, Crown, Gift, ShieldAlert, Sparkles, Zap, Award } from 'lucide-react';

export default function CourseStep4() {
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1b254b] via-[#0f172a] to-[#090d16] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs md:text-sm text-brand-accent font-medium mb-4">
              <Link to="/guide" className="hover:underline">실전 AI 커리큘럼</Link>
              <span>&gt;</span>
              <span className="text-white/80">PREMIUM FULL PACKAGE</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#e05638] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <Crown size={14} /> PREMIUM ALL-IN-ONE
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              KION 빌더 풀패키지 — 성장 엔진 런칭
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
              진단부터 맞춤형 데이터베이스, 자동화 시스템 구축, 실시간 배포 및 런칭 후 밀착 케어까지 100% 보장하는 올인원 성장 프로그램
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#contact" onClick={scrollToContact}>
                <button className="bg-[#e05638] hover:bg-[#d04628] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl shadow-[#e05638]/30 transition-all cursor-pointer">
                  VIP 밀착 상담 신청하기
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
        {/* Section 01. 프리미엄 혜택 패키지 */}
        <section>
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#e05638] uppercase bg-[#fcf0ec] px-4 py-1.5 rounded-full inline-block mb-3 border border-[#f7ded7]">
              EXCLUSIVE BENEFITS
            </span>
            <h2 className="text-3xl font-extrabold text-brand-primary">풀패키지 전용 3대 프리미엄 혜택</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border-2 border-[#e05638]/20 shadow-sm relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center">
                <Crown size={24} />
              </div>
              <span className="text-xs font-bold text-[#e05638] uppercase tracking-wider block">BENEFIT 01</span>
              <h3 className="text-xl font-bold text-brand-primary">1개월 VIP 전담 케어</h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed">
                런칭 후 1개월간 전담 슬랙/카톡 채널을 개설하여 실시간 문의 대응, 버그 수정 및 실무 적용을 밀착 지원합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#e05638]/20 shadow-sm relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center">
                <Gift size={24} />
              </div>
              <span className="text-xs font-bold text-[#e05638] uppercase tracking-wider block">BENEFIT 02</span>
              <h3 className="text-xl font-bold text-brand-primary">실무 에셋 팩 100% 제공</h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed">
                자동화용 노션 템플릿, 표준 서비스 계약서 양식, 데이터 분석 대시보드 커스텀 스킨을 즉시 활용 가능한 형태로 드립니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#e05638]/20 shadow-sm relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center">
                <ShieldAlert size={24} />
              </div>
              <span className="text-xs font-bold text-[#e05638] uppercase tracking-wider block">BENEFIT 03</span>
              <h3 className="text-xl font-bold text-brand-primary">무제한 코드 & 보안 검수</h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed">
                배포된 시스템에 대해 전문 개발진이 직접 보안 정책(RLS), API 권한 및 빌드 성능을 무제한으로 검수하고 최적화해 드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02. 한눈에 보기 (4 Grid Cards) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">01.</span> 개요 및 조건
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Wrench size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">사용 도구</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">Next.js, Supabase, Vercel, GitHub, Notion</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강 정원</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">1:1 VIP 전담 케어</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Laptop size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">준비물</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">개인 노트북, 계정 사전 준비</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <CreditCard size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강료</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">490,000원부터 (회차/모듈당)</p>
            </div>
          </div>
        </section>

        {/* Section 03. 5단계 고도화 커리큘럼 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">02.</span> 5단계 고도화 커리큘럼
          </h2>
          <div className="space-y-4">
            {[
              { step: "1단계", title: "AI 비즈니스 진단 및 로드맵 수립", desc: "기업 및 사업 아이템의 업무 프로세스를 정밀 진단하고, 자동화 우선순위 및 커스텀 개발 로드맵을 설계합니다." },
              { step: "2단계", title: "기업용 데이터베이스 설계 및 보안(RLS) 구축", desc: "Supabase 기반의 확장 가능한 데이터 스키마를 구성하고, 데이터 유출을 완벽 방지하는 RLS 보안 정책을 수립합니다." },
              { step: "3단계", title: "맞춤형 AI 자동화 파이프라인 빌딩", desc: "React/Next.js 프론트엔드와 최신 AI API를 결합하여 24시간 자동 실행되는 비즈니스 핵심 솔루션을 구현합니다." },
              { step: "4단계", title: "실시간 배포 및 비즈니스 워크플로우 자동화", desc: "GitHub과 Vercel을 통한 무중단 CI/CD 배포망을 완성하고, 실제 고객 데이터가 실시간 연동되도록 마감합니다." },
              { step: "5단계", title: "런칭 후 1개월 밀착 피드백 및 유지보수 컨설팅", desc: "실제 런칭 후 발생하는 이슈 수정, 보안 재검수, 실무 정착을 위해 1개월간 전담 메신저 채널을 통해 밀착 컨설팅을 제공합니다." }
            ].map((cur, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-xs font-bold text-white bg-[#e05638] px-4 py-2 rounded-xl shrink-0 w-fit shadow-md shadow-[#e05638]/20">
                  {cur.step}
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl text-brand-primary">{cur.title}</h3>
                  <p className="text-sm text-brand-primary/70 leading-relaxed">{cur.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04. 수강 후 완성 결과물 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">03.</span> 수강 후 완성 결과물
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#e05638] flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <span className="text-xs font-bold text-[#e05638] uppercase tracking-wider block">All-In-One System</span>
              <h3 className="font-bold text-lg text-brand-primary">100% 자동화 비즈니스 엔진</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                진단부터 개발, 배포까지 전 과정이 이어진 지속 가능한 성장 시스템을 구축합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Commercial Asset</span>
              <h3 className="font-bold text-lg text-brand-primary">상용화 가능한 고품질 웹앱 & DB</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                즉시 매출 및 고객 유치로 이어지는 검증된 웹 서비스와 데이터베이스를 소유합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Award size={20} />
              </div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">VIP Support</span>
              <h3 className="font-bold text-lg text-brand-primary">1개월 밀착 케어 & 검수 리포트</h3>
              <p className="text-xs text-brand-primary/70 leading-relaxed">
                1개월 케어와 함께 보안 및 성능 검수 결과표를 제공하여 안정적인 정착을 지원합니다.
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
              <p className="text-brand-primary/70">1:1 VIP 전담 밀착 코칭 및 1개월 전담 채널 지원으로 운영되며, 기업 및 비즈니스 맞춤형으로 진행됩니다.</p>
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
              VIP 밀착 상담 신청하기
            </button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
