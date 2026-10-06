import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t('actions.backToTop')}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        'fixed bottom-[calc(max(1.5rem,env(safe-area-inset-bottom))+4.5rem)] right-6 z-fab grid h-11 w-11 place-items-center rounded-full bg-coffee text-cream shadow-lg transition-all duration-300 ease-out-quart hover:bg-coffee/90 md:bottom-[calc(max(1.5rem,env(safe-area-inset-bottom))+5rem)]',
        isVisible ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
