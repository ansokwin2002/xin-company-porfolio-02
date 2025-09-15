import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

interface HeroProps {
  showAnimations: boolean;
}

const Hero: React.FC<HeroProps> = ({ showAnimations }) => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          {showAnimations ? (
            <Fade direction="down" triggerOnce>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  AJ
                </div>
              </div>
            </Fade>
          ) : (
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                AJ
              </div>
            </div>
          )}

          {/* Main Content */}
          {showAnimations ? (
            <Fade direction="up" delay={200} triggerOnce>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                  Alex <span className="text-red-600">Johnson</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  Freelance Web Developer
                </h2>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  I create stunning, high-performance websites and web applications that drive results. 
                  With expertise in modern technologies like Laravel, Vue.js, and Next.js, I help businesses 
                  establish a powerful online presence.
                </p>
              </div>
            </Fade>
          ) : (
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                Alex <span className="text-red-600">Johnson</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Freelance Web Developer
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I create stunning, high-performance websites and web applications that drive results. 
                With expertise in modern technologies like Laravel, Vue.js, and Next.js, I help businesses 
                establish a powerful online presence.
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          {showAnimations ? (
            <Fade direction="up" delay={400} triggerOnce>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={20} />
                </button>
                
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>
            </Fade>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>Hire Me</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          )}

          {/* Stats */}
          {showAnimations ? (
            <Fade direction="up" delay={600} triggerOnce>
              <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600">50+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600">3+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600">100%</div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </Fade>
          ) : (
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600">50+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600">3+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;