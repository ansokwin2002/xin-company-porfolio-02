import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Palette, Smartphone, Monitor, TrendingUp, Lightbulb, Cloud, MessageCircle, Settings, Briefcase, Clock, DollarSign, Handshake, UserCircle, MessageSquare, Target } from 'lucide-react';
import CountingNumber from './CountingNumber';

// --- Service Card Component (Unchanged) ---
interface ServiceCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  number: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ IconComponent, title, description, number, index }) => {
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
      className={`relative group h-full transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden group-hover:border-blue-100">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 origin-top-right"></div>
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg shadow-button z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
          <span className="font-bold text-sm text-white">{number}</span>
        </div>
        <div className="relative z-10 mb-6">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gradient-blue transition-colors duration-300">
            <IconComponent className="w-10 h-10 group-hover:stroke-white transition-colors duration-300" stroke="url(#blueGradient)" strokeWidth={1.5} />
          </div>
        </div>
        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-8 leading-tight">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>
            <a href="#" className="inline-flex items-center font-semibold group/link group-hover/link:brightness-125">
              <span className="bg-gradient-blue bg-clip-text text-transparent">Learn More </span>
              <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform bg-gradient-blue bg-clip-text text-transparent">→</span>
            </a>
        </div>
      </div>
    </div>
  );
};

// --- NEW PROMISE CARD DESIGN WITH MODERN HOVER EFFECTS ---
interface PromiseCardProps {
  IconComponent: React.ElementType;
  title: string;
  number: string;
  index: number;
}

const PromiseCard: React.FC<PromiseCardProps> = ({ IconComponent, title, number, index }) => {
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
      // Added 'group' for hover states and hover:translate/shadow logic
      className={`group bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out flex items-center gap-5 cursor-default ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Icon Wrapper: Now rotates and scales on hover */}
      <div className="w-14 h-14 bg-gradient-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-button transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
      </div>

      <div className="flex-1">
        {/* Number and Line Layout */}
        <div className="flex items-center mb-1">
            {/* Number: Turns blue on hover */}
            <span className="text-xs font-bold text-gray-900 transition-colors duration-300 group-hover:bg-gradient-blue group-hover:bg-clip-text group-hover:text-transparent">{number}</span>
            
            {/* Line: Expands thickness and changes color on hover */}
            <div className="h-[1px] bg-gray-200 flex-1 ml-3 rounded-full transition-all duration-300 group-hover:bg-gradient-blue group-hover:h-[2px]"></div>
        </div>
        
        {/* Title */}
        <h4 className="text-base font-extrabold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-black">{title}</h4>
      </div>
    </div>
  );
};

const ServicesShowcase: React.FC = () => {
  const services = [
    { IconComponent: Palette, title: 'Creative designs and UI/UX designs', description: 'By combining creative design with effective UI/UX strategies...', number: '01' },
    { IconComponent: Smartphone, title: 'Mobile App Development', description: 'We help enterprises and startups innovate and develop outstanding mobile...', number: '02' },
    { IconComponent: Monitor, title: 'Web App Development', description: 'We have an expert team ready to digitize simple websites and/or implement...', number: '03' },
    { IconComponent: TrendingUp, title: 'Digital Marketing', description: 'Using top digital marketing and advertising services, we conduct in-depth...', number: '04' },
    { IconComponent: Lightbulb, title: 'IT Consultancy & DevOps Service', description: "If you're searching for a technical partner to be your software strategic...", number: '05' },
    { IconComponent: Cloud, title: 'Hosting Server', description: 'We enhance security with advanced measures and regular backups...', number: '06' },
    { IconComponent: MessageCircle, title: 'AI Chatbot Solutions', description: 'Intelligent conversational AI chatbots that provide 24/7 customer support...', number: '07' },
    { IconComponent: Settings, title: 'AI Automation Solutions', description: 'Streamline business processes with AI-powered automation. Reduce manual...', number: '08' },
    { IconComponent: Briefcase, title: 'AI Strategy Consultation', description: 'Expert guidance on AI adoption and implementation. Develop comprehensive...', number: '09' }
  ];

  const promises = [
    { IconComponent: Clock, title: 'Commitment on time delivery', number: '01' },
    { IconComponent: DollarSign, title: 'Money back guarantee', number: '02' },
    { IconComponent: Handshake, title: 'Effective partnerships', number: '03' },
    { IconComponent: UserCircle, title: 'Expert consultation', number: '04' },
    { IconComponent: MessageSquare, title: 'Transparent communication', number: '05' },
    { IconComponent: Target, title: 'Result oriented solutions', number: '06' }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden font-sans">
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How we help <span className="bg-gradient-blue bg-clip-text text-transparent">Businesses Grow?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover our comprehensive suite of services designed to elevate your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} IconComponent={service.IconComponent} title={service.title} description={service.description} number={service.number} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-blue shadow-button text-white px-8 py-3 text-sm font-bold transition-all duration-200 rounded-full inline-flex items-center gap-2 hover:scale-105">
              Let's Discuss Your Project <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* NEW PROMISE SECTION MATCHING IMAGE */}
      <section className="bg-gradient-blue py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="space-y-8 lg:sticky lg:top-20">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
                  <span className="text-black block">What we</span>
                  <span className="text-white block">Promise You?</span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-md font-medium">
                  Our commitment to excellence is backed by these core promises that ensure your success and satisfaction
                </p>
              </div>
              
              <div className="flex gap-16 pt-4">


                <div>
                  <CountingNumber targetValue={100} suffix="%" className="text-5xl font-black text-white mb-1" />
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold">Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-1">12/7</div>
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold">Support Available</p>
                </div>
              </div>
            </div>

            {/* Right Content - Cards & Button */}
            <div className="flex flex-col items-center lg:items-end w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-10">
                {promises.map((promise, index) => (
                  <PromiseCard key={index} index={index} IconComponent={promise.IconComponent} title={promise.title} number={promise.number} />
                ))}
              </div>

              {/* White Button */}
                            <button className="bg-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 w-full md:w-auto justify-center group">
                              <span className="bg-gradient-blue bg-clip-text text-transparent">Let's Build Together</span> <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" stroke="url(#blueGradient)" strokeWidth={3} />
                            </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;