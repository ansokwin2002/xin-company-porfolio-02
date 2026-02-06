import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Al-Ahly Club App",
    image: "https://placehold.co/400x800/4a0e0e/white?text=Al-Ahly+App",
    color: "bg-[#4a0e0e]"
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://placehold.co/400x800/7a1111/white?text=Main+Project",
    color: "bg-[#7a1111]"
  },
  {
    id: 3,
    title: "Al-Mahatta App",
    image: "https://placehold.co/400x800/f5f5f5/black?text=Al-Mahatta",
    color: "bg-gray-100"
  }
];

const ProjectsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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

        {/* Slider View - HEIGHT REDUCED HERE */}
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
                  // REDUCED WIDTH/HEIGHT RATIO
                  className={`absolute transition-all duration-700 ease-in-out transform w-[180px] md:w-[240px] h-[360px] md:h-[480px] rounded-[32px] border-[5px] border-[#222] shadow-2xl overflow-hidden ${project.color} ${positionClasses}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
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