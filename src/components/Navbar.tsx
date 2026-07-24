import { useState } from 'react';
import { ChevronDown, Menu, X, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const menuItems = [
  {
    title: "솔루션",
    items: ["AI 교육", "업무 자동화", "데이터 분석", "MVP 빌딩"]
  },
  {
    title: "프로그램",
    items: ["학교/기관 출강", "1:1 맞춤 클래스", "공모전/창업 빌드업"]
  },
  {
    title: "성공 사례",
    link: "#"
  },
  {
    title: "KION Labs",
    link: "#"
  }
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg-soft/90 backdrop-blur-md border-b border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-12">
          <div className="text-2xl md:text-3xl font-bold tracking-tighter text-brand-primary cursor-pointer">
            KION
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((menu) => (
              <div 
                key={menu.title} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors py-2">
                  {menu.title}
                  {menu.items && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === menu.title ? 'rotate-180' : ''}`} />}
                </button>

                <AnimatePresence>
                  {menu.items && activeDropdown === menu.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-48 bg-white shadow-2xl rounded-xl py-4 border border-brand-primary/5 mt-1"
                    >
                      {menu.items.map((item) => (
                        <a 
                          key={item} 
                          href="#" 
                          className="block px-6 py-2.5 text-sm text-brand-primary/80 hover:text-brand-accent hover:bg-brand-bg-soft transition-all"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop CTA and Lang */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-brand-primary/60 border-r border-brand-primary/10 pr-6 mr-2">
            <Search size={20} className="cursor-pointer hover:text-brand-primary transition-colors" />
            <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-brand-primary transition-colors">
              <Globe size={16} /> KR
            </div>
          </div>
          <button className="bg-brand-accent hover:bg-brand-accent/90 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-accent/20 transition-all hover:scale-105">
            무료 상담 신청
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-primary/5 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {menuItems.map((menu) => (
                <div key={menu.title} className="space-y-3">
                  <div className="text-sm font-bold text-brand-primary uppercase tracking-widest opacity-40">
                    {menu.title}
                  </div>
                  {menu.items ? (
                    <div className="grid grid-cols-2 gap-y-3">
                      {menu.items.map((item) => (
                        <a key={item} href="#" className="text-base font-bold text-brand-primary hover:text-brand-accent">
                          {item}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href="#" className="block text-lg font-bold text-brand-primary hover:text-brand-accent">
                      {menu.title}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-brand-primary/5">
                <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-accent/20">
                  무료 상담 신청
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
