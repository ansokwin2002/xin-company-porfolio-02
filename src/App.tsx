import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Removed useLocation
import { Toaster } from 'sonner';
import LoadingBar from 'react-top-loading-bar';
import LoadingScreen from './components/specific/LoadingScreen';
import { ThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './AppRoutes'; // Import AppRoutes
import CursorEffect from './components/specific/CursorEffect';

interface MainLayoutProps {
  showAnimations: boolean;
  scrollToSection: (sectionId: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ showAnimations, scrollToSection }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
    {/* CustomCursor, Navigation, Hero, etc. are now passed via props or handled within AppRoutes/MainLayout */}
    {/* These components were part of MainLayout definition */}
  </div>
);

function App() {
  const [showAnimations, setShowAnimations] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0); // State for loading bar progress
  const loadingBarRef = useRef(null); // Ref for LoadingBar

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowAnimations(true);
    }, 800); // Reduced to 800ms for faster loading

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen
  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Toaster richColors position="top-center" />
      <div className="relative">
        <BrowserRouter>
          <LoadingBar color="#2998ff" height={3} progress={progress} onLoaderFinished={() => setProgress(0)} ref={loadingBarRef} />
          <CursorEffect />
          <AppRoutes setProgress={setProgress} showAnimations={showAnimations} scrollToSection={scrollToSection} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
