import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookF, FaTiktok, FaYoutube, FaTelegramPlane, FaArrowRight } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { ChevronDown, X } from 'lucide-react'; // Added ChevronDown and X from lucide-react
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

// Countries data from Hero.tsx
const countries = [
  { code: 'kh', name: 'Cambodia', dial: '+855' },
  { code: 'us', name: 'USA', dial: '+1' },
  { code: 'gb', name: 'UK', dial: '+44' },
  { code: 'th', name: 'Thailand', dial: '+66' },
  { code: 'vn', name: 'Vietnam', dial: '+84' },
  { code: 'sg', name: 'Singapore', dial: '+65' },
];

const StartYourNextBigProject: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For budget dropdown
  const [isCountryOpen, setIsCountryOpen] = useState(false); // For country dropdown
  const [selectedBudget, setSelectedBudget] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false); // For custom budget input
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Initial country from countries array
  const [isSubmitting, setIsSubmitting] = useState(false); // Added isSubmitting state
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', details: '' }); // Added mobile

  const sectionRef = useRef<HTMLDivElement>(null);
  const budgetOptionsRaw = t('start_project.budget_options', { returnObjects: true });
  const budgetOptions = Array.isArray(budgetOptionsRaw) ? budgetOptionsRaw : [];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (option: string) => {
    if (option === 'Custom' || option === 'ផ្ទាល់ខ្លួន' || option === '自定义' || option === '自訂') {
      setShowCustomInput(true);
      setSelectedBudget('');
    } else {
      setSelectedBudget(option);
      setShowCustomInput(false);
    }
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true
    // Simulate API call or form submission
    setTimeout(() => {
      console.log('Form Submitted:', { ...formData, selectedBudget, mobileCountryDial: selectedCountry.dial });

      // Show success toast
      toast.success(t('start_project.success_message'));

      // Reset form fields
      setFormData({ name: '', email: '', mobile: '', details: '' }); // Reset mobile as well
      setSelectedBudget('');
      setShowCustomInput(false); // Reset custom input state
      setSelectedCountry(countries[0]); // Reset country as well
      setIsSubmitting(false); // Set isSubmitting to false after submission
    }, 2000); // Simulate a 2-second delay for submission
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white text-slate-900 overflow-hidden relative">
      {/* Optional: Add the same background graphic as hero if desired, 
          currently kept clean white as per original structure */}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            {t('start_project.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('start_project.title_highlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            {t('start_project.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards (kept consistent with previous design) */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-8">
                <img src="https://flagcdn.com/kh.svg" alt="KH" className="w-10 h-7 object-cover rounded-md shadow-sm" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{t('start_project.office_title')}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    {t('start_project.office_address')}
                  </p>
                </div>
              </div>
              <div className="space-y-4 font-bold text-gray-800">
                <div className="flex items-center gap-4 transition-colors cursor-pointer group">
                  <div className="text-xl text-black-600"><MdPhone /></div>
                  <span className="text-gray-900 group-hover:bg-gradient-blue group-hover:bg-clip-text group-hover:text-transparent">(+855) 86 68 2000</span>
                </div>
                <div className="flex items-center gap-4 transition-colors cursor-pointer group">
                  <div className="text-xl text-black-600"><MdEmail /></div>
                  <span className="text-gray-900 group-hover:bg-gradient-blue group-hover:bg-clip-text group-hover:text-transparent">info@qiyou-kh.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-7 flex items-center justify-between text-white shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="font-bold uppercase tracking-widest ml-2 text-sm">{t('start_project.follow_us')}</span>
              <div className="flex gap-3">
                {[FaFacebookF, FaTiktok, FaYoutube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-blue transition-all hover:-translate-y-1">
                    <Icon size={idx === 2 ? 20 : 18} />
                  </a>
                ))}
              </div>
            </div>

            <a href="https://t.me/xin_qiyou" target="_blank" rel="noreferrer" 
               className="block bg-gradient-blue rounded-3xl p-7 text-white group shadow-sm hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <FaTelegramPlane size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{t('start_project.telegram_chat')}</h4>
                    <p className="text-xs text-blue-100/80 mt-1 uppercase tracking-wider font-bold">{t('start_project.instant_response')}</p>
                  </div>
                </div>
                <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Right Column: Mirror Glass Form (Styled exactly like Hero) */}
                      <div 
                        className={`lg:col-span-7 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 bg-blue-100/30 backdrop-blur-md border border-white/40 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      >            <div className="text-left mb-10">
              <h2 className="text-2xl font-bold text-gray-900">{t('start_project.form_title')}</h2>
              <p className="text-sm mt-2 text-gray-700">{t('start_project.form_subtitle')}</p>
            </div>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 1. Name Input - Hero Style */}
                <div className="relative group">
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-900 font-bold focus:outline-none focus:border-gray-900 transition-colors peer placeholder-transparent" 
                    placeholder=" " 
                  />
                  <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform peer-focus:-translate-y-6 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                    {t('start_project.name_label')}
                  </label>
                </div>

                {/* 2. Email Input - Hero Style */}
                <div className="relative group">
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-900 font-bold focus:outline-none focus:border-gray-900 transition-colors peer placeholder-transparent" 
                    placeholder=" " 
                  />
                  <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform peer-focus:-translate-y-6 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                    {t('start_project.email_label')}
                  </label>
                </div>
              </div>

              {/* 3. Floating Mobile Number (Redesigned to match Name/Email style) */}
              <div className="relative group flex items-end border-b-2 border-gray-300 focus-within:border-gray-900 transition-colors pt-2">
                {/* Country Selector */}
                <div className="relative" onMouseEnter={() => setIsCountryOpen(true)} onMouseLeave={() => setIsCountryOpen(false)}>
                  <button type="button" className="flex items-center gap-2 py-3 pr-3 font-bold text-sm text-gray-900 outline-none">
                    <img src={`https://flagcdn.com/w20/${selectedCountry.code}.png`} className="w-5 rounded-sm" alt="flag" />
                    <span>{selectedCountry.dial}</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 text-gray-500 ${isCountryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown List */}
                  <div className={`absolute top-full left-0 pt-1 z-[60] transition-all duration-300 w-48 ${isCountryOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-2xl max-h-48 overflow-y-auto py-2">
                      {countries.map((c) => (
                        <div key={c.code} onClick={() => { setSelectedCountry(c); setIsCountryOpen(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-sm font-bold text-gray-700">
                          <img src={`https://flagcdn.com/w20/${c.code}.png`} className="w-5 rounded-sm" alt={c.name} />
                          <span>{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone Input with Floating Label logic */}
                <div className="relative flex-1">
                  <input 
                    type="tel" 
                    required 
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="w-full bg-transparent py-3 text-gray-900 font-bold focus:outline-none placeholder-transparent peer" 
                    placeholder=" " 
                  />
                    {/* Note: Translate Y is slightly less (-20px) here because of the flex layout container */}
                  <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform -z-10 peer-focus:-translate-y-8 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:scale-90">
                    {t('start_project.mobile_label')}
                  </label>
                </div>
              </div>

              {/* 3. Budget Dropdown or Custom Input */}
              {showCustomInput ? (
                <div className="relative group border-b-2 border-gray-300 focus-within:border-gray-900 transition-colors">
                  <input 
                    type="text" 
                    required 
                    autoFocus
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full bg-transparent py-3 text-gray-900 font-bold focus:outline-none placeholder-transparent peer" 
                    placeholder=" " 
                  />
                  <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform -translate-y-6 scale-90 text-gray-700">
                    {t('start_project.budget_custom_label')}
                  </label>
                  <button 
                    type="button"
                    onClick={() => { setShowCustomInput(false); setSelectedBudget(''); }}
                    className="absolute right-0 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <div className="relative group border-b-2 border-gray-300 hover:border-gray-900 transition-colors" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                  <div className="w-full py-3 flex items-center justify-between cursor-pointer">
                    <span className={`font-bold transition-colors ${selectedBudget ? 'text-gray-900' : 'text-transparent'}`}>
                      {selectedBudget || "Placeholder"} 
                    </span>
                    <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Floating Label Logic */}
                  <label className={`absolute left-0 pointer-events-none transition-all duration-300 ease-out origin-left transform 
                    ${selectedBudget || isDropdownOpen ? '-translate-y-6 scale-90 top-3 text-gray-700' : 'top-3 text-gray-700 scale-100'}
                  `}>
                    {t('start_project.budget_label')}
                  </label>

                  {/* Dropdown Options */}
                  <div className={`absolute top-full left-0 pt-1 w-full z-50 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden py-1">
                      {budgetOptions.map((opt) => (
                        <div key={opt} onClick={() => handleSelect(opt)} className="px-6 py-4 hover:bg-blue-50 cursor-pointer text-sm font-bold text-gray-700">
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Textarea - Hero Style Adaptation */}
              <div className="relative group">
                <textarea 
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-900 font-bold focus:outline-none focus:border-gray-900 transition-colors peer placeholder-transparent resize-y min-h-[80px] overflow-y-auto"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform peer-focus:-translate-y-6 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                  {t('start_project.details_label')}
                </label>
              </div>

              {/* 5. Button - Exact Match to Hero (Gradient Blue) */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#00ba2b] to-[#22c55e] text-white px-6 py-5 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t('start_project.sending')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('start_project.submit_button')}</span> <FaArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartYourNextBigProject;