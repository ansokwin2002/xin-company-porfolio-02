import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 flex-col">
      {/* QiYOU Loader */}
      <div className="qiyou-loader">
        {/* Hidden SVG for gradients */}
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="qiyou-grad-q">
              <stop stopColor="#973BED"></stop>
              <stop stopColor="#007CFF" offset="1"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="qiyou-grad-i">
              <stop stopColor="#FFC800"></stop>
              <stop stopColor="#F0F" offset="1"></stop>
              <animateTransform 
                repeatCount="indefinite" 
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" 
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" 
                dur="8s" 
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" 
                type="rotate" 
                attributeName="gradientTransform">
              </animateTransform>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="qiyou-grad-y">
              <stop stopColor="#00E0ED"></stop>
              <stop stopColor="#00DA72" offset="1"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="qiyou-grad-o">
              <stop stopColor="#FF6B6B"></stop>
              <stop stopColor="#FFD93D" offset="1"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="qiyou-grad-u">
              <stop stopColor="#A8E6CF"></stop>
              <stop stopColor="#3D84A8" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Q - Circle with tail */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="8" 
            stroke="url(#qiyou-grad-q)" 
            d="M 32 8 A 20 20 0 1 1 32 48 A 20 20 0 0 1 32 8 M 42 42 L 52 52" 
            className="qiyou-dash" 
            pathLength="360">
          </path>
        </svg>

        {/* i - Vertical line with dot */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="10" 
            stroke="url(#qiyou-grad-i)" 
            d="M 32 20 L 32 50 M 32 10 L 32 12" 
            className="qiyou-spin" 
            pathLength="360">
          </path>
        </svg>

        <div className="qiyou-w-2"></div>

        {/* Y - Fork shape */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="8" 
            stroke="url(#qiyou-grad-y)" 
            d="M 20 10 L 32 32 L 44 10 M 32 32 L 32 54" 
            className="qiyou-dash" 
            pathLength="360">
          </path>
        </svg>

        <div className="qiyou-w-2"></div>

        {/* O - Circle */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="10" 
            stroke="url(#qiyou-grad-o)" 
            d="M 32 32 m 0 -22 a 22 22 0 1 1 0 44 a 22 22 0 1 1 0 -44" 
            className="qiyou-spin" 
            pathLength="360">
          </path>
        </svg>

        <div className="qiyou-w-2"></div>

        {/* U - Arc shape */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="8" 
            stroke="url(#qiyou-grad-u)" 
            d="M 18 10 L 18 35 A 14 14 0 0 0 46 35 L 46 10" 
            className="qiyou-dash" 
            pathLength="360">
          </path>
        </svg>
      </div>

      {/* QiYOU Text */}
      <p className="mt-2 text-gray-600 text-sm">Your Success Partner</p>

      {/* Add the CSS styles */}
      <style jsx>{`
        .absolute {
          position: absolute;
        }

        .inline-block {
          display: inline-block;
        }

        .qiyou-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.25em 0;
        }

        .qiyou-w-2 {
          width: 0.5em;
        }

        .qiyou-dash {
          animation: qiyouDashArray 2s ease-in-out infinite,
            qiyouDashOffset 2s linear infinite;
        }

        .qiyou-spin {
          animation: qiyouSpinDashArray 2s ease-in-out infinite,
            qiyouSpin 8s ease-in-out infinite,
            qiyouDashOffset 2s linear infinite;
          transform-origin: center;
        }

        @keyframes qiyouDashArray {
          0% {
            stroke-dasharray: 0 1 359 0;
          }
          50% {
            stroke-dasharray: 0 359 1 0;
          }
          100% {
            stroke-dasharray: 359 1 0 0;
          }
        }

        @keyframes qiyouSpinDashArray {
          0% {
            stroke-dasharray: 270 90;
          }
          50% {
            stroke-dasharray: 0 360;
          }
          100% {
            stroke-dasharray: 270 90;
          }
        }

        @keyframes qiyouDashOffset {
          0% {
            stroke-dashoffset: 365;
          }
          100% {
            stroke-dashoffset: 5;
          }
        }

        @keyframes qiyouSpin {
          0% {
            rotate: 0deg;
          }
          12.5%,
          25% {
            rotate: 270deg;
          }
          37.5%,
          50% {
            rotate: 540deg;
          }
          62.5%,
          75% {
            rotate: 810deg;
          }
          87.5%,
          100% {
            rotate: 1080deg;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;