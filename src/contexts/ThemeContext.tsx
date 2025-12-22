import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  // Auto switch theme based on Cambodia time
  useEffect(() => {
    const checkTimeAndSetTheme = () => {
      const cambodiaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Phnom_Penh',
        hour: 'numeric',
        hour12: false,
      }).format(new Date());

      const hour = parseInt(cambodiaTime, 10);

      if (hour >= 6 && hour < 18) {
        setThemeState('light');
      } else {
        setThemeState('dark');
      }
    };

    checkTimeAndSetTheme();
    const interval = setInterval(checkTimeAndSetTheme, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};