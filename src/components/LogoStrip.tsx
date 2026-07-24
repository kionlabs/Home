import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Rocket, Clock, Star, TrendingUp } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: number;
  suffix?: string;
  delay?: number;
}

function StatCard({ icon, title, description, value, suffix = "", delay = 0 }: StatCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-primary/5 border border-brand-primary/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl font-bold text-brand-primary mb-2 flex items-baseline gap-1">
        <motion.span>{rounded}</motion.span>
        <span className="text-xl font-semibold text-brand-accent">{suffix}</span>
      </div>
      <h3 className="text-lg font-bold text-brand-primary mb-2">{title}</h3>
      <p className="text-brand-primary/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function LogoStrip() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-brand-base uppercase tracking-widest mb-4">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            데이터로 증명하는 KION Labs의 성장
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<Rocket size={24} />}
            title="실무 프로젝트 50+"
            description="다양한 산업군에서 검증된 완성도 높은 실전 AI 프로젝트"
            value={50}
            suffix="+"
            delay={0.1}
          />
          <StatCard 
            icon={<Clock size={24} />}
            title="업무 시간 80% 절감"
            description="복잡한 수작업을 자동화하여 업무 효율의 혁신을 경험하세요"
            value={80}
            suffix="%"
            delay={0.2}
          />
          <StatCard 
            icon={<Star size={24} />}
            title="만족도 98%"
            description="교육생 및 기업 고객들의 높은 신뢰와 긍정적인 피드백"
            value={98}
            suffix="%"
            delay={0.3}
          />
          <StatCard 
            icon={<TrendingUp size={24} />}
            title="성장 엔진 런칭"
            description="단순 기술 도입을 넘어 시장 진입과 스케일업을 지원합니다"
            value={100}
            suffix="+"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

