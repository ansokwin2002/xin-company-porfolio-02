import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import { 
  ShieldCheck, RefreshCw, Eye, ShieldAlert, ChevronRight 
} from 'lucide-react';

// --- 1. UPDATED DARK SERVICE CARD (Screenshot Style) ---
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
        {/* Large 3D Image - Centered and slightly pulling up */}
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

// --- 2. HOSTING FEATURE ITEM (White Section) ---
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
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    return () => sectionObserver.disconnect();
  }, []);

  const whiteSectionFeatures = [
    { title: "24/7 Server Monitoring", icon: Eye, gradient: "from-blue-500 to-cyan-400" },
    { title: "SSL Certificates", icon: ShieldCheck, gradient: "from-purple-500 to-indigo-500" },
    { title: "Daily Backups", icon: RefreshCw, gradient: "from-green-400 to-emerald-500" },
    { title: "DDoS Protection", icon: ShieldAlert, gradient: "from-rose-500 to-red-400" },
  ];

  const darkSectionCards = [
    { 
      title: "Websites hosting", 
      image: "/assets/images/p12.png", // replace with your 3D monitor image
      desc: "Our technical & software engineering team will publish your website after creating it on the internet using your domain if you have one, or will help you find the suitable domain for your business if you don't have one." 
    },
    { 
      title: "Mobile App hosting", 
      image: "/assets/images/p13.png", // replace with your 3D mobile image
      desc: "Whether you already know where you want your mobile application to be hosted or still haven't decided yet, we will help you with the process so the application would get the greatest reach and number of downloads."
    },
    { 
      title: "VPS Servers", 
      image: "/assets/images/p15.png", // replace with your 3D vps image
      desc: "We admire privacy so much at Xin QiYou Tech, so we help you get your virtual private server so you can get the chance of sharing the physical resources while you're absolutely sure you're privately secured." 
    },
    { 
      title: "Dedicated Servers", 
      image: "/assets/images/p14.png", // replace with your 3D server image
      desc: "Dedicated servers should be used by bigger organizations, they are usually used by organizations that hit a lot of traffic each day. A dedicated server is usually used for a set of related company sites." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />
      <main>
        {/* --- HERO SECTION --- */}
        <section className="bg-gradient-blue pt-32 pb-24 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-black">Hosting and</span> <span className="text-white">Servers</span>
            </h1>
            <p className="text-lg text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
              Xin QiYou Tech provides website and mobile application hosting for SMEs, as well as 
              enhanced services for larger projects through AWS.
            </p>
          </div>
        </section>

        {/* --- WHITE SECTION --- */}
        <section ref={sectionRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className={`transition-all duration-1000 transform ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <img src="/assets/images/p4.png" alt="Hosting" className="w-full max-w-[500px] mx-auto drop-shadow-2xl" />
              </div>
              <div className={`transition-all duration-1000 transform ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
                  What's the <span className="bg-gradient-blue bg-clip-text text-transparent">Web Hosting</span> and <span className="bg-gradient-blue bg-clip-text text-transparent">Mobile App</span> hosting
                </h2>
                <div className="space-y-6 text-gray-600 mb-12">
                  <p>Web hosting is a specific service provided by an expert team from Xin QiYou Tech, who will be responsible for keeping your website up and running 24/7.</p>
                  <p>Mobile App hosting is a specific service to support the mobile app owners making their backend live 24/7 which makes the applications run smoothly.</p>
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
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Are you looking for a technology <br />
                arm to <span className="bg-gradient-blue bg-clip-text text-transparent">Hosting & Servers Services</span>
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
                <button className="bg-gradient-blue text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2">
                Get Hosting Quote <ChevronRight size={20} />
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