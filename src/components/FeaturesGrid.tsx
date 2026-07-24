import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturesGrid() {
  const services = [
    {
      title: "AI 리터러시 교육",
      description: "조직 구성원 모두가 AI를 이해하고 실무에 활용할 수 있는 역량을 키워드립니다.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      cta: "자세히 보기"
    },
    {
      title: "비즈니스 업무 자동화",
      description: "반복적인 프로세스를 AI 워크플로우로 자동화하여 팀의 생산성을 극대화합니다.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      cta: "자동화 문의"
    },
    {
      title: "데이터 인텔리전스",
      description: "흩어진 데이터를 분석하여 비즈니스 의사결정에 필요한 핵심 인사이트를 추출합니다.",
      image: "/src/assets/images/data_intelligence_dashboard_1784878091258.jpg",
      cta: "분석 상담"
    },
    {
      title: "MVP & PoC 빌더",
      description: "아이디어를 48시간 이내에 실현 가능한 프로토타입으로 제작하여 검증을 도와드립니다.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
      cta: "제작 요청"
    }
  ];

  return (
    <section className="py-24 bg-brand-bg-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">
            우리의 핵심 솔루션
          </h2>
          <p className="text-brand-primary/60 max-w-2xl mx-auto">
            최신 AI 기술을 비즈니스 현장에 즉시 적용할 수 있도록 
            교육부터 솔루션 구축까지 전 과정을 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/5 border border-brand-primary/5 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-primary/70 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 font-bold text-brand-primary group/btn">
                  {service.cta} 
                  <ArrowUpRight size={20} className="text-brand-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 pt-16 border-t border-brand-primary/10">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-brand-primary">1,000+</div>
            <div className="text-brand-base text-sm font-semibold uppercase tracking-wider">AI 교육 수료생</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-brand-primary">50+</div>
            <div className="text-brand-base text-sm font-semibold uppercase tracking-wider">파트너 기업</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-brand-primary">48 hrs</div>
            <div className="text-brand-base text-sm font-semibold uppercase tracking-wider">MVP 제작 및 배포</div>
          </div>
        </div>
      </div>
    </section>
  );
}

