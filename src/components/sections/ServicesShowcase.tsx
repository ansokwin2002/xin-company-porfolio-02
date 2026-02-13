import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, Palette, Smartphone, Monitor, TrendingUp, Zap, 
  ShieldCheck, Clock, DollarSign, Handshake, UserCircle, 
  MessageSquare, Target 
} from 'lucide-react';
import CountingNumber from '../specific/CountingNumber';
import { Link } from 'react-router-dom';

// --- Service Card Component (Updated with Pop Animation) ---
interface ServiceCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  number: string;
  index: number;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ IconComponent, title, description, number, index, color }) => {
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

  return (
    <div 
      ref={cardRef}
      // POP ANIMATION: Matches Digital Marketing (scale + opacity)
      className={`relative group h-full transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden group-hover:border-blue-100">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 origin-top-right"></div>
        
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
          <span className="font-bold text-sm text-white">{number}</span>
        </div>

        <div className="relative z-10 mb-6">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${color} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
            <IconComponent size={38} strokeWidth={1.5} />
          </div>
        </div>

        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-8 leading-tight">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>
            <Link to={title.includes('Creative') ? '/creative-designs-ui-ux' : title.includes('Mobile') ? '/mobile-app-development' : title.includes('Web') ? '/web-app-development' : title.includes('Digital') ? '/digital-marketing' : '#'} className="inline-flex items-center font-semibold group/link">
              <span className="bg-gradient-blue bg-clip-text text-transparent">Learn More </span>
              <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform bg-gradient-blue bg-clip-text text-transparent">→</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

// --- Promise Card Component (Updated with Pop Animation) ---
interface PromiseCardProps {
  IconComponent: React.ElementType;
  title: string;
  number: string;
  index: number;
  color: string;
}

const PromiseCard: React.FC<PromiseCardProps> = ({ IconComponent, title, number, index, color }) => {
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

  return (
    <div 
      ref={cardRef}
      className={`group bg-white rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 ease-out flex items-center gap-5 cursor-default ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
        <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-1">
            <span className="text-xs font-bold text-gray-400">{number}</span>
            <div className="h-[1px] bg-gray-100 flex-1 ml-3 rounded-full group-hover:bg-blue-100 transition-colors"></div>
        </div>
        <h4 className="text-base font-extrabold text-gray-800 leading-tight">{title}</h4>
      </div>
    </div>
  );
};

const ServicesShowcase: React.FC = () => {
  const services = [
    { IconComponent: Palette, title: 'Creative designs and UI/UX designs', description: 'By combining creative design with effective UI/UX strategies...', number: '01', color: "from-purple-500 to-indigo-500" },
    { IconComponent: Smartphone, title: 'Mobile App Development', description: 'We help enterprises and startups innovate and develop outstanding mobile...', number: '02', color: "from-blue-500 to-cyan-400" },
    { IconComponent: Monitor, title: 'Web App Development', description: 'We have an expert team ready to digitize simple websites and/or implement...', number: '03', color: "from-emerald-400 to-teal-500" },
    { IconComponent: TrendingUp, title: 'Digital Marketing', description: 'Using top digital marketing and advertising services, we conduct in-depth...', number: '04', color: "from-orange-400 to-pink-500" },
    { IconComponent: Zap, title: 'IT Consultancy & DevOps Service', description: "If you're searching for a technical partner to be your software strategic...", number: '05', color: "from-yellow-400 to-orange-500" },
    { IconComponent: ShieldCheck, title: 'Hosting Server', description: 'We enhance security with advanced measures and regular backups...', number: '06', color: "from-blue-600 to-indigo-700" },
  ];

  const promises = [
    { IconComponent: Clock, title: 'Commitment on time delivery', number: '01', color: "from-blue-400 to-blue-600" },
    { IconComponent: DollarSign, title: 'Money back guarantee', number: '02', color: "from-green-400 to-emerald-600" },
    { IconComponent: Handshake, title: 'Effective partnerships', number: '03', color: "from-purple-400 to-purple-600" },
    { IconComponent: UserCircle, title: 'Expert consultation', number: '04', color: "from-orange-400 to-red-500" },
    { IconComponent: MessageSquare, title: 'Transparent communication', number: '05', color: "from-pink-400 to-rose-500" },
    { IconComponent: Target, title: 'Result oriented solutions', number: '06', color: "from-cyan-400 to-blue-500" }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden font-sans">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-50 font-semibold text-sm mb-6 border border-blue-100">
               ✨ <span className="ml-2 uppercase tracking-wide bg-gradient-blue bg-clip-text text-transparent">Our Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How we help <span className="bg-gradient-blue bg-clip-text text-transparent">Businesses Grow?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover our comprehensive suite of services designed to elevate your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-blue shadow-button text-white px-8 py-4 text-sm font-bold transition-all duration-300 rounded-full inline-flex items-center gap-2 hover:scale-105">
              Let's Discuss Your Project <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-blue py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 lg:sticky lg:top-20">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white leading-[1.1]">
                  <span className="text-black block">What we</span>
                  Promise You?
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-md font-medium">
                  Our commitment to excellence is backed by these core promises that ensure your success and satisfaction.
                </p>
              </div>
              <div className="flex gap-12 pt-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <CountingNumber targetValue={100} suffix="%" className="text-4xl font-black text-white mb-1" />
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-bold">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {promises.map((promise, index) => (
                <PromiseCard key={index} {...promise} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;