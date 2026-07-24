import { ArrowRight } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      id: 1,
      title: "상담 및 진단",
      desc: "온라인 상담으로 현업의 병목 구간과 학습 니즈를 진단합니다."
    },
    {
      id: 2,
      title: "실전 빌드업",
      desc: "'바이브 코딩'을 통한 솔루션 구현 및 맞춤형 프로젝트를 빌드합니다."
    },
    {
      id: 3,
      title: "실행 및 성장",
      desc: "실제 환경에 배포하고, 지속 가능한 성장 엔진을 성공적으로 안착시킵니다."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            3단계로 시작하는<br />KION Labs의 여정
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Styled Image Container */}
          <div className="relative bg-[#f3f0ff] rounded-[3rem] p-12 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-[2rem] overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="KION Consultation" 
                  className="w-full h-80 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Labels */}
              <div className="absolute top-10 -left-10 bg-[#22c55e] text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                AI Consultation
              </div>
              <div className="absolute bottom-10 -right-10 bg-[#fbbf24] text-brand-primary px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                Custom Build-up
              </div>
            </div>
          </div>

          {/* Right Side: Step Cards */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="bg-[#f8f9fa] p-8 rounded-[2rem] flex items-start gap-6 group hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 transition-all border border-transparent hover:border-brand-primary/5"
              >
                <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-primary">{step.title}</h3>
                  <p className="text-brand-primary/50 text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                  {step.id === 3 && (
                    <button className="mt-6 flex items-center gap-2 bg-white border border-gray-100 px-6 py-2 rounded-full text-sm font-bold text-brand-primary hover:border-brand-accent transition-all group/btn">
                      무료 상담 신청 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
