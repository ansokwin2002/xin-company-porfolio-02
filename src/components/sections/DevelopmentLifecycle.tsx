import React, { useState, useEffect } from 'react';
import { Search, Layers, Palette, FlaskConical, Rocket, ArrowRight } from 'lucide-react';

interface StepStyles {
  activeBg: string;
  activeBorder: string;
  iconBg: string;
  text: string;
  shadow: string;
  lightGradient: string;
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

const DevelopmentLifecycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const steps: ProcessStep[] = [
    {
      id: 1,
      subtitle: 'Step 01',
      title: 'UX Discovery & Research',
      headerTitle: 'UX Discovery & Research',
      icon: Search,
      description: 'Understanding project goals and user needs through interviews and analysis of consumer behavior.',
      styles: {
        activeBg: 'bg-blue-50',
        activeBorder: 'border-blue-400',
        iconBg: 'bg-blue-500',
        text: 'text-blue-600',
        shadow: 'shadow-blue-200',
        lightGradient: 'from-blue-50',
      }
    },
    {
      id: 2,
      subtitle: 'Step 02',
      title: 'UX Prototype',
      headerTitle: 'UX Prototype',
      icon: Layers,
      description: 'Creating interactive representations of the product to test and refine design concepts and user flow.',
      styles: {
        activeBg: 'bg-purple-50',
        activeBorder: 'border-purple-400',
        iconBg: 'bg-purple-600',
        text: 'text-purple-600',
        shadow: 'shadow-purple-200',
        lightGradient: 'from-purple-50',
      }
    },
    {
      id: 3,
      subtitle: 'Step 03',
      title: 'UI Design Concept',
      headerTitle: 'UI Design Concept',
      icon: Palette,
      description: 'Creating visual elements and layouts for digital interfaces, focusing on usability and brand consistency.',
      styles: {
        activeBg: 'bg-rose-50',
        activeBorder: 'border-rose-400',
        iconBg: 'bg-rose-500',
        text: 'text-rose-600',
        shadow: 'shadow-rose-200',
        lightGradient: 'from-rose-50',
      }
    },
    {
      id: 4,
      subtitle: 'Step 04',
      title: 'Validation & Testing',
      headerTitle: 'Validation & Testing',
      icon: FlaskConical,
      description: 'Usability testing, A/B testing, and heuristic evaluations to gather user feedback for improvement.',
      styles: {
        activeBg: 'bg-orange-50',
        activeBorder: 'border-orange-400',
        iconBg: 'bg-orange-500',
        text: 'text-orange-600',
        shadow: 'shadow-orange-200',
        lightGradient: 'from-orange-50',
      }
    },
    {
      id: 5,
      subtitle: 'Step 05',
      title: 'Launch',
      headerTitle: 'Launch',
      icon: Rocket,
      description: 'Implementing the completed concept into practice and monitoring performance after launch.',
      styles: {
        activeBg: 'bg-green-50',
        activeBorder: 'border-green-400',
        iconBg: 'bg-green-500',
        text: 'text-green-600',
        shadow: 'shadow-green-200',
        lightGradient: 'from-green-50',
      }
    },
  ];

  const activeTheme = steps[activeStep - 1].styles;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-24 bg-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our <span className="text-blue-500">Design Lifecycle</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A battle-tested methodology for creating products that users love.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vertical Menu with Hanging Numbers */}
          <div className="lg:col-span-5 flex flex-col gap-8 pt-4">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div key={step.id} className="relative pl-4">
                  {/* HANGING NUMBER BADGE */}
                  <div className={`
                    absolute -top-4 -left-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-20 transition-all duration-300
                    ${isActive ? `${step.styles.iconBg} text-white` : 'bg-gray-100 text-gray-400'}
                  `}>
                    {step.id}
                  </div>

                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border bg-white
                      ${isActive 
                        ? `${step.styles.activeBorder} ${step.styles.activeBg} shadow-xl translate-x-2` 
                        : 'border-gray-100 hover:border-gray-200 shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${isActive ? 'bg-white shadow-sm' : 'bg-gray-50'} ${step.styles.text}`}>
                          <step.icon size={22} />
                        </div>
                        <div>
                          <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight size={18} className={`transition-all ${isActive ? step.styles.text : 'opacity-0'}`} />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Display Card */}
          <div className="lg:col-span-7 sticky top-24">
            <div className={`h-full bg-white rounded-[2.5rem] border p-10 md:p-14 relative overflow-hidden transition-all duration-500
              ${activeTheme.activeBorder} ${activeTheme.shadow.replace('shadow-', 'shadow-lg shadow-')}
            `}>
              {/* Decoration */}
              <div className={`absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br ${activeTheme.lightGradient} to-transparent rounded-full opacity-40`}></div>
              
              <div key={activeStep} className="relative z-10 animate-fadeInUp">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${activeTheme.iconBg} shadow-lg shadow-current/20 text-white`}>
                  <activeTheme.iconBg /> {/* This is just a placeholder logic; react.createElement is safer */}
                  {React.createElement(steps[activeStep - 1].icon, { size: 36 })}
                </div>

                <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                  {steps[activeStep - 1].headerTitle}
                </h3>

                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  {steps[activeStep - 1].description}
                </p>

                <div className="flex items-center gap-2">
                   {[1,2,3,4,5].map(dot => (
                     <div key={dot} className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === dot ? `w-8 ${activeTheme.iconBg}` : 'w-2 bg-gray-200'}`} />
                   ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default DevelopmentLifecycle;