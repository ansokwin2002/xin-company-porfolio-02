import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import WebAgencyShowcase from '../components/sections/WebAgencyShowcase';
import Footer from '../components/layout/Footer';
import { 
  Building2, ShoppingCart, Globe, FileText, LayoutDashboard, Database, 
  Languages, PieChart, Palette, Zap, MessageSquare, Cpu, ArrowRight 
} from 'lucide-react';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';

// --- 1. FEATURE CARD COMPONENT (Updated with WebAgencyShowcase Animation) ---
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
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const number = (index + 1).toString().padStart(2, '0');

  return (
    <div 
      ref={cardRef}
      // CHANGED: Animation classes now match the "pop-in" style (scale + opacity)
      className={`relative group h-full transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }} // Matching the staggered delay
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden group-hover:border-blue-100">
        {/* Decorative Corner Blob */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 origin-top-right"></div>
        
        {/* Floating Number Badge */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg shadow-button z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
          <span className="font-bold text-sm text-white">{number}</span>
        </div>

        {/* Icon Box */}
        <div className="relative z-10 mb-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${color} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
            <IconComponent size={32} strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pr-8 leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const WebAppDevelopment: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsHeroVisible(true);
    }, observerOptions);

    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsTitleVisible(true);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (sectionTitleRef.current) titleObserver.observe(sectionTitleRef.current);

    return () => {
      heroObserver.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  const categories = [
    { name: 'Corporate Websites', icon: Building2 },
    { name: 'E-Commerce', icon: ShoppingCart },
    { name: 'Web Applications', icon: Globe },
    { name: 'Landing Pages', icon: FileText },
    { name: 'Dashboards', icon: LayoutDashboard },
    { name: 'CMS Platforms', icon: Database },
  ];

  const features = [
    {
      title: 'Localization & RTL Support',
      desc: 'Multi-language websites with full RTL support for Arabic and other languages.',
      icon: Languages, 
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: 'Analytics & Tracking',
      desc: 'Comprehensive analytics integration to track user behavior and optimize conversions.',
      icon: PieChart,
      color: "from-red-400 to-pink-500"
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces designed with user experience as the top priority.',
      icon: Palette,
      color: "from-purple-400 to-blue-500"
    },
    {
      title: 'Performance Optimization',
      desc: 'Lightning-fast load times with optimized code and modern caching strategies.',
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: 'Conversion Optimization',
      desc: 'Strategic design focused on converting visitors into customers and leads.',
      icon: MessageSquare,
      color: "from-green-400 to-teal-500"
    },
    {
      title: 'Automation & Integration',
      desc: 'Seamless integration with your existing tools and automated workflows.',
      icon: Cpu,
      color: "from-cyan-400 to-blue-500"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />

      <main>
        {/* --- 1. HERO SECTION --- */}
        <section 
          ref={heroRef}
          className={`bg-gradient-blue pt-32 pb-24 text-center transition-all duration-1000 ease-out ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-black">Design the right web</span><br />
                <span className="text-white">Application With Expert Team</span>
              </h1>
              <p className="text-lg opacity-90 max-w-3xl mx-auto text-white leading-relaxed">
                Design the right website & web app, in the right way, at the right time with the 
                QiYou Tech development team.
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. WHAT WE DEVELOP SECTION --- */}
        <section className="pt-24 pb-12 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div ref={sectionTitleRef}>
              <div className={`text-center mb-16 transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-100 font-semibold text-sm mb-6 border border-blue-200">
                  🚀 <span className="ml-2 uppercase tracking-wide bg-gradient-blue bg-clip-text text-transparent">Our Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What We <span className="bg-gradient-blue bg-clip-text text-transparent">Develop?</span>
                </h2>
              </div>

              <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                {categories.map((cat, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-md border border-gray-100 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                    <cat.icon size={22} className="text-blue-600" />
                    <span className="font-bold text-gray-800">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid - Now with "Pop" Animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {features.map((feature, idx) => (
                <FeatureCard 
                  key={idx}
                  index={idx}
                  IconComponent={feature.icon}
                  title={feature.title}
                  description={feature.desc}
                  color={feature.color}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="group relative bg-gradient-blue hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Discuss Your Web Project</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <WebAgencyShowcase/>
      <StartYourNextBigProject />
      <Footer />
      <ScrollToTop/>
      <TelegramLink />
    </div>
  );
};

export default WebAppDevelopment;