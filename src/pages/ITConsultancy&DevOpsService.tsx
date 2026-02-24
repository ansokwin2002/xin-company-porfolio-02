import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import { 
  ShieldCheck, ChevronRight, Clock, MessageSquare, 
  Users, RefreshCw, Target, Search, ClipboardCheck, 
  Map, Play, Calendar, Activity
} from 'lucide-react';

// --- 1. FEATURE CARD COMPONENT (Promising You Section) ---
interface FeatureCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  index: number;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ IconComponent, title, description, index, color }) => {
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

  const number = (index + 1).toString().padStart(2, '0');

  return (
    <div 
      ref={cardRef}
      className={`relative group h-full transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-[#111] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-zinc-800 overflow-hidden group-hover:border-blue-500/50">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110 origin-top-right"></div>
        <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg z-10 transition-transform duration-500 group-hover:scale-110">
          <span className="font-bold text-xs text-white">{number}</span>
        </div>
        <div className="relative z-10 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${color} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
            <IconComponent size={28} strokeWidth={1.5} />
          </div>
        </div>
        <div className="relative z-10 text-left">
            <h3 className="text-xl font-bold text-white mb-4 pr-12 leading-tight">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- 2. PROCESS STEP COMPONENT ---
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  isReversed?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, Icon, isReversed }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (stepRef.current) observer.observe(stepRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={stepRef}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center mb-16 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0 relative">
        <div className="relative z-10 w-24 h-24 bg-gradient-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)] group">
          <Icon className="text-white w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
      </div>
      <div className="w-full md:w-3/4 px-4 text-left">
        <div className="bg-[#f8fafc] border border-blue-100 rounded-2xl p-8 shadow-sm hover:border-blue-400/50 transition-colors duration-500">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-gradient-blue bg-clip-text text-transparent font-bold text-2xl tracking-tighter">{number}</span>
            <div className="h-[1px] flex-grow bg-blue-100"></div>
          </div>
          <h3 className="text-gray-900 text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
const ITConsultancyDevOpsService: React.FC = () => {
  const { t } = useTranslation();
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Immediate trigger for hero section pop-up
    setHeroVisible(true);
  }, []);

  const serviceList = [
    { id: 1, title: t('it_consultancy_page.growth_section.services.it_auditing.title'), desc: t('it_consultancy_page.growth_section.services.it_auditing.desc') },
    { id: 2, title: t('it_consultancy_page.growth_section.services.digital_transformation.title'), desc: t('it_consultancy_page.growth_section.services.digital_transformation.desc') },
    { id: 3, title: t('it_consultancy_page.growth_section.services.devops.title'), desc: t('it_consultancy_page.growth_section.services.devops.desc') }
  ];

  const promises = [
    { title: t('it_consultancy_page.promising_section.items.delivery.title'), icon: Clock, color: "from-blue-500 to-cyan-400", desc: t('it_consultancy_page.promising_section.items.delivery.desc') },
    { title: t('it_consultancy_page.promising_section.items.money_back.title'), icon: ShieldCheck, color: "from-pink-500 to-rose-400", desc: t('it_consultancy_page.promising_section.items.money_back.desc') },
    { title: t('it_consultancy_page.promising_section.items.partnership.title'), icon: Users, color: "from-orange-400 to-amber-500", desc: t('it_consultancy_page.promising_section.items.partnership.desc') },
    { title: t('it_consultancy_page.promising_section.items.consultation.title'), icon: MessageSquare, color: "from-lime-400 to-green-500", desc: t('it_consultancy_page.promising_section.items.consultation.desc') },
    { title: t('it_consultancy_page.promising_section.items.communication.title'), icon: RefreshCw, color: "from-purple-500 to-indigo-500", desc: t('it_consultancy_page.promising_section.items.communication.desc') },
    { title: t('it_consultancy_page.promising_section.items.results.title'), icon: Target, color: "from-fuchsia-500 to-purple-400", desc: t('it_consultancy_page.promising_section.items.results.desc') }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />

      <main>
        {/* --- BLUE HERO SECTION (Matching Hosting Animation Style) --- */}
        <section className="bg-gradient-blue pt-40 pb-24 text-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Title with Pop-up Animation */}
            <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 leading-tight transition-all duration-1000 transform ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="text-black">{t('it_consultancy_page.hero.title_part1')}</span><br />
              <span className="text-white">{t('it_consultancy_page.hero.title_part2')}</span>
            </h1>
            
            {/* Subtext with Staggered Pop-up Animation */}
            <p className={`text-white/90 text-sm md:text-base max-w-2xl mx-auto font-medium transition-all duration-1000 delay-300 transform ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t('it_consultancy_page.hero.desc')}
            </p>
          </div>
        </section>

        {/* --- SUPPORT GROWTH SECTION --- */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative">
                  <img src="/assets/images/p3.png" alt="Infrastructure" className="w-full max-w-md h-auto" />
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                  {t('it_consultancy_page.growth_section.title_main')} <br />
                  <span className="bg-gradient-blue bg-clip-text text-transparent">{t('it_consultancy_page.growth_section.title_highlight')}</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {t('it_consultancy_page.growth_section.subtitle')}
                </p>

                <div className="space-y-0 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                  {serviceList.map((item, index) => {
                    const isOpen = activeIndex === index;
                    return (
                      <div key={item.title} className={index !== serviceList.length - 1 ? 'border-b border-gray-100' : ''}>
                        <button 
                          onClick={() => setActiveIndex(isOpen ? null : index)}
                          className={`w-full flex items-center justify-between p-6 transition-all duration-300 group ${isOpen ? 'bg-blue-50/30' : 'bg-white hover:bg-gray-50'}`}
                        >
                          <div className="flex items-center gap-5">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md transition-all duration-300 ${isOpen ? 'bg-blue-700 shadow-blue-200' : 'bg-gradient-blue shadow-blue-100'}`}>
                              {index + 1}
                            </div>
                            <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
                              {item.title}
                            </span>
                          </div>
                          <ChevronRight className={`transition-all duration-300 ${isOpen ? 'rotate-90 text-blue-600' : 'text-gray-300 group-hover:text-blue-500'}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="px-6 pb-8 ml-[60px] pr-10">
                            <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- BLUE CTA STRIP --- */}
        <div className="bg-gradient-blue py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-left">
            <p className="font-semibold text-xl text-center md:text-left">{t('it_consultancy_page.cta_strip.text')}</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black font-extrabold py-4 px-8 rounded-xl shadow-xl hover:bg-blue-50 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar size={20} /> {t('it_consultancy_page.cta_strip.button')}
            </button>
          </div>
        </div>

        {/* --- PROMISING SECTION --- */}
        <section className="py-24 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('it_consultancy_page.promising_section.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('it_consultancy_page.promising_section.title_highlight')}</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              {t('it_consultancy_page.promising_section.subtitle')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promises.map((service, idx) => (
                <FeatureCard key={idx} index={idx} IconComponent={service.icon} title={service.title} description={service.desc} color={service.color} />
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-20">{t('it_consultancy_page.process_section.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('it_consultancy_page.process_section.title_highlight')}</span></h2>
            <div className="relative">
              <ProcessStep number="1.0" title={t('it_consultancy_page.process_section.steps.gap_analysis.title')} description={t('it_consultancy_page.process_section.steps.gap_analysis.desc')} Icon={Search} isReversed={false} />
              <ProcessStep number="2.0" title={t('it_consultancy_page.process_section.steps.auditing.title')} description={t('it_consultancy_page.process_section.steps.auditing.desc')} Icon={ClipboardCheck} isReversed={true} />
              <ProcessStep number="3.0" title={t('it_consultancy_page.process_section.steps.planning.title')} description={t('it_consultancy_page.process_section.steps.planning.desc')} Icon={Map} isReversed={false} />
              <ProcessStep number="4.0" title={t('it_consultancy_page.process_section.steps.execution.title')} description={t('it_consultancy_page.process_section.steps.execution.desc')} Icon={Play} isReversed={true} />
              <ProcessStep number="5.0" title={t('it_consultancy_page.process_section.steps.continuous_auditing.title')} description={t('it_consultancy_page.process_section.steps.continuous_auditing.desc')} Icon={Activity} isReversed={false} />
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

export default ITConsultancyDevOpsService;