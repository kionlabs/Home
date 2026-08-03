import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Guide() {
  return (
    <div className="min-h-screen bg-brand-bg-soft selection:bg-brand-accent/20 selection:text-brand-primary">
      <Navbar />
      
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6 md:px-10 font-sans text-brand-primary">
        
        {/* Intro */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">
              서비스 가이드
            </h1>
            <p className="text-lg md:text-xl text-brand-primary/80 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
              KION Labs는 단순한 이론 교육이 아닌, <span className="font-bold text-brand-accent">'바이브 코딩(Vibe Coding)'</span>과 <span className="font-bold text-brand-base">실전 중심의 문제 해결</span>에 집중합니다.<br/>
              조직의 체질을 바꾸고 즉각적인 성과를 내기 위해 맞춤형 교육과 솔루션을 제공합니다.
            </p>
          </motion.div>
        </section>

        {/* Programs */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 pb-2 border-b-2 border-brand-primary/10"
          >
            Programs
          </motion.h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-brand-primary/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-primary/5 text-brand-primary">
                  <th className="p-4 font-bold border-b border-brand-primary/10">프로그램</th>
                  <th className="p-4 font-bold border-b border-brand-primary/10">상세 내용</th>
                  <th className="p-4 font-bold border-b border-brand-primary/10">가격대</th>
                </tr>
              </thead>
              <tbody className="text-brand-primary/80">
                <tr className="hover:bg-brand-bg-soft transition-colors">
                  <td className="p-4 border-b border-brand-primary/5 font-bold">1:1 개인 코칭</td>
                  <td className="p-4 border-b border-brand-primary/5">당신의 아이디어를 실전 결과물로 만드는 밀착 코칭</td>
                  <td className="p-4 border-b border-brand-primary/5 font-medium whitespace-nowrap">18만원 (4회 기준 / 회당 60분)</td>
                </tr>
                <tr className="hover:bg-brand-bg-soft transition-colors">
                  <td className="p-4 border-b border-brand-primary/5 font-bold">기업/기관 워크숍</td>
                  <td className="p-4 border-b border-brand-primary/5">조직에 AI를 이식하는 실습형 교육 및 자동화 컨설팅</td>
                  <td className="p-4 border-b border-brand-primary/5 font-medium whitespace-nowrap">상담 후 결정</td>
                </tr>
                <tr className="hover:bg-brand-bg-soft transition-colors">
                  <td className="p-4 font-bold">실전 MVP 빌딩</td>
                  <td className="p-4">공모전 수상 및 창업 검증을 위한 쾌속 제품 제작</td>
                  <td className="p-4 font-medium whitespace-nowrap">상담 후 결정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How we work */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 pb-2 border-b-2 border-brand-primary/10"
          >
            How we work
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
              <h3 className="font-bold text-brand-accent mb-3">수업 방식</h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                온라인(Zoom/Google Meet) 및 오프라인을 병행하며, 고객의 상황과 목표에 최적화된 하이브리드 방식을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
              <h3 className="font-bold text-brand-base mb-3">협업 도구</h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                Notion, Slack, Github 등을 활용하여 투명하고 효율적으로 프로젝트와 교육 과정을 트래킹합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
              <h3 className="font-bold text-brand-primary mb-3">진행 프로세스</h3>
              <p className="text-brand-primary/70 text-sm leading-relaxed">
                무료 상담 → 니즈 분석 및 제안 → 계약 및 일정 확정 → 밀착 교육/개발 진행 → 결과물 도출 및 피드백
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 pb-2 border-b-2 border-brand-primary/10"
          >
            FAQ
          </motion.h2>
          <div className="space-y-4">
            {[
              { q: "코딩을 전혀 몰라도 수강할 수 있나요?", a: "네, 가능합니다. 바이브 코딩 접근법을 통해 코딩 지식이 없어도 자연어로 AI와 소통하며 결과물을 만드는 방법을 배울 수 있습니다." },
              { q: "기업 맞춤형 교육도 가능한가요?", a: "물론입니다. 각 기업의 도메인과 부서별 특성에 맞춘 실습 중심의 AI 워크숍을 설계하여 제공합니다." },
              { q: "MVP 빌딩은 보통 얼마나 걸리나요?", a: "요구사항의 복잡도에 따라 다르지만, 보통 2주에서 4주 사이에 핵심 기능 검증이 가능한 초기 모델을 완성합니다." },
              { q: "온라인 코칭은 어떻게 진행되나요?", a: "화면 공유를 통해 수강생이 직접 실습하는 과정을 보며 실시간으로 피드백을 드리는 밀착 코칭으로 진행됩니다." },
              { q: "상담 후 계약하지 않아도 되나요?", a: "네, 초기 상담은 무료로 진행되며, 니즈를 명확히 파악하고 방향성을 제시해 드리는 과정이므로 부담 없이 신청하셔도 됩니다." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-brand-primary/5 overflow-hidden">
                <summary className="font-bold cursor-pointer p-6 hover:bg-brand-bg-soft transition-colors list-none flex justify-between items-center">
                  <span>Q. {faq.q}</span>
                  <span className="text-brand-primary/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-brand-primary/80 border-t border-brand-primary/5 mt-2 bg-brand-bg-soft/30">
                  <span className="font-bold text-brand-accent mr-2">A.</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link 
            to="/#contact"
            onClick={() => {
              // Ensure smooth scroll to hash
              setTimeout(() => {
                const element = document.getElementById('contact');
                if(element) element.scrollIntoView({behavior: 'smooth'});
              }, 100);
            }}
          >
            <button className="bg-brand-accent hover:bg-brand-accent/90 hover:-translate-y-1 transition-all cursor-pointer text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl shadow-brand-accent/20">
              상담 신청하기
            </button>
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
