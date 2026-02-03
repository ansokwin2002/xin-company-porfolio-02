import React from 'react';
import { ArrowRight, Palette, Smartphone, Monitor, TrendingUp, Lightbulb, Cloud, MessageCircle, Settings, Briefcase, Clock, DollarSign, Handshake, UserCircle, MessageSquare, Target } from 'lucide-react';

interface ServiceCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  number: string;
  index: number; // Added index for staggered animation
}

const ServiceCard: React.FC<ServiceCardProps> = ({ IconComponent, title, description, number, index }) => (
  <div 
    className="relative group h-full"
    style={{ 
      // Staggered animation: each card waits 0.1s longer than the previous one
      animation: `modernPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards`,
      opacity: 0 
    }}
  >
    <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-bl from-blue-300 via-blue-200 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"></div>
    
    <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-visible">
      <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-white font-bold text-xl">{number}</span>
      </div>
      
      <div className="mb-6">
        <div className="w-20 h-20 bg-gradient-blue rounded-2xl flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {description}
      </p>
      
      <a href="#" className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors group">
        Learn More 
        <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </div>
);

interface PromiseCardProps {
  IconComponent: React.ElementType;
  title: string;
  number: string;
  index: number;
}

const PromiseCard: React.FC<PromiseCardProps> = ({ IconComponent, title, number, index }) => (
  <div 
    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4"
    style={{ 
      animation: `modernPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.5 + index * 0.1}s forwards`,
      opacity: 0 
    }}
  >
    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
      <IconComponent className="w-7 h-7 text-blue-500" strokeWidth={2} />
    </div>
    <div className="flex-1">
      <p className="text-xs text-gray-500 font-semibold mb-1">{number}</p>
      <h4 className="text-base font-bold text-gray-900 leading-tight">{title}</h4>
    </div>
  </div>
);

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
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* How We Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            style={{ animation: 'modernPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we help <span className="text-blue-500">Businesses Grow?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover our comprehensive suite of services designed to elevate your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                IconComponent={service.IconComponent}
                title={service.title}
                description={service.description}
                number={service.number}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-blue shadow-button px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 rounded-button inline-flex items-center gap-2 hover:shadow-lg hover:scale-105">
              Let's Discuss Your Project
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* What We Promise Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-20 px-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div style={{ animation: 'modernPop 0.8s ease-out forwards' }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-yellow-300">What we</span>
                  <br /> Promise You?
                </h2>
                <p className="text-blue-100 text-lg">
                  Our commitment to excellence ensures your success and satisfaction.
                </p>
              </div>

              <div className="flex gap-12">
                <div>
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <p className="text-blue-100 text-sm">Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2">12/7</div>
                  <p className="text-blue-100 text-sm">Expert Supports</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {promises.map((promise, index) => (
                  <PromiseCard
                    key={index}
                    index={index}
                    IconComponent={promise.IconComponent}
                    title={promise.title}
                    number={promise.number}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes modernPop {
          0% { opacity: 0; transform: scale(0.8) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ServicesShowcase;