import React from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import { Rocket, Hand, ArrowRight, Lock, BarChart3, Mail, Activity, Layout, Clock, TrendingUp, Layers } from 'lucide-react';

const MobileAppDevelopment: React.FC = () => {
  
  const challenges = [
    {
      id: 1,
      icon: <Activity size={20} />,
      text: "Low user engagement and retention rates leading to app abandonment",
      color: "bg-blue-100 text-blue-500",
      active: true // Mark first item as active
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
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      <main className="pt-20"> 
        {/* --- HERO SECTION --- */}
        <div className="bg-gradient-to-b from-[#2b9aff] to-[#4facfe] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Build... Launch ... <span className="opacity-90">Grow</span>
            </h1>
            <p className="text-base md:text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
              Got an idea? Partner with a leading app development team to build a high-quality 
              mobile app that's designed, developed, and delivered the right way.
            </p>
          </div>
        </div>

        {/* --- MAIN CONTENT SECTION --- */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN: Graphic + Good News + CTA */}
            <div className="flex flex-col gap-8">
              {/* Phone Graphic Placeholder */}
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="relative w-48 h-80 bg-gray-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center border-4 border-gray-700">
                  <div className="absolute top-0 w-24 h-6 bg-gray-800 rounded-b-xl"></div>
                  <div className="absolute -left-12 top-20 bg-blue-100 p-3 rounded-xl shadow-lg animate-pulse">
                     <Mail className="text-blue-500" />
                  </div>
                  <div className="absolute -right-8 top-32 bg-blue-500 p-3 rounded-xl shadow-lg">
                     <Lock className="text-white" />
                  </div>
                  <div className="absolute -left-8 bottom-20 bg-blue-500 p-3 rounded-xl shadow-lg z-10">
                     <BarChart3 className="text-white" />
                  </div>
                  <div className="text-gray-600 font-bold text-center mt-4">App Interface</div>
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full w-[90%] h-[90%] m-auto -z-10"></div>
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
                  Let us handle the <span className="bg-gray-900 text-white px-1 py-0.5 rounded text-xs font-medium">technical hassle</span> so you can focus on <span className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs font-medium">your success</span>
                </p>
              </div>

              {/* CTA Button */}
              <button className="group w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-xl py-5 px-6 flex items-center justify-between shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                Building Mobile Apps is <br />
                <span className="text-blue-500">Challenging</span>
              </h2>
              <h3 className="text-xl font-bold text-gray-800 mb-6">But we're here to help</h3>
              
              <p className="text-gray-600 mb-10 leading-relaxed">
                Many businesses struggle with mobile app development due to complexity, cost, and technical expertise requirements. Here are common challenges we help overcome:
              </p>

              {/* Updated List Section */}
              <div className="space-y-8 pl-3"> {/* Added left padding for the hanging badges */}
                {challenges.map((item) => (
                  <div key={item.id} className="relative">
                    
                    {/* The Card */}
                    <div className={`
                      relative flex items-center gap-4 p-5 rounded-2xl border bg-white transition-all
                      ${item.active ? 'border-blue-400 shadow-blue-100 shadow-lg' : 'border-gray-200 shadow-sm'}
                    `}>
                      
                      {/* Number Badge - Absolutely positioned on the top-left corner */}
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-sm z-10">
                        {item.id}
                      </div>

                      {/* Icon */}
                      <div className={`p-3 rounded-lg ${item.color} flex-shrink-0 ml-2`}>
                        {item.icon}
                      </div>
                      
                      {/* Text */}
                      <p className="text-gray-700 font-medium text-sm md:text-base flex-1">
                        {item.text}
                      </p>

                      {/* Blue dot for active item */}
                      {item.active && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>

      <StartYourNextBigProject />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;