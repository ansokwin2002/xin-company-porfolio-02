import React, { useState, useEffect } from 'react';
import { ArrowUp, Rocket } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-40 group">
      {/* Progress Ring */}
      <div className="relative">
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className={theme === 'dark' ? 'text-white/20' : 'text-gray-300'}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-red-500"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={`${scrollProgress}, 100`}
            strokeLinecap="round"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        
        {/* Button */}
        <button
          onClick={scrollToTop}
          className={`absolute inset-0 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 backdrop-blur-md border ${
            theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              : 'bg-white/80 hover:bg-white text-gray-700 border-gray-200/50'
          }`}
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ArrowUp 
              size={20} 
              className={`transition-all duration-300 ${
                scrollProgress > 90 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`} 
            />
            <Rocket 
              size={20} 
              className={`absolute inset-0 transition-all duration-300 ${
                scrollProgress > 90 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className={`text-xs px-3 py-2 rounded-lg whitespace-nowrap backdrop-blur-md border ${
          theme === 'dark'
            ? 'bg-white/10 border-white/20 text-white'
            : 'bg-white/90 border-gray-200/50 text-gray-900'
        }`}>
          {scrollProgress > 90 ? 'Blast off to top! 🚀' : 'Back to top'}
          <div className={`absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
            theme === 'dark' ? 'border-t-white/10' : 'border-t-white/90'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;