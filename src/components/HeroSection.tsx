import { HeroSlider } from './HeroSlider';
import { LanguageSwitcher } from './LanguageSwitcher';

export const HeroSection = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      menuElement.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute right-4 top-4 z-10 animate-fade-in md:right-6 md:top-6">
        <LanguageSwitcher />
      </div>
      <HeroSlider onScrollToMenu={scrollToMenu} />
    </div>
  );
};
