import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    category: "Business Automation",
    title: "업무 자동화로 생산성 300% 향상",
    description: "반복적인 업무를 AI 워크플로우로 자동화하여 팀원들이 더 창의적인 일에 집중할 수 있는 환경을 구축한 성공 사례입니다.",
    image: "/assets/images/business_automation_team_1784881064214.jpg",
    cta: "솔루션 자세히 보기"
  },
  {
    category: "AI Education",
    title: "현장 중심의 AI 리터러시 교육",
    description: "학교 정규 커리큘럼부터 기업 맞춤형 출강까지, 실무 데이터를 활용한 살아있는 교육으로 AI 활용 역량을 극대화합니다.",
    image: "/assets/images/ai_education_classroom_1784881085253.jpg",
    cta: "교육 프로그램 보기"
  },
  {
    category: "Startup Building",
    title: "아이디어에서 실전 MVP 빌딩까지",
    description: "기획에만 머물러 있던 아이디어를 48시간 이내에 실질적인 결과물로 구현하여 시장의 반응을 확인하고 성장 동력을 확보합니다.",
    image: "/assets/images/mvp_building_hackathon_1784881100542.jpg",
    cta: "빌딩 가이드 보기"
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-brand-bg-soft/50 text-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-primary leading-tight">
            당신의 아이디어를 실전 가능한 결과물로,<br />KION Labs가 함께합니다.
          </h2>
          <p className="text-brand-primary/60 max-w-3xl mx-auto text-lg">
            AI 리터러시 교육부터 자동화 솔루션, 실전 MVP 빌딩까지.<br />
            당신의 비즈니스와 성장을 가속화하세요.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-primary/10 border border-brand-primary/5 min-h-[500px] relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 h-full"
            >
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-brand-accent font-bold uppercase tracking-[0.2em] text-sm mb-6"
                >
                  {slides[current].category}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-8 text-brand-primary leading-tight"
                >
                  {slides[current].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-brand-primary/70 mb-10 leading-relaxed max-w-md"
                >
                  {slides[current].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-brand-accent/20">
                    {slides[current].cta} <ArrowRight size={20} />
                  </button>
                </motion.div>
              </div>
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <motion.img 
                  key={slides[current].image}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src={slides[current].image} 
                  alt={slides[current].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button 
            onClick={prev}
            className="p-4 rounded-full border border-brand-primary/10 hover:bg-brand-primary hover:text-white transition-all text-brand-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-brand-accent' : 'w-2 bg-brand-primary/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="p-4 rounded-full border border-brand-primary/10 hover:bg-brand-primary hover:text-white transition-all text-brand-primary"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
