import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sun, Moon, Sparkles, Zap, Laptop } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const navItems = [
    { id: 'home', label: t('home'), icon: '🏠' },
    { id: 'about', label: t('about'), icon: '👨‍💻' },
    { id: 'portfolio', label: t('portfolio'), icon: '💼' },
    { id: 'services', label: t('services'), icon: '⚡' },
    { id: 'faq', label: t('faq'), icon: '❓' },
    { id: 'testimonials', label: t('testimonials'), icon: '⭐' },
    { id: 'contact', label: t('contact'), icon: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const currentScrollPosition = scrollPosition + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? theme === 'dark'
          ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-700/30'
          : 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/30'
        : theme === 'dark'
          ? 'bg-gray-900/20 backdrop-blur-md'
          : 'bg-white/20 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              {/* Main Logo Icon */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Laptop className="text-white" size={20} />
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
              </div>
              {/* Floating Elements */}
              <Code className="absolute -top-1 -right-1 text-red-500 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" size={14} />
              <Zap className="absolute -bottom-1 -left-1 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-rotate-12" size={12} />
              <Sparkles className="absolute top-0 left-0 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" size={10} />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-red-800 dark:group-hover:from-red-400 dark:group-hover:to-red-600 transition-all duration-300">
              An Sokwin
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id 
                    ? 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle, Language & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <select
              value={i18n.language || 'en'}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                theme === 'dark'
                  ? 'bg-gray-800/80 text-gray-200 border-gray-600/30 hover:bg-gray-700/80'
                  : 'bg-white/80 text-gray-700 border-gray-300/30 hover:bg-gray-100/80'
              }`}
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="km">ខ្មែរ</option>
              <option value="zh-CN">中文（简体）</option>
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative p-3 rounded-xl transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/30'
                  : 'bg-gray-100/80 hover:bg-gray-200/80 border border-gray-300/30'
              }`}
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6">
                <Sun className={`absolute inset-0 text-yellow-500 transition-all duration-300 ${
                  theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
                }`} size={24} />
                <Moon className={`absolute inset-0 text-blue-400 transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`} size={24} />
              </div>
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 border border-gray-600/30'
                    : 'bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 border border-gray-300/30'
                }`}
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} size={24} />
                  <X className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`} size={24} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-2 backdrop-blur-xl rounded-2xl mt-2 border ${
            theme === 'dark'
              ? 'bg-gray-900/95 border-gray-700/30'
              : 'bg-white/95 border-gray-200/30'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 dark:border-red-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;