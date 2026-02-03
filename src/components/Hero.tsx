import React, { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Fade } from 'react-awesome-reveal';

interface HeroProps {
  showAnimations: boolean;
}

const Hero: React.FC<HeroProps> = ({ showAnimations }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const scrollToWork = () => {
    const section = document.getElementById('portfolio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image - Smaller size */}
      <div
        className={`absolute inset-0 bg-no-repeat bg-[url('/assets/images/image_hero.png')] bg-hero-pos-sm sm:bg-hero-pos-md bg-hero-sm sm:bg-hero-md ${showAnimations ? 'animate-zoom-in-out' : ''}`}
        style={{ zIndex: 0 }}
      />

      {/* Main Content Container */}
      <div className="relative min-h-screen flex items-center pt-24 pb-12" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          
          {/* Desktop & Tablet Layout: Two columns - 60/40 split */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Left Column - Main Content (3 columns = 60%) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Badge Pills */}
              {showAnimations ? (
                <Fade direction="down" triggerOnce delay={100}>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                      <span>🏆</span>
                      <span>12+ Years</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                      <span>📦</span>
                      <span>100+ Projects</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                      <span>⭐</span>
                      <span>4.9 Rating</span>
                    </div>
                  </div>
                </Fade>
              ) : (
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>🏆</span>
                    <span>12+ Years</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>📦</span>
                    <span>100+ Projects</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>⭐</span>
                    <span>4.9 Rating</span>
                  </div>
                </div>
              )}

              {/* Main Heading */}
              {showAnimations ? (
                <Fade direction="down" triggerOnce delay={300}>
                  <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                      Turn Your Ideas into Smart, High-Performance{' '}
                      <span className="text-blue-500">Digital Products</span>
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-gray-600">
                      From mobile apps to AI automation, web platforms, and UX design, we create solutions that scale, engage, and deliver measurable results.
                    </p>
                  </div>
                </Fade>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                    Turn Your Ideas into Smart, High-Performance{' '}
                    <span className="text-blue-500">Digital Products</span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-gray-600">
                    From mobile apps to AI automation, web platforms, and UX design, we create solutions that scale, engage, and deliver measurable results.
                  </p>
                </div>
              )}

              {/* CTA Button */}
              {showAnimations ? (
                <Fade direction="up" triggerOnce delay={500}>
                  <div>
                    <button
                      onClick={scrollToWork}
                      className="group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 border-2 bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      <ArrowDown size={20} />
                      <span>View Our Work</span>
                    </button>
                  </div>
                </Fade>
              ) : (
                <div>
                  <button
                    onClick={scrollToWork}
                    className="group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 border-2 bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <ArrowDown size={20} />
                    <span>View Our Work</span>
                  </button>
                </div>
              )}

              {/* Decorative Illustration Space - Hidden on mobile */}
              <div className="hidden lg:block">
                {/* You can add your custom illustration here */}
              </div>
            </div>

            {/* Right Column - Contact Form (2 columns = 40%) */}
            {/* Semi-transparent background so image shows through */}
            <div className="lg:col-span-2 rounded-3xl p-8 shadow-2xl bg-blue-100/80 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Form Header */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Get a Free Quote
                  </h2>
                  <p className="text-sm mt-2 text-gray-700">
                    Tell us about your project
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">
                      Your Name? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">
                      Your Work Email? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your Work email"
                      required
                      className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Mobile Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">
                      Your Mobile? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        className="px-3 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>🇰🇭 +855</option>
                        <option>🇺🇸 +1</option>
                        <option>🇬🇧 +44</option>
                      </select>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="123 456 789"
                        required
                        className="flex-1 px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Budget Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">
                      Your Budget? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border bg-white/90 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select your budget range</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000+">$25,000+</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-blue text-white px-6 py-4 rounded-button font-semibold text-base transition-all duration-300 shadow-button hover:shadow-lg hover:scale-105"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Mobile Layout Adjustments */}
          <div className="lg:hidden mt-8">
            {/* Add mobile-specific content or adjustments here if needed */}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
        {/* You can add decorative shapes or illustrations here */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 bg-blue-200"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 bg-purple-200"></div>
      </div>
    </section>
  );
};

export default Hero;