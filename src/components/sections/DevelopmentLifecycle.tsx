import React, { useState, useEffect, useRef } from 'react';
import { Search, Layers, ArrowRight, Rocket, CheckCircle2 } from 'lucide-react';

interface StepStyles {
  listActiveBg: string;
  listActiveBorder: string;
  listIconBg: string;
  listText: string;
  cardGradient: string;
  cardText: string;
  cardTextSecondary: string;
  cardIconBg: string;
  cardBorder: string;
}

interface ProcessStep {
  id: number;
  subtitle: string;
  title: string;
  headerTitle: string;
  icon: React.ElementType;
  description: string;
  points: string[];
  styles: StepStyles;
}

const DevelopmentLifecycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const lifecycleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps: ProcessStep[] = [
    {
      id: 1,
      subtitle: 'Step 01',
      title: 'Research & Development',
      headerTitle: 'Research & Development',
      icon: Search,
      description: 'We carry out a thorough research and development process to deliver an app that not only meets your goals but gives you a competitive edge. Our expert team takes the time to deeply understand your business, ensuring every feature is aligned with your market, your users, and your growth.',
      points: [
        'Market & competitor analysis',
        'Technical feasibility study',
        'User research & interviews',
        'Project roadmap creation'
      ],
      styles: {
        listActiveBg: 'bg-blue-50',
        listActiveBorder: 'border-blue-200',
        listIconBg: 'bg-[#1e40af]',
        listText: 'text-[#1e40af]',
        cardGradient: 'bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6]',
        cardText: 'text-white',
        cardTextSecondary: 'text-blue-100/90',
        cardIconBg: 'bg-white/10',
        cardBorder: 'border-blue-400/20',
      }
    },
    {
      id: 2,
      subtitle: 'Step 02',
      title: 'Design & Validation',
      headerTitle: 'Design & Validation',
      icon: Layers,
      description: 'We begin with a full UX analysis, then move into structured UX design. Once the experience is mapped out, we validate it with real users to gather insights and identify improvements. After that, we create the UI design and conduct another round of user validation to ensure the final interface is intuitive, engaging, and aligned with user expectations.',
      points: [
        'UX wireframing & prototyping',
        'User testing & feedback',
        'UI design & branding',
        'Design system creation'
      ],
      styles: {
        listActiveBg: 'bg-red-50',
        listActiveBorder: 'border-red-200',
        listIconBg: 'bg-[#bd0b20]',
        listText: 'text-[#bd0b20]',
        cardGradient: 'bg-gradient-to-br from-[#bd0b20] to-[#fa375a]',
        cardText: 'text-white',
        cardTextSecondary: 'text-white/90',
        cardIconBg: 'bg-white/20',
        cardBorder: 'border-red-400/30',
      }
    },
    {
      id: 3,
      subtitle: 'Step 03',
      title: 'Development & Launch',
      headerTitle: 'Development & Launch',
      icon: Rocket,
      description: 'We follow a professional, agile Scrum-based process and keep you updated every week to ensure full alignment and product success. Before launch, we conduct a complete testing cycle to guarantee performance, stability, and a seamless user experience.',
      points: [
        'Agile development sprints',
        'Weekly progress updates',
        'QA & testing cycles',
        'App store submission & launch'
      ],
      styles: {
        listActiveBg: 'bg-orange-50',
        listActiveBorder: 'border-orange-200',
        listIconBg: 'bg-orange-600',
        listText: 'text-orange-600',
        cardGradient: 'bg-gradient-to-br from-[#ea580c] to-[#fb923c]',
        cardText: 'text-white',
        cardTextSecondary: 'text-orange-50/90',
        cardIconBg: 'bg-white/20',
        cardBorder: 'border-orange-400/30',
      }
    },
  ];

  const activeTheme = steps[activeStep - 1].styles;

  // FIXED LOGIC: Animation triggers ONLY ONCE
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once it has become visible
        if (lifecycleRef.current) observer.unobserve(lifecycleRef.current);
      }
    }, { threshold: 0.1 });

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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How we do it in <span className="bg-gradient-blue bg-clip-text text-transparent">3 Easy Steps</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Menu */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border group relative 
                      ${isActive 
                        ? `${step.styles.listActiveBg} ${step.styles.listActiveBorder} shadow-md translate-x-2` 
                        : 'bg-white border-gray-100 hover:border-gray-200'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all 
                          ${step.styles.listIconBg} ${isActive ? 'text-white scale-110' : 'text-white opacity-60'}
                        `}>
                          <step.icon size={20} />
                        </div>
                        <div>
                          <span className={`text-xs font-bold uppercase ${isActive ? step.styles.listText : 'text-gray-400'}`}>
                            {step.subtitle}
                          </span>
                          <h3 className={`font-bold text-lg ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight size={20} className={`transition-all ${isActive ? step.styles.listText : 'opacity-0'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Content Card */}
            <div className="lg:col-span-7">
              <div className={`h-full rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl transition-all duration-500 ${activeTheme.cardGradient} ${activeTheme.cardBorder}`}>
                <div className="absolute top-6 right-8 text-9xl font-black text-white opacity-10">
                  0{activeStep}
                </div>

                <div key={activeStep} className="relative z-10 animate-fadeInUp">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md mb-8 ${activeTheme.cardIconBg}`}>
                    {React.createElement(steps[activeStep - 1].icon, { size: 32, className: "text-white" })}
                  </div>

                  <h3 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${activeTheme.cardText}`}>
                    {steps[activeStep - 1].headerTitle}
                  </h3>

                  <p className={`text-lg mb-8 max-w-xl ${activeTheme.cardTextSecondary}`}>
                    {steps[activeStep - 1].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 border-t border-white/20 pt-8 mt-8">
                    {steps[activeStep - 1].points.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-white/70 shrink-0" />
                        <span className={`text-base font-medium ${activeTheme.cardText}`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentLifecycle;