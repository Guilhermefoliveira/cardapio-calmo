import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/** True once the element has entered the viewport (or immediately when IntersectionObserver is missing). */
export function useInView<T extends HTMLElement>(margin = '-50px'): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, margin]);

  return [ref, inView];
}
