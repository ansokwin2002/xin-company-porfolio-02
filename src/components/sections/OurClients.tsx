import React, { useRef, useEffect, useState } from 'react';

interface Client {
  name: string;
  subName?: string;
  imageName: string; // Updated to use image file names
}

const OurClients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Updated client list with image names b1.png through b10.png
  const clients: Client[] = [
    { name: 'WINGO LOTTO', imageName: 'b1.png' },
    { name: 'WINGO', subName: 'SCRATCHER TICKET', imageName: 'b2.png' },
    { name: 'NATIONAL', subName: 'SPORT LOTTERY', imageName: 'b3.png' },
    { name: 'HSIN NIU', subName: 'LOTTERY', imageName: 'b4.png' },
    { name: 'I BINGO', subName: 'LOTTO', imageName: 'b5.png' },
    { name: 'MEI YAUN', subName: 'ENTERTAINMENT', imageName: 'b6.png' },
    { name: 'WIN TAKE', subName: 'GLOBAL', imageName: 'b7.png' },
    { name: 'JINBIE HOTEL', imageName: 'b8.png' },
    { name: 'ORANGE SHOP', imageName: 'b9.png' },
    { name: 'LELOT', subName: '(CAMBODIA)', imageName: 'b10.png' },
  ];

  // 1. Auto-scroll Logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId: number;
    const scroll = () => {
      if (!isPaused && !isDragging && scrollContainer) {
        scrollContainer.scrollLeft += 0.8; 
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // 2. Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          OUR <span className="bg-gradient-blue bg-clip-text text-transparent">CLIENTS</span>
        </h2>
      </div>

      <div 
        className={`relative w-full py-10 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
        onMouseDown={handleMouseDown}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef} 
          className="flex overflow-x-hidden"
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center w-[180px] mx-4 flex-shrink-0 pointer-events-none"
            >
              {/* Image Logo Container */}
              <div className="w-28 h-28 rounded-full shadow-lg flex items-center justify-center mb-5 border border-gray-100 bg-white overflow-hidden">
                <img 
                  src={`/assets/brand-clients/${client.imageName}`} 
                  alt={client.name}
                  className="w-full h-full object-contain p-4" // p-4 adds a little breathing room inside the circle
                />
              </div>
              
              <div className="text-center px-2">
                <h3 className="font-extrabold text-gray-900 text-xs md:text-sm uppercase tracking-tight">
                  {client.name}
                </h3>
                {client.subName && (
                   <p className="font-extrabold text-gray-900 text-xs md:text-sm uppercase tracking-tight">{client.subName}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        div { -ms-overflow-style: none; scrollbar-width: none; }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default OurClients;