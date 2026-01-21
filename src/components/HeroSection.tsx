import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/calmo-1.webp" 
          alt="Calmô Cafeteria" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="font-serif text-6xl md:text-8xl text-cream mb-4 tracking-wide drop-shadow-sm opacity-90">
          Calmô
        </h1>
        <p className="text-cream/90 text-lg md:text-xl font-light tracking-[0.2em] uppercase mb-12">
          Cafés & Cookies
        </p>
        
        <button 
          onClick={scrollToMenu}
          className="mx-auto group flex flex-col items-center gap-2 text-cream/80 hover:text-cream transition-colors cursor-pointer"
          aria-label="Ver Cardápio"
        >
          <span className="text-1xl tracking-widest uppercase">Ver Cardápio</span>
          <ChevronDown className="animate-bounce" size={24} />
        </button>
      </div>
    </section>
  );
};