import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, MapPin, Zap, MousePointer2, Settings, LifeBuoy, 
  Search, FileText, Layout, Code, ArrowRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CountingNumber from '../specific/CountingNumber';

// --- Sub-component for the White Info Cards ---
const InfoCard = ({ icon: Icon, title, desc, index }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 rounded-3xl transition-all duration-700 ease-out shadow-sm hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

// --- Sub-component for the Process Steps ---
const ProcessStep = ({ number, icon: Icon, title, desc, index }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative bg-blue-50/50 border border-blue-100 p-8 rounded-3xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute -top-4 -left-2 w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
        {number}
      </div>
      <div className="w-14 h-14 bg-blue-200/50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const WebAgencyShowcase: React.FC = () => {
  const { t, i18n } = useTranslation();

  const stats = [
    { label: t('web_agency_showcase.stats.projects'), value: 300, suffix: "+" },
    { label: t('web_agency_showcase.stats.developers'), value: 25, suffix: "+" },
    { label: t('web_agency_showcase.stats.years'), value: 10, suffix: "+" },
    { label: t('web_agency_showcase.stats.satisfaction'), value: 98, suffix: "%" },
  ];

  const infoCards = [
    { icon: Users, title: t('web_agency_showcase.info_cards.customer.title'), desc: t('web_agency_showcase.info_cards.customer.desc') },
    { icon: MapPin, title: t('web_agency_showcase.info_cards.regional.title'), desc: t('web_agency_showcase.info_cards.regional.desc') },
    { icon: Zap, title: t('web_agency_showcase.info_cards.performance.title'), desc: t('web_agency_showcase.info_cards.performance.desc') },
    { icon: MousePointer2, title: t('web_agency_showcase.info_cards.design.title'), desc: t('web_agency_showcase.info_cards.design.desc') },
    { icon: Settings, title: t('web_agency_showcase.info_cards.agile.title'), desc: t('web_agency_showcase.info_cards.agile.desc') },
    { icon: LifeBuoy, title: t('web_agency_showcase.info_cards.support.title'), desc: t('web_agency_showcase.info_cards.support.desc') },
  ];

  const steps = [
    { icon: Search, title: t('web_agency_showcase.steps.discovery.title'), desc: t('web_agency_showcase.steps.discovery.desc') },
    { icon: FileText, title: t('web_agency_showcase.steps.strategy.title'), desc: t('web_agency_showcase.steps.strategy.desc') },
    { icon: Layout, title: t('web_agency_showcase.steps.design.title'), desc: t('web_agency_showcase.steps.design.desc') },
    { icon: Code, title: t('web_agency_showcase.steps.development.title'), desc: t('web_agency_showcase.steps.development.desc') },
  ];

  return (
    <div key={i18n.language} className="font-sans">
      {/* --- TOP SECTION (Dark) --- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            {t('web_agency_showcase.top_title')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('web_agency_showcase.top_highlight')}</span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center">
                <div className="text-4xl font-black text-white mb-2">
                  <CountingNumber targetValue={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {infoCards.map((card, i) => (
              <InfoCard key={i} {...card} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
             <button className="group relative bg-gradient-blue hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">{t('web_agency_showcase.cta_button')}</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
          </div>
        </div>
      </section>

      {/* --- BOTTOM SECTION (Process) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">
            {t('web_agency_showcase.results_title')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('web_agency_showcase.results_highlight')}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ProcessStep key={i} number={i + 1} {...step} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebAgencyShowcase;