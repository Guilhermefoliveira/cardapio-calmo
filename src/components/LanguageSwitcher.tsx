import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const FLAGS = {
  pt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="h-4 w-6 rounded-sm shadow-sm" aria-hidden="true">
      <rect width="72" height="48" fill="#009c3b" />
      <path fill="#ffdf00" d="M36,4l32,20l-32,20l-32-20z" />
      <circle cx="36" cy="24" r="10" fill="#002776" />
      <path fill="#fff" d="M26.5,24c1,3,5,6,9.5,6c4.5,0,8.5-3,9.5-6" stroke="#fff" strokeWidth="1.5" />
    </svg>
  ),
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="h-4 w-6 rounded-sm shadow-sm" aria-hidden="true">
      <rect width="72" height="48" fill="#012169" />
      <path d="M0,0 L72,48 M72,0 L0,48" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L72,48 M72,0 L0,48" stroke="#C8102E" strokeWidth="4" />
      <path d="M36,0 L36,48 M0,24 L72,24" stroke="#fff" strokeWidth="10" />
      <path d="M36,0 L36,48 M0,24 L72,24" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  es: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="h-4 w-6 rounded-sm shadow-sm" aria-hidden="true">
      <rect width="72" height="48" fill="#AA151B" />
      <rect y="12" width="72" height="24" fill="#F1BF00" />
    </svg>
  ),
};

const LANGUAGES = [
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
] as const;

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language.split('-')[0];

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 shadow-lg backdrop-blur-md [--focus:theme(colors.cream.DEFAULT)]"
    >
      {LANGUAGES.map(({ code, name }) => {
        const active = current === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            title={name}
            onClick={() => i18n.changeLanguage(code)}
            className={cn(
              'grid h-11 w-11 place-items-center rounded-full transition-all duration-300',
              active ? 'bg-white/20 shadow-sm' : 'opacity-70 hover:bg-white/10 hover:opacity-100',
            )}
          >
            {FLAGS[code]}
            <span className="sr-only">{name}</span>
          </button>
        );
      })}
    </div>
  );
};
