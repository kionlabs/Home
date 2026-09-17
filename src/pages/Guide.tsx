import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Guide() {
  const scrollToContact = () => {
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef] selection:bg-brand-accent/20 selection:text-brand-primary">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 md:px-8 font-sans text-brand-primary">
        {/* Intro */}
        <section className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest text-[#e05638] uppercase bg-[#fcf0ec] px-4 py-1.5 rounded-full inline-block mb-4 border border-[#f7ded7]">
              SERVICE GUIDE & PRICING
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-primary tracking-tight">
              실전 AI 커리큘럼 & 서비스 가이드
            </h1>
            <p className="text-lg md:text-xl text-brand-primary/80 max-w-2xl mx-auto leading-relaxed">
              KION Labs는 단순한 이론 교육을 넘어 <span className="font-bold text-[#e05638]">'바이브 코딩(Vibe Coding)'</span> 기반의 실전 문제 해결 프로그램을 제공합니다.
            </p>
          </motion.div>
        </section>

        {/* 2x2 Card Grid Programs */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#e05638] tracking-wider uppercase block mb-3">
                  STEP 01 · 실전 첫걸음
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">
                  KION AI 툴킷 마스터 — 실전 첫걸음
                </h3>
                <p className="text-brand-primary/70 text-sm leading-relaxed mb-6">
                  안티그래비티, 코워크, 코덱스 등 최신 AI 에이전트를 내 업무에 이식합니다. 복잡한 코딩 없이 '내 일에 바로 쓰이는' AI 세팅법을 익힙니다.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#FF8D70]">
                      198,000원
                    </span>
                    <span className="text-xs text-brand-primary/60 font-medium">
                      1회 (4시간) 기준
                    </span>
                  </div>
                  <span className="text-xs text-brand-primary/50 block">
                    정원 최대 12인 (소규모 밀착형)
                  </span>
                </div>

                <Link to="/courses/step1">
                  <button className="w-full bg-[#fcf0ec] text-[#e05638] font-bold py-3.5 px-6 rounded-2xl hover:bg-[#fae2db] transition-colors text-center text-sm cursor-pointer">
                    상세 커리큘럼 보기
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#e05638] tracking-wider uppercase block mb-3">
                  STEP 02 · 실무 전환
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">
                  업무의 자동화 — AI 개발자 앉히기
                </h3>
                <p className="text-brand-primary/70 text-sm leading-relaxed mb-6">
                  반복적인 업무를 AI에게 맡기세요. 데이터 분석부터 보고서 작성까지, 24시간 쉬지 않는 나만의 자동화 파이프라인을 구축합니다.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#FF8D70]">
                      350,000원
                    </span>
                    <span className="text-xs text-brand-primary/60 font-medium">
                      1회 (3시간) 기준
                    </span>
                  </div>
                  <span className="text-xs text-brand-primary/50 block">
                    1:1 코칭 또는 그룹 (최대 6인)
                  </span>
                </div>

                <Link to="/guide/automation">
                  <button className="w-full bg-[#fcf0ec] text-[#e05638] font-bold py-3.5 px-6 rounded-2xl hover:bg-[#fae2db] transition-colors text-center text-sm cursor-pointer">
                    상세 커리큘럼 보기
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#e05638] tracking-wider uppercase block mb-3">
                  STEP 03 · 자체 구축
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">
                  실전 MVP 빌딩 — 진짜 서비스 만들기
                </h3>
                <p className="text-brand-primary/70 text-sm leading-relaxed mb-6">
                  아이디어로 끝내지 마세요. 시장 반응을 확인할 수 있는 최소 기능 제품(MVP)을 48시간 내에 구현하여 실질적인 비즈니스 성과를 만듭니다.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#FF8D70]">
                      450,000원
                    </span>
                    <span className="text-xs text-brand-primary/60 font-medium">
                      1회차 기준
                    </span>
                  </div>
                  <span className="text-xs text-brand-primary/50 block">
                    1:1 전담 구축 코칭 (3~4회차)
                  </span>
                </div>

                <Link to="/guide/mvp">
                  <button className="w-full bg-[#fcf0ec] text-[#e05638] font-bold py-3.5 px-6 rounded-2xl hover:bg-[#fae2db] transition-colors text-center text-sm cursor-pointer">
                    상세 커리큘럼 보기
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 border-2 border-[#e05638]/50 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 bg-[#e05638] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                PREMIUM ALL-IN-ONE
              </div>

              <div>
                <span className="text-xs font-bold text-[#e05638] tracking-wider uppercase block mb-3">
                  전 과정 · 풀패키지
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">
                  KION 빌더 풀패키지 — 성장 엔진 런칭
                </h3>
                <p className="text-brand-primary/70 text-sm leading-relaxed mb-4">
                  진단부터 맞춤형 DB, 자동화 파이프라인 구축, 실시간 배포 및 1개월 밀착 케어까지 올인원으로 함께합니다.
                </p>

                {/* Special Benefits List */}
                <div className="bg-[#fcf0ec]/50 p-3.5 rounded-2xl border border-[#f7ded7] mb-6 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-[#e05638] font-bold">
                    <span>👑 1개월 VIP 전담 슬랙/카톡 밀착 케어</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-primary/80">
                    <span>🎁 자동화 노션 템플릿·계약서·대시보드 스킨 100% 제공</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-primary/80">
                    <span>🛡️ 전문가 무제한 보안(RLS) & 성능 코드 검수</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#e05638]">
                      450,000원
                    </span>
                    <span className="text-xs text-brand-primary/60 font-medium">
                      1회차 기준
                    </span>
                  </div>
                  <span className="text-xs text-brand-primary/50 block">
                    1:1 VIP 전담 케어 (전과정 5회차 + 1개월 케어)
                  </span>
                </div>

                <Link to="/guide/fullpackage">
                  <button className="w-full bg-[#e05638] hover:bg-[#d04628] text-white font-bold py-3.5 px-6 rounded-2xl transition-colors text-center text-sm cursor-pointer shadow-md shadow-[#e05638]/20">
                    프리미엄 커리큘럼 상세 보기
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Full-width Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-4"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#e05638] tracking-wider uppercase block mb-2">
                이어서 · 정착 지원
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">
                AI 정착 지원 — 막히는 부분 1:1 밀착 풀이
              </h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                과정이 끝난 뒤가 진짜 시작입니다. 각자 진행 중인 프로젝트를 가져오세요. KION Labs의 전문가가 실시간으로 해결책을 함께 고민합니다.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col md:items-end gap-3 min-w-[220px]">
              <div className="text-left md:text-right">
                <span className="text-2xl md:text-3xl font-extrabold text-[#FF8D70] block">
                  150,000원
                </span>
                <span className="text-xs text-brand-primary/60 font-medium">
                  1인 기준 · 3시간 1회
                </span>
              </div>

              <Link to="/guide/support" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-[#fcf0ec] text-[#e05638] font-bold py-3 px-6 rounded-2xl hover:bg-[#fae2db] transition-colors text-sm cursor-pointer whitespace-nowrap">
                  상세 세션 안내 보기
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Disclaimer Note */}
          <p className="text-xs text-brand-primary/50 text-center mt-4">
            ※ 모든 코스는 회차별 결제를 기본으로 지원하며, 상세 비용은 프로젝트 규모 및 커리큘럼 구성에 따라 조정될 수 있습니다.
          </p>
        </section>

        {/* How We Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary border-b border-brand-primary/10 pb-3">
            How We Work (진행 방식)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
              <h3 className="font-bold text-[#e05638] mb-2 text-base">수업 방식</h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                온라인(Zoom/Meet) 및 오프라인 출강을 병행하며, 팀/개인 맞춤형 프로젝트 방식을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
              <h3 className="font-bold text-brand-base mb-2 text-base">협업 도구</h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                Notion, Slack, Github 등을 활용하여 투명하고 효율적으로 결과물과 수강 관리를 지원합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
              <h3 className="font-bold text-brand-primary mb-2 text-base">진행 프로세스</h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                무료 상담 → 니즈 분석 및 제안 → 계약/일정 확정 → 맞춤 교육/구축 → 결과물 완성 및 피드백
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary border-b border-brand-primary/10 pb-3">
            자주 묻는 질문 (FAQ)
          </h2>
          <div className="space-y-4">
            {[
              { q: "코딩을 전혀 몰라도 수강할 수 있나요?", a: "네, 가능합니다. 바이브 코딩 접근법을 통해 코딩 지식이 없어도 자연어로 AI와 소통하며 필요한 업무 도구나 서비스를 만들 수 있습니다." },
              { q: "기업 맞춤형 교육도 가능한가요?", a: "물론입니다. 각 기업의 도메인과 부서별 업무 특성에 맞춰 100% 맞춤형 실습 워크숍과 자동화 솔루션을 제공합니다." },
              { q: "MVP 제작/자체 서비스 구축은 보통 얼마나 걸리나요?", a: "프로젝트 요구사항에 따라 다르지만, 보통 2주에서 4주 사이에 핵심 기능 검증이 가능한 초기 모델(MVP)을 완성합니다." },
              { q: "온라인 코칭은 어떻게 진행되나요?", a: "화면 공유를 통해 수강생이 직접 실습하는 과정을 보며 실시간으로 막히는 부분을 짚어주는 밀착 코칭으로 진행됩니다." },
              { q: "상담 후 계약하지 않아도 되나요?", a: "네, 초기 상담은 무료로 진행되며, 니즈를 명확히 파악하고 적합한 커리큘럼이나 해결책을 탐색하는 단계이므로 부담 없이 신청하셔도 됩니다." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
                <summary className="font-bold cursor-pointer p-6 hover:bg-[#fbf9f4] transition-colors list-none flex justify-between items-center text-sm md:text-base">
                  <span>Q. {faq.q}</span>
                  <span className="text-brand-primary/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-brand-primary/80 border-t border-black/5 mt-2 bg-[#fbf9f4]/50 text-sm leading-relaxed">
                  <span className="font-bold text-[#e05638] mr-2">A.</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link to="/#contact" onClick={scrollToContact}>
            <button className="bg-[#e05638] hover:bg-[#d04628] hover:-translate-y-0.5 transition-all cursor-pointer text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-[#e05638]/20">
              맞춤형 상담 신청하기
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
