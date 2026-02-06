import React, { useEffect, useState, useRef } from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import { Rocket, Hand, ArrowRight, Activity, Layout, Clock, TrendingUp, Layers } from 'lucide-react';
import DevelopmentLifecycle from '../components/sections/DevelopmentLifecycle';
import ProjectsSlider from '../components/sections/ProjectsSlider';
import ScrollToTop from '../components/specific/ScrollToTop';

const MobileAppDevelopment: React.FC = () => {
  // Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger Hero animation immediately on mount
    setHeroVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const challenges = [
    {
      id: 1,
      icon: <Activity size={20} />,
      text: "Low user engagement and retention rates leading to app abandonment",
      color: "bg-blue-100 text-blue-500",
      active: true 
    },
    {
      id: 2,
      icon: <Layout size={20} />,
      text: "Poor user interface design resulting in negative user experience",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      icon: <Clock size={20} />,
      text: "Slow performance and long loading times frustrating users",
      color: "bg-purple-100 text-purple-500",
    },
    {
      id: 4,
      icon: <TrendingUp size={20} />,
      text: "Difficulty scaling the app as your user base grows",
      color: "bg-blue-200 text-blue-600",
    },
    {
      id: 5,
      icon: <Layers size={20} />,
      text: "Integration challenges with existing systems and third-party services",
      color: "bg-green-100 text-green-500",
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />
      
      <main className="pt-20"> 
        {/* --- HERO SECTION --- */}
        <div className="bg-gradient-to-b from-[#2b9aff] to-[#4facfe] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Title */}
            <h1 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight transition-all duration-1000 transform 
              ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-black">Build... Launch ... </span><span className="opacity-90">Grow</span>
            </h1>
            
            {/* Animated Paragraph with 300ms delay */}
            <p className={`text-base md:text-lg opacity-90 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 transform 
              ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Got an idea? Partner with a leading app development team to build a high-quality 
              mobile app that's designed, developed, and delivered the right way.
            </p>
          </div>
        </div>

        {/* --- MAIN CONTENT SECTION --- */}
        <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN: Graphic + Good News + CTA */}
            <div className={`flex flex-col gap-8 transition-all duration-1000 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Phone Graphic Placeholder */}
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl p-8 flex items-center justify-center min-h-[400px]">
                <img src="/assets/images/p2.png" alt="Mobile App Development" className="w-full h-auto rounded-3xl" />
              </div>

              {/* Good News Card */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-400 p-2 rounded-lg text-white">
                    <Hand size={24} /> 
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Good News!</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Our experienced team has successfully delivered 500+ mobile applications for businesses worldwide. We handle all the technical complexity so you can focus on your business growth.
                </p>
                <p className="text-sm text-gray-800">
                  Let us handle the <span className="bg-gray-900 text-white px-1 py-0.5 rounded text-xs font-medium">technical hassle</span> so you can focus on <span className="bg-[#2b9aff] text-white px-1 py-0.5 rounded text-xs font-medium">your success</span>
                </p>
              </div>

              {/* CTA Button */}
              <button className="group w-full bg-gradient-to-r from-[#2b9aff] to-[#4facfe] text-white rounded-xl py-5 px-6 flex items-center justify-between shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Rocket size={24} className="fill-current" />
                  </div>
                  <span className="font-bold text-lg">Start Your App Project</span>
                </div>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* RIGHT COLUMN: Text + List */}
            <div className="pt-4">
              <div className={`transition-all duration-700 delay-100 transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  Building Mobile Apps is <br />
                  <span className="bg-[#2b9aff] bg-clip-text text-transparent bg-gradient-to-r from-[#2b9aff] to-[#4facfe]">Challenging</span>
                </h2>
                <h3 className="text-xl font-bold text-gray-800 mb-6">But we're here to help</h3>
                
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Many businesses struggle with mobile app development due to complexity, cost, and technical expertise requirements. Here are common challenges we help overcome:
                </p>
              </div>

              {/* Challenges List with Staggered Pop-up Animation */}
              <div className="space-y-8 pl-3"> 
                {challenges.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="relative transition-all duration-700 transform"
                    style={{ 
                        opacity: isVisible ? 1 : 0, 
                        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                        transitionDelay: `${(index + 2) * 150}ms` 
                    }}
                  >
                    {/* The Card */}
                    <div className={`
                      relative flex items-center gap-4 p-5 rounded-2xl border bg-white transition-all
                      ${item.active ? 'border-blue-400 shadow-blue-100 shadow-lg' : 'border-gray-200 shadow-sm'}
                    `}>
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-sm z-10">
                        {item.id}
                      </div>
                      <div className={`p-3 rounded-lg ${item.color} flex-shrink-0 ml-2`}>
                        {item.icon}
                      </div>
                      <p className="text-gray-700 font-medium text-sm md:text-base flex-1">
                        {item.text}
                      </p>
                      {item.active && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <DevelopmentLifecycle />
      <ProjectsSlider/>
      <StartYourNextBigProject />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;