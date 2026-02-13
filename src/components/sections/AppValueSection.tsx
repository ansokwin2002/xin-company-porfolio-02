import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, ArrowRight, Tag, Rocket, Headphones, Star, Trophy } from 'lucide-react';

const AppValueSection: React.FC = () => {
  const sectionRef2 = useRef<HTMLElement>(null);
  const [isVisible2, setIsVisible2] = useState(false);

  const sectionRef1 = useRef<HTMLElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef2.current) {
      observer2.observe(sectionRef2.current);
    }

    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef1.current) {
      observer1.observe(sectionRef1.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer2.unobserve(sectionRef2.current);
      }
      if (sectionRef1.current) {
        observer1.unobserve(sectionRef1.current);
      }
    };
  }, []);

  return (
    <div className="font-sans">
      {/* SECTION 1: Value Proposition (White Background) */}
      <section 
        ref={sectionRef1} 
        className={`bg-white py-20 lg:py-28 overflow-hidden transition-all duration-1000 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Your time and Money <br />
                <span className="bg-gradient-blue bg-clip-text text-transparent">Are important?</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                You worked hard for your business. And we know how frustrating that is to invest your hard-earned money on something hoping it'll pay off, but instead, it sets you back and lacks support. A quality app can be an absolute game-changer for a business but only if it's done right.
              </p>

              <div className="border-l-4 border-blue-500 pl-6 mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  We've made the whole mobile app creation process <span className="bg-gradient-blue bg-clip-text text-transparent">way simpler</span>
                </h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mb-3 shadow-sm">
                    <Tag size={28} className="transform -rotate-45" />
                  </div>
                  <span className="text-2xl font-black text-gray-900">35%</span>
                  <span className="text-sm text-gray-600 font-medium">Cost Savings</span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mb-3 shadow-sm">
                    <Rocket size={28} />
                  </div>
                  <span className="text-2xl font-black text-gray-900">2x</span>
                  <span className="text-sm text-gray-600 font-medium">Faster Delivery</span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mb-3 shadow-sm">
                    <Headphones size={28} />
                  </div>
                  <span className="text-2xl font-black text-gray-900">24/7</span>
                  <span className="text-sm text-gray-600 font-medium">Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Illustration (Recreated with Code/Icons) */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10"></div>
              
              {/* Trophy Visual Composition */}
              <div className="relative z-10 text-center">
                {/* Confetti Particles (Decoration) */}
                <div className="absolute -top-10 left-10 text-yellow-400 animate-bounce delay-75"><Star size={16} fill="currentColor" /></div>
                <div className="absolute top-0 right-20 text-blue-400 animate-pulse"><div className="w-3 h-3 rounded-full bg-blue-400"></div></div>
                <div className="absolute top-20 -right-5 text-red-400 animate-bounce"><div className="w-2 h-6 bg-red-400 transform rotate-45"></div></div>
                
                {/* Trophy Icon Placeholder */}
                <div className="relative">
                   <div className="w-64 h-64 mx-auto bg-gradient-to-b from-red-100 to-white rounded-full flex items-center justify-center shadow-xl border border-red-50">
                      <Trophy size={120} className="text-red-400 drop-shadow-lg" strokeWidth={1.5} />
                   </div>
                   {/* Podium steps */}
                   <div className="w-48 h-12 bg-gray-900 mx-auto -mt-6 rounded-t-lg relative z-20 flex items-center justify-center">
                      <div className="w-32 h-8 bg-gray-800 rounded-t-lg -mt-8"></div>
                   </div>
                   <div className="w-full h-1 bg-gray-200 mt-0"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CTA (Black Background) */}
      <section 
        ref={sectionRef2} 
        className={`bg-black py-20 px-4 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#2A2A2A] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
            
            {/* Glowing Heart Graphic */}
            <div className="flex-shrink-0 relative">
               <div className="w-40 h-40 bg-black rounded-2xl flex items-center justify-center shadow-inner border border-gray-800">
                  {/* Layered Hearts for Glow Effect */}
                  <Heart size={80} fill="#EF4444" className="text-red-500 absolute z-10 animate-pulse" />
                  <Heart size={80} className="text-red-500 absolute z-0 blur-lg opacity-80" />
                  <Heart size={100} className="text-red-600 absolute z-0 blur-xl opacity-50" />
               </div>
            </div>

            {/* CTA Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Let's make people <span className="bg-gradient-blue bg-clip-text text-transparent">fall in <br className="hidden md:block"/> love</span> with your app
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Tell us about your app idea, and our team will work with you to create something amazing that your users will absolutely love. Let's turn your vision into reality.
              </p>

              <button className="flex items-center space-x-2 px-6 py-2.5 text-sm font-medium text-white rounded-xl bg-gradient-blue shadow-button hover:scale-105 transition-transform">
                <MessageCircle size={24} fill="white" className="bg-gradient-blue bg-clip-text text-transparent" />
                <span>Let's Talk</span>
                <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AppValueSection;