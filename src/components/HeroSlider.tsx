import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { ChevronDown, Pause, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import signatureUrl from '@/assets/brand/signature-vertical-beige.webp';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

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

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface HeroSliderProps {
  onScrollToMenu: () => void;
}

export function HeroSlider({ onScrollToMenu }: HeroSliderProps) {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [paused, setPaused] = useState(prefersReducedMotion);

  const togglePlayback = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (paused) swiper.autoplay.start();
    else swiper.autoplay.stop();
    setPaused(!paused);
  };

  return (
    <div className="relative h-[58vh] min-h-[22rem] w-full overflow-hidden supports-[height:1svh]:h-[58svh] md:h-[72vh] md:min-h-[30rem]">
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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (paused) swiper.autoplay.stop();
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Mobile Image */}
              <div
                className={`absolute inset-0 bg-cover bg-no-repeat md:hidden ${slide.mobilePosition}`}
                style={{ backgroundImage: `url('${slide.mobile}')` }}
              />

              {/* Desktop Image */}
              <div
                className={`absolute inset-0 hidden bg-cover bg-no-repeat md:block ${slide.desktopPosition}`}
                style={{ backgroundImage: `url('${slide.desktop}')` }}
              />

              <div className="absolute inset-0 bg-black/35" />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="animate-fade-in-up">
            <img
              src={signatureUrl}
              alt="Calmô, cafés e cookies"
              width={695}
              height={698}
              className="h-auto w-[11rem] drop-shadow-md md:w-[15rem]"
            />
          </h1>

          <button
            onClick={onScrollToMenu}
            className="group mt-8 flex min-h-11 flex-col items-center gap-1 text-cream animate-fade-in-up [animation-delay:200ms] md:mt-10"
          >
            <span className="text-sm uppercase tracking-[0.2em]">{t('hero.cta')}</span>
            <ChevronDown className="h-6 w-6 animate-nudge-down" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          aria-pressed={paused}
          aria-label={paused ? t('hero.play') : t('hero.pause')}
          className="absolute bottom-2 right-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/30 text-cream backdrop-blur-sm [--focus:theme(colors.cream.DEFAULT)]"
        >
          {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
        </button>
      </Swiper>
    </div>
  );
}
