import { SocialIcons } from './SocialIcons';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-coffee py-16 px-6 mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coffee via-coffee-light to-coffee opacity-30"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-4 gap-12 relative z-10 items-center lg:items-start">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img 
            src="/images/sorriso-calmo.webp" 
            alt="Ilustração Calmô" 
            className="w-16 opacity-90 mix-blend-screen"
            loading="lazy"
          />
          <h3 className="font-display text-4xl text-cream mb-4 tracking-wider uppercase">{t('hero.title')}</h3>
          <p className="text-cream/80 text-sm font-sans font-light tracking-wide leading-relaxed">
            {t('footer.about')}
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full items-center lg:items-start">
          <h4 className="font-display text-xl text-coffee-light uppercase tracking-widest mb-2 border-b border-coffee-light/20 pb-2 w-full text-center lg:text-left">
            {t('footer.location')}
          </h4>
          
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rua+Altamiro+Guimarães,+260,+Florianópolis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row gap-3 items-center lg:items-start group hover:opacity-90 transition-opacity w-full lg:w-auto"
            aria-label="Ver Unidade Beira Mar no Google Maps"
          >
            <div className="p-2 bg-coffee-light/10 rounded-full group-hover:bg-coffee-light/20 transition-colors flex-shrink-0">
              <MapPin size={20} className="text-coffee-light" />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h4 className="font-display text-lg text-cream mb-1 tracking-wide group-hover:text-coffee-light transition-colors">Unidade Beira Mar <span className="text-xs text-coffee-light font-sans bg-coffee-light/10 px-2 py-0.5 rounded-full ml-1 border border-coffee-light/20 align-middle inline-block mt-1 lg:mt-0">Matriz</span></h4>
              <p className="text-cream/70 text-sm font-sans font-light leading-relaxed">
                Rua Altamiro Guimarães, 260 - Sala 1<br/>
                Centro, Florianópolis
              </p>
            </div>
          </a>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rua+Osmar+Cunha,+472,+Florianópolis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row gap-3 items-center lg:items-start group hover:opacity-90 transition-opacity w-full lg:w-auto"
            aria-label="Ver Unidade Centro no Google Maps"
          >
             <div className="p-2 bg-coffee-light/10 rounded-full group-hover:bg-coffee-light/20 transition-colors flex-shrink-0">
              <MapPin size={20} className="text-coffee-light" />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h4 className="font-display text-lg text-cream mb-1 tracking-wide group-hover:text-coffee-light transition-colors">Unidade Centro</h4>
              <p className="text-cream/70 text-sm font-sans font-light leading-relaxed">
                Rua Osmar Cunha, 472<br/>
                <span className="text-cream/50 text-xs italic">Anexo à Barbearia Tradicional</span>
              </p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col gap-6 w-full items-center lg:items-start">
          <h4 className="font-display text-xl text-coffee-light uppercase tracking-widest mb-2 border-b border-coffee-light/20 pb-2 w-full text-center lg:text-left">
            {t('footer.hours')}
          </h4>

          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-start w-full lg:w-auto">
            <div className="p-2 bg-coffee-light/10 rounded-full flex-shrink-0">
              <Clock size={20} className="text-coffee-light" />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-4">
                <p className="text-cream font-sans font-medium text-sm mb-1">{t('footer.weekdays')}</p>
                <p className="text-cream/70 text-sm font-sans font-light">07:30 - 19:30</p>
              </div>
              <div>
                <p className="text-cream font-sans font-medium text-sm mb-1">{t('footer.saturday')}</p>
                <p className="text-cream/70 text-sm font-sans font-light">10:00 - 17:45</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end lg:justify-self-end w-full gap-8">
          
          <div className="flex items-center gap-4 bg-black/20 p-2 rounded-full backdrop-blur-sm">
            <button 
              onClick={() => changeLanguage('pt')}
              className={`px-3 py-1 rounded-full text-xs font-sans tracking-wide transition-all ${i18n.language.startsWith('pt') ? 'bg-coffee-light text-coffee font-bold' : 'text-cream/60 hover:text-cream'}`}
            >
              PT
            </button>
            <div className="w-px h-4 bg-cream/20"></div>
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-sans tracking-wide transition-all ${i18n.language.startsWith('en') ? 'bg-coffee-light text-coffee font-bold' : 'text-cream/60 hover:text-cream'}`}
            >
              EN
            </button>
            <div className="w-px h-4 bg-cream/20"></div>
            <button 
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 rounded-full text-xs font-sans tracking-wide transition-all ${i18n.language.startsWith('es') ? 'bg-coffee-light text-coffee font-bold' : 'text-cream/60 hover:text-cream'}`}
            >
              ES
            </button>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <SocialIcons />
            
            <div className="text-center lg:text-right text-cream/60 text-xs font-sans font-light tracking-wide mt-6">
              <p className="mb-1">© {new Date().getFullYear()} Calmô. {t('footer.copyright')}</p>
              <p>
                <Trans 
                  i18nKey="footer.credits"
                  components={{
                    0: <a href="https://github.com/Guilhermefoliveira" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-light transition-colors font-medium" />,
                    1: <span className="text-coffee-light" />
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
