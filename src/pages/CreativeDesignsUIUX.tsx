import React from 'react';
import Navigation from '../components/layout/Navigation';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';
import Footer from '../components/layout/Footer';
import HighLevelProcess from '../components/sections/HighLevelProcess';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';
import { Wand2, RefreshCw, Building2, MessagesSquare } from 'lucide-react'; // Added for professional colorful icons

const CreativeDesignsUIUX: React.FC = () => {
  // --- Data Arrays ---

  const brandingServices = [
    {
      title: "New Branding With Strategy",
      description: "We will create a structured process to build or revitalize your brand identity using a strategic approach. This ensures it aligns with your business goals and vision, resonates with your target audience, and stands out in the market.",
      IconComponent: Wand2,
      color: "from-purple-500 to-indigo-500",
      number: '01',
    },
    {
      title: "Brand Re-innovation",
      description: "QiYOU will enhance your marketing by revitalizing your brand's visual designs, leading to improved recognition and consistency. We will modernize the brand to increase its credibility and appeal to target audiences, ensuring a clear vision and strong identity.",
      IconComponent: RefreshCw,
      color: "from-blue-500 to-cyan-400",
      number: '02',
    },
    {
      title: "Corporate Identity",
      description: "By building or enhancing your corporate identity, we will create a competitive edge for your brand presence, increase the effectiveness of your marketing activities, and align your brand's vision with both your customers and employees.",
      IconComponent: Building2,
      color: "from-emerald-400 to-teal-500",
      number: '03',
    },
    {
      title: "Brand Consultancy",
      description: "This service specializes in brand consultancy, helping companies develop their brand identity and strategy. We analyze the current branding to provide creative solutions that align with the brand's values and vision. Our main goal is to differentiate the brand, enhance its perception, and support long-term growth.",
      IconComponent: MessagesSquare,
      color: "from-orange-400 to-pink-500",
      number: '04',
    }
  ];

  const uiUxStats = [
    { label: "Projects", value: "200+", icon: "📂" },
    { label: "Years", value: "10+", icon: "🏆" },
    { label: "Satisfaction", value: "98%", icon: "❤️" },
    { label: "Rating", value: "4.9", icon: "⭐" },
  ];

  const uiUxFeatures = [
    {
      title: "User-Centered Design",
      desc: "Every design decision is rooted in understanding your users' needs, behaviors, and pain points.",
      icon: "👤",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Thorough Research",
      desc: "We dive deep into market analysis, competitor research, and user interviews to inform our designs.",
      icon: "🔍",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Iterative Testing",
      desc: "Continuous prototyping and testing ensures we deliver solutions that truly work.",
      icon: "🔄",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Clear Communication",
      desc: "Transparent collaboration and regular updates keep you informed at every stage.",
      icon: "💬",
      color: "bg-teal-50 text-teal-600"
    }
  ];

  // --- Refs & Animation State ---

  const h1Ref = React.useRef<HTMLHeadingElement>(null);
  const pRef = React.useRef<HTMLParagraphElement>(null);
  const [isH1Visible, setIsH1Visible] = React.useState(false);
  const [isPVisible, setIsPVisible] = React.useState(false);

  const badgeRef = React.useRef<HTMLDivElement>(null);
  const h2BrandingRef = React.useRef<HTMLHeadingElement>(null);
  const pBrandingRef = React.useRef<HTMLParagraphElement>(null);
  const [isBadgeVisible, setIsBadgeVisible] = React.useState(false);
  const [isH2BrandingVisible, setIsH2BrandingVisible] = React.useState(false);
  const [isPBrandingVisible, setIsPBrandingVisible] = React.useState(false);

  const uiUxSectionRef = React.useRef<HTMLDivElement>(null);
  const [isUiUxVisible, setIsUiUxVisible] = React.useState(false);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const h1Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsH1Visible(true);
    }, observerOptions);
    if (h1Ref.current) h1Observer.observe(h1Ref.current);

    const pObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsPVisible(true);
    }, observerOptions);
    if (pRef.current) pObserver.observe(pRef.current);

    const badgeObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsBadgeVisible(true);
    }, observerOptions);
    if (badgeRef.current) badgeObserver.observe(badgeRef.current);

    const h2BrandingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsH2BrandingVisible(true);
    }, observerOptions);
    if (h2BrandingRef.current) h2BrandingObserver.observe(h2BrandingRef.current);

    const pBrandingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsPBrandingVisible(true);
    }, observerOptions);
    if (pBrandingRef.current) pBrandingObserver.observe(pBrandingRef.current);

    const uiUxObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsUiUxVisible(true);
    }, observerOptions);
    if (uiUxSectionRef.current) uiUxObserver.observe(uiUxSectionRef.current);

    return () => {
      if (h1Ref.current) h1Observer.unobserve(h1Ref.current);
      if (pRef.current) pObserver.unobserve(pRef.current);
      if (badgeRef.current) badgeObserver.unobserve(badgeRef.current);
      if (h2BrandingRef.current) h2BrandingObserver.unobserve(h2BrandingRef.current);
      if (pBrandingRef.current) pBrandingObserver.unobserve(pBrandingRef.current);
      if (uiUxSectionRef.current) uiUxObserver.unobserve(uiUxSectionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      <main>
        {/* --- Hero Section --- */}
        <section className="bg-gradient-blue pt-32 pb-20 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 
              ref={h1Ref}
              className={`text-5xl md:text-6xl font-extrabold mb-4 transition-all duration-700 ease-out ${
                isH1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-black">Elevate Your Brand with </span><br />
              <span className="text-white">Creative UI/UX Design</span>
            </h1>
            <p 
              ref={pRef}
              className={`text-lg opacity-90 max-w-2xl mx-auto text-white transition-all duration-700 ease-out delay-200 ${
                isPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Create a high-performing website or mobile app with QiYou Tech’s expert design and 
              development team. If you already have a live platform, our specialists can refine, 
              enhance, and optimize your digital presence to support your business growth.
            </p>
          </div>
        </section>

        {/* --- Branding Services Section --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center px-6 lg:px-8">
            <div 
              ref={badgeRef}
              className={`inline-flex items-center px-6 py-2 rounded-full bg-blue-100 font-semibold text-sm mb-8 border border-blue-200 transition-all duration-700 ease-out ${
                isBadgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              🎨 <span className="ml-2 uppercase tracking-wide bg-gradient-blue bg-clip-text text-transparent">Branding Services</span>
            </div>

            <h2 
              ref={h2BrandingRef}
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ease-out delay-200 ${
                isH2BrandingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              How we brand <span className="bg-gradient-blue bg-clip-text text-transparent">Your Business?</span>
            </h2>
            <p 
              ref={pBrandingRef}
              className={`text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out delay-300 ${
                isPBrandingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our expert team elevates your brand across all categories, from visual identity to full brand 
              systems. With experience supporting global companies, we deliver some of the most impactful 
              branding solutions in the UAE.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {brandingServices.map((service, index) => {
                const [isVisible, setIsVisible] = React.useState(false);
                const cardRef = React.useRef<HTMLDivElement>(null);

                React.useEffect(() => {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) setIsVisible(true);
                    },
                    { threshold: 0.1 }
                  );
                  if (cardRef.current) observer.observe(cardRef.current);
                  return () => observer.disconnect();
                }, []);

                return (
                  <div 
                    key={index} 
                    ref={cardRef}
                    // APPLYING POP ANIMATION: scale-95 to scale-100
                    className={`relative group h-full transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden group-hover:border-blue-100">
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 origin-top-right"></div>
                      
                      <div className="relative z-10 mb-6">
                        {/* COLORFUL ICON BOX */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.color} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                          <service.IconComponent size={30} strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- UI/UX Section --- */}
        <section
          ref={uiUxSectionRef}
          className="py-20 relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/images/bg-ui-ux.png')` }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-white/20 transform -skew-y-12 scale-150"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className={`transition-all duration-1000 ease-out ${
                isUiUxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                      Leading UI/UX <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                        Design Services
                      </span>
                    </h2>
                    <p className="mt-4 text-black text-lg">
                      Crafting exceptional digital experiences that captivate users and drive measurable business growth.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                    <img src="/assets/images/p1.png" alt="UI/UX Design" className="w-full h-auto rounded-3xl" />
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">Expert Team</span>
                        <div className="flex -space-x-2 mt-2">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-blue-500"></div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-blue-500 flex items-center justify-center text-xs text-white font-bold">+20</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-white">10+</span>
                        <span className="text-xs text-white/70">Years Exp.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    {uiUxStats.map((stat, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                         <div className="text-2xl mb-2">{stat.icon}</div>
                         <div className="text-3xl font-bold text-white">{stat.value}</div>
                         <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <p className="text-black leading-relaxed text-sm md:text-base">
                      Our experienced team follows a user-centered design process, conducting
                      thorough research and iterative testing to ensure the highest quality.
                      We align our work with your business goals and maintain clear communication throughout.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                     {uiUxFeatures.map((feat, idx) => (
                        <div key={idx} className={`bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl relative overflow-hidden group hover:bg-white/20 transition-colors`}>
                           <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3 shadow-inner bg-gradient-to-br from-white/20 to-transparent`}>
                              {feat.icon}
                           </div>
                           <h3 className="text-black font-bold text-lg mb-1">{feat.title}</h3>
                           <p className="text-black text-xs leading-relaxed">{feat.desc}</p>
                        </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HighLevelProcess />
      <StartYourNextBigProject />
      <ScrollToTop />
      <Footer />
      <TelegramLink />
    </div>
  );
};

export default CreativeDesignsUIUX;