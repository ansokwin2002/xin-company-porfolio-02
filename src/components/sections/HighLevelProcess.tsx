import React, { useState, useEffect } from 'react';
import { Search, Layers, Palette, FlaskConical, Rocket, ArrowRight } from 'lucide-react';

// Define the structure for styles to ensure Tailwind sees the classes
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

const HighLevelProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // DATA: Explicitly defining classes so Tailwind renders them correctly
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
    {
      id: 4,
      subtitle: 'Step 04',
      title: 'Validation & Testing',
      headerTitle: 'Validation & Testing',
      icon: FlaskConical,
      description: 'We analyze design solutions using various techniques to determine their efficacy. This involves usability testing, A/B testing, and heuristic evaluations to gather user feedback and identify areas for improvement.',
      styles: {
        activeBg: 'bg-orange-50',
        activeBorder: 'border-orange-200',
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
      description: 'Implementing the completed concept into practice and keeping an eye on its performance after launch. This entails managing the development process to guarantee design integrity.',
      styles: {
        activeBg: 'bg-green-50',
        activeBorder: 'border-green-200',
        iconBg: 'bg-green-500',
        text: 'text-green-600',
        shadow: 'shadow-green-200',
        lightGradient: 'from-green-50',
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

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What is our <span className="bg-clip-text bg-gradient-blue text-transparent">High-level Process?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A structured approach to deliver exceptional design solutions
          </p>
        </div>

        {/* Top Timeline Progress Bar (Hidden on Mobile) */}
        <div className="relative mb-16 px-4 hidden md:block">
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-100 rounded-full -translate-y-1/2 z-0"></div>
          
          {/* Dynamic Color Progress Bar */}
          <div 
            className={`absolute top-1/2 left-0 h-2 rounded-full -translate-y-1/2 z-0 transition-all duration-500 ease-out ${activeTheme.iconBg}`}
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="relative z-10 flex justify-between w-full">
            {steps.map((step) => {
              const isActive = step.id <= activeStep;
              const isCurrent = step.id === activeStep;
              
              return (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => { setActiveStep(step.id); setIsAutoPlaying(false); }}
                >
                  <div 
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 bg-white
                      ${isActive ? `${step.styles.activeBorder.replace('bg-', 'border-')} ${step.styles.text} scale-110 shadow-lg` : 'border-gray-200'}
                      ${isCurrent ? `ring-4 ${step.styles.activeBg}` : ''}
                    `}
                  >
                    {isActive && <div className={`w-4 h-4 rounded-full ${step.styles.iconBg}`}></div>}
                  </div>
                  <span className={`mt-4 text-sm font-bold transition-colors duration-300 ${isCurrent ? step.styles.text : 'text-gray-400'}`}>
                    {step.title.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Vertical Menu */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => { setActiveStep(step.id); setIsAutoPlaying(false); }}
                  // Apply specific color classes based on the step's 'styles' object
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border group relative overflow-hidden
                    ${isActive 
                      ? `${step.styles.activeBg} ${step.styles.activeBorder} shadow-md translate-x-2` 
                      : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
                    }
                  `}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Icon Container */}
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? `${step.styles.iconBg} text-white shadow-lg` 
                          : `bg-gray-100 text-gray-400 group-hover:${step.styles.text}`
                        }
                      `}>
                        <step.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      
                      {/* Text */}
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider block mb-1 transition-colors duration-300 ${isActive ? step.styles.text : 'text-gray-400'}`}>
                          {step.subtitle}
                        </span>
                        <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <ArrowRight 
                      size={20} 
                      className={`transition-all duration-300 
                        ${isActive 
                          ? `${step.styles.text} translate-x-0` 
                          : 'text-gray-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                        }
                      `} 
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Card */}
          <div className="lg:col-span-7">
            <div 
              // The big card border and shadow now change dynamically based on activeTheme
              className={`h-full bg-white rounded-3xl border p-8 md:p-12 relative overflow-hidden shadow-xl transition-all duration-500
                ${activeTheme.activeBorder} ${activeTheme.shadow.replace('shadow-', 'shadow-md shadow-')} 
              `}
            >
              
              {/* Background Gradient Decorative */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${activeTheme.lightGradient} to-transparent rounded-bl-full -z-0 opacity-50 pointer-events-none transition-colors duration-500`}></div>

              {/* Large Faded Number */}
              <div className="absolute top-10 right-10 text-9xl font-black text-gray-100 select-none pointer-events-none opacity-50">
                0{activeStep}
              </div>

              {/* Content Animation Wrapper */}
              <div key={activeStep} className="relative z-10 animate-fadeInUp">
                
                {/* Large Icon in Card */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-8 transform hover:scale-105 transition-all duration-300
                  ${activeTheme.iconBg} ${activeTheme.shadow}
                `}>
                  {React.createElement(steps[activeStep - 1].icon, { size: 40, className: "text-white" })}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className={`font-bold text-lg ${activeTheme.text}`}>Step 0{activeStep}</span>
                  <div className="h-[1px] flex-1 bg-gray-200"></div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {steps[activeStep - 1].headerTitle}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
                  {steps[activeStep - 1].description}
                </p>

                <div className="flex justify-end items-center">
                  <span className="text-gray-400 font-medium">
                    {activeStep} of {steps.length}
                  </span>
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
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HighLevelProcess;