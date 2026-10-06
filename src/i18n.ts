import i18n from 'i18next';
import type { BackendModule, ReadCallback } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt.json';

// Portuguese ships in the bundle; the other languages load on demand.
const LOADERS: Record<string, () => Promise<{ default: object }>> = {
  en: () => import('./locales/en.json'),
  es: () => import('./locales/es.json'),
};

const lazyBackend: BackendModule = {
  type: 'backend',
  init() {},
  read(language: string, _namespace: string, callback: ReadCallback) {
    const load = LOADERS[language];
    if (!load) {
      callback(null, {});
      return;
    }
    load().then(
      (module) => callback(null, module.default),
      (error: Error) => callback(error, false),
    );
  },
};

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng.startsWith('pt') ? 'pt-BR' : lng.split('-')[0];
});

i18n
  .use(lazyBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { pt: { translation: pt } },
    partialBundledLanguages: true,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
  });

export default i18n;
