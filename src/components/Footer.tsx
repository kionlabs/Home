import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Final CTA */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Work easy.<br/>Grow further with KION.
          </h2>
          <button className="bg-brand-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all">
            지금 바로 가이드 신청하기
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 border-t border-white/10 pt-16 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="text-3xl font-bold mb-6 text-white tracking-tighter">KION</div>
            <p className="text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              AI 리터러시 교육부터 실전 솔루션 구축까지, 
              KION Labs는 당신의 비즈니스 성장을 위한 최고의 파트너입니다.
            </p>
            <div className="flex gap-4">
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"><Twitter size={18} /></button>
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"><Facebook size={18} /></button>
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"><Instagram size={18} /></button>
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"><Linkedin size={18} /></button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[솔루션]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">AI 교육</a></li>
              <li><a href="#" className="hover:text-white transition-colors">업무 자동화</a></li>
              <li><a href="#" className="hover:text-white transition-colors">데이터 분석</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MVP 빌딩</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[프로그램]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">학교/기관 출강</a></li>
              <li><a href="#" className="hover:text-white transition-colors">1:1 클래스</a></li>
              <li><a href="#" className="hover:text-white transition-colors">공모전/창업 빌드업</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[회사 소개]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">KION Labs 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">성공 사례</a></li>
              <li><a href="#" className="hover:text-white transition-colors">파트너십</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[문의/지원]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
              <li><a href="#" className="hover:text-white transition-colors">상담 문의</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문(FAQ)</a></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center py-12 border-t border-white/10">
          <div>
            <h4 className="font-bold mb-4 text-white text-lg">비즈니스 및 교육 상담</h4>
            <div className="flex flex-col md:flex-row gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-brand-accent font-bold">Email:</span> kionlabs@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-accent font-bold">Tel:</span> 010-5608-8008
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 gap-6">
          <div>© 2024 KION Labs. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
