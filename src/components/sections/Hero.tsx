import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, ArrowRight, ChevronDown, X } from 'lucide-react';
import { toast } from 'sonner';
import CountingNumber from '../specific/CountingNumber';

const allCountries = [
  // Priority / Asian Countries
  { code: 'kh', name: 'Cambodia', dial: '+855' },
  { code: 'cn', name: 'China', dial: '+86' },
  { code: 'tw', name: 'Taiwan', dial: '+886' },
  { code: 'th', name: 'Thailand', dial: '+66' },
  { code: 'vn', name: 'Vietnam', dial: '+84' },
  { code: 'sg', name: 'Singapore', dial: '+65' },
  { code: 'my', name: 'Malaysia', dial: '+60' },
  { code: 'id', name: 'Indonesia', dial: '+62' },
  { code: 'ph', name: 'Philippines', dial: '+63' },
  { code: 'jp', name: 'Japan', dial: '+81' },
  { code: 'kr', name: 'South Korea', dial: '+82' },
  { code: 'hk', name: 'Hong Kong', dial: '+852' },
  { code: 'la', name: 'Laos', dial: '+856' },
  { code: 'mm', name: 'Myanmar', dial: '+95' },
  { code: 'bn', name: 'Brunei', dial: '+673' },
  // Other major countries
  { code: 'us', name: 'USA', dial: '+1' },
  { code: 'gb', name: 'UK', dial: '+44' },
  { code: 'au', name: 'Australia', dial: '+61' },
  { code: 'ca', name: 'Canada', dial: '+1' },
  { code: 'ae', name: 'UAE', dial: '+971' },
  { code: 'fr', name: 'France', dial: '+33' },
  { code: 'de', name: 'Germany', dial: '+49' },
  { code: 'ru', name: 'Russia', dial: '+7' },
  { code: 'in', name: 'India', dial: '+91' },
  { code: 'br', name: 'Brazil', dial: '+55' },
  { code: 'za', name: 'South Africa', dial: '+27' },
];

interface HeroProps {
  showAnimations: boolean;
}

const Hero: React.FC<HeroProps> = ({ showAnimations }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', mobile: '', details: '' });
  const [selectedCountry, setSelectedCountry] = useState(allCountries[0]);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [showCustomBudget, setShowCustomBudget] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = allCountries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.dial.includes(searchQuery)
  );

  // --- TYPEWRITER LOGIC ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = [t('hero.typewriter.words.0'), t('hero.typewriter.words.1'), t('hero.typewriter.words.2'), t('hero.typewriter.words.3')];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 70 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToWork = () => {
    const section = document.getElementById('portfolio');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted from Hero:', { ...formData, country: selectedCountry.dial });

      // Show success toast
      toast.success('Your quote request has been sent successfully!');

      // Reset form fields
      setFormData({ name: '', email: '', budget: '', mobile: '', details: '' });
      setShowCustomBudget(false);
      setIsSubmitting(false); // Set isSubmitting to false after submission
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-no-repeat bg-[url('/assets/images/image_hero.png')] bg-hero-pos-sm sm:bg-hero-pos-md bg-hero-sm sm:bg-hero-md animate-fast-zoom" style={{ zIndex: 0 }} />

      <div className="relative min-h-screen flex items-center pt-24 pb-12" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Left Column - ORIGINAL COLORS & SIZES */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-8" style={{ animation: showAnimations ? 'modernPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none', opacity: showAnimations ? 0 : 1 }}>
                
                {/* Original Theme Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>🏆</span><CountingNumber targetValue={12} suffix={t('hero.badges.years')} />
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>📦</span><CountingNumber targetValue={100} suffix={t('hero.badges.projects')} />
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-blue text-white px-4 py-2 rounded-button text-sm font-medium shadow-button">
                    <span>⭐</span><CountingNumber targetValue={4.9} decimalPlaces={1} suffix={t('hero.badges.rating')} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                    {t('hero.headline')}
                    <br />
                    <span className="bg-gradient-blue bg-clip-text text-transparent min-w-[300px] inline-block">
                      {text}<span className="ml-1 border-r-4 border-blue-500 animate-blink"></span>
                    </span>
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                    {t('hero.subheadline')}
                  </p>
                </div>

                <button onClick={scrollToWork} className="group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium border-2 bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                  <ArrowDown size={20} />
                  <span>{t('hero.viewWork')}</span>
                </button>
              </div>
            </div>

            {/* Right Column - Mirror Glass Form with REDESIGNED FLOATING LABELS */}
            <div className="lg:col-span-2">
              <div 
                className="rounded-3xl p-8 md:p-10 shadow-2xl bg-blue-100/30 backdrop-blur-md border border-white/40" 
                style={{ animation: showAnimations ? 'modernPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards' : 'none', opacity: showAnimations ? 0 : 1 }}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">{t('hero.form.title')}</h2>
                    <p className="text-sm mt-2 text-gray-700">{t('hero.form.subtitle')}</p>
                  </div>

                  <form className="space-y-8 mt-8" onSubmit={handleSubmit}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* 1. Floating Name */}
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
                          {t('hero.form.name')} *
                        </label>
                      </div>

                      {/* 2. Floating Email */}
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
                          {t('hero.form.email')} *
                        </label>
                      </div>
                    </div>

                    {/* 3. Floating Mobile Number (Redesigned to match Name/Email style) */}
                    <div className="relative group flex items-end border-b-2 border-gray-300 focus-within:border-gray-900 transition-colors pt-2">
                      {/* Country Selector */}
                      <div className="relative" onMouseEnter={() => setIsCountryOpen(true)} onMouseLeave={() => { setIsCountryOpen(false); setSearchQuery(''); }}>
                        <button type="button" className="flex items-center gap-2 py-3 pr-3 font-bold text-sm text-gray-900 outline-none">
                          <img src={`https://flagcdn.com/w20/${selectedCountry.code}.png`} className="w-5 rounded-sm" alt="flag" />
                          <span>{selectedCountry.dial}</span>
                          <ChevronDown size={14} className={`transition-transform duration-300 text-gray-500 ${isCountryOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown List */}
                        <div className={`absolute top-full left-0 pt-1 z-[60] transition-all duration-300 w-64 ${isCountryOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                          <div className="bg-white border border-gray-100 rounded-xl shadow-2xl py-2 flex flex-col">
                            {/* Search Input */}
                            <div className="px-3 pb-2 border-b border-gray-100">
                              <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search country..."
                                className="w-full px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            
                            <div className="max-h-48 overflow-y-auto">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((c) => (
                                  <div 
                                    key={`${c.code}-${c.dial}`} 
                                    onClick={() => { 
                                      setSelectedCountry(c); 
                                      setIsCountryOpen(false);
                                      setSearchQuery('');
                                    }} 
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-sm font-bold text-gray-700"
                                  >
                                    <img src={`https://flagcdn.com/w20/${c.code}.png`} className="w-5 rounded-sm" alt={c.name} />
                                    <span className="flex-1 truncate">{c.name}</span>
                                    <span className="text-gray-400 font-normal">{c.dial}</span>
                                  </div>
                                ))
                              ) : (
                                <div className="px-4 py-3 text-sm text-gray-500 text-center">No results</div>
                              )}
                            </div>
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
                          {t('hero.form.mobile')} *
                        </label>
                      </div>
                    </div>

                    {/* 4. Floating Budget Dropdown or Custom Input */}
                    {showCustomBudget ? (
                      <div className="relative group border-b-2 border-gray-300 focus-within:border-gray-900 transition-colors">
                        <input 
                          type="text" 
                          required 
                          autoFocus
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full bg-transparent py-3 text-gray-900 font-bold focus:outline-none placeholder-transparent peer" 
                          placeholder=" " 
                        />
                        <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform -translate-y-6 scale-90 text-gray-700">
                          {t('hero.form.budget.label')} (Custom) *
                        </label>
                        <button 
                          type="button"
                          onClick={() => { setShowCustomBudget(false); setFormData({...formData, budget: ''}); }}
                          className="absolute right-0 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ) : (
                      <div className="relative group border-b-2 border-gray-300 hover:border-gray-900 transition-colors" onMouseEnter={() => setIsBudgetOpen(true)} onMouseLeave={() => setIsBudgetOpen(false)}>
                        <div className="w-full py-3 flex items-center justify-between cursor-pointer">
                          <span className={`font-bold transition-colors ${formData.budget ? 'text-gray-900' : 'text-transparent'}`}>
                            {formData.budget || "Placeholder"} 
                          </span>
                          <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${isBudgetOpen ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {/* Floating Label for Budget (Controlled by state existence) */}
                        <label className={`absolute left-0 pointer-events-none transition-all duration-300 ease-out origin-left transform 
                          ${formData.budget || isBudgetOpen ? '-translate-y-6 scale-90 top-3 text-gray-700' : 'top-3 text-gray-700 scale-100'}
                        `}>
                          {t('hero.form.budget.label')} *
                        </label>

                        {/* Dropdown Options */}
                        <div className={`absolute top-full left-0 pt-1 w-full z-50 transition-all duration-300 ${isBudgetOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                          <div className="bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden py-1">
                            {[t('hero.form.budget.options.0'), t('hero.form.budget.options.1'), t('hero.form.budget.options.2')].map((opt) => (
                              <div 
                                key={opt} 
                                onClick={() => { 
                                  if (opt === t('hero.form.budget.options.2')) {
                                    setShowCustomBudget(true);
                                    setFormData({...formData, budget: ''});
                                  } else {
                                    setFormData({...formData, budget: opt});
                                    setShowCustomBudget(false);
                                  }
                                  setIsBudgetOpen(false); 
                                }} 
                                className="px-6 py-4 hover:bg-blue-50 cursor-pointer text-sm font-bold text-gray-700"
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 5. Floating Project Details Textarea */}
                    <div className="relative group">
                      <textarea
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-900 font-bold focus:outline-none focus:border-gray-900 transition-colors peer placeholder-transparent resize-y min-h-[60px]"
                        placeholder=" "
                        rows={3}
                      ></textarea>
                      <label className="absolute left-0 top-3 text-gray-700 pointer-events-none transition-all duration-300 ease-out origin-left transform peer-focus:-translate-y-6 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90">
                        {t('hero.form.details')}
                      </label>
                    </div>

                    {/* ORIGINAL THEME BUTTON */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-3 bg-gradient-blue text-white px-6 py-5 rounded-button font-bold uppercase tracking-widest transition-all duration-300 shadow-button hover:shadow-lg hover:scale-[1.03] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>{t('hero.form.sending')}</span>
                        </>
                      ) : (
                        <>
                          <span>{t('hero.form.submit')}</span> <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fastZoom { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .animate-fast-zoom { animation: fastZoom 8s ease-in-out infinite; }
        @keyframes modernPop { 0% { opacity: 0; transform: scale(0.8) translateY(50px) rotateX(-10deg); } 100% { opacity: 1; transform: scale(1) translateY(0) rotateX(0deg); } }
        @keyframes blink { 50% { border-color: transparent; } }
        .animate-blink { animation: blink 0.8s step-end infinite; }
      `}</style>
    </section>
  );
};

export default Hero;