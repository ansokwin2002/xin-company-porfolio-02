import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import { 
  ShieldCheck, RefreshCw, Eye, ShieldAlert, ChevronRight 
} from 'lucide-react';

// --- 1. UPDATED DARK SERVICE CARD ---
interface DarkServiceCardProps {
  title: string;
  desc: string;
  imageSrc: string;
  index: number;
}

const DarkServiceCard: React.FC<DarkServiceCardProps> = ({ title, desc, imageSrc, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-[#1a1a1a] border border-zinc-800 rounded-3xl p-8 pt-0 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full text-left">
        <div className="flex justify-center -mt-12 mb-6">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-48 h-48 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {desc}
        </p>
      </div>
    </div>
  );
};

// --- 2. HOSTING FEATURE ITEM ---
interface HostingFeatureItemProps {
  Icon: React.ElementType;
  title: string;
  index: number;
  gradient: string;
}

const HostingFeatureItem: React.FC<HostingFeatureItemProps> = ({ Icon, title, index, gradient }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`flex items-center gap-4 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${gradient} shrink-0`}>
        <Icon size={24} strokeWidth={2} />
      </div>
      <span className="text-gray-800 font-bold text-lg tracking-tight">
        {title}
      </span>
    </div>
  );
};

const HostingServer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Animation States ---
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [isH1Visible, setIsH1Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);

  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const h1Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsH1Visible(true);
    }, observerOptions);
    if (h1Ref.current) h1Observer.observe(h1Ref.current);

    const pObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsPVisible(true);
    }, observerOptions);
    if (pRef.current) pObserver.observe(pRef.current);

    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true);
    }, observerOptions);
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => {
      h1Observer.disconnect();
      pObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const whiteSectionFeatures = [
    { title: t('hosting_page.white_section.features.monitoring'), icon: Eye, gradient: "from-blue-500 to-cyan-400" },
    { title: t('hosting_page.white_section.features.ssl'), icon: ShieldCheck, gradient: "from-purple-500 to-indigo-500" },
    { title: t('hosting_page.white_section.features.backups'), icon: RefreshCw, gradient: "from-green-400 to-emerald-500" },
    { title: t('hosting_page.white_section.features.ddos'), icon: ShieldAlert, gradient: "from-rose-500 to-red-400" },
  ];

  const darkSectionCards = [
    { title: t('hosting_page.dark_section.items.website.title'), image: "/assets/images/p12.png", desc: t('hosting_page.dark_section.items.website.desc') },
    { title: t('hosting_page.dark_section.items.mobile.title'), image: "/assets/images/p13.png", desc: t('hosting_page.dark_section.items.mobile.desc') },
    { title: t('hosting_page.dark_section.items.vps.title'), image: "/assets/images/p15.png", desc: t('hosting_page.dark_section.items.vps.desc') },
    { title: t('hosting_page.dark_section.items.dedicated.title'), image: "/assets/images/p14.png", desc: t('hosting_page.dark_section.items.dedicated.desc') }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />
      <main>
        {/* --- HERO SECTION (Updated with Animation) --- */}
        <section className="bg-gradient-blue pt-40 pb-24 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 
              ref={h1Ref}
              className={`text-5xl md:text-6xl font-extrabold mb-6 transition-all duration-700 ease-out ${
                isH1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-black">{t('hosting_page.hero.title_part1')}</span> <span className="text-white">{t('hosting_page.hero.title_part2')}</span>
            </h1>
            <p 
              ref={pRef}
              className={`text-lg text-white opacity-90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 ${
                isPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {t('hosting_page.hero.desc')}
            </p>
          </div>
        </section>

        {/* --- WHITE SECTION --- */}
        <section ref={sectionRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
              <div className={`transition-all duration-1000 transform ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <img src="/assets/images/p4.png" alt="Hosting" className="w-full max-w-[500px] mx-auto drop-shadow-2xl" />
              </div>
              <div className={`transition-all duration-1000 transform ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
                  {t('hosting_page.white_section.title')}
                </h2>
                <div className="space-y-6 text-gray-600 mb-12">
                  <p>{t('hosting_page.white_section.web_hosting_desc')}</p>
                  <p>{t('hosting_page.white_section.mobile_hosting_desc')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
                  {whiteSectionFeatures.map((item, idx) => (
                    <HostingFeatureItem key={idx} index={idx} Icon={item.icon} title={item.title} gradient={item.gradient} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- DARK SERVICES SECTION --- */}
        <section className="py-32 bg-black text-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {t('hosting_page.dark_section.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-24">
              {darkSectionCards.map((service, idx) => (
                <DarkServiceCard 
                  key={idx} 
                  index={idx} 
                  title={service.title} 
                  desc={service.desc} 
                  imageSrc={service.image} 
                />
              ))}
            </div>

            <div className="flex justify-center mt-20">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-blue text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
                >
                {t('hosting_page.dark_section.cta_button')} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <StartYourNextBigProject />
      <Footer />
      <ScrollToTop />
      <TelegramLink />
    </div>
  );
};

export default HostingServer;