import React, { useRef, useEffect, useState } from 'react';

interface CountingNumberProps {
  targetValue: number;
  duration?: number; // Animation duration in milliseconds
  decimalPlaces?: number; // Number of decimal places to display
  suffix?: string; // e.g., "%" or "+" or ""
  prefix?: string; // e.g., "$" or ""
  className?: string; // Optional className for styling
}

const CountingNumber: React.FC<CountingNumberProps> = ({ 
  targetValue, 
  duration = 2000, 
  decimalPlaces = 0, 
  suffix = '', 
  prefix = '', 
  className 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false); // To ensure it only animates once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start: number | null = null;
          const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            
            // Calculate value without Math.floor for decimals
            const animatedValue = percentage * targetValue;
            setCurrentValue(animatedValue);

            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration, decimalPlaces]); // Added decimalPlaces to dependencies

  const displayedValue = currentValue.toFixed(decimalPlaces);

  return (
    <div ref={ref} className={className}>
      {prefix}{displayedValue}{suffix}
    </div>
  );
};

export default CountingNumber;
