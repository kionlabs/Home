import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wrench, Users, CreditCard, CheckCircle2, ShieldCheck, Bug, Zap, Sliders, Share2, Info } from 'lucide-react';

export default function CourseSupport() {
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
              <span className="text-white/80">이어서 · 정착 지원</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              AI 정착 지원 — 막히는 부분 1:1 밀착 풀이
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
              과정이 끝난 뒤가 진짜 시작입니다. 혼자 고민하지 마세요. KION Labs의 전문가와 실시간으로 해결책을 찾습니다.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#contact" onClick={scrollToContact}>
                <button className="bg-[#e05638] hover:bg-[#d04628] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all cursor-pointer">
                  자유 실습 세션 신청하기
                </button>
              </Link>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-lg font-extrabold">
                150,000원 <span className="text-xs font-normal text-white/70">/ 1인 기준 (2시간 1회)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="py-16 max-w-5xl mx-auto px-4 md:px-8 space-y-16">
        {/* Section 01. 개요 및 운영 방식 (4 Grid Cards) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">01.</span> 한눈에 보기
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Wrench size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">운영 방식</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">온라인 라이브 (화면 공유)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강 정원</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">소규모 집중 케어 (최대 10인)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <CreditCard size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">비용</span>
              <p className="font-bold text-sm md:text-base text-brand-primary">150,000원 (2시간 1회)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0ec] text-[#e05638] flex items-center justify-center mb-3">
                <Info size={20} />
              </div>
              <span className="text-xs text-brand-primary/50 font-bold block mb-1">수강 혜택</span>
              <p className="font-bold text-xs md:text-sm text-[#e05638]">정규 코스 수강생 우선 배정</p>
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
              "며칠째 해결 안 되는 오류, 함께 보면 10분 만에 끝납니다.",
              "만든 기능이 내 의도대로 안 움직일 때, 실시간으로 방향을 잡고 싶으신 분",
              "다른 참가자들의 프로젝트를 보며 영감을 얻고, 서로의 고민을 나누고 싶으신 분"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#fbf9f4]">
                <CheckCircle2 className="text-[#e05638] shrink-0 mt-0.5" size={20} />
                <p className="font-medium text-brand-primary/90 text-sm md:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 03. 이렇게 활용할 수 있어요 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-[#e05638]">03.</span> 이렇게 활용할 수 있어요
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <Bug size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">에러 해결</span>
                <h3 className="font-bold text-lg text-brand-primary">코드 오류 즉시 해결</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  혼자 몇 시간씩 끙끙 앓던 구문 오류나 라이브러리 충돌 문제를 전문가와 함께 라이브로 짚어보고 10분 만에 명쾌하게 해결합니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                <Zap size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block">기능 확장</span>
                <h3 className="font-bold text-lg text-brand-primary">새로운 AI 기능 추가</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  내 프로젝트나 웹사이트에 새로운 AI 기능(자동 요약, 데이터 파싱 등)을 도입하고 싶을 때 가장 효율적인 구현 로드맵을 함께 그립니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                <Sliders size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wider block">설계 개선</span>
                <h3 className="font-bold text-lg text-brand-primary">로직 리팩토링</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  자동화 파이프라인이나 데이터베이스 처리가 느리거나 매끄럽지 않을 때, 더 빠른 성능과 안정성을 위해 구조를 리팩토링합니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                <Share2 size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-500 uppercase tracking-wider block">프로젝트 공유</span>
                <h3 className="font-bold text-lg text-brand-primary">결과물 시연 및 피드백</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  내가 직접 빌딩한 결과물을 다른 수강생들과 공유하고, 전문가의 정밀한 피드백을 받아 서비스를 완성도 있게 발전시킵니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04. 운영 정책 및 환불 규정 */}
        <section className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 text-brand-primary">
            <ShieldCheck className="text-[#e05638]" /> 운영 정책 및 환불 규정
          </h2>

          <div className="space-y-4 text-sm text-brand-primary/80">
            <div className="bg-[#fcf0ec]/50 p-4 rounded-xl border border-[#f7ded7]">
              <p className="font-bold text-xs text-[#e05638]">
                ※ 자유 실습 세션은 정규 코스(1~4단계) 수강생에게 우선 참여권이 부여되며, 잔여 석에 한해 신청이 확정됩니다.
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-bold text-brand-primary mb-1">운영 방식</h4>
              <p className="text-brand-primary/70">온라인 Zoom을 통한 실시간 화면 공유 세션으로 진행되며, 사전 질문/이슈를 미리 제출하시면 우선 처리됩니다.</p>
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
              자유 실습 신청하기
            </button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
