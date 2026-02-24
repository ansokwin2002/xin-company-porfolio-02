import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CoreValue {
  id: number;
  title: string;
  image: string; 
  description: string;
}

const CoreValues: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const values: CoreValue[] = [
    {
      id: 1,
      title: t('core_values.values.achievement.title'),
      image: '/assets/images/p6.png', 
      description: t('core_values.values.achievement.desc'),
    },
    {
      id: 2,
      title: t('core_values.values.customer.title'),
      image: '/assets/images/p7.png',
      description: t('core_values.values.customer.desc'),
    },
    {
      id: 3,
      title: t('core_values.values.teamwork.title'),
      image: '/assets/images/p8.png',
      description: t('core_values.values.teamwork.desc'),
    },
    {
      id: 4,
      title: t('core_values.values.ownership.title'),
      image: '/assets/images/p9.png',
      description: t('core_values.values.ownership.desc'),
    },
    {
      id: 5,
      title: t('core_values.values.strategic.title'),
      image: '/assets/images/p10.png',
      description: t('core_values.values.strategic.desc'),
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      key={i18n.language}
      className={`py-24 bg-white font-sans overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {t('core_values.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('core_values.title_highlight')}</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            {t('core_values.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Menu */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {values.map((val) => {
              const isActive = activeStep === val.id;
              return (
                <button
                  key={val.id}
                  onMouseEnter={() => setActiveStep(val.id)}
                  onClick={() => setActiveStep(val.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border group relative 
                    ${isActive 
                      ? `bg-gradient-blue border-blue-500 shadow-xl translate-x-2` 
                      : 'bg-white border-gray-100 hover:border-gray-200'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all 
                        ${isActive ? 'bg-white/20 text-white' : 'bg-gradient-blue text-white'}
                      `}>
                        {val.id < 10 ? `0${val.id}` : val.id}
                      </div>
                      <h3 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-gray-800'}`}>
                        {val.title}
                      </h3>
                    </div>
                    <ArrowRight size={20} className={`transition-all ${isActive ? 'text-white translate-x-1' : 'opacity-0'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Display Card */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white border border-blue-100 rounded-[2rem] p-6 md:p-14 relative overflow-hidden shadow-2xl transition-all duration-500">
              
              <div key={activeStep} className="relative z-10 animate-fadeIn">
                
                {/* Container: Row layout preserved on all screens */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  
                  {/* 3D Illustration: Slightly smaller on mobile to make room */}
                  <div className="flex-shrink-0">
                    <img 
                      src={values[activeStep - 1].image} 
                      alt={values[activeStep - 1].title} 
                      className="w-24 h-24 md:w-44 md:h-44 object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Giant Number: Reduced size on mobile to prevent overlap */}
                  <div className="text-[5rem] sm:text-[7rem] md:text-[10rem] font-black text-gray-100/60 select-none leading-[0.8] pointer-events-none">
                    0{activeStep}
                  </div>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                  {values[activeStep - 1].title}
                </h3>

                <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-lg">
                  {values[activeStep - 1].description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;