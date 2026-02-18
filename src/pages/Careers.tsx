import React, { useState, useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Briefcase, ArrowRight, Clock, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pop-up animation trigger
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center pt-20 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
          }`}>
            
            {/* Colorful Icon - Matches your Service Card style */}
            <div className="relative inline-block mb-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] flex items-center justify-center text-white bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-200 rotate-6 hover:rotate-0 transition-transform duration-500">
                <Briefcase size={48} strokeWidth={1.5} />
              </div>
              {/* Floating accent icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg animate-bounce">
                <Sparkles size={20} />
              </div>
            </div>

            {/* Title with Gradient Text */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              We're <span className="bg-gradient-blue bg-clip-text text-transparent">Growing!</span>
            </h1>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <Clock size={18} className="text-blue-600 animate-pulse" />
              <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">Coming Soon</span>
            </div>

            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Our recruitment portal is currently under development. We are preparing to welcome new visionaries and builders to our expert team.
            </p>

            {/* Action Button - Matches your "Let's Discuss" style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/" 
                className="bg-gradient-blue shadow-button text-white px-10 py-4 text-base font-bold transition-all duration-300 rounded-full inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                Return Home <ArrowRight size={20} />
              </Link>
              
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;