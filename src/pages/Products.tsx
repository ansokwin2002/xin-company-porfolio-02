import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';

// --- DATA COMPONENT ---
const useProductsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: 1,
      title: t('products_page.items.bitmart.title'),
      subtitle: t('products_page.items.bitmart.subtitle'),
      description: t('products_page.items.bitmart.desc'),
      featureTitle: t('products_page.items.bitmart.feature_title'),
      features: t('products_page.items.bitmart.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.bitmart.footer'),
      image: "/assets/images/products/BITmart.png",
      links: [""],
      bgColor: "bg-white",
      isBitmart: true
    },
    {
      id: 2,
      title: t('products_page.items.shopping_cart.title'),
      subtitle: t('products_page.items.shopping_cart.subtitle'),
      description: t('products_page.items.shopping_cart.desc'),
      featureTitle: t('products_page.items.shopping_cart.feature_title'),
      features: t('products_page.items.shopping_cart.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.shopping_cart.footer'),
      image: "/assets/images/products/FP shop.png",
      links: [""],
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      title: t('products_page.items.ecommerce.title'),
      subtitle: t('products_page.items.ecommerce.subtitle'),
      description: t('products_page.items.ecommerce.desc'),
      featureTitle: t('products_page.items.ecommerce.feature_title'),
      features: t('products_page.items.ecommerce.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.ecommerce.footer'),
      image: "/assets/images/products/ORange.png",
      links: ["https://www.kh-orange.shop"],
      bgColor: "bg-white"
    },
    {
      id: 4,
      title: t('products_page.items.lottery.title'),
      subtitle: t('products_page.items.lottery.subtitle'),
      description: t('products_page.items.lottery.desc'),
      featureTitle: t('products_page.items.lottery.feature_title'),
      features: t('products_page.items.lottery.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.lottery.footer'),
      image: "/assets/images/products/Lotto.png",
      links: ["https://www.bingo637.com/", "http://nslotterys.com", "https://www.lotteryasian.com"],
      bgColor: "bg-gray-50"
    },
    {
      id: 5,
      title: t('products_page.items.entertainment.title'),
      subtitle: t('products_page.items.entertainment.subtitle'),
      description: t('products_page.items.entertainment.desc'),
      featureTitle: t('products_page.items.entertainment.feature_title'),
      features: t('products_page.items.entertainment.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.entertainment.footer'),
      image: "/assets/images/products/Entertainment.png",
      links: ["https://www.igt.com"],
      bgColor: "bg-white"
    },
    {
      id: 6,
      title: t('products_page.items.insurance.title'),
      subtitle: t('products_page.items.insurance.subtitle'),
      description: t('products_page.items.insurance.desc'),
      featureTitle: t('products_page.items.insurance.feature_title'),
      features: t('products_page.items.insurance.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.insurance.footer'),
      image: "/assets/images/products/Insurrance.png",
      links: ["https://www.titaninsurance.info", "https://www.fincorpinsurancebroker.com.kh/"],
      bgColor: "bg-blue-50"
    },
    {
      id: 7,
      title: t('products_page.items.feige_im.title'),
      subtitle: t('products_page.items.feige_im.subtitle'),
      description: t('products_page.items.feige_im.desc'),
      featureTitle: t('products_page.items.feige_im.feature_title'),
      features: t('products_page.items.feige_im.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.feige_im.footer'),
      image: "/assets/images/products/IM.png",
      links: [""],
      bgColor: "bg-white"
    },
    {
      id: 8,
      title: t('products_page.items.warehouse.title'),
      subtitle: t('products_page.items.warehouse.subtitle'),
      description: t('products_page.items.warehouse.desc'),
      featureTitle: t('products_page.items.warehouse.feature_title'),
      features: t('products_page.items.warehouse.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.warehouse.footer'),
      image: "/assets/images/products/Win Take.png",
      links: ["https://www.wintake-tw.com"],
      bgColor: "bg-blue-50"
    },
    {
      id: 9,
      title: t('products_page.items.laundry.title'),
      subtitle: t('products_page.items.laundry.subtitle'),
      description: t('products_page.items.laundry.desc'),
      featureTitle: t('products_page.items.laundry.feature_title'),
      features: t('products_page.items.laundry.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.laundry.footer'),
      image: "/assets/images/products/Laundry1.png",
      links: ["https://www.onedashcambodia.com"],
      bgColor: "bg-white"
    },
    {
      id: 10,
      title: t('products_page.items.restaurant.title'),
      subtitle: t('products_page.items.restaurant.subtitle'),
      description: t('products_page.items.restaurant.desc'),
      featureTitle: t('products_page.items.restaurant.feature_title'),
      features: t('products_page.items.restaurant.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.restaurant.footer'),
      image: "/assets/images/products/Restaurang POS.png",
      links: [""],
      bgColor: "bg-blue-50"
    },
    {
      id: 11,
      title: t('products_page.items.retail.title'),
      subtitle: t('products_page.items.retail.subtitle'),
      description: t('products_page.items.retail.desc'),
      featureTitle: t('products_page.items.retail.feature_title'),
      features: t('products_page.items.retail.features', { returnObjects: true }) as string[],
      footerNote: t('products_page.items.retail.footer'),
      image: "/assets/images/products/Retailer.png",
      links: ["http://h5.kh-orange.shop"],
      bgColor: "bg-white"
    }
  ];
};

const ProductRow: React.FC<{ product: any, index: number, isActive: boolean }> = ({ product, index, isActive }) => {

  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const isImageLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const formatTitle = (title: string) => {
    const keywords = ["digital", "Shopping Cart", "e-Commerce", "Lottery", "Insurance", "IM", "Management ERP", "POS"];
    const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = title.split(pattern);

    return parts.map((part, i) => 
      keywords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className="bg-gradient-blue bg-clip-text text-transparent">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section 
      id={`product-${product.id}`}
      ref={rowRef} 
      className={`py-24 px-6 transition-all duration-700 relative ${
        isActive 
          ? 'bg-blue-100/50 ring-4 ring-blue-400 ring-inset' 
          : product.bgColor
      }`}
    >
      {isActive && (
        <div className="absolute inset-0 bg-blue-400/10 animate-pulse pointer-events-none"></div>
      )}
      <div className={`max-w-7xl mx-auto flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-16 lg:gap-24 relative z-10`}>
        
        {/* Image/Link Side */}
        <div className={`w-full lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <div className="flex flex-col items-center">
            <img src={product.image} alt={product.title} className="w-full h-auto drop-shadow-2xl rounded-2xl" />
            <div className="mt-8 flex flex-col items-center gap-3">
              {product.links.map((link, i) => (
                <a 
                  key={i} 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-gradient-blue bg-clip-text text-transparent font-bold hover:opacity-80 text-lg transition-all border-b border-transparent hover:border-blue-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : isImageLeft ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'}`}>
          
          <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 tracking-tight ${product.isBitmart ? 'uppercase tracking-tighter' : 'text-gray-900'}`}>
            {formatTitle(product.title)}
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
            {product.subtitle}
          </h3>

          <div className="space-y-6 text-gray-600 mb-10 text-lg leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="mb-8">
            <p className="font-bold text-gray-900 mb-4 text-lg">{product.featureTitle}</p>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-700 text-lg">
                  <span className="mr-3 text-blue-500 font-bold">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DYNAMIC VERTICAL GRADIENT BORDER */}
          {product.footerNote && (
            <div className="flex items-stretch mt-6">
              <div className="w-1.5 bg-gradient-blue rounded-full mr-4 self-stretch"></div>
              <p className="text-gray-900 font-bold text-lg py-1 italic">
                {product.footerNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Products: React.FC = () => {
  const { t } = useTranslation();
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [isH1Visible, setIsH1Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const location = useLocation();
  const productsData = useProductsData();

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const h1Obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsH1Visible(true), observerOptions);
    const pObs = new IntersectionObserver(([e]) => e.isIntersecting && setIsPVisible(true), observerOptions);
    
    if (h1Ref.current) h1Obs.observe(h1Ref.current);
    if (pRef.current) pObs.observe(pRef.current);
    
    return () => { h1Obs.disconnect(); pObs.disconnect(); };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#product-', '');
      const productId = parseInt(id);
      if (!isNaN(productId)) {
        setActiveProductId(productId);
        
        // Scroll to the element after a short delay to ensure it's rendered and observer is ready
        setTimeout(() => {
          const element = document.getElementById(`product-${productId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);

        // Remove highlight after 5 seconds
        const timer = setTimeout(() => {
          setActiveProductId(null);
        }, 5000);

        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, productsData]); // Added productsData as dependency

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />
      <main>
        <section className="bg-gradient-blue pt-40 pb-24 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 
              ref={h1Ref}
              className={`text-5xl md:text-7xl font-extrabold mb-8 transition-all duration-1000 ease-out transform ${
                isH1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-black">{t('products_page.title_our')} </span> <span className="text-white">{t('products_page.title_products')}</span>
            </h1>
            <div 
              ref={pRef}
              className={`text-lg md:text-xl text-white opacity-90 max-w-4xl mx-auto leading-relaxed space-y-4 transition-all duration-1000 ease-out delay-200 transform ${
                isPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p>{t('products_page.subtitle_line1')}</p>
              <p>{t('products_page.subtitle_line2')}</p>
            </div>
          </div>
        </section>

        <div className="divide-y divide-gray-100">
          {productsData.map((product, index) => (
            <ProductRow 
              key={product.id} 
              product={product} 
              index={index} 
              isActive={activeProductId === product.id}
            />
          ))}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <TelegramLink />
    </div>
  );
};

export default Products;