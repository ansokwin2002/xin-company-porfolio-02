import React, { useState, useRef, useEffect } from 'react';

interface FooterProps {
  // Define any props if needed, e.g., for dynamic year
}

const Footer: React.FC<FooterProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-blue text-white py-16 overflow-hidden"
    >
      {/* Background Pattern/Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info - Column 1 */}
          <div 
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="relative">
              <span className="font-bold text-2xl text-gold">
                QıYOU
              </span>
              <span
                className="absolute w-1.5 h-1.5 rounded-full bg-red-500"
                style={{ top: '3px', left: '17.5px' }}
              ></span>
            </div>
            <p className="text-xs text-white/90 font-medium uppercase tracking-wider">
              Your Success Partner
            </p>
            <p className="text-white/90 text-sm leading-relaxed">
              We transform your digital vision into reality through innovative web development, mobile apps, UI/UX design, and digital marketing solutions.
            </p>
          </div>

          {/* Company Links - Column 2 */}
          <div 
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Company</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Careers', 'Blog & News', 'Case Studies'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Column 3 */}
          <div 
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Services</h4>
            <ul className="space-y-3">
              {['UI/UX Design', 'Mobile App Development', 'Web App Development', 'Digital Marketing', 'Hosting & Servers', 'IT Consultancy & DevOps'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links - Column 4 */}
          <div 
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Products</h4>
            <ul className="space-y-3">
              {['Event Ticketing App', 'E-Commerce Mobile App', 'Solevato', 'Congora', 'CMS Website'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className={`pt-8 border-t border-white/20 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/80 text-sm text-center">
            © {new Date().getFullYear()} QiYou Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;