import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wrench, Users, Laptop, CreditCard, CheckCircle2, ArrowRight, Clock, HelpCircle, ShieldCheck } from 'lucide-react';

export default function CourseStep1() {
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
              <span className="text-white/80">STEP 01 · 실전 첫걸음</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              KION AI 툴킷 마스터 — 실전 첫걸음
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
              설치부터 실무 적용까지, 도구의 제약 없이 나만의 AI 환경을 구축하는 4시간
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#contact" onClick={scrollToContact}>
                <button className="bg-[#e05638] hover:bg-[#d04628] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all cursor-pointer">
                  상담 및 수강 신청하기
                </button>
              </Link>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-lg font-extrabold">
                198,000원 <span className="text-xs font-normal text-white/70">/ 1회 (4시간) 기준</span>
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
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">주요 도구</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">안티그래비티, 코워크, 코덱스 등</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강 정원</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">최대 12인 (소규모 밀착형)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Laptop size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">준비물</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">개인 노트북, AI 계정 사전 준비</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <CreditCard size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강료</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">198,000원 (1회 4시간)</p>
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
              "AI를 써보고 싶지만 내 업무에 어떻게 적용할지 막막한 분",
              "툴 사용법만 배우는 건 지루하고, 실제 결과물이 필요한 분",
              "코딩 없이 AI와 협업하여 업무 속도를 2배 높이고 싶은 실무자"
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
              { part: "Part 1. 이론", title: "AI 에이전트의 이해와 업무 환경 세팅", desc: "최신 AI 생태계 흐름을 파악하고 안티그래비티, 코워크 등 내 업무에 최적화된 에이전트 환경을 준비합니다." },
              { part: "Part 2. 실습 1", title: "나만의 AI 툴킷 구축 (안티그래비티/코워크 활용)", desc: "기본 세팅을 넘어 자주 쓰는 자료, 문서, 코드를 연동하고 개별 워크플로우에 맞는 맞춤형 툴킷을 제작합니다." },
              { part: "Part 3. 실습 2", title: "반복 업무를 자동화하는 AI 프롬프트 설계", desc: "이메일 작성, 요약, 일정 관리 등 일상 반복 업무를 한 번의 명령으로 끝내는 실전 프롬프트를 설계합니다." },
              { part: "Part 4. 실습 3", title: "데이터 인사이트 도출 및 실전 프로젝트 구현", desc: "실무 데이터를 바탕으로 분석 결과를 시각화하고 1개의 실체화된 프로젝트 결과물을 완성합니다." },
              { part: "Part 5. 정리", title: "Q&A 및 개별 프로젝트 피드백", desc: "수강 과정 중 막혔던 부분을 점검하고, 향후 커스텀 확장을 위한 1:1 맞춤 피드백을 제공합니다." }
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

        {/* Section 04. 수강 후 변화 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">04.</span> 수강 후 변화
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
              <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">BEFORE</span>
              <h3 className="font-bold text-xl mb-2 text-brand-primary">무엇을 시작해야 할지 몰라 답답했던 상태</h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed">
                AI 소식은 무성하지만 내 일에 어디부터 적용해야 할지 감이 안 잡히고, 챗봇과 일회성 대화에 그치던 답답한 상황입니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">AFTER</span>
              <h3 className="font-bold text-xl mb-2 text-brand-primary">자동화된 워크플로우를 갖춘 상태</h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed">
                매일 쓰는 업무 툴과 AI가 완벽히 연결되어 반복 작업을 몇 분 만에 끝내고, 2배 이상의 업무 속도 향상을 체감합니다.
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
              <p className="text-brand-primary/70">온라인 Live (Zoom) 또는 오프라인 실습실에서 진행되며, 사전 접속 안내가 이메일/문자로 발송됩니다.</p>
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
