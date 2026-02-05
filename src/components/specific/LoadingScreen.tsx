import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onFinished?: () => void; // Callback to tell parent we hit 100%
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small delay at 100% so the user can actually see it
          setTimeout(() => {
            if (onFinished) onFinished();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Faster increment (approx 2 seconds total)

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 flex-col">
      <div className="qiyou-loader">
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs>
            <linearGradient id="qiyou-grad-q" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#973BED"></stop>
              <stop stopColor="#007CFF" offset="1"></stop>
            </linearGradient>
            <linearGradient id="qiyou-grad-i" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC800"></stop>
              <stop stopColor="#F0F" offset="1"></stop>
            </linearGradient>
            <linearGradient id="qiyou-grad-y" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E0ED"></stop>
              <stop stopColor="#00DA72" offset="1"></stop>
            </linearGradient>
            <linearGradient id="qiyou-grad-o" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B6B"></stop>
              <stop stopColor="#FFD93D" offset="1"></stop>
            </linearGradient>
            <linearGradient id="qiyou-grad-u" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A8E6CF"></stop>
              <stop stopColor="#3D84A8" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* SVG Letters Q, I, Y, O, U */}
        <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#qiyou-grad-q)" d="M 32 8 A 20 20 0 1 1 32 48 A 20 20 0 0 1 32 8 M 42 42 L 52 52" className="qiyou-dash" pathLength="360" />
        </svg>
        <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="10" stroke="url(#qiyou-grad-i)" d="M 32 20 L 32 50 M 32 10 L 32 12" className="qiyou-spin" pathLength="360" />
        </svg>
        <div className="qiyou-w-2"></div>
        <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#qiyou-grad-y)" d="M 20 10 L 32 32 L 44 10 M 32 32 L 32 54" className="qiyou-dash" pathLength="360" />
        </svg>
        <div className="qiyou-w-2"></div>
        <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="10" stroke="url(#qiyou-grad-o)" d="M 32 32 m 0 -22 a 22 22 0 1 1 0 44 a 22 22 0 1 1 0 -44" className="qiyou-spin" pathLength="360" />
        </svg>
        <div className="qiyou-w-2"></div>
        <svg fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#qiyou-grad-u)" d="M 18 10 L 18 35 A 14 14 0 0 0 46 35 L 46 10" className="qiyou-dash" pathLength="360" />
        </svg>
      </div>

      {/* Progress Counter */}
      <div className="mt-8 flex flex-col items-center">
        <span className="text-2xl font-black text-gray-800 tabular-nums">
          {progress}%
        </span>
        <div className="w-64 h-1.5 bg-gray-100 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          {progress === 100 ? 'System Ready' : 'Loading Assets'}
        </p>
      </div>

      <style jsx>{`
        .absolute { position: absolute; }
        .inline-block { display: inline-block; }
        .qiyou-loader { display: flex; align-items: center; justify-content: center; }
        .qiyou-w-2 { width: 0.5rem; }
        .qiyou-dash { animation: qiyouDashArray 2s ease-in-out infinite, qiyouDashOffset 2s linear infinite; }
        .qiyou-spin { animation: qiyouSpinDashArray 2s ease-in-out infinite, qiyouSpin 8s ease-in-out infinite, qiyouDashOffset 2s linear infinite; transform-origin: center; }
        @keyframes qiyouDashArray { 0% { stroke-dasharray: 0 1 359 0; } 50% { stroke-dasharray: 0 359 1 0; } 100% { stroke-dasharray: 359 1 0 0; } }
        @keyframes qiyouSpinDashArray { 0% { stroke-dasharray: 270 90; } 50% { stroke-dasharray: 0 360; } 100% { stroke-dasharray: 270 90; } }
        @keyframes qiyouDashOffset { 0% { stroke-dashoffset: 365; } 100% { stroke-dashoffset: 5; } }
        @keyframes qiyouSpin { 0% { rotate: 0deg; } 12.5%, 25% { rotate: 270deg; } 37.5%, 50% { rotate: 540deg; } 62.5%, 75% { rotate: 810deg; } 87.5%, 100% { rotate: 1080deg; } }
      `}</style>
    </div>
  );
};

export default LoadingScreen;