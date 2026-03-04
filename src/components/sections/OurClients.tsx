import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Client {
  id?: number;
  title: string;
  subtitle?: string;
  image: string;
  ordering?: number;
}

const OurClients: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
        const response = await fetch(`${baseUrl}/api/logo-clients`);
        const result = await response.json();
        
        if (result.success && Array.isArray(result.data)) {
          // Sort by ordering number (ascending)
          const sortedData = [...result.data].sort((a, b) => {
            const orderA = a.ordering !== undefined && a.ordering !== null ? a.ordering : 999;
            const orderB = b.ordering !== undefined && b.ordering !== null ? b.ordering : 999;
            return orderA - orderB;
          });
          setClients(sortedData);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isLoading && clients.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-widest mb-20 text-gray-900 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('clients_section.title_main')} <span className="bg-gradient-blue bg-clip-text text-transparent">{t('clients_section.title_highlight')}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse flex flex-col items-center">
                <div className="h-20 w-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
            ))
          ) : (
            clients.map((client, index) => (
              <div 
                key={client.id || index} 
                className={`flex flex-col items-center justify-start group transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-90'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="h-20 w-full flex items-center justify-center mb-6">
                  <img 
                    src={client.image} 
                    alt={client.title}
                    className="max-h-full max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/brand-clients/p1.png';
                    }}
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-[10px] md:text-[11px] leading-tight uppercase tracking-widest">
                    {client.title}
                  </h3>
                  {client.subtitle && (
                    <p className="font-bold text-gray-900 text-[10px] md:text-[11px] leading-tight uppercase tracking-widest mt-1 opacity-60">
                      {client.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OurClients;