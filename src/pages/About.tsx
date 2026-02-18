import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import CoreValuesSection from '../components/sections/CoreValuesSection';

import { 
  ShieldCheck, Clock, MessageSquare, 
  Users, RefreshCw, Target, Eye, Rocket,
  Quote 
} from 'lucide-react';

// --- 1. FEATURE CARD COMPONENT (Promising You Section) ---
interface FeatureCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  index: number;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ IconComponent, title, description, index, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const number = (index + 1).toString().padStart(2, '0');

  return (
    <div 
      ref={cardRef}
      className={`relative group h-full transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-[#111] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-zinc-800 overflow-hidden group-hover:border-blue-500/50">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110 origin-top-right"></div>
        <div className="absolute top-6 right-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="font-bold text-xs text-white">{number}</span>
        </div>
        <div className="relative z-10 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${color} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
            <IconComponent size={28} strokeWidth={1.5} />
          </div>
        </div>
        <div className="relative z-10 text-left">
            <h3 className="text-xl font-bold text-white mb-4 pr-12 leading-tight">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN ABOUT PAGE ---
const About: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const promises = [
    { title: "Commitment on time delivery", icon: Clock, color: "from-blue-500 to-cyan-400", desc: "We guarantee on-time delivery for all projects, ensuring your business never misses a deadline." },
    { title: "Money back guarantee", icon: ShieldCheck, color: "from-pink-500 to-rose-400", desc: "Your satisfaction is our priority. If not satisfied, we offer a hassle-free money-back guarantee." },
    { title: "Effective partnerships", icon: Users, color: "from-orange-400 to-amber-500", desc: "We build lasting relationships with our clients, becoming true partners in their success journey." },
    { title: "Expert consultation", icon: MessageSquare, color: "from-lime-400 to-green-500", desc: "Access to industry experts who provide valuable insights and strategic guidance for your projects." },
    { title: "Transparent communication", icon: RefreshCw, color: "from-purple-500 to-indigo-500", desc: "Open and honest communication at every step, keeping you informed throughout the process." },
    { title: "Result oriented solutions", icon: Target, color: "from-fuchsia-500 to-purple-400", desc: "Our focus is always on delivering measurable results that drive your business growth." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />

      <main>
        {/* --- HERO SECTION (Pop-Up Animation) --- */}
        <section className="bg-gradient-blue pt-40 pb-32 text-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 leading-tight transition-all duration-1000 transform ${
              heroVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'
            }`}>
              <span className="text-black">Unlocking Growth: by</span> <span className="text-white">Our Expert Team</span>
            </h1>
            <p className={`text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium transition-all duration-1000 delay-300 transform ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              QiYou Tech offers the best digital services for mobile apps, web apps development, hosting, DevOps services, and digital performance marketing. We have been developing global brands with enthusiasm and purpose since 2015 with an expert team.
            </p>
          </div>
        </section>

        {/* --- VISION & MISSION SECTION (Slide-In Animations) --- */}
        <section ref={sectionRef} className="py-24 bg-gray-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-20 transition-all duration-1000 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                What is QiYou Tech <span className="bg-gradient-blue bg-clip-text text-transparent">Vision & Mission?</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Left Side: Image Slide-In */}
              <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 transform ${
                sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}>
                <div className="relative w-full max-w-lg">
                  <img 
                    src="/assets/images/p5.png" 
                    alt="Vision and Mission" 
                    className="w-full h-auto drop-shadow-2xl hover:scale-[1.05] transition-transform duration-700"
                  />
                  <div className="absolute -z-10 top-10 left-10 right-10 bottom-10 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                </div>
              </div>

              {/* Right Side: Cards Slide-In */}
              <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-200 transform ${
                sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}>
                <div className="relative">
                  <div className="mb-4 text-blue-600">
                    <Quote size={48} className="fill-blue-600 rotate-180 opacity-90" />
                  </div>

                  <div className="space-y-6 pl-4">
                    {/* Vision Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-[0_4px_15px_rgba(6,182,212,0.3)] shrink-0 group-hover:rotate-6 transition-transform">
                          <Eye size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        QiYou Tech is a leading digital solutions company focused on bringing the world to the digital era. Having an innovative team with more than 15 years of experience, QiYou offers wide services and products that foster your digital presence.
                      </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-[0_4px_15px_rgba(236,72,153,0.3)] shrink-0 group-hover:rotate-6 transition-transform">
                          <Rocket size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        Having an innovative team with more than 15 years of experience, QiYou Tech offers wide services and products that foster your digital presence and drive business growth.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end text-blue-600">
                     <Quote size={48} className="fill-blue-600 opacity-90" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- PROMISING YOU SECTION --- */}
        <section className="py-24 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What we are</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              <span className="bg-gradient-blue bg-clip-text text-transparent">Promising You?</span>
            </h2>
            <p className='text-white mb-10'>Our commitment to excellence is backed by these core promises that ensure your success</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promises.map((service, idx) => (
                <FeatureCard 
                  key={idx} 
                  index={idx} 
                  IconComponent={service.icon} 
                  title={service.title} 
                  description={service.desc} 
                  color={service.color} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <CoreValuesSection/>
      <StartYourNextBigProject />
      <Footer />
      <ScrollToTop />
      <TelegramLink />
    </div>
  );
};

export default About;