import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project Two",
    video: "/assets/videos/v2.mp4",
    color: "bg-[#7a1111]"
  },
  {
    id: 2,
    title: "Al-Ahly Club App",
    video: "/assets/videos/v1.mp4",
    color: "bg-[#4a0e0e]"
  },
  {
    id: 3,
    title: "Al-Mahatta App",
    video: "/assets/videos/v3.mp4",
    color: "bg-gray-100"
  }
];

const ProjectsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Our featured <span className="bg-gradient-blue bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Explore our showcase of successful mobile applications that have transformed businesses
          </p>
        </div>

        {/* Slider View */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[520px]">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-20 z-30 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex items-center justify-center w-full max-w-3xl h-full">
            {projects.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
              const isNext = index === (currentIndex + 1) % projects.length;

              let positionClasses = "opacity-0 scale-50 pointer-events-none";
              
              if (isActive) {
                positionClasses = "opacity-100 scale-100 z-20 translate-x-0";
              } else if (isPrev) {
                positionClasses = "opacity-30 scale-75 z-10 -translate-x-24 md:-translate-x-48";
              } else if (isNext) {
                positionClasses = "opacity-30 scale-75 z-10 translate-x-24 md:translate-x-48";
              }

              return (
                <div
                  key={project.id}
                  className={`absolute transition-all duration-700 ease-in-out transform w-[180px] md:w-[240px] h-[360px] md:h-[480px] rounded-[32px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden ${project.color} ${positionClasses}`}
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-b-xl z-30" />
                  
                  <video 
                    src={project.video} 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-20 z-30 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-8">
          <button className="bg-gradient-blue text-white px-8 py-3.5 rounded-xl font-bold text-md shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-transform flex items-center gap-2 mx-auto group">
            Let's Build Your App <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;