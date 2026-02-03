import React from 'react';
import { ArrowRight, Palette, Smartphone, Monitor, TrendingUp, Lightbulb, Cloud, MessageCircle, Settings, Briefcase, Clock, DollarSign, Handshake, UserCircle, MessageSquare, Target } from 'lucide-react';

interface ServiceCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  number: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ IconComponent, title, description, number }) => (
  <div className="relative group h-full">
    {/* Decorative gradient glow - positioned to overflow top-right corner */}
    <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-bl from-blue-300 via-blue-200 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"></div>
    
    {/* Card Container */}
    <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-visible">
      {/* Number Badge - Top Right */}
      <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-white font-bold text-xl">{number}</span>
      </div>
      
      {/* Icon Container - Light Blue Background */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-gradient-blue rounded-2xl flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Learn More Link */}
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
}

const PromiseCard: React.FC<PromiseCardProps> = ({ IconComponent, title, number }) => (
  <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4">
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
    {
      IconComponent: Palette,
      title: 'Creative designs and UI/UX designs',
      description: 'By combining creative design with effective UI/UX strategies, we gain a competitive edge in digital presence, enhance customer satisfaction, and...',
      number: '01'
    },
    {
      IconComponent: Smartphone,
      title: 'Mobile App Development',
      description: 'We help enterprises and startups innovate and develop outstanding mobile applications (iOS & Android), turning ideas into reality while...',
      number: '02'
    },
    {
      IconComponent: Monitor,
      title: 'Web App Development',
      description: 'We have an expert team ready to digitize simple websites and/or implement a full digital transformation, providing a holistic overhaul of...',
      number: '03'
    },
    {
      IconComponent: TrendingUp,
      title: 'Digital Marketing',
      description: 'Using top digital marketing and advertising services, we conduct in-depth audience needs analysis to identify the best ways to align...',
      number: '04'
    },
    {
      IconComponent: Lightbulb,
      title: 'IT Consultancy & DevOps Service',
      description: "If you're searching for a technical partner to be your software strategic partner and help grow your business, these services are designed to...",
      number: '05'
    },
    {
      IconComponent: Cloud,
      title: 'Hosting Server',
      description: 'We enhance security with advanced measures and regular backups to protect your data. These services optimize performance for faster load...',
      number: '06'
    },
    {
      IconComponent: MessageCircle,
      title: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI chatbots that provide 24/7 customer support, automate responses, and enhance user engagement with natural language...',
      number: '07'
    },
    {
      IconComponent: Settings,
      title: 'AI Automation Solutions',
      description: 'Streamline business processes with AI-powered automation. Reduce manual tasks, increase efficiency, and optimize workflows with intelligent...',
      number: '08'
    },
    {
      IconComponent: Briefcase,
      title: 'AI Strategy Consultation',
      description: 'Expert guidance on AI adoption and implementation. Develop comprehensive AI strategies aligned with your business goals to...',
      number: '09'
    }
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* How We Help Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we help{' '}
              <span className="text-blue-500">Businesses Grow?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover our comprehensive suite of services designed to elevate your digital presence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                IconComponent={service.IconComponent}
                title={service.title}
                description={service.description}
                number={service.number}
              />
            ))}
          </div>

          {/* CTA Button */}
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-yellow-300">What we</span>
                  <br />
                  Promise You?
                </h2>
                <p className="text-blue-100 text-lg">
                  Our commitment to excellence is defined by these core promises that ensure your success and satisfaction.
                </p>
              </div>

              {/* Stats */}
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

            {/* Right Side - Promise Cards */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {promises.map((promise, index) => (
                  <PromiseCard
                    key={index}
                    IconComponent={promise.IconComponent}
                    title={promise.title}
                    number={promise.number}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Let's Build Together
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;