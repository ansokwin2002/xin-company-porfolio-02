import React, { useState, useEffect, useRef } from 'react';

interface Client {
  name: string;
  subName?: string;
  imageName: string;
}

const OurClients: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clients: Client[] = [
    { name: 'FINCORP', subName: 'INSURANCE BROKER', imageName: 'p1.png' },
    { name: 'TITAN STONE', subName: 'LIFE INSURANCE', imageName: 'p2.png' },
    { name: 'C21 REAL', subName: 'ESTATE', imageName: 'p3.png' },
    { name: 'JINBIE2 HOTEL', imageName: 'p4.png' },
    { name: 'TAIWANESE FOOD', imageName: 'p5.png' },
    { name: 'ORANGE SHOP', imageName: 'p6.png' },
    { name: 'KITCHEN', subName: 'CAFE & RESTO', imageName: 'p7.png' },
    { name: 'LAUNDRY', subName: 'SERVICE', imageName: 'p8.png' },
    { name: 'WIN TAKE', subName: 'GLOBAL', imageName: 'p9.png' },
    { name: 'BIT MART', imageName: 'p10.png' },
    { name: 'COINEX', subName: 'GLOBAL', imageName: 'p11.png' },
    { name: 'FEIGE IM', imageName: 'p12.png' },
    { name: 'FC SHOP', imageName: 'p13.png' },
    { name: 'WINGO LOTTO', imageName: 'p14.png' },
    { name: 'LELOT', subName: '(CAMBODIA)', imageName: 'p15.png' },
    { name: 'NATIONAL', subName: 'SPORT LOTTERY', imageName: 'p16.png' },
    { name: 'HSIN NIU', subName: 'LOTTERY', imageName: 'p17.png' },
    { name: 'MEI YAUN', subName: 'ENTERTAINMENT', imageName: 'p18.png' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Starts animating when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header - Slides up slightly faster */}
        <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-widest mb-20 text-gray-900 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          OUR <span className="bg-gradient-blue bg-clip-text text-transparent">CLIENTS</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-start group transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-16 scale-90'
              }`}
              // Staggered delay: each logo pops up 50ms after the previous one
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              
              {/* Logo Container */}
              <div className="h-20 w-full flex items-center justify-center mb-6">
                <img 
                  src={`/assets/images/brand-clients/${client.imageName}`} 
                  alt={client.name}
                  className="max-h-full max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Client Branding Text */}
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-[10px] md:text-[11px] leading-tight uppercase tracking-widest">
                  {client.name}
                </h3>
                {client.subName && (
                  <p className="font-bold text-gray-900 text-[10px] md:text-[11px] leading-tight uppercase tracking-widest mt-1 opacity-60">
                    {client.subName}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;