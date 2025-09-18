import React from 'react';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Code,
  Wrench,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface ServicesProps {
  showAnimations: boolean;
}

const Services: React.FC<ServicesProps> = ({ showAnimations }) => {
  const { theme } = useTheme();

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, optimized for performance and SEO.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'CMS Integration'],
      price: 'Starting at $1,500'
    },
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Complex web applications with advanced functionality and user management systems.',
      features: ['User Authentication', 'Database Design', 'API Integration', 'Admin Panels'],
      price: 'Starting at $3,000'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and more.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics'],
      price: 'Starting at $2,500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Websites and apps designed mobile-first for optimal user experience across all devices.',
      features: ['Responsive Layout', 'Touch Optimization', 'Performance Tuned', 'Cross-Platform'],
      price: 'Starting at $1,200'
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'RESTful APIs and third-party integrations to connect your applications with other services.',
      features: ['REST APIs', 'GraphQL', 'Third-party Integration', 'Documentation'],
      price: 'Starting at $800'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, security monitoring, and technical support.',
      features: ['Regular Updates', 'Security Monitoring', '24/7 Support', 'Performance Optimization'],
      price: 'Starting at $200/month'
    },
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : ''
    }`}>
      {/* Background for Light Mode - Glassmorphism */}
      {theme !== 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/75"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-white/70 to-orange-100/60"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-rose-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-300/40 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-200/40 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        </div>
      )}
      
      {/* Background for Dark Mode - Stunning glassmorphism with background image */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image for Dark Mode */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Dark glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
          
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          
          {/* Animated geometric shapes for dark mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-rose-500/12 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/12 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-1/6 left-1/5 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/6 right-1/5 w-88 h-88 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/5 left-3/4 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-rose-900/8 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-orange-900/8 to-transparent"></div>
          </div>
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Sparkles className="text-red-500" size={24} />
                <span className={`text-sm font-semibold tracking-wider uppercase ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  What I Offer
                </span>
                <Sparkles className="text-red-500" size={24} />
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                My <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I offer comprehensive web development services to help your business 
                establish a strong online presence and achieve your digital goals.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Sparkles className="text-red-500" size={24} />
              <span className={`text-sm font-semibold tracking-wider uppercase ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                What I Offer
              </span>
              <Sparkles className="text-red-500" size={24} />
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              My <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I offer comprehensive web development services to help your business 
              establish a strong online presence and achieve your digital goals.
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            showAnimations ? (
              <Fade direction="up" delay={index * 150} triggerOnce key={index}>
                <div className={`rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group h-full flex flex-col backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                }`}>
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-red-900/30 group-hover:bg-red-800/40' 
                      : 'bg-red-50 group-hover:bg-red-100'
                  }`}>
                    <service.icon className="text-red-500" size={36} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed flex-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                        <span className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className={`pt-6 border-t mt-auto ${
                    theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-red-500">{service.price}</span>
                      <button
                        onClick={scrollToContact}
                        className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-semibold transition-all duration-300 group-hover:translate-x-1"
                      >
                        <span>Get Quote</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            ) : (
              <div
                key={index}
                className={`rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group h-full flex flex-col backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white shadow-lg'
                }`}
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-red-900/30 group-hover:bg-red-800/40' 
                    : 'bg-red-50 group-hover:bg-red-100'
                }`}>
                  <service.icon className="text-red-500" size={36} />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed flex-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className={`pt-6 border-t mt-auto ${
                  theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-500">{service.price}</span>
                    <button
                      onClick={scrollToContact}
                      className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-semibold transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Process Section */}
        {showAnimations ? (
          <Fade direction="up" delay={600} triggerOnce>
            <div className={`mt-24 rounded-3xl p-8 md:p-12 backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/20' 
                : 'bg-gray-50/80 border-gray-200/50'
            }`}>
              <h3 className={`text-4xl font-bold text-center mb-16 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                My Development Process
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                  { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
                  { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
                  { step: '04', title: 'Launch', desc: 'Testing, deployment, and ongoing support' },
                ].map((phase, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {phase.step}
                    </div>
                    <h4 className={`text-xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {phase.title}
                    </h4>
                    <p className={`leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        ) : (
          <div className={`mt-24 rounded-3xl p-8 md:p-12 backdrop-blur-sm border ${
            theme === 'dark' 
              ? 'bg-white/5 border-white/20' 
              : 'bg-gray-50/80 border-gray-200/50'
          }`}>
            <h3 className={`text-4xl font-bold text-center mb-16 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              My Development Process
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
                { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
                { step: '04', title: 'Launch', desc: 'Testing, deployment, and ongoing support' },
              ].map((phase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {phase.step}
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {phase.title}
                  </h4>
                  <p className={`leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;