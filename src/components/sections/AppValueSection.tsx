import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ValuePropositionSection from './ValuePropositionSection';

const AppValueSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef2 = useRef<HTMLElement>(null);
  const [isVisible2, setIsVisible2] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef2.current) {
      observer2.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer2.unobserve(sectionRef2.current);
      }
    };
  }, []);

  return (
    <div className="font-sans">
      {/* SECTION 2: CTA (Black Background) */}
      <section 
        ref={sectionRef2} 
        key={i18n.language}
        className={`bg-black py-20 px-4 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#2A2A2A] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
            
            {/* Glowing Heart Graphic */}
            <div className="flex-shrink-0 relative">
               <div className="w-40 h-40 bg-black rounded-2xl flex items-center justify-center shadow-inner border border-gray-800">
                  {/* Layered Hearts for Glow Effect */}
                  <Heart size={80} fill="#EF4444" className="text-red-500 absolute z-10 animate-pulse" />
                  <Heart size={80} className="text-red-500 absolute z-0 blur-lg opacity-80" />
                  <Heart size={100} className="text-red-600 absolute z-0 blur-xl opacity-50" />
               </div>
            </div>

            {/* CTA Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {t('app_value.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('app_value.title_highlight')} <br className="hidden md:block"/> {t('app_value.title_with')}</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                {t('app_value.desc')}
              </p>

              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-6 py-2.5 text-sm font-medium text-white rounded-xl bg-gradient-blue shadow-button hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} fill="white" className="bg-gradient-blue bg-clip-text text-transparent" />
                <span>{t('app_value.cta_button')}</span>
                <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AppValueSection;