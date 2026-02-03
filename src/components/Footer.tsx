import React from 'react';

interface FooterProps {
  // Define any props if needed, e.g., for dynamic year
}

const Footer: React.FC<FooterProps> = () => {
  return (
    // Moved footer JSX here
    <footer className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-16 overflow-hidden">
      {/* Background Pattern/Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info - Left Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="relative">
              <span className="font-bold text-2xl text-gold">
                QıYOU
              </span>
              {/* Red dot above the 'i' */}
              <span
                className="absolute w-1.5 h-1.5 rounded-full bg-red-500"
                style={{
                  top: '3px',
                  left: '17.5px'
                }}
              ></span>
            </div>
            <span className="text-xs text-white/90 -mt-1">
              Your Success Partner
            </span>
            <p className="text-white/90 text-sm leading-relaxed">
              We transform your digital vision into reality through innovative web development, mobile apps, UI/UX design, and digital marketing solutions.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Blog & News
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Web App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Hosting & Servers
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  IT Consultancy & DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Event Ticketing App
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  E-Commerce Mobile App
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Solevato
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Congora
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  CMS Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm text-center">
            © {new Date().getFullYear()} Intcore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
