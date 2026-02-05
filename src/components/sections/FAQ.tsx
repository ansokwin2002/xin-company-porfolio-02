import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '../contexts/ThemeContext';

interface FAQProps {
  showAnimations: boolean;
}

const FAQ: React.FC<FAQProps> = ({ showAnimations }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 1-2 weeks, while complex web applications can take 4-8 weeks. I provide detailed timelines during the initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'My pricing is project-based and depends on complexity, features, and timeline. Simple websites start at $100+, while custom web applications range from $800-$1000+. I provide detailed quotes after understanding your specific requirements and always maintain transparent pricing with no hidden costs.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes! I offer comprehensive maintenance packages starting at $20/month, which include regular updates, security monitoring, backups, performance optimization, and technical support. I also provide emergency support and can handle urgent issues quickly.'
    },
    {
      question: 'How many revisions are included in the project?',
      answer: 'I include up to 3 rounds of revisions in all my projects to ensure you\'re completely satisfied with the final result. Additional revisions beyond this can be accommodated at an hourly rate. I work closely with clients throughout the process to minimize the need for extensive revisions.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in modern web technologies including Laravel (PHP), Vue.js, React, Next.js, and Tailwind CSS. I also work with databases like MySQL and PostgreSQL, and have experience with various APIs and third-party integrations.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones. I use various communication tools like Slack, Zoom, and email to ensure smooth collaboration regardless of location. All project documentation and communication are conducted in English.'
    },
    {
      question: 'Can you help with existing website improvements?',
      answer: 'Yes, I can help improve existing websites by adding new features, optimizing performance, updating designs, fixing bugs, or migrating to modern technologies. I\'ll first audit your current site and provide recommendations for improvements.'
    },
    {
      question: 'What information do you need to start a project?',
      answer: 'To get started, I need to understand your business goals, target audience, preferred design style, required features, and any specific technical requirements. I typically start with a detailed consultation call followed by a comprehensive project brief.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'While I don\'t directly provide hosting services, I can help you choose the right hosting solution for your needs and assist with setup and deployment. I work with various hosting providers and can recommend the best options based on your project requirements and budget.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'I typically work with a 50% upfront payment to begin the project, with the remaining 50% due upon completion. For larger projects, I can arrange milestone-based payments. I accept various payment methods and provide detailed invoices for all transactions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' 
        : ''
    }`}>
      {/* Background for Light Mode - Glassmorphism */}
      {theme !== 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/75"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 via-white/70 to-violet-100/60"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-indigo-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/5 right-1/5 w-88 h-88 bg-violet-300/40 rounded-full blur-3xl animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-purple-200/40 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        </div>
      )}
      
      {/* Background for Dark Mode - Stunning glassmorphism with background image */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {/* Background Image for Dark Mode */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80)` }}
          />
          
          {/* Dark glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
          
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          
          {/* Animated geometric shapes for dark mode */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary animated shapes */}
            <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-indigo-500/12 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/5 right-1/5 w-88 h-88 bg-violet-500/12 rounded-full blur-3xl animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Secondary animated shapes */}
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-4/5 right-1/6 w-48 h-48 bg-lavender-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/6 left-5/6 w-56 h-56 bg-amethyst-500/10 rounded-full blur-3xl animate-pulse delay-750"></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-indigo-900/8 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-violet-900/8 to-transparent"></div>
          </div>
        </div>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Sparkles className="text-red-500" size={24} />
                <span className={`text-sm font-semibold tracking-wider uppercase ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Common Questions
                </span>
                <Sparkles className="text-red-500" size={24} />
              </div>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <HelpCircle className="text-red-500" size={40} />
                <h2 className={`text-5xl md:text-6xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">FAQ</span>
                </h2>
              </div>
              <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Get answers to common questions about my web development services, 
                pricing, and process. Can't find what you're looking for? Feel free to contact me!
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
                Common Questions
              </span>
              <Sparkles className="text-red-500" size={24} />
            </div>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <HelpCircle className="text-red-500" size={40} />
              <h2 className={`text-5xl md:text-6xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">FAQ</span>
              </h2>
            </div>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get answers to common questions about my web development services, 
              pricing, and process. Can't find what you're looking for? Feel free to contact me!
            </p>
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            showAnimations ? (
              <Fade direction="up" delay={index * 100} triggerOnce key={index}>
                <div
                  className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                      : 'bg-white/80 border-gray-200/50 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-2xl transition-colors duration-300 ${
                      activeIndex === index 
                        ? theme === 'dark' ? 'bg-white/5' : 'bg-red-50/50'
                        : ''
                    }`}
                  >
                    <span className={`font-bold text-lg pr-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`transition-all duration-300 flex-shrink-0 ${
                        activeIndex === index 
                          ? 'transform rotate-180 text-red-500' 
                          : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    />
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-8 pb-6">
                      <div className={`border-t pt-6 ${
                        theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                      }`}>
                        <p className={`leading-relaxed text-lg ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Fade>
            ) : (
              <div
                key={index}
                className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                    : 'bg-white/80 border-gray-200/50 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-2xl transition-colors duration-300 ${
                    activeIndex === index 
                      ? theme === 'dark' ? 'bg-white/5' : 'bg-red-50/50'
                      : ''
                  }`}
                >
                  <span className={`font-bold text-lg pr-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`transition-all duration-300 flex-shrink-0 ${
                      activeIndex === index 
                        ? 'transform rotate-180 text-red-500' 
                        : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                </button>
                
                {activeIndex === index && (
                  <div className="px-8 pb-6">
                    <div className={`border-t pt-6 ${
                      theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                    }`}>
                      <p className={`leading-relaxed text-lg ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </div>

        {/* CTA */}
        {showAnimations ? (
          <Fade direction="up" delay={600} triggerOnce>
            <div className={`text-center mt-20 p-10 rounded-3xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/20' 
                : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50'
            }`}>
              <h3 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Still Have Questions?
              </h3>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm here to help! Get in touch and I'll answer any questions you have about your project.
              </p>
              <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </button>
            </div>
          </Fade>
        ) : (
          <div className={`text-center mt-20 p-10 rounded-3xl backdrop-blur-sm border ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/20' 
              : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50'
          }`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Still Have Questions?
            </h3>
            <p className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm here to help! Get in touch and I'll answer any questions you have about your project.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById('contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;