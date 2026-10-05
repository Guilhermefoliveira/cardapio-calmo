import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const flags = {
    pt: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-4 shadow-sm rounded-sm">
        <rect width="72" height="48" fill="#009c3b" />
        <path fill="#ffdf00" d="M36,4l32,20l-32,20l-32-20z" />
        <circle cx="36" cy="24" r="10" fill="#002776" />
        <path fill="#fff" d="M26.5,24c1,3,5,6,9.5,6c4.5,0,8.5-3,9.5-6" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    en: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-4 shadow-sm rounded-sm">
        <rect width="72" height="48" fill="#012169" />
        <path d="M0,0 L72,48 M72,0 L0,48" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L72,48 M72,0 L0,48" stroke="#C8102E" strokeWidth="4" />
        <path d="M36,0 L36,48 M0,24 L72,24" stroke="#fff" strokeWidth="10" />
        <path d="M36,0 L36,48 M0,24 L72,24" stroke="#C8102E" strokeWidth="6" />
      </svg>
    ),
    es: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-4 shadow-sm rounded-sm">
        <rect width="72" height="48" fill="#AA151B" />
        <rect y="12" width="72" height="24" fill="#F1BF00" />
      </svg>
    )
  };

  return (
    <div className="flex items-center gap-3 bg-black/30 p-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
      <button 
        onClick={() => changeLanguage('pt')}
        className={`p-1.5 rounded-full transition-all duration-300 ${i18n.language.startsWith('pt') ? 'bg-white/20 scale-110 shadow-sm' : 'hover:bg-white/10 opacity-70 hover:opacity-100'}`}
        aria-label="Português"
        title="Português"
      >
        {flags.pt}
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`p-1.5 rounded-full transition-all duration-300 ${i18n.language.startsWith('en') ? 'bg-white/20 scale-110 shadow-sm' : 'hover:bg-white/10 opacity-70 hover:opacity-100'}`}
        aria-label="English"
        title="English"
      >
        {flags.en}
      </button>
      <button 
        onClick={() => changeLanguage('es')}
        className={`p-1.5 rounded-full transition-all duration-300 ${i18n.language.startsWith('es') ? 'bg-white/20 scale-110 shadow-sm' : 'hover:bg-white/10 opacity-70 hover:opacity-100'}`}
        aria-label="Español"
        title="Español"
      >
        {flags.es}
      </button>
    </div>
  );
};
