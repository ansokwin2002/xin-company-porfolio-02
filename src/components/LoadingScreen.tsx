import React from 'react';
import { Code, Sparkles } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center z-50">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Loading Content */}
      <div className="relative text-center space-y-8">
        {/* Logo Animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl animate-pulse">
              AS
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-20 blur-xl scale-110 animate-ping"></div>
            <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-bounce" size={20} />
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            An <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Sokwins</span>
          </h1>
          <p className="text-xl text-white/80">Freelance Web Developer</p>
        </div>

        {/* Loading Animation */}
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <p className="text-white/60 text-sm">Crafting your digital experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;