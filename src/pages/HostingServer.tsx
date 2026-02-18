import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import { 
  ShieldCheck, RefreshCw, Eye, ShieldAlert, 
  Monitor, Smartphone, HardDrive, LayoutGrid, ChevronRight 
} from 'lucide-react';

// --- 1. DARK SERVICE CARD COMPONENT (Four Dark Cards) ---
interface DarkServiceCardProps {
  title: string;
  desc: string;
  Icon: React.ElementType;
  index: number;
}

const DarkServiceCard: React.FC<DarkServiceCardProps> = ({ title, desc, Icon, index }) => {
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
      className={`bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all duration-500"></div>
            <div className="relative w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
              <Icon size={40} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{desc}</p>
      </div>
    </div>
  );
};

// --- 2. COLORFUL ICON ITEM COMPONENT (White Section Features) ---
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
      <span className="text-gray-800 font-bold text-lg tracking-tight leading-tight">
        {title}
      </span>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const HostingServer: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true); // Trigger hero immediately

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
    { title: "Websites hosting", icon: Monitor, desc: "Our technical & software engineering team will publish your website after creating it on the internet using your domain or help you find the suitable domain for your business." },
    { title: "Mobile App hosting", icon: Smartphone, desc: "Whether you know where you want your mobile application to be hosted or haven't decided yet, we will help you ensure the greatest reach and performance." },
    { title: "VPS Servers", icon: HardDrive, desc: "We admire privacy, helping you get a virtual private server to share physical resources while remaining absolutely sure you are privately secured." },
    { title: "Dedicated Servers", icon: LayoutGrid, desc: "Used by bigger organizations hitting high traffic. A dedicated server provides maximum power for a set of related company sites." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />

      <main>
        {/* --- HERO SECTION --- */}
        <section 
          ref={heroRef} 
          className={`bg-gradient-blue pt-32 pb-24 text-center transition-all duration-1000 ease-out ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-black">Hosting and</span>&nbsp;
              <span className="text-white">Servers</span>
            </h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto text-white leading-relaxed">
              Xin QiYou Tech provides website and mobile application hosting for SMEs, as well as 
              enhanced services for larger projects through AWS. Our team will manage the servers 
              and implement high-security standards.
            </p>
          </div>
        </section>

        {/* --- WHITE CONTENT SECTION (With Isometric Image) --- */}
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* LEFT: Isometric Image */}
              <div className={`lg:sticky lg:top-32 transition-all duration-1000 transform ${
                sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <img 
                  src="/assets/images/p4.png" 
                  alt="Hosting Infrastructure" 
                  className="w-full max-w-[550px] mx-auto h-auto drop-shadow-2xl"
                />
              </div>

              {/* RIGHT: Text and Colorful Icon List */}
              <div className={`transition-all duration-1000 delay-200 transform ${
                sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                  What's the <span className="bg-gradient-blue bg-clip-text text-transparent ">Web Hosting</span> and <span className="bg-gradient-blue bg-clip-text text-transparent">Mobile App</span> hosting
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed mb-12 text-base">
                  <p>
                    Web hosting is a specific service provided by an expert team from Xin QiYou Tech, 
                    who will be responsible for keeping your website up and running 24/7.
                  </p>
                  <p>
                    Mobile App hosting supports mobile app owners by making their backend live 24/7, 
                    ensuring applications run smoothly through shared hosting, VPS, or dedicated servers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
                  {whiteSectionFeatures.map((item, idx) => (
                    <HostingFeatureItem 
                      key={idx} 
                      index={idx} 
                      Icon={item.icon} 
                      title={item.title} 
                      gradient={item.gradient}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- DARK SERVICES SECTION (Four Dark Cards) --- */}
        <section className="py-24 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Are you looking for a technology <br />
                arm to <span className="bg-gradient-blue bg-clip-text text-transparent">Hosting & Servers Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {darkSectionCards.map((service, idx) => (
                <DarkServiceCard 
                  key={idx} 
                  index={idx} 
                  title={service.title} 
                  desc={service.desc} 
                  Icon={service.icon} 
                />
              ))}
            </div>

            <div className="flex justify-center">
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