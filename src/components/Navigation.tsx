import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
    <circle cx="5.16431" cy="25.9375" r="1.5625" fill="url(#paint0_linear_9_331)"/>
    <circle cx="22.0393" cy="25.9375" r="1.5625" fill="url(#paint1_linear_9_331)"/>
    <path d="M13.6018 21.25L1.72681 20V24.7475C1.72681 25.21 2.17868 26.1038 3.46556 26.3731C11.6568 27.6231 15.8656 27.5931 23.8181 26.3431C25.1043 26.1438 25.4768 25.21 25.4768 24.7475V20L13.6018 21.25Z" fill="url(#paint2_linear_9_331)"/>
    <path d="M3.90743 21.25L1.45368 19.6012L1.10181 20V24.7475C1.10181 25.21 1.55368 26.1037 2.84056 26.3731C3.20368 26.4288 3.55493 26.4781 3.90743 26.5288V21.25Z" fill="url(#paint3_linear_9_331)"/>
    <path d="M22.3518 20.3125V26.5638C22.8318 26.495 23.3199 26.4213 23.8181 26.3431C25.1043 26.1438 25.4768 25.21 25.4768 24.7475V20L22.3518 20.3125Z" fill="url(#paint4_linear_9_331)"/>
    <path d="M27.0393 5.00063L26.3512 3.62375C26.1899 3.30125 25.9218 3.045 25.5924 2.89813L24.3493 2.34563C21.7268 1.25 18.6018 0 13.6018 0C8.60182 0 5.47682 1.25 2.85432 2.34625L1.6112 2.89875C1.28182 3.045 1.0137 3.30125 0.852448 3.62375L0.164323 5.00063C-0.0344272 5.3975 -0.0538021 5.86063 0.111198 6.27313L0.881823 8.82438C1.0087 9.14188 1.34745 9.32063 1.6812 9.24625L6.69807 8.27C7.09557 8.18187 7.40307 7.8675 7.48308 7.46812L7.56995 7.03312L7.97682 4.375C8.20932 3.9875 8.6287 3.75 9.08057 3.75H13.6018H18.1231C18.575 3.75 18.9943 3.9875 19.2268 4.375L19.7206 7.46813C19.8006 7.8675 20.1081 8.18188 20.5056 8.27L25.5225 9.24625C25.8562 9.32063 26.195 9.14188 26.3218 8.82438L27.0925 6.27313C27.2575 5.86063 27.2381 5.3975 27.0393 5.00063Z" fill="url(#paint5_linear_9_331)"/>
    <path d="M19.2668 3.72313C20.2643 7.11438 21.0025 7.57313 22.5881 8.66L19.6262 8.00188L19.2668 3.72313Z" fill="url(#paint6_linear_9_331)"/>
    <path d="M7.95991 3.72313C6.96241 7.11438 6.10491 7.57313 4.51929 8.66L7.84054 7.6725L7.95991 3.72313Z" fill="url(#paint7_linear_9_331)"/>
    <path d="M23.0369 9.74063C22.945 9.38812 22.7194 9.08375 22.2856 8.83H13.6019H4.85186C4.56186 9.05375 4.26874 9.33938 4.16686 9.74063L1.72686 20C1.58936 20.6525 2.32811 21.2169 3.01999 21.33C10.64 22.0894 16.8637 22.1044 24.1825 21.33C24.895 21.2469 25.6144 20.6525 25.4769 20L23.0369 9.74063Z" fill="url(#paint8_linear_9_331)"/>
    <path d="M18.3993 7.14938L17.418 7.035V5.625H9.78615V7.035L8.55552 7.20938C7.06115 7.42688 5.84302 8.15188 4.78552 8.885H9.78615H13.6018H17.4174H22.378C21.1224 8.0325 19.8936 7.36688 18.3993 7.14938Z" fill="url(#paint9_linear_9_331)"/>
    <path d="M0.356188 5.87188C0.222438 5.87188 0.0943132 5.79375 0.0330629 5.66C-0.0519371 5.475 0.358063 4.91813 0.536813 4.83063C9.41306 0.438751 17.7612 0.0512509 26.6674 4.44188C26.8456 4.53063 27.2562 5.475 27.1712 5.66063C27.0862 5.845 26.8737 5.9225 26.6949 5.83687C17.9918 1.54438 9.18244 1.545 0.509313 5.83563C0.459938 5.86 0.407438 5.87188 0.356188 5.87188Z" fill="url(#paint10_linear_9_331)"/>
    <defs>
      <linearGradient id="paint0_linear_9_331" x1="5.14431" y1="24.0862" x2="5.14431" y2="27.1869" gradientUnits="userSpaceOnUse"><stop offset="1" stopColor="#333332"/><stop offset="0.806" stopColor="#3F3F3F"/><stop offset="0.294" stopColor="#5B5B5B"/><stop stopColor="#666666"/></linearGradient>
      <linearGradient id="paint1_linear_9_331" x1="22.0193" y1="24.0862" x2="22.0193" y2="27.1869" gradientUnits="userSpaceOnUse"><stop offset="1" stopColor="#333332"/><stop offset="0.806" stopColor="#3F3F3F"/><stop offset="0.294" stopColor="#5B5B5B"/><stop stopColor="#666666"/></linearGradient>
      <linearGradient id="paint2_linear_9_331" x1="7.66431" y1="21.8239" x2="7.66431" y2="21.8239" gradientUnits="userSpaceOnUse"><stop offset="1" stopColor="#ED9A1E"/><stop stopColor="#FFCA28"/></linearGradient>
      <linearGradient id="paint5_linear_9_331" x1="12.8181" y1="-0.47875" x2="12.8181" y2="10.6688" gradientUnits="userSpaceOnUse"><stop offset="0.964" stopColor="#ED9A1E"/><stop stopColor="#FFCA28"/></linearGradient>
      <linearGradient id="paint8_linear_9_331" x1="13.6994" y1="42.9419" x2="13.6994" y2="17.4044" gradientUnits="userSpaceOnUse"><stop offset="1" stopColor="#FFCA28"/><stop stopColor="#ED9B1E"/></linearGradient>
      <linearGradient id="paint10_linear_9_331" x1="13.0156" y1="-0.168125" x2="13.0156" y2="11.0706" gradientUnits="userSpaceOnUse"><stop offset="0.964" stopColor="#ED9A1E"/><stop stopColor="#FFCA28"/></linearGradient>
    </defs>
  </svg>
);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation();

  const navItems = [
    { id: 'home', label: 'Home', type: 'link' },
    { id: 'products', label: 'Products', type: 'dropdown', items: [{ id: 'p1', label: 'Product 1' }, { id: 'p2', label: 'Product 2' }] },
    { id: 'services', label: 'Services', type: 'dropdown', items: [{ id: 's1', label: 'Service 1' }, { id: 's2', label: 'Service 2' }] },
    { id: 'company', label: 'Company', type: 'dropdown', items: [{ id: 'about', label: 'About Us' }, { id: 'careers', label: 'Careers' }] },
    { id: 'blog', label: 'Blog', type: 'link' },
  ];

  const languages = [
    { code: 'en', label: 'Eng' },
    { code: 'km', label: 'ខ្មែរ' },
    { code: 'zh-CN', label: '中文' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const getCurrentLanguage = () => languages.find(l => l.code === i18n.language) || languages[0];

  // Common styles for the gold line effect
  const goldLineClass = "relative transition-colors before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gold before:scale-x-0 before:origin-center before:transition-transform before:duration-300 group-hover:before:scale-x-100 hover:before:scale-x-100";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <span className="font-bold text-2xl text-gold">QıYOU</span>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-red-500" style={{ top: '3px', left: '17.5px' }}></span>
            </div>
            <span className="text-xs text-gray-600 -mt-1">Your Success Partner</span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-10 h-full">
            {navItems.map((item) => (
              <div key={item.id} className="relative group h-full flex items-center">
                {item.type === 'link' ? (
                  <button onClick={() => scrollToSection(item.id)} className={`text-sm text-gray-700 hover:text-gray-900 py-1 ${goldLineClass}`}>
                    {item.label}
                  </button>
                ) : (
                  <>
                    <button className={`flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900 py-1 ${goldLineClass}`}>
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all pt-1 z-50">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 w-48">
                        {item.items?.map(sub => (
                          <button key={sub.id} onClick={() => scrollToSection(sub.id)} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 hover:text-gold transition-colors">
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center space-x-6 h-full">
            
            {/* Language Switcher with Gold Line */}
            <div className="hidden lg:flex items-center h-full">
               <div className="relative group h-full flex items-center">
                <button className={`flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900 py-1 ${goldLineClass}`}>
                  <span>{getCurrentLanguage().label}</span>
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all pt-1 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[100px]">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => i18n.changeLanguage(lang.code)} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${i18n.language === lang.code ? 'text-gold font-medium' : 'text-gray-700'}`}>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <button onClick={() => scrollToSection('contact')} className="hidden lg:flex items-center space-x-2 px-6 py-2.5 text-sm font-medium text-white rounded-button bg-gradient-blue shadow-button hover:scale-105 transition-transform">
              <ContactIcon />
              <span>Contact Us</span>
            </button>

            {/* Mobile menu toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
        <div className="px-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.type === 'link' ? (
                <button onClick={() => scrollToSection(item.id)} className="block w-full text-left py-2 text-base text-gray-700 hover:text-gold font-medium">
                  {item.label}
                </button>
              ) : (
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    className="flex items-center justify-between w-full text-left py-2 text-base text-gray-700 hover:text-gold font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={18} className={`transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 ease-out overflow-hidden ${activeDropdown === item.id ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>
                    <div className="pl-4 border-l border-gray-200 ml-2 py-1 space-y-1">
                      {item.items?.map(sub => (
                        <button key={sub.id} onClick={() => scrollToSection(sub.id)} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-gold">
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-gray-100">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'languages' ? null : 'languages')}
              className="flex items-center justify-between w-full text-left py-2 text-base text-gray-700 hover:text-gold font-medium"
            >
              <span>{getCurrentLanguage().label}</span>
              <ChevronDown size={18} className={`transition-transform ${activeDropdown === 'languages' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-out overflow-hidden ${activeDropdown === 'languages' ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>
              <div className="pl-4 border-l border-gray-200 ml-2 py-1 space-y-1">
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => i18n.changeLanguage(lang.code)} className={`block w-full text-left py-2 text-sm ${i18n.language === lang.code ? 'text-gold font-medium' : 'text-gray-600 hover:text-gold'}`}>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <button onClick={() => scrollToSection('contact')} className="w-full flex items-center justify-center space-x-2 px-6 py-2.5 text-sm font-medium text-white rounded-button bg-gradient-blue shadow-button hover:scale-105 transition-transform mt-4">
            <ContactIcon />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;