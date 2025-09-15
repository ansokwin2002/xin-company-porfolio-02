import React from 'react';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Code,
  Wrench,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

interface ServicesProps {
  showAnimations: boolean;
}

const Services: React.FC<ServicesProps> = ({ showAnimations }) => {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                My <span className="text-red-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I offer comprehensive web development services to help your business 
                establish a strong online presence and achieve your digital goals.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I offer comprehensive web development services to help your business 
              establish a strong online presence and achieve your digital goals.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            showAnimations ? (
              <Fade direction="up" delay={index * 150} triggerOnce key={index}>
                <div
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-lg mb-6 group-hover:bg-red-100 transition-colors">
                    <service.icon className="text-red-600" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-red-600">{service.price}</span>
                      <button
                        onClick={scrollToContact}
                        className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors group-hover:translate-x-1"
                      >
                        <span>Get Quote</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            ) : (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-lg mb-6 group-hover:bg-red-100 transition-colors">
                  <service.icon className="text-red-600" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">{service.price}</span>
                    <button
                      onClick={scrollToContact}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors group-hover:translate-x-1"
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={16} />
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
            <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                My Development Process
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                  { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
                  { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
                  { step: '04', title: 'Launch', desc: 'Testing, deployment, and ongoing support' },
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {phase.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h4>
                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        ) : (
          <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              My Development Process
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
                { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
                { step: '04', title: 'Launch', desc: 'Testing, deployment, and ongoing support' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h4>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
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