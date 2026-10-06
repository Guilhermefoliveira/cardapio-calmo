import { useTranslation } from 'react-i18next';

export function FloatingButton() {
  const { t } = useTranslation();

  return (
    <a
      href="https://www.ifood.com.br/delivery/florianopolis-sc/calmo-cafes-e-cookies-centro/"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-fab flex h-14 w-14 animate-pop-in items-center justify-center rounded-full bg-[#EA1D2C] shadow-lg transition-transform hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
      title={t('actions.orderIfood')}
      aria-label={t('actions.orderIfood')}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white md:h-10 md:w-10" aria-hidden="true">
        <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-sm font-bold text-[#EA1D2C] opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {t('actions.orderIfood')}
      </span>
    </a>
  );
}
