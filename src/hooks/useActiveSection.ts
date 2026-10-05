import { useEffect, useState } from 'react';

/**
 * Tracks which section crosses a horizontal line `offset` px below the top of
 * the viewport. Between sections the last active one is kept.
 */
export function useActiveSection(ids: string[], offset: number): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (ids.length === 0) return;

    const visible = new Set<string>();
    let observer: IntersectionObserver | null = null;

    const observe = () => {
      observer?.disconnect();
      visible.clear();

      const below = Math.max(window.innerHeight - offset - 1, 0);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visible.add(entry.target.id);
            else visible.delete(entry.target.id);
          }
          const current = ids.find((id) => visible.has(id));
          if (current) setActiveId(current);
        },
        { rootMargin: `-${offset}px 0px -${below}px 0px` },
      );

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    };

    observe();
    window.addEventListener('resize', observe);
    return () => {
      window.removeEventListener('resize', observe);
      observer?.disconnect();
    };
  }, [ids, offset]);

  return activeId;
}
