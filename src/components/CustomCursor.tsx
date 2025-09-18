import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  
  // Use refs for direct DOM manipulation for better performance
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  // Throttle mouse movement for better performance
  const rafRef = useRef<number>();
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized position update using RAF and direct DOM manipulation
  const updatePosition = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update state for React components that need it
      setPosition({ x, y });
      
      // Direct DOM manipulation for immediate visual feedback
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 8}px, ${y - 8}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
      }
    });
  }, []);

  // Optimized hover detection with debouncing
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = 
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.classList.contains('cursor-pointer') ||
      target.closest('button') ||
      target.closest('a');
    
    if (isInteractive && !isHovering) {
      setIsHovering(true);
    } else if (!isInteractive && isHovering) {
      setIsHovering(false);
    }
  }, [isHovering]);

  useEffect(() => {
    // Don't add cursor on mobile devices
    if (isMobile) return;

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsClicking(false);
    };

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, updatePosition, handleMouseOver]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot - optimized with faster transitions */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out ${
          isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          willChange: 'transform'
        }}
      >
        <div
          className={`w-4 h-4 rounded-full transition-colors duration-150 ${
            theme === 'dark'
              ? isHovering
                ? 'bg-red-400'
                : 'bg-white'
              : isHovering
                ? 'bg-red-500'
                : 'bg-gray-900'
          }`}
        />
      </div>

      {/* Simplified outer ring - removed heavy effects */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-100 ease-out ${
          isClicking ? 'scale-50 opacity-60' : isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-40'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          willChange: 'transform'
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-colors duration-150 ${
            theme === 'dark'
              ? isHovering
                ? 'border-red-400/80'
                : 'border-white/60'
              : isHovering
                ? 'border-red-500/80'
                : 'border-gray-900/60'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;