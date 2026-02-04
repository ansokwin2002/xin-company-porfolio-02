import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookF, FaTiktok, FaYoutube, FaTelegramPlane, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const StartYourNextBigProject: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  const budgetOptions = ['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $50,000', '$50,000+'];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (option: string) => {
    setSelectedBudget(option);
    setIsDropdownOpen(false);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Consistent with Hero Spacing */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            Start Your Next <span className="text-blue-500">Big Project</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Got an idea? Tell us about it, and we'll bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Cards (Using rounded-3xl as per your Hero container) */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex items-start gap-4 mb-8">
                <img src="https://flagcdn.com/kh.svg" alt="KH" className="w-10 h-7 object-cover rounded-md shadow-sm" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">QiYou Tech Office</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    No. 37, St. 315, Sangkat Boeung Kak I, Khan Toul Kork, 12151 Phnom Penh.
                  </p>
                </div>
              </div>
              <div className="space-y-4 font-bold text-gray-800">
                <div className="flex items-center gap-4 hover:text-blue-500 transition-colors cursor-pointer">
                  <div className="text-blue-500 text-xl"><MdPhone /></div>
                  <span>(+855) 86 68 2000</span>
                </div>
                <div className="flex items-center gap-4 hover:text-blue-500 transition-colors cursor-pointer">
                  <div className="text-blue-500 text-xl"><MdEmail /></div>
                  <span>info@qiyou-kh.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-7 flex items-center justify-between text-white shadow-2xl">
              <span className="font-bold uppercase tracking-widest ml-2 text-sm">Follow Us</span>
              <div className="flex gap-3">
                {[FaFacebookF, FaTiktok, FaYoutube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                    <Icon size={idx === 2 ? 20 : 18} />
                  </a>
                ))}
              </div>
            </div>

            <a href="https://t.me/yourusername" target="_blank" rel="noreferrer" 
               className="block bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-7 text-white group shadow-lg shadow-blue-200 transition-transform active:scale-[0.98]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <FaTelegramPlane size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">Chat on Telegram</h4>
                    <p className="text-xs text-blue-100/80 mt-1 uppercase tracking-wider font-bold">Instant response</p>
                  </div>
                </div>
                <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Right Column: Form (Using rounded-3xl and rounded-xl for internal inputs) */}
          <div className={`lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/40 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-12">Send Us a Message</h3>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Smooth Floating Input: Name */}
                <div className="relative group">
                  <input type="text" required className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-blue-500 transition-colors peer font-bold text-gray-800 placeholder-transparent" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-left transform peer-focus:-translate-y-7 peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:scale-[0.85] uppercase font-black tracking-widest text-[10px]">Your Name *</label>
                </div>

                {/* Smooth Floating Input: Email */}
                <div className="relative group">
                  <input type="email" required className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-blue-500 transition-colors peer font-bold text-gray-800 placeholder-transparent" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-left transform peer-focus:-translate-y-7 peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:scale-[0.85] uppercase font-black tracking-widest text-[10px]">Work Email *</label>
                </div>
              </div>

              {/* STABLE HOVER DROPDOWN (Matching rounded-xl) */}
              <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-3 block">Project Budget *</label>
                
                <div className={`w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${isDropdownOpen ? 'bg-white border-blue-200 ring-4 ring-blue-500/5 shadow-md' : ''}`}>
                  <span className={`font-bold transition-none ${selectedBudget === '' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {selectedBudget || 'Select your budget range'}
                  </span>
                  <FaChevronDown className={`text-blue-500 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Bridge Zone + Dropdown Menu */}
                <div className={`absolute left-0 w-full pt-1 z-50 transition-all duration-300 ease-out ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden py-1">
                    {budgetOptions.map((opt) => (
                      <div 
                        key={opt} 
                        onClick={() => handleSelect(opt)}
                        className="px-6 py-4 hover:bg-blue-500 hover:text-white transition-colors duration-150 cursor-pointer text-sm font-bold text-gray-600"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Smooth Floating Textarea */}
              <div className="relative group">
                <textarea rows={2} className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-blue-500 transition-colors peer resize-none font-bold text-gray-800 placeholder-transparent" placeholder=" "></textarea>
                <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-left transform peer-focus:-translate-y-7 peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:scale-[0.85] uppercase font-black tracking-widest text-[10px]">Project Details</label>
              </div>

              {/* Button matching your Hero rounded-button (xl) and shadow */}
              <button type="submit" className="w-full group bg-blue-600 text-white py-5 rounded-xl font-bold text-lg tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] uppercase shadow-lg shadow-blue-500/20">
                Get Quote <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartYourNextBigProject;