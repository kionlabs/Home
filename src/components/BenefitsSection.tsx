import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BenefitsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            개인부터 학교, 공모전까지.<br />당신의 성장을 함께합니다.
          </h2>
        </div>

        {/* Section 1: Education (Text Left, Dual Image Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-40">
          <div className="lg:pr-20">
            <h4 className="text-brand-accent font-bold text-xl md:text-2xl mb-2">
              Culture and performance.
            </h4>
            <h3 className="text-brand-primary font-bold text-3xl md:text-4xl mb-6">
              [교육 및 출강]
            </h3>
            <p className="text-gray-500 mb-10 leading-relaxed text-base md:text-lg max-w-md">
              학교 정규 커리큘럼부터 개인 맞춤형 클래스까지, 실무 현장의 언어를 학습하세요. 
              단순히 도구를 배우는 것을 넘어 문제를 해결하는 사고력을 길러드립니다.
            </p>
            <button className="flex items-center gap-3 bg-white border border-gray-200 px-8 py-3 rounded-full font-bold text-brand-primary hover:border-brand-accent transition-all shadow-sm group">
              상담 및 신청 <ArrowRight size={18} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative bg-[#fffbf2] rounded-[3rem] p-10 md:p-16 flex items-center justify-center">
            <div className="flex gap-4 items-center">
              <div className="w-1/2 -translate-y-6">
                <img 
                  src="/src/assets/images/education_workshop_kion_1784879916834.jpg" 
                  alt="Education" 
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="w-1/2 translate-y-6">
                <img 
                  src="/src/assets/images/online_lecture_kion_1784880199548.jpg" 
                  alt="Online Lecture" 
                  className="rounded-2xl shadow-xl w-full h-80 object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Startup (Single Image Left, Text Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative bg-[#f6f2ff] rounded-[3rem] p-10 md:p-16 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="/src/assets/images/startup_building_kion_3_1784879947132.jpg" 
                  alt="Startup" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Decorative floating labels like in reference */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-1/4 -right-6 bg-brand-primary text-white px-4 py-2 rounded-xl shadow-xl font-bold text-sm"
              >
                MVP Building
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute bottom-16 -left-6 bg-brand-accent text-white px-4 py-2 rounded-xl shadow-xl font-bold text-sm flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Idea Mapping
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-20">
            <h4 className="text-brand-base font-bold text-xl md:text-2xl mb-2">
              Just faster.
            </h4>
            <h3 className="text-brand-primary font-bold text-3xl md:text-4xl mb-6">
              [공모전 및 창업 빌딩]
            </h3>
            <p className="text-gray-500 mb-10 leading-relaxed text-base md:text-lg max-w-md">
              아이디어 기획부터 MVP 제작, 수상 전략까지. 당신의 프로젝트를 성공으로 이끄는 실무 가이드를 제공합니다. 
              시행착오를 줄이고 결과로 증명하는 빌딩 프로세스를 경험하세요.
            </p>
            <button className="flex items-center gap-3 bg-white border border-gray-200 px-8 py-3 rounded-full font-bold text-brand-primary hover:border-brand-accent transition-all shadow-sm group">
              가이드 보기 <ArrowRight size={18} className="text-brand-primary group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
