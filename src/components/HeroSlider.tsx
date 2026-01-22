import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const paginationStyles = `
  .swiper-pagination-bullet {
    background: #F5E6D3;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #F5E6D3;
    opacity: 1;
  }
`;

const slides = [
  {
    desktop: '/images/hero/calmo-1.webp',
    mobile: '/images/hero/calmo-1.webp',
    desktopPosition: 'bg-center',
    mobilePosition: 'bg-center'
  },
  {
    desktop: '/images/hero/calmo-2.webp',
    mobile: '/images/hero/calmo-3-teste2.webp', 
    desktopPosition: 'bg-[center_top_30%]',
    mobilePosition: 'bg-center'
  },
  {
    desktop: '/images/hero/calmo-3-teste.webp',
    mobile: '/images/hero/calmo-3-teste.webp',
    desktopPosition: 'bg-[center_top_30%]',
    mobilePosition: 'bg-center'
  },
  {
    desktop: '/images/hero/calmo-4.webp',
    mobile: '/images/hero/calmo-4.webp',
    desktopPosition: 'bg-[center_top_30%]',
    mobilePosition: 'bg-center'
  },
  {
    desktop: '/images/hero/calmo-5.webp',
    mobile: '/images/hero/calmo-5.webp',
    desktopPosition: 'bg-[center_top_30%]',
    mobilePosition: 'bg-center'
  },
];

interface HeroSliderProps {
  onScrollToMenu: () => void;
}

export function HeroSlider({ onScrollToMenu }: HeroSliderProps) {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <style>{paginationStyles}</style>
      
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Mobile Image */}
              <div 
                className={`absolute inset-0 bg-cover bg-no-repeat transition-transform duration-[5000ms] hover:scale-105 md:hidden ${slide.mobilePosition}`}
                style={{ backgroundImage: `url('${slide.mobile}')` }}
              />
              
              {/* Desktop Image */}
              <div 
                className={`absolute inset-0 bg-cover bg-no-repeat transition-transform duration-[5000ms] hover:scale-105 hidden md:block ${slide.desktopPosition}`}
                style={{ backgroundImage: `url('${slide.desktop}')` }}
              />
              
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-6xl md:text-8xl text-cream mb-4 tracking-wide drop-shadow-sm opacity-90 uppercase animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-cream/90 font-light tracking-widest uppercase mb-12 animate-fade-in-up delay-200">
            {t('hero.subtitle')}
          </p>
          
          <button 
            onClick={onScrollToMenu}
            className="group flex flex-col items-center gap-2 text-cream/80 hover:text-cream transition-colors duration-300 cursor-pointer animate-bounce-slow"
          >
            <span className="text-sm tracking-[0.2em] uppercase">{t('hero.cta')}</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
