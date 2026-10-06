import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export interface NavCategory {
  id: string;
  label: string;
}

interface CategoryNavProps {
  categories: NavCategory[];
  activeId: string;
  onHeightChange: (height: number) => void;
}

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

export const CategoryNav = ({ categories, activeId, onHeightChange }: CategoryNavProps) => {
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
    const button = buttonRefs.current.get(activeId);
    if (!list || !button) return;

    const left = button.offsetLeft - (list.clientWidth - button.offsetWidth) / 2;
    list.scrollTo({ left, behavior: scrollBehavior() });
  }, [activeId]);

  const scrollToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      aria-label={t('nav.categories')}
      className="sticky top-0 z-nav w-full bg-cream/95 py-3 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div ref={listRef} className="relative flex gap-3 overflow-x-auto no-scrollbar py-1 md:gap-6">
          {categories.map(({ id, label }) => {
            const active = id === activeId;
            return (
              <button
                key={id}
                type="button"
                ref={(element) => {
                  if (element) buttonRefs.current.set(id, element);
                  else buttonRefs.current.delete(id);
                }}
                onClick={() => scrollToCategory(id)}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-4 font-display text-sm tracking-wide transition-all duration-300 md:text-base',
                  active
                    ? 'bg-coffee text-cream shadow-md [--focus:theme(colors.coffee.DEFAULT)]'
                    : 'bg-white/50 text-coffee hover:bg-white hover:shadow-sm',
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
