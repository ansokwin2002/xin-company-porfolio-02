import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/specific/ScrollToTop';
import TelegramLink from '../components/specific/TelegramLink';

// --- DATA ARRAY ---
const productsData = [
  {
    id: 1,
    title: "BITMART digital",
    subtitle: "currency exchange is faster, better and stronger",
    description: "Our design and develop BITMART Digital Asset Systems — complete cryptocurrency exchange platforms built for performance, security, and global scalability. From trading engines to wallet management and KYC systems, we deliver enterprise-grade digital asset infrastructure.",
    featureTitle: "High-performance exchange capabilities:",
    features: ['Crypto-to-crypto trading', 'Crypto-to-fiat conversion', 'Fiat-to-fiat exchange', 'Real-time rate updates', 'Automated liquidity integration', 'Spread & fee configuration', 'Instant swap functionality'],
    footerNote: "Built with low-latency matching engine technology.",
    image: "/assets/images/products/BITmart.png",
    links: [""],
    bgColor: "bg-white",
    isBitmart: true
  },
  {
    id: 2,
    title: "Shopping Cart Systems",
    subtitle: "Smart • Secure • Scalable • Revenue-Driven",
    description: "We design and develop high-performance Shopping Cart Systems tailored for eCommerce platforms, marketplaces, subscription businesses, and digital product stores. Our solutions focus on smooth user experience, secure transactions, and powerful backend management.",
    featureTitle: "User-friendly cart features:",
    features: ['Add / Remove products instantly', 'Quantity adjustment with auto price update', 'Save for later option', 'Coupon & promo code integration', 'Estimated shipping calculator', 'Real-time tax calculation', 'Mobile-optimized design'],
    footerNote: "Designed to reduce cart abandonment and increase conversions.",
    image: "/assets/images/products/FP shop.png",
    links: [""],
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "e-Commerce System",
    subtitle: "Complete Retail Ecosystem",
    description: "The Grocery Store Management Systems for supermarkets, mini-marts, wholesale markets, and online grocery platforms. Our solutions combine POS, inventory, supplier management, and eCommerce into one powerful ecosystem.",
    featureTitle: "Fast and reliable checkout experience:",
    features: ['Barcode & QR code scanning', 'Weighing scale integration (fruits & vegetables)', 'Discount & promo management', 'Multiple payment methods (cash, card, wallet, QR)', 'Receipt printing & digital invoice', 'Offline mode support', 'Daily sales & cashier reports'],
    footerNote: "Designed for high-speed transactions during peak hours.",
    image: "/assets/images/products/ORange.png",
    links: [""],
    bgColor: "bg-white"
  },
  {
    id: 4,
    title: "Lottery Apps",
    subtitle: "Secure Randomization • High Scalability • Regulatory-Ready • Revenue Optimized",
    description: "Lottery apps provide a comprehensive, mobile-focused experience for purchasing tickets, checking results, and managing numbers. Modern lottery app content typically includes features for both official state lotteries and third-party courier services, focusing on user convenience, security, and real-time information. Our Client: NSL, Wingo, iBingo, Lelot, Hsin niu, Asian.... ",
    featureTitle: "Smart ticket sales & management:",
    features: ['Number selection (manual or auto-pick)', 'Single draw or multi-draw ticket purchase', 'Quick Pick (random number generator)', 'Retail agent portal', 'QR code / digital ticket generation', 'Secure transaction tracking'],
    footerNote: "Supports both online and offline distribution models.",
    image: "/assets/images/products/Lotto.png",
    links: [""],
    bgColor: "bg-gray-50"
  },
  {
    id: 5,
    title: "Entertainment",
    subtitle: "Interactive Gaming Experiences",
    description: "We create interactive entertainment games designed to boost user engagement, increase retention, and maximize monetization. From lucky draws to interactive betting systems, our games combine creativity, psychology, and technology to deliver unforgettable experiences.",
    featureTitle: "Build a full-featured online game ecosystem:",
    features: ['Multiplayer support', 'Real-time scoring', 'Leaderboard & ranking system', 'In-app wallet integration', 'API integration (payment gateways)', 'Mobile + Web responsive design'],
    footerNote: "Designed for scalability and high-performance traffic.",
    image: "/assets/images/products/Entertainment.png",
    links: [""],
    bgColor: "bg-white"
  },
  {
    id: 6,
    title: "Insurance System",
    subtitle: "Robust Policy Lifecycle Management",
    description: "An insurance system consists of core operational modules—policy administration, claims management, underwriting, billing, and reporting—designed to manage the entire policy lifecycle. It requires robust content infrastructure supporting document version control, compliance, e-signatures, and secure data storage. Key elements include the insured/insurer, premiums, and coverage, governed by principles like utmost good faith and indemnity. ",
    featureTitle: "Efficient policy lifecycle management:",
    features: ['Policy quotation & premium calculation', 'Automated underwriting workflows', 'Policy issuance & digital documentation', 'Policy renewal automation','Endorsement & modification tracking','Multi-product support (Life, Motor, Health, Property)','Commission calculation for agents'],
    footerNote: "Reduce manual paperwork and improve processing speed.",
    image: "/assets/images/products/Insurrance.png",
    links: [""],
    bgColor: "bg-blue-50"
  },
  {
    id: 7,
    title: "Feige IM",
    subtitle: "Modern Social Messaging Platform",
    description: "Feige IM is a modern social messaging platform designed to bring people closer through secure, fast, and intelligent communication. Whether you are chatting with friends, collaborating with teams, or building communities, Feige IM provides everything you need in one powerful app.",
    featureTitle: "Key Features:",
    features: ['Instant Messaging: Send real-time text messages with lightning-fast delivery.', 'Voice & Video Calls: High-quality voice and video communication anytime, anywhere.', 'Group Chats & Communities: Create private or public groups to connect with friends, family, or business teams.', 'Media Sharing: Share photos, videos, documents, and files easily.', 'Secure Communication: Advanced encryption ensures your conversations stay private.', 'Cross-Platform Access: Use Feige IM on mobile, tablet, or desktop seamlessly.','Smart Notifications: Stay updated without missing important messages.'],
    footerNote: "Stay updated without missing important messages.",
    image: "/assets/images/products/IM.png",
    links: [""],
    bgColor: "bg-white"
  },
  {
    id: 8,
    title: "Warehouse Management ERP",
    subtitle: "Intelligent Operations • Total Inventory Visibility • Scalable Enterprise Control",
    description: "We design and develop powerful Warehouse Management ERP Systems (WMS-ERP) that streamline inventory operations, automate workflows, and integrate seamlessly with finance, procurement, sales, and logistics. Our systems are built to support small warehouses, multi-branch distribution centers, and large enterprise supply chains.",
    featureTitle: "End-to-end warehouse process automation:",
    features: ['Goods receiving & quality inspection','Barcode / QR code / RFID scanning','Smart put-away & bin location tracking','Picking strategies (FIFO, LIFO, FEFO)','Packing & shipment verification','Batch, lot & serial number management','Real-time stock movement updates'],
    footerNote: "Improves accuracy, speed, and operational efficiency.",
    image: "/assets/images/products/Win Take.png",
    links: [""],
    bgColor: "bg-blue-50"
  },
  {
    id: 9,
    title: "Laundry POS",
    subtitle: "Smart Operations • Fast Billing • Real-Time Tracking • Customer Loyalty",
    description: "Laundry POS (Point of Sale) Systems tailored for laundromats, dry cleaners, and multi-branch laundry businesses. Our solutions streamline daily operations — from order intake to delivery — while improving customer experience and business efficiency.",
    featureTitle: "Easy and efficient front-desk operations:",
    features: ['Quick order creation','Service selection (Wash, Dry, Iron, Dry Clean)','Automatic price calculation','Weight-based billing support','Barcode / QR receipt printing','Partial payment & advance payment','Express service surcharge'],
    footerNote: "Designed to handle high customer volume smoothly.",
    image: "/assets/images/products/Laundry1.png",
    links: [""],
    bgColor: "bg-white"
  },
  {
    id: 10,
    title: "Restaurant POS",
    subtitle: "Speed up front-desk and table service",
    description: "Modern Restaurant POS (Point of Sale) Systems built for cafés, fast food outlets, fine dining restaurants, food courts, and multi-branch chains. Our system streamlines order management, kitchen operations, billing, and reporting — all in one powerful platform.",
    featureTitle: "Core features for restaurants:",
    features: ['Dine-in, Takeaway & Delivery modes','Table layout management','Split bill & merge table options','Modifier options (extra cheese, no sugar, etc.)','Automatic tax & service charge calculation','Multiple payment methods (Cash, Card, QR, Wallet)','Digital & printed receipts'],
    footerNote: "Designed to reduce waiting time and improve service flow.",
    image: "/assets/images/products/Restaurang POS.png",
    links: [""],
    bgColor: "bg-blue-50"
  },
  {
    id: 11,
    title: "Retail POS",
    subtitle: "High-Performance Sales & Analytics",
    description: "high-performance Retail POS (Point of Sale) Systems tailored for fashion stores, supermarkets, electronics shops, pharmacies, convenience stores, and multi-branch retail chains. Our solutions combine sales, inventory, customer management, and analytics into one powerful platform.",
    featureTitle: "Fast and intuitive checkout experience:",
    features: ['Barcode & QR code scanning','Quick product search','Discount & promotion management','Split payment (cash, card, QR, wallet)','Gift card & voucher support','Tax & service charge automation','Printed & digital receipt options'],
    footerNote: "Designed for speed and accuracy during peak hours.",
    image: "/assets/images/products/Retailer.png",
    links: [""],
    bgColor: "bg-white"
  }
];

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
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [isH1Visible, setIsH1Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const location = useLocation();

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
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navigation />
      <main>
        <section className="bg-gradient-blue pt-32 pb-24 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 
              ref={h1Ref}
              className={`text-5xl md:text-7xl font-extrabold mb-8 transition-all duration-1000 ease-out transform ${
                isH1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-black">Our </span> <span className="text-white">Products</span>
            </h1>
            <div 
              ref={pRef}
              className={`text-lg md:text-xl text-white opacity-90 max-w-4xl mx-auto leading-relaxed space-y-4 transition-all duration-1000 ease-out delay-200 transform ${
                isPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p>From creative campaigns to custom tech solutions, Xin QiYOu Tech showcase how strategy meets storytelling.</p>
              <p>See how we help brands grow, engage, and lead in the digital age.</p>
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