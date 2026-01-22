import { HeroSlider } from './HeroSlider';
import { LanguageSwitcher } from './LanguageSwitcher';

export const HeroSection = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-6 right-6 z-50 animate-fade-in">
        <LanguageSwitcher />
      </div>
      <HeroSlider onScrollToMenu={scrollToMenu} />
    </div>
  );
};
