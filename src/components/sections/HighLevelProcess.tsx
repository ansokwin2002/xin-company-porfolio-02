import React, { useState, useEffect, useRef } from 'react';
import { Search, Layers, Palette, FlaskConical, Rocket, ArrowRight, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StepStyles {
  activeBg: string;
  activeBorder: string;
  iconBg: string;
  text: string;
  lightGradient: string;
  shadow: string;
}

interface ProcessStep {
  id: number;
  subtitle: string;
  title: string;
  headerTitle: string;
  icon: React.ElementType;
  description: string;
  styles: StepStyles;
}

const HighLevelProcess: React.FC = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(1);
  const lifecycleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps: ProcessStep[] = [
    {
      id: 1,
      subtitle: `${t('high_level_process.steps_label')} 01`,
      title: t('high_level_process.steps.discovery.title'),
      headerTitle: t('high_level_process.steps.discovery.title'),
      icon: Search,
      description: t('high_level_process.steps.discovery.desc'),
      styles: {
        activeBg: 'bg-blue-50',
        activeBorder: 'border-blue-200',
        iconBg: 'bg-blue-600',
        text: 'text-blue-600',
        lightGradient: 'from-blue-50',
        shadow: 'shadow-blue-200',
      }
    },
    {
      id: 2,
      subtitle: `${t('high_level_process.steps_label')} 02`,
      title: t('high_level_process.steps.prototype.title'),
      headerTitle: t('high_level_process.steps.prototype.title'),
      icon: Layers,
      description: t('high_level_process.steps.prototype.desc'),
      styles: {
        activeBg: 'bg-purple-50',
        activeBorder: 'border-purple-200',
        iconBg: 'bg-purple-600',
        text: 'text-purple-600',
        lightGradient: 'from-purple-50',
        shadow: 'shadow-purple-200',
      }
    },
    {
      id: 3,
      subtitle: `${t('high_level_process.steps_label')} 03`,
      title: t('high_level_process.steps.design.title'),
      headerTitle: t('high_level_process.steps.design.title'),
      icon: Palette,
      description: t('high_level_process.steps.design.desc'),
      styles: {
        activeBg: 'bg-red-50',
        activeBorder: 'border-red-200',
        iconBg: 'bg-red-600',
        text: 'text-red-600',
        lightGradient: 'from-red-50',
        shadow: 'shadow-red-200',
      }
    },
    {
      id: 4,
      subtitle: `${t('high_level_process.steps_label')} 04`,
      title: t('high_level_process.steps.validation.title'),
      headerTitle: t('high_level_process.steps.validation.title'),
      icon: FlaskConical,
      description: t('high_level_process.steps.validation.desc'),
      styles: {
        activeBg: 'bg-orange-50',
        activeBorder: 'border-orange-200',
        iconBg: 'bg-orange-500',
        text: 'text-orange-600',
        lightGradient: 'from-orange-50',
        shadow: 'shadow-orange-200',
      }
    },
    {
      id: 5,
      subtitle: `${t('high_level_process.steps_label')} 05`,
      title: t('high_level_process.steps.launch.title'),
      headerTitle: t('high_level_process.steps.launch.title'),
      icon: Rocket,
      description: t('high_level_process.steps.launch.desc'),
      styles: {
        activeBg: 'bg-green-50',
        activeBorder: 'border-green-200',
        iconBg: 'bg-green-500',
        text: 'text-green-600',
        lightGradient: 'from-green-50',
        shadow: 'shadow-green-200',
      }
    }
  ];

  const activeTheme = steps[activeStep - 1].styles;

  // --- LOGIC: TRIGGER ONLY ONCE ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve ensures it doesn't pop up again when scrolling back
          if (lifecycleRef.current) observer.unobserve(lifecycleRef.current);
        }
      }, 
      { threshold: 0.1 }
    );

    if (lifecycleRef.current) observer.observe(lifecycleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <section 
        ref={lifecycleRef}
        className={`py-20 font-sans overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t('high_level_process.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('high_level_process.title_highlight')}</span>
            </h2>
          </div>

          {/* Progress Timeline Bar */}
          <div className="relative mb-16 px-4 hidden md:block">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-100 rounded-full -translate-y-1/2"></div>
            <div 
              className={`absolute top-1/2 left-0 h-2 rounded-full -translate-y-1/2 transition-all duration-700 ease-in-out ${activeTheme.iconBg}`}
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
            <div className="relative z-10 flex justify-between w-full">
              {steps.map((step) => (
                <div key={step.id} onMouseEnter={() => setActiveStep(step.id)} className="flex flex-col items-center cursor-pointer">
                  <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center bg-white transition-all duration-300
                    ${step.id <= activeStep ? step.styles.activeBorder : 'border-gray-200'}`}
                  >
                    {step.id <= activeStep && <div className={`w-3 h-3 rounded-full ${step.styles.iconBg}`}></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Selection */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border group relative overflow-hidden
                      ${isActive 
                        ? `${step.styles.activeBg} ${step.styles.activeBorder} shadow-md translate-x-2` 
                        : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                          ${step.styles.iconBg} 
                          ${isActive 
                            ? 'text-white shadow-lg opacity-100 scale-110' 
                            : 'text-white opacity-60 group-hover:opacity-100 group-hover:scale-105'
                          }
                        `}>
                          <step.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                        </div>

                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider block mb-1 transition-colors duration-300 ${isActive ? step.styles.text : 'text-gray-400'}`}>
                            {step.subtitle}
                          </span>
                          <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight 
                        size={20} 
                        className={`transition-all duration-300 ${
                          isActive 
                            ? step.styles.text 
                            : 'text-gray-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detail Box */}
            <div className="lg:col-span-7">
              <div className={`h-full bg-white rounded-3xl border p-8 md:p-12 relative overflow-hidden transition-all duration-500 ${activeTheme.activeBorder}`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${activeTheme.lightGradient} to-transparent rounded-bl-full -z-0 opacity-50 pointer-events-none`}></div>
                <div className="absolute top-10 right-10 text-9xl font-black text-gray-100 select-none pointer-events-none opacity-40">
                  0{activeStep}
                </div>

                <div key={activeStep} className="relative z-10 animate-stepEnter">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transform transition-all duration-500 ${activeTheme.iconBg} ${activeTheme.shadow} shadow-lg`}>
                    {React.createElement(steps[activeStep - 1].icon, { size: 36, className: "text-white" })}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <span className={`font-bold text-lg ${activeTheme.text}`}>Step 0{activeStep}</span>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{steps[activeStep - 1].headerTitle}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">{steps[activeStep - 1].description}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-1">
                      {steps.map((s) => (
                        <div key={s.id} className={`h-1.5 w-6 rounded-full transition-all duration-500 ${s.id === activeStep ? s.styles.iconBg : 'bg-gray-100'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 font-medium">0{activeStep} / 05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes stepEnter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-stepEnter { animation: stepEnter 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default HighLevelProcess;