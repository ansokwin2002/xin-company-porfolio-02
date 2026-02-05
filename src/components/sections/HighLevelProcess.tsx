import React, { useState, useEffect, useRef } from 'react';
import { Search, Layers, Palette, FlaskConical, Rocket, ArrowRight, Heart } from 'lucide-react';

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
  const [activeStep, setActiveStep] = useState<number>(1);
  const lifecycleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps: ProcessStep[] = [
    {
      id: 1,
      subtitle: 'Step 01',
      title: 'UX Discovery & Research',
      headerTitle: 'UX Discovery & Research',
      icon: Search,
      description: 'UX Discovery & Research involves understanding project goals and user needs through interviews and analysis of consumer behavior. This process ensures a user-centric approach.',
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
      subtitle: 'Step 02',
      title: 'UX Prototype',
      headerTitle: 'UX Prototype',
      icon: Layers,
      description: 'Creating interactive representations of the product to test and refine design concepts and user flow. By incorporating user feedback, prototypes help validate design decisions.',
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
      subtitle: 'Step 03',
      title: 'UI Design Concept',
      headerTitle: 'UI Design Concept',
      icon: Palette,
      description: 'Creating visual elements and layouts for digital interfaces, focusing on usability and maintaining brand consistency to enhance the overall user experience.',
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
      subtitle: 'Step 04',
      title: 'Validation & Testing',
      headerTitle: 'Validation & Testing',
      icon: FlaskConical,
      description: 'Analyzing design solutions via usability testing, A/B testing, and heuristic evaluations to ensure the product meets quality standards and user expectations.',
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
      subtitle: 'Step 05',
      title: 'Launch',
      headerTitle: 'Launch',
      icon: Rocket,
      description: 'Implementing the completed concept into practice and monitoring performance post-launch to ensure a smooth transition and long-term success.',
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

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (lifecycleRef.current) observer.observe(lifecycleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <section 
        ref={lifecycleRef}
        className={`py-20 bg-white font-sans overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What is our <span className="text-blue-600">High-level Process?</span>
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
            {/* Left Selection - Fixed Colors */}
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
                        
                        {/* ICON BOX: Always colored, opacity changes on hover/active */}
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

      {/* Love Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#1a1a1a] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white/5 shadow-2xl">
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60 bg-black rounded-[32px] flex items-center justify-center relative overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="absolute w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
                   <Heart size={90} className="text-red-500 fill-red-600 z-10 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Let's make people <br/><span className="text-blue-500">fall in love</span></h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl">Tell us about your app idea, and our team will work with you to create something amazing that your users will absolutely love.</p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-2 mx-auto md:mx-0 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                <span className="text-xl">Let's Talk</span> <ArrowRight />
              </button>
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