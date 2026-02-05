import React, { useState, useEffect } from 'react';
import { Search, Layers, Palette, ArrowRight, Heart } from 'lucide-react';

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
  const lifecycleRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

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
      description: 'Creating interactive representations of the product to test and refine design concepts and user flow. By incorporating user feedback, prototypes help validate design decisions and identify potential issues early in the process.',
      styles: {
        activeBg: 'bg-purple-50',
        activeBorder: 'border-purple-200',
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
      description: 'Creating visual elements and layouts for digital interfaces, focusing on usability and maintaining brand consistency to enhance the overall user experience.',
      styles: {
        activeBg: 'bg-red-50',
        activeBorder: 'border-red-200',
        iconBg: 'bg-red-500',
        text: 'text-red-600',
        shadow: 'shadow-red-200',
        lightGradient: 'from-red-50',
      }
    },
  ];

  const activeTheme = steps[activeStep - 1].styles;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (lifecycleRef.current) {
      observer.observe(lifecycleRef.current);
    }

    return () => {
      if (lifecycleRef.current) {
        observer.unobserve(lifecycleRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* --- Process Section --- */}
      <section 
        ref={lifecycleRef}
        className={`py-20 bg-white font-sans overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How we do it in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">3 Easy Steps</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A streamlined process designed for maximum efficiency and exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-4">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => { setActiveStep(step.id); setIsAutoPlaying(false); }}
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
                          ${step.styles.iconBg} ${isActive ? 'text-white shadow-lg opacity-100' : 'text-white opacity-40 group-hover:opacity-100'}
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
                      <ArrowRight size={20} className={`transition-all duration-300 ${isActive ? step.styles.text : 'text-gray-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7">
              <div className={`h-full bg-white rounded-3xl border p-8 md:p-12 relative overflow-hidden shadow-xl transition-all duration-500 ${activeTheme.activeBorder}`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${activeTheme.lightGradient} to-transparent rounded-bl-full -z-0 opacity-50 pointer-events-none`}></div>
                <div className="absolute top-10 right-10 text-9xl font-black text-gray-100 select-none pointer-events-none opacity-50">0{activeStep}</div>
                <div key={activeStep} className="relative z-10 animate-fadeInUp">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-8 transform hover:rotate-3 transition-all duration-300 ${activeTheme.iconBg} ${activeTheme.shadow}`}>
                    {React.createElement(steps[activeStep - 1].icon, { size: 36, className: "text-white" })}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`font-bold text-lg ${activeTheme.text}`}>Step 0{activeStep}</span>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{steps[activeStep - 1].headerTitle}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">{steps[activeStep - 1].description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {steps.map((s) => (
                        <div key={s.id} className={`h-1.5 w-6 rounded-full transition-all duration-300 ${s.id === activeStep ? activeTheme.iconBg : 'bg-gray-100'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 font-medium">{activeStep} / {steps.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* --- CTA Love Section --- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Card: Dark Gray/Charcoal background */}
          <div className="relative overflow-hidden bg-[#2a2a2a] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-white/5">
            
            {/* Left Side: Square Black Box with Heart */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60 bg-black rounded-[32px] flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Subtle Red Glow behind the heart */}
                  <div className="absolute w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
                  
                  {/* Heart Ripples */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute border-2 border-red-500/20 rounded-full animate-heart-ripple"
                      style={{ width: '45%', height: '45%', animationDelay: `${i * 0.8}s` }}
                    />
                  ))}
                  
                  {/* The Heart Icon */}
                  <Heart size={90} className="text-red-500 fill-red-600 z-10 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                </div>
              </div>
            </div>

            {/* Right Side: Text and Button */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                Let's make people <span className="bg-gradient-blue bg-clip-text text-transparent">fall in love</span> <br className="hidden lg:block" /> with your app
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                Tell us about your app idea, and our team will work with you to create 
                something amazing that your users will absolutely love. Let's turn your vision into reality.
              </p>
              
              {/* Vibrant Blue Button matching the image */}
              <button className="group relative inline-flex items-center gap-3 bg-gradient-blue text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                <span className="text-xl tracking-wide">Let's Talk</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Keeping the animation styles local to the section */}
        <style>{`
          @keyframes heart-ripple {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(3.5); opacity: 0; }
          }
          .animate-heart-ripple { 
            animation: heart-ripple 2.5s cubic-bezier(0, 0, 0.2, 1) infinite; 
          }
        `}</style>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heart-ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-heart-ripple { animation: heart-ripple 2.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
};

export default DevelopmentLifecycle;