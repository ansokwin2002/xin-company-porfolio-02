import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  // Define any props if needed, e.g., for dynamic year
}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
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

  const serviceLinks = [
    { name: t('footer.links.ui_ux'), path: '/creative-designs-ui-ux' },
    { name: t('footer.links.mobile'), path: '/mobile-app-development' },
    { name: t('footer.links.web'), path: '/web-app-development' },
    { name: t('footer.links.digital'), path: '/digital-marketing' },
    { name: t('footer.links.hosting'), path: '/hosting-server' },
    { name: t('footer.links.it'), path: '/it-consultancy-devops' },
  ];

  const companyLinks = [
    { name: t('footer.links.home'), path: '/' },
    { name: t('footer.links.about'), path: '/about' },
    { name: t('footer.links.careers'), path: '/careers' },
    { name: t('footer.links.blog'), path: '/blog' },
  ];

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
            <div className="flex items-center">
              <img src="/assets/images/Qiyou logo.png" alt="QiYou Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Company Links - Column 2 */}
          <div 
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">{t('footer.columns.company')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></span>
                    {item.name}
                  </Link>
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
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">{t('footer.columns.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></span>
                    {item.name}
                  </Link>
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
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">{t('footer.columns.products')}</h4>
            <ul className="space-y-3">
              {[
                { name: t('footer.links.bitmart'), id: 'product-1' },
                { name: t('footer.links.shopping_cart'), id: 'product-2' },
                { name: t('footer.links.ecommerce'), id: 'product-3' },
                { name: t('footer.links.lottery'), id: 'product-4' },
                { name: t('footer.links.entertainment'), id: 'product-5' },
                { name: t('footer.links.insurance'), id: 'product-6' },
                { name: t('footer.links.feige_im'), id: 'product-7' },
                { name: t('footer.links.erp'), id: 'product-8' },
                { name: t('footer.links.laundry'), id: 'product-9' },
                { name: t('footer.links.restaurant'), id: 'product-10' },
                { name: t('footer.links.retail'), id: 'product-11' }
              ].map((item) => (
                <li key={item.id}>
                  <Link to={`/products#${item.id}`} className="text-white/90 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className={`pt-8 border-t border-white/20 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/80 text-sm text-center">
            © {new Date().getFullYear()} QiYou Tech. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;