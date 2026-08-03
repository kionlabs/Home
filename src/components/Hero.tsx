import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 bg-brand-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-brand-primary">
            AI를 배우고, 우리 일에 맞게 만들며, <br/>
            <span className="text-brand-base">함께 성장하세요.</span>
          </h1>
          <p className="text-lg text-brand-primary/70 mb-8 max-w-lg leading-relaxed">
            비즈니스에 최적화된 AI 솔루션과 교육을 통해 
            조직의 생산성을 극대화하고 미래 경쟁력을 확보하세요.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-accent hover:bg-brand-accent/80 hover:opacity-90 cursor-pointer transition-colors text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-brand-accent/20 hover:brightness-110">
              무료 상담 신청하기
            </button>
            <Link to="/guide">
              <button className="bg-white border border-brand-base/20 hover:border-brand-base/40 cursor-pointer text-brand-primary px-8 py-4 rounded-full text-lg font-bold transition-all">
                서비스 가이드
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/images/office_collaboration_1784873599989.jpg" 
              alt="Team collaborating in office" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 bg-brand-base text-white px-4 py-2 rounded-lg shadow-xl font-medium text-sm"
          >
            비즈니스 자동화
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 right-10 bg-brand-accent text-white px-4 py-2 rounded-lg shadow-xl font-medium text-sm"
          >
            맞춤형 실무 AI 교육
          </motion.div>
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-4 bg-brand-primary text-white px-4 py-2 rounded-lg shadow-xl font-medium text-sm"
          >
            데이터 인텔리전스
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-20 bg-brand-base text-white px-6 py-3 rounded-lg shadow-xl font-medium"
          >
            공모전/창업 빌드업
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[120px] text-white fill-current"
        >
          <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
