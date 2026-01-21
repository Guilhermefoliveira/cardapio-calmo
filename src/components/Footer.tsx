import { SocialIcons } from './SocialIcons';
import { MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-coffee py-16 px-6 mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coffee via-coffee-light to-coffee opacity-30"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-12 relative z-10 items-center md:items-start">
        
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="/images/sorriso-calmo.png" 
            alt="Ilustração Calmô" 
            className="w-16 opacity-90 mix-blend-screen"
            loading="lazy"
          />
          <h3 className="font-display text-4xl text-cream mb-4 tracking-wider uppercase">Calmô</h3>
          <p className="text-cream/80 text-sm font-sans font-light tracking-wide leading-relaxed">
            Pausa para um café, um cookie e um respiro. 
            Momentos simples feitos com carinho.
          </p>
        </div>

        {/* Locations Column */}
        <div className="flex flex-col gap-6 w-full items-center md:items-start">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rua+Altamiro+Guimarães,+260,+Florianópolis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row gap-3 items-center md:items-start group hover:opacity-90 transition-opacity w-full md:w-auto"
            aria-label="Ver Unidade Beira Mar no Google Maps"
          >
            <div className="p-2 bg-coffee-light/10 rounded-full group-hover:bg-coffee-light/20 transition-colors flex-shrink-0">
              <MapPin size={20} className="text-coffee-light" />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="font-display text-lg text-cream mb-1 tracking-wide group-hover:text-coffee-light transition-colors">Unidade Beira Mar <span className="text-xs text-coffee-light font-sans bg-coffee-light/10 px-2 py-0.5 rounded-full ml-1 border border-coffee-light/20 align-middle inline-block mt-1 md:mt-0">Matriz</span></h4>
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
            className="flex flex-col md:flex-row gap-3 items-center md:items-start group hover:opacity-90 transition-opacity w-full md:w-auto"
            aria-label="Ver Unidade Centro no Google Maps"
          >
             <div className="p-2 bg-coffee-light/10 rounded-full group-hover:bg-coffee-light/20 transition-colors flex-shrink-0">
              <MapPin size={20} className="text-coffee-light" />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="font-display text-lg text-cream mb-1 tracking-wide group-hover:text-coffee-light transition-colors">Unidade Centro</h4>
              <p className="text-cream/70 text-sm font-sans font-light leading-relaxed">
                Rua Osmar Cunha, 472<br/>
                <span className="text-cream/50 text-xs italic">Anexo à Barbearia Tradicional</span>
              </p>
            </div>
          </a>
        </div>
        
        {/* Social Column */}
        <div className="flex flex-col items-center md:items-end md:justify-self-end w-full">
          <SocialIcons />
          
          <div className="text-center md:text-right text-cream/60 text-xs font-sans font-light tracking-wide mt-6">
            <p className="mb-1">© {new Date().getFullYear()} Calmô. Todos os direitos reservados.</p>
            <p>Feito com <span className="text-coffee-light">♥</span> e café.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};