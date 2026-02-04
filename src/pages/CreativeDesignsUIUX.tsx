import React from 'react';
import Navigation from '../components/Navigation';
import StartYourNextBigProject from '../components/StartYourNextBigProject';
import Footer from '../components/Footer';

const CreativeDesignsUIUX: React.FC = () => {
  // --- Data Arrays ---

  const brandingServices = [
    {
      title: "New Branding With Strategy",
      description: "We will create a structured process to build or revitalize your brand identity using a strategic approach. This ensures it aligns with your business goals and vision.",
      icon: "🪄",
      number: '01',
    },
    {
      title: "Brand Re-innovation",
      description: "QiYOU will enhance your marketing by revitalizing your brand's visual designs, leading to improved recognition and consistency.",
      icon: "🔄",
      number: '02',
    },
    {
      title: "Corporate Identity",
      description: "By building or enhancing your corporate identity, we will create a competitive edge for your brand presence and increase marketing effectiveness.",
      icon: "🏢",
      number: '03',
    },
    {
      title: "Brand Consultancy",
      description: "This service specializes in brand consultancy, helping companies develop their brand identity and strategy by analyzing current branding.",
      icon: "💬",
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

  // Hero Section Refs
  const h1Ref = React.useRef<HTMLHeadingElement>(null);
  const pRef = React.useRef<HTMLParagraphElement>(null);
  const [isH1Visible, setIsH1Visible] = React.useState(false);
  const [isPVisible, setIsPVisible] = React.useState(false);

  // Branding Section Refs
  const badgeRef = React.useRef<HTMLDivElement>(null);
  const h2BrandingRef = React.useRef<HTMLHeadingElement>(null);
  const pBrandingRef = React.useRef<HTMLParagraphElement>(null);
  const [isBadgeVisible, setIsBadgeVisible] = React.useState(false);
  const [isH2BrandingVisible, setIsH2BrandingVisible] = React.useState(false);
  const [isPBrandingVisible, setIsPBrandingVisible] = React.useState(false);

  // UI/UX Section Refs
  const uiUxSectionRef = React.useRef<HTMLDivElement>(null);
  const [isUiUxVisible, setIsUiUxVisible] = React.useState(false);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    // Hero Observers
    const h1Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsH1Visible(true);
    }, observerOptions);
    if (h1Ref.current) h1Observer.observe(h1Ref.current);

    const pObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsPVisible(true);
    }, observerOptions);
    if (pRef.current) pObserver.observe(pRef.current);

    // Branding Observers
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

    // UI/UX Observer
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
              Create a high-performing website or mobile app with QiYou Tech's expert design and development team. 
              If you already have a live platform, our specialists can refine and optimize your digital presence.
            </p>
          </div>
        </section>

        {/* --- Branding Services Section --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center px-6 lg:px-8">
            {/* Pill Badge */}
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
              Our expert team elevates your brand across all categories, from visual identity to full brand systems. 
              With experience supporting global companies, we deliver impactful branding solutions.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 text-left">
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
                    className={`relative group h-full transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}
                    style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
                  >
                    <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden group-hover:border-blue-100">
                      {/* Blue curve */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 origin-top-right"></div>
                      
                      <div className="relative z-10 mb-6">
                        {/* Icon container */}
                        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-gradient-blue transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-8 leading-tight">{service.title}</h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-6">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- UI/UX Design Services Section (NEW) --- */}
        <section ref={uiUxSectionRef} className="py-20 bg-gray-50 overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`transition-all duration-1000 ease-out ${
                isUiUxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Side: Text Content */}
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Leading UI/UX <br />
                    <span className="bg-gradient-blue bg-clip-text text-transparent">Design Services</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Crafting exceptional digital experiences that captivate users and drive measurable business growth. 
                    Our experienced team follows a user-centered design process, conducting thorough research and 
                    iterative testing to ensure the highest quality.
                  </p>
                  
                  {/* Expert Team Badge */}
                  <div className="inline-flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                          <span className="bg-gradient-blue w-full h-full opacity-50"></span>
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                        +20
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      Expert Team <br/>
                      <span className="text-gray-500 font-normal">10+ Years Exp.</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {uiUxStats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: 4 Process Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {uiUxFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors group">
                    <div className={`w-12 h-12 ${feat.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                      {feat.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <StartYourNextBigProject />
      <Footer />
    </div>
  );
};

export default CreativeDesignsUIUX;