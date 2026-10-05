import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onHeightChange: (height: number) => void;
}

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

export const CategoryNav = ({ categories, activeCategory, onHeightChange }: CategoryNavProps) => {
  const { t } = useTranslation();
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const observer = new ResizeObserver(() => onHeightChange(nav.offsetHeight));
    observer.observe(nav);
    return () => observer.disconnect();
  }, [onHeightChange]);

  useEffect(() => {
    const list = listRef.current;
    const button = buttonRefs.current.get(activeCategory);
    if (!list || !button) return;

    const left = button.offsetLeft - (list.clientWidth - button.offsetWidth) / 2;
    list.scrollTo({ left, behavior: scrollBehavior() });
  }, [activeCategory]);

  const scrollToCategory = (category: string) => {
    document.getElementById(category)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      aria-label={t('nav.categories')}
      className="sticky top-0 left-0 z-40 w-full bg-cream/95 backdrop-blur-md shadow-sm py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div ref={listRef} className="relative flex overflow-x-auto no-scrollbar gap-4 md:gap-8 pb-2 md:pb-0 snap-x">
          {categories.map((category) => (
            <button
              key={category}
              ref={(element) => {
                if (element) buttonRefs.current.set(category, element);
                else buttonRefs.current.delete(category);
              }}
              onClick={() => scrollToCategory(category)}
              aria-current={activeCategory === category ? 'true' : undefined}
              className={`
                whitespace-nowrap px-4 py-2 rounded-full text-sm md:text-base font-display tracking-wide transition-all duration-300 snap-center
                ${activeCategory === category
                  ? 'bg-coffee text-cream shadow-md scale-105'
                  : 'bg-white/50 text-coffee hover:bg-white hover:shadow-sm'
                }
              `}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
