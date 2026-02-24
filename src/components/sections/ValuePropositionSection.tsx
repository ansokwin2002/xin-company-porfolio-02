import React, { useRef, useEffect, useState } from 'react';
import { Tag, Rocket, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ValuePropositionSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef1 = useRef<HTMLElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible1(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef1.current) observer1.observe(sectionRef1.current);
    return () => observer1.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef1}
      key={i18n.language}
      className={`bg-white py-20 lg:py-28 overflow-hidden transition-all duration-1000 ${
        isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              {t('value_proposition.title_main')} <br />
              <span className="bg-gradient-blue bg-clip-text text-transparent">{t('value_proposition.title_highlight')}</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {t('value_proposition.desc')}
            </p>

            <div className="border-l-4 border-blue-500 pl-6 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {t('value_proposition.simpler_title')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('value_proposition.simpler_highlight')}</span>
              </h3>
            </div>

            {/* Stats Grid - Colorful Style */}
            <div className="grid grid-cols-3 gap-6">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Tag size={30} className="transform -rotate-45" strokeWidth={1.5} />
                </div>
                <span className="text-2xl font-black text-gray-900">35%</span>
                <span className="text-sm text-gray-500 font-medium">{t('value_proposition.stats.savings')}</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Rocket size={30} strokeWidth={1.5} />
                </div>
                <span className="text-2xl font-black text-gray-900">2x</span>
                <span className="text-sm text-gray-500 font-medium">{t('value_proposition.stats.delivery')}</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Headphones size={30} strokeWidth={1.5} />
                </div>
                <span className="text-2xl font-black text-gray-900">24/7</span>
                <span className="text-sm text-gray-500 font-medium">{t('value_proposition.stats.support')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image Asset */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            
            <div className={`transition-all duration-1000 delay-500 transform ${isVisible1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <img 
                src="/assets/images/p11.png" 
                alt="Value Proposition Illustration" 
                className="w-full max-w-lg h-auto drop-shadow-2xl hover:translate-y-[-10px] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;