import { useState } from 'react';
import type { MenuItem } from '@/types';
import { formatPrice } from '@/lib/formatPrice';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import commaUrl from '@/assets/brand/comma.webp';

interface ProductCardProps {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
}

export const ProductCard = ({ item, onOpen }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [ref, inView] = useInView<HTMLLIElement>();
  const hasImage = !!item.image && !imageError;

  return (
    <li ref={ref} className={cn('group relative flex flex-col reveal', !inView && 'reveal-pending')}>
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream-dark/40 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
        {hasImage ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <img src={commaUrl} alt="" width={240} height={346} className="h-14 w-auto opacity-80" />
          </div>
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-medium leading-tight tracking-wide text-coffee md:text-xl">
        <button
          type="button"
          onClick={() => onOpen(item)}
          aria-haspopup="dialog"
          className="card-hit text-left uppercase transition-colors group-hover:text-coffee/80"
        >
          {item.name}
        </button>
      </h3>

      {item.price != null && (
        <p className="mt-1 font-display text-lg font-bold tabular-nums text-coffee">{formatPrice(item.price)}</p>
      )}
    </li>
  );
};
