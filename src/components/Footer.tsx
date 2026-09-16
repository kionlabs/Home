import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Final CTA */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            일은 더 쉽게, 성장은 더 빠르게.<br />
            KION Labs와 함께 시작하세요.
          </h2>
          <Link
            to="/#contact"
            onClick={() => {
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            <button className="bg-brand-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-brand-accent/20">
              지금 바로 가이드 신청하기
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 border-t border-white/10 pt-16 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="text-3xl font-extrabold mb-6 text-white tracking-tighter cursor-pointer hover:opacity-80 transition-opacity inline-block">
              KION Labs
            </Link>
            <p className="text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              AI 리터러시 교육부터 실전 솔루션 구축까지, 
              KION Labs는 당신의 비즈니스 성장을 위한 최고의 파트너입니다.
            </p>
            <div className="flex gap-4">
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"><Twitter size={18} /></button>
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"><Facebook size={18} /></button>
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"><Instagram size={18} /></button>
              <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"><Linkedin size={18} /></button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[솔루션]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/guide" className="hover:text-white transition-colors cursor-pointer">AI 교육</Link></li>
              <li><Link to="/guide/automation" className="hover:text-white transition-colors cursor-pointer">업무 자동화</Link></li>
              <li><Link to="/guide" className="hover:text-white transition-colors cursor-pointer">데이터 분석</Link></li>
              <li><Link to="/guide/mvp" className="hover:text-white transition-colors cursor-pointer">MVP 빌딩</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[프로그램]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/courses/step1" className="hover:text-white transition-colors cursor-pointer">실전 첫걸음</Link></li>
              <li><Link to="/guide/automation" className="hover:text-white transition-colors cursor-pointer">업무 자동화</Link></li>
              <li><Link to="/guide/fullpackage" className="hover:text-white transition-colors cursor-pointer">풀패키지</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[회사 소개]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors cursor-pointer">KION Labs 소개</Link></li>
              <li><Link to="/guide" className="hover:text-white transition-colors cursor-pointer">서비스 가이드</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors cursor-pointer">파트너십</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">[문의/지원]</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/guide/support" className="hover:text-white transition-colors cursor-pointer">AI 정착 지원</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors cursor-pointer">상담 문의</Link></li>
              <li><Link to="/guide" className="hover:text-white transition-colors cursor-pointer">자주 묻는 질문(FAQ)</Link></li>
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
            <Link to="/privacy" className="hover:text-white transition-colors cursor-pointer">개인정보처리방침</Link>
            <Link to="/terms" className="hover:text-white transition-colors cursor-pointer">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
