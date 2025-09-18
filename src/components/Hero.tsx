import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface HeroProps {
  showAnimations: boolean;
}

const Hero: React.FC<HeroProps> = ({ showAnimations }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  // Website demo slides with real images
  const slides = [
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 2,
      title: 'Corporate Website Design',
      description: 'Professional business website with modern UI/UX',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 3,
      title: 'Restaurant Web Application',
      description: 'Interactive restaurant site with online ordering system',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 4,
      title: 'SaaS Dashboard Interface',
      description: 'Clean and intuitive dashboard for data management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Overlay for better readability */}
            <div className={`absolute inset-0 ${
              theme === 'dark' 
                ? 'bg-black/70' 
                : 'bg-white/80'
            }`}></div>
            
            {/* Gradient overlay */}
            <div className={`absolute inset-0 ${
              theme === 'dark'
                ? 'bg-gradient-to-b from-black/50 via-transparent to-black/70'
                : 'bg-gradient-to-b from-white/60 via-white/40 to-white/80'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
            : 'bg-black/10 backdrop-blur-md border border-black/20 text-black hover:bg-black/20'
        }`}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
            : 'bg-black/10 backdrop-blur-md border border-black/20 text-black hover:bg-black/20'
        }`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? theme === 'dark' ? 'bg-white scale-125' : 'bg-black scale-125'
                : theme === 'dark' ? 'bg-white/40 hover:bg-white/60' : 'bg-black/40 hover:bg-black/60'
            }`}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Desktop Layout: Two columns */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-start">
                <div className="relative">
                  <div className="w-24 h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-2xl xl:text-4xl font-bold shadow-2xl">
                    AS
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-20 blur-xl scale-110 animate-pulse"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-2xl ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  An <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Sokwin</span>
                </h1>
                
                <h2 className={`text-2xl xl:text-4xl font-semibold ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                }`}>
                  Freelance Web Developer
                </h2>
                
                <p className={`text-lg xl:text-xl leading-relaxed max-w-2xl ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  I craft stunning, high-performance full-stack web applications that drive results. 
                  Leveraging expertise in modern technologies including Laravel, React, Next.js, and AI, 
                  I empower businesses to establish a powerful and intelligent online presence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-6">
                <button
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl flex items-center space-x-3"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className={`group backdrop-blur-md border-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl flex items-center space-x-3 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50'
                    : 'bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50'
                }`}>
                  <Download size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Right Column - Stats and Project Info */}
            <div className="space-y-8">
              {/* Current Project Info */}
              <div className={`backdrop-blur-md rounded-3xl p-8 border shadow-2xl ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-black/10 border-black/20'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {slides[currentSlide].title}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6">
                <div className={`text-center backdrop-blur-md rounded-2xl p-6 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-black/10 border-black/20 hover:bg-black/15'
                }`}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">50+</div>
                  <div className={`font-medium text-lg ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Projects Completed</div>
                </div>
                
                <div className={`text-center backdrop-blur-md rounded-2xl p-6 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-black/10 border-black/20 hover:bg-black/15'
                }`}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">3+</div>
                  <div className={`font-medium text-lg ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Years Experience</div>
                </div>
                
                <div className={`text-center backdrop-blur-md rounded-2xl p-6 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-black/10 border-black/20 hover:bg-black/15'
                }`}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">100%</div>
                  <div className={`font-medium text-lg ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Layout: Single column with optimized spacing */}
          <div className="hidden md:block lg:hidden">
            <div className="text-center space-y-8 py-16">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                    AS
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-20 blur-xl scale-110 animate-pulse"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h1 className={`text-5xl md:text-6xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  An <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Sokwin</span>
                </h1>
                
                <h2 className={`text-2xl md:text-3xl font-semibold ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                }`}>
                  Freelance Web Developer
                </h2>
                
                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  I craft stunning, high-performance full-stack web applications that drive results. 
                  Leveraging expertise in modern technologies including Laravel, React, Next.js, and AI, 
                  I empower businesses to establish a powerful and intelligent online presence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl flex items-center space-x-3"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className={`group backdrop-blur-md border-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl flex items-center space-x-3 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50'
                    : 'bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50'
                }`}>
                  <Download size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
                <div className={`text-center backdrop-blur-md rounded-2xl p-6 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-black/10 border-black/20 hover:bg-black/15'
                }`}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">50+</div>
                  <div className={`font-medium text-sm md:text-base ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Projects Completed</div>
                </div>
                <div className={`text-center backdrop-blur-md rounded-2xl p-6 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-black/10 border-black/20 hover:bg-black/15'
                }`}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">3+</div>
                  <div className={`font-medium text-sm md:text-base ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Years Experience</div>
                </div>
                <div className={`text-center backdrop-blur-md rounded-2xl p-6 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 hover:bg-white/15'
                    : 'bg-black/10 border-black/20 hover:bg-black/15'
                }`}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">100%</div>
                  <div className={`font-medium text-sm md:text-base ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Client Satisfaction</div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`backdrop-blur-md rounded-3xl p-6 md:p-8 border shadow-2xl max-w-2xl mx-auto ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-black/10 border-black/20'
              }`}>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {slides[currentSlide].title}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout: Compact single column */}
          <div className="block md:hidden">
            <div className="text-center space-y-6 py-12">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-2xl">
                    AS
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-20 blur-xl scale-110 animate-pulse"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h1 className={`text-3xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  An <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Sokwin</span>
                </h1>
                
                <h2 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                }`}>
                  Freelance Web Developer
                </h2>
                
                <p className={`text-sm leading-relaxed px-4 ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  I craft stunning, high-performance web applications using Laravel, React, Next.js, and AI to empower businesses online.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 px-4">
                <button
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-bold hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className={`group backdrop-blur-md border-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50'
                    : 'bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50'
                }`}>
                  <Download size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 px-4 mt-8">
                <div className={`text-center backdrop-blur-md rounded-xl p-3 border shadow-xl ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20'
                    : 'bg-black/10 border-black/20'
                }`}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">50+</div>
                  <div className={`font-medium text-xs ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Projects</div>
                </div>
                <div className={`text-center backdrop-blur-md rounded-xl p-3 border shadow-xl ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20'
                    : 'bg-black/10 border-black/20'
                }`}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">3+</div>
                  <div className={`font-medium text-xs ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Years</div>
                </div>
                <div className={`text-center backdrop-blur-md rounded-xl p-3 border shadow-xl ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20'
                    : 'bg-black/10 border-black/20'
                }`}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">100%</div>
                  <div className={`font-medium text-xs ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                  }`}>Satisfied</div>
                </div>
              </div>

              {/* Project Info - Mobile */}
              <div className={`backdrop-blur-md rounded-2xl p-4 mx-4 border shadow-2xl ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-black/10 border-black/20'
              }`}>
                <h3 className={`text-base font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {slides[currentSlide].title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;