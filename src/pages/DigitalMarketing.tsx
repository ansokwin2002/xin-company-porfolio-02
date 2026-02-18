import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import { 
  BarChart3, TrendingUp, Users, Search, Smartphone, MapPin, 
  ArrowRight, BrainCircuit, PlayCircle, BarChart4 
} from 'lucide-react';

// --- 1. FEATURE CARD COMPONENT ---
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
      <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden group-hover:border-blue-100">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 origin-top-right"></div>
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
          <span className="font-bold text-sm text-white">{number}</span>
        </div>
        <div className="relative z-10 mb-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${color} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
            <IconComponent size={32} strokeWidth={1.5} />
          </div>
        </div>
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pr-12 leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] group">
          <Icon className="text-white w-10 h-10 md:w-14 md:h-14 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
      </div>
      <div className="w-full md:w-3/4 px-4">
        <div className="bg-[#0a1219] border border-blue-900/30 rounded-2xl p-8 md:p-10 shadow-2xl hover:border-blue-500/50 transition-colors duration-500">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-gradient-blue bg-clip-text text-transparent font-bold text-2xl tracking-tighter">{number}</span>
            <div className="h-[1px] flex-grow bg-blue-900/50"></div>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const DigitalMarketing: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsHeroVisible(true);
    }, { threshold: 0.1 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const marketingServices = [
    { title: 'Analytics reports (G4 Analytics)', desc: 'Data privacy compliance is a top priority in Google Analytics 4 (GA4), which leverages machine learning for predictive insights. We provide your business with unique, efficient reports using event-based tracking to deliver a comprehensive view of user interactions across platforms and devices.', icon: BarChart3, color: "from-blue-500 to-cyan-400" },
    { title: 'Marketing performance improvement', desc: 'We specialize in conversion rate (CRO) and cost-per-click (CPC) optimization to boost your ad ROI. By continuously testing and refining website elements, including all call-to-action buttons, and regularly analyzing key digital marketing metrics, we ensure your campaigns deliver better results consistently.', icon: TrendingUp, color: "from-pink-500 to-rose-400" },
    { title: 'Customer Acquisition', desc: 'Our business approach focuses on expanding your customer base by acquiring the right customers through digital channels. We target the right audience across various platforms, attracting more customers and transforming them into loyal brand advocates.', icon: Users, color: "from-orange-400 to-amber-500" },
    { title: 'Website SEO', desc: 'We optimize your app for both Apple App Store and Google Play Store to boost visibility and improve search rankings. By enhancing keywords, app metadata, including title, description, and screenshots, we attract real users, increase downloads, and drive meaningful engagement.', icon: Search, color: "from-lime-400 to-green-500" },
    { title: 'App Store Optimization', desc: 'We will optimize your app in the Apple App Store and Google Play Store, as this is crucial for improving its visibility and ranking in search results. This will increase downloads and attract real users through key actions such as keyword optimization, app metadata enhancement (including app title, description, and detailed screenshots).', icon: Smartphone, color: "from-purple-500 to-indigo-500" },
    { title: 'Google Maps Listing', desc: 'We optimize your Google Maps listing to boost your business’s online visibility and attract more customers. Our approach includes business verification, adding high-quality photos, selecting the right categories, creating a product catalog, and posting relevant updates to strengthen your brand presence.', icon: MapPin, color: "from-fuchsia-500 to-purple-400" },
  ];

  const processSteps = [
    { number: "1.0", title: "Discovery", description: "We start by researching your business, competitors, and target audience, analyzing market trends and business goals through SWOT, TWOS, and PESTEL analyses. This will set the foundation for a comprehensive marketing strategy.", Icon: Search, isReversed: false },
    { number: "2.0", title: "Strategic Planning", description: "Following our research, we define clear objectives and goals for your digital marketing campaign, confirm the target audience, and select the most effective channels to drive business growth.", Icon: BrainCircuit, isReversed: true },
    { number: "3.0", title: "Strategy Execution", description: "After the discovery and strategic planning phases, we move into execution. Execution phase covers content creation, campaign setup, media buying, social media, email marketing, and more. All activities run seamlessly alongside ongoing SEO and SEM efforts to maximize results.", Icon: PlayCircle, isReversed: false },
    { number: "4.0", title: "Measuring & Reporting", description: "Measuring and reporting are key to continuous improvement. We provide monthly reports to keep your business informed of results and take daily corrective actions to optimize your campaigns and achieve your target goals.", Icon: BarChart4, isReversed: true }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section ref={heroRef} className={`bg-gradient-blue pt-32 pb-24 text-center transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-black">Grow your digital presence by</span><br />
              <span className="text-white">performance marketing</span>
            </h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto text-white leading-relaxed">
              We have a proven track record of helping businesses capture brand attention and strengthen relationships with various audiences. We conduct in-depth analysis of audience requirements to determine the best ways to connect brands with their business objectives through top digital marketing and advertising services.
            </p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How we increase <span className="bg-gradient-blue bg-clip-text text-transparent">Company's Revenues?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Xin QiYou Tech’s marketing experts are dedicated to boosting your business revenue with tailored strategies designed to meet your unique needs. Discover our full range of digital marketing services designed to maximize performance and drive measurable growth.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {marketingServices.map((service, idx) => (
                <FeatureCard key={idx} index={idx} IconComponent={service.icon} title={service.title} description={service.desc} color={service.color} />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION (The Dark Layout) */}
        <section className="py-24 bg-black overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                Our Process <span className="bg-gradient-blue bg-clip-text text-transparent">And how we work</span>
              </h2>
            </div>
            <div className="relative">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <StartYourNextBigProject />
      <Footer />
      <ScrollToTop/>
      <TelegramLink />
    </div>
  );
};

export default DigitalMarketing;