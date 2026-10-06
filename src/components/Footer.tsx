import { SocialIcons } from './SocialIcons';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import signatureUrl from '@/assets/brand/signature-vertical-beige.webp';

const UNITS = [
  {
    nameKey: 'footer.unitBeiraMar',
    badgeKey: 'footer.headquarters',
    address: ['Rua Altamiro Guimarães, 260 - Sala 1', 'Centro, Florianópolis'],
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Altamiro+Guimarães,+260,+Florianópolis',
  },
  {
    nameKey: 'footer.unitCentro',
    address: ['Rua Osmar Cunha, 472'],
    noteKey: 'footer.annex',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Osmar+Cunha,+472,+Florianópolis',
  },
];

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-24 bg-coffee px-6 py-16 text-cream [--focus:theme(colors.cream.DEFAULT)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:grid lg:grid-cols-4 lg:items-start">

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img
            src={signatureUrl}
            alt={t('footer.logoAlt')}
            width={695}
            height={698}
            loading="lazy"
            className="mb-5 h-auto w-32"
          />
          <p className="text-sm font-light leading-relaxed tracking-wide text-cream/90">
            {t('footer.about')}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 lg:items-start">
          <h3 className="mb-2 w-full border-b border-cream/20 pb-2 text-center font-display text-xl tracking-widest text-cream lg:text-left">
            {t('footer.location')}
          </h3>

          {UNITS.map((unit) => (
            <a
              key={unit.nameKey}
              href={unit.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col items-center gap-3 rounded-lg transition-opacity hover:opacity-90 lg:w-auto lg:flex-row lg:items-start"
            >
              <div className="flex-shrink-0 rounded-full bg-coffee-light/15 p-2 transition-colors group-hover:bg-coffee-light/25">
                <MapPin size={20} className="text-coffee-light" aria-hidden="true" />
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="mb-1 font-display text-lg tracking-wide text-cream">
                  {t(unit.nameKey)}
                  {unit.badgeKey && (
                    <span className="ml-2 inline-block rounded-full border border-cream/30 px-2 py-0.5 align-middle font-sans text-xs text-cream">
                      {t(unit.badgeKey)}
                    </span>
                  )}
                </span>
                <span className="text-sm font-light leading-relaxed text-cream/90">
                  {unit.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                  {unit.noteKey && <span className="block text-xs italic">{t(unit.noteKey)}</span>}
                </span>
                <span className="sr-only">({t('footer.maps')})</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-6 lg:items-start">
          <h3 className="mb-2 w-full border-b border-cream/20 pb-2 text-center font-display text-xl tracking-widest text-cream lg:text-left">
            {t('footer.hours')}
          </h3>

          <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-row lg:items-start">
            <div className="flex-shrink-0 rounded-full bg-coffee-light/15 p-2">
              <Clock size={20} className="text-coffee-light" aria-hidden="true" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <div>
                <p className="mb-1 text-sm font-medium text-cream">{t('footer.weekdays')}</p>
                <p className="text-sm font-light text-cream/90">07:30 - 19:30</p>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-cream">{t('footer.saturday')}</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    ['Beira Mar', '10:00 - 18:00'],
                    ['Centro', '09:00 - 17:00'],
                  ].map(([unit, hours]) => (
                    <div key={unit} className="flex items-center gap-2">
                      <span className="rounded-full border border-cream/30 px-2 py-0.5 text-xs font-medium text-cream">{unit}</span>
                      <span className="text-sm font-light text-cream/90">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-8 lg:items-end lg:justify-self-end">
          <LanguageSwitcher />

          <div className="flex flex-col items-center lg:items-end">
            <SocialIcons />

            <div className="mt-6 text-center text-xs font-light tracking-wide text-cream/90 lg:text-right">
              <p className="mb-1">© {new Date().getFullYear()} Calmô. {t('footer.copyright')}</p>
              <p>
                <Trans
                  i18nKey="footer.credits"
                  components={{
                    0: <a href="https://github.com/Guilhermefoliveira" target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-2 transition-colors hover:underline" />,
                    1: <span className="text-coffee-light" aria-hidden="true" />
                  }}
                />
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
