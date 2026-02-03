import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, ArrowRight, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Fade } from 'react-awesome-reveal';

const countries = [
  { code: 'kh', name: 'Cambodia', dial: '+855' },
  { code: 'us', name: 'USA', dial: '+1' },
  { code: 'gb', name: 'UK', dial: '+44' },
  { code: 'th', name: 'Thailand', dial: '+66' },
  { code: 'vn', name: 'Vietnam', dial: '+84' },
  { code: 'sg', name: 'Singapore', dial: '+65' },
];

interface HeroProps {
  showAnimations: boolean;
}

const Hero: React.FC<HeroProps> = ({ showAnimations }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', budget: '' });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToWork = () => {
    const section = document.getElementById('portfolio');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image - Original */}
      <div
        className={`absolute inset-0 bg-no-repeat bg-[url('/assets/images/image_hero.png')] bg-hero-pos-sm sm:bg-hero-pos-md bg-hero-sm sm:bg-hero-md ${showAnimations ? 'animate-zoom-in-out' : ''}`}
        style={{ zIndex: 0 }}
      />

      <div className="relative min-h-screen flex items-center pt-24 pb-12" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Left Column - Original Style */}
            <div className="lg:col-span-3 space-y-8">
              <div 
                className="space-y-8"
                style={{ 
                  animation: showAnimations ? 'modernPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
                  opacity: showAnimations ? 0 : 1 
                }}
              >
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>🏆</span><span>12+ Years</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>📦</span><span>100+ Projects</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>⭐</span><span>4.9 Rating</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                    Turn Your Ideas into Smart, High-Performance{' '}
                    <span className="text-blue-500">Digital Products</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                    From mobile apps to AI automation, web platforms, and UX design, we create solutions that scale, engage, and deliver measurable results.
                  </p>
                </div>

                <button
                  onClick={scrollToWork}
                  className="group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 border-2 bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  <ArrowDown size={20} />
                  <span>View Our Work</span>
                </button>
              </div>
            </div>

            {/* Right Column - Original Form Box */}
            <div className="lg:col-span-2">
              <div 
                className="rounded-3xl p-8 shadow-2xl bg-blue-100/80 backdrop-blur-sm"
                style={{ 
                  animation: showAnimations ? 'modernPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards' : 'none',
                  opacity: showAnimations ? 0 : 1 
                }}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Get a Free Quote</h2>
                    <p className="text-sm mt-2 text-gray-700">Tell us about your project</p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-900">Your Name? <span className="text-red-500">*</span></label>
                      <input type="text" name="name" placeholder="Enter your full name" required className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-900">Your Work Email? <span className="text-red-500">*</span></label>
                      <input type="email" name="email" placeholder="Enter your Work email" required className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Mobile with Hover Flag Selector */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-900">Your Mobile? <span className="text-red-500">*</span></label>
                      <div className="flex gap-2">
                        <div className="relative group" ref={dropdownRef}>
                          <button
                            type="button"
                            className="flex items-center gap-2 px-3 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 font-bold text-sm min-w-[110px]"
                          >
                            <img src={`https://flagcdn.com/w20/${selectedCountry.code}.png`} alt="flag" className="w-5 h-auto rounded-sm" />
                            <span>{selectedCountry.dial}</span>
                            <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
                          </button>
                          
                          <div className="absolute top-full left-0 pt-2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                              {countries.map((c) => (
                                <div key={c.code} onClick={() => setSelectedCountry(c)} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors">
                                  <img src={`https://flagcdn.com/w20/${c.code}.png`} alt={c.name} className="w-5 h-auto rounded-sm" />
                                  <span className="text-sm font-medium text-gray-700">{c.name}</span>
                                  <span className="text-xs text-gray-400 ml-auto">{c.dial}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <input type="tel" name="mobile" placeholder="123 456 789" required className="flex-1 px-4 py-3 rounded-xl border bg-white/90 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>

                    {/* Budget with Hover Selector */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-900">Your Budget? <span className="text-red-500">*</span></label>
                      <div className="relative group">
                        <div className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 flex items-center justify-between cursor-pointer">
                          <span>{formData.budget || "Select your budget range"}</span>
                          <ChevronDown size={16} className="text-gray-500 transition-transform group-hover:rotate-180" />
                        </div>
                        <div className="absolute top-full left-0 pt-2 w-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                          <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                            {[
                              { label: '$1,000 - $5,000', value: '1k-5k' },
                              { label: '$5,000+', value: '5k+' }
                            ].map((option) => (
                              <div 
                                key={option.value}
                                onClick={() => setFormData({ ...formData, budget: option.label })}
                                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 transition-colors"
                              >
                                {option.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="w-full flex items-center justify-center space-x-2 bg-gradient-blue text-white px-6 py-4 rounded-button font-semibold text-base transition-all duration-300 shadow-button hover:shadow-lg hover:scale-105">
                      <span>Get Quote</span>
                      <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modernPop {
          0% { opacity: 0; transform: scale(0.8) translateY(50px) rotateX(-10deg); }
          100% { opacity: 1; transform: scale(1) translateY(0) rotateX(0deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;