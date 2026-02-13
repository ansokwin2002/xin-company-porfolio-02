import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Ensure i18n is initialized with proper paths and supported languages
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'km', 'zh-CN', 'tw'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Use localStorage and browser language, default to 'en'
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    backend: {
      // In Vite, public/ is served at root at runtime. Our files are inside src/locales,
      // so we load them relatively from the built assets using import.meta.url trick.
      // But the http-backend expects a URL path. We'll copy files to public/locales as a fallback.
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
