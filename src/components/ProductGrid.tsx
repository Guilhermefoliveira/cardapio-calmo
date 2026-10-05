import { useState, memo, useMemo } from 'react';
import type { CSSProperties } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '@/data/products';
import { CategoryNav } from './CategoryNav';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTranslation } from 'react-i18next';

const MemoizedProductCard = memo(ProductCard);

// Distance below the sticky nav where a section counts as the current one.
const ACTIVE_LINE_GAP = 24;

export const ProductGrid = () => {
  const { t } = useTranslation();
  const [navHeight, setNavHeight] = useState(0);

  const categories = useMemo(() => {
    return Array.from(new Set(PRODUCTS.map(p => p.category)));
  }, []);

  const activeCategory = useActiveSection(categories, navHeight + ACTIVE_LINE_GAP);

  const productsByCategory = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = PRODUCTS
        .filter(p => p.category === category)
        .sort((a, b) => {
          const aHasImage = !!a.image;
          const bHasImage = !!b.image;
          if (aHasImage && !bHasImage) return -1;
          if (!aHasImage && bHasImage) return 1;
          return 0;
        });
      return acc;
    }, {} as Record<string, typeof PRODUCTS>);
  }, [categories]);

  return (
    <div
      id="menu"
      className="min-h-screen relative"
      style={{ '--category-nav-h': `${navHeight}px` } as CSSProperties}
    >
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onHeightChange={setNavHeight}
      />

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {categories.map((category) => {
          const categoryProducts = productsByCategory[category];

          if (categoryProducts.length === 0) return null;

          return (
            <div
              key={category}
              id={category}
              className="scroll-mt-[calc(var(--category-nav-h)_-_1rem)] mb-16 md:mb-24 last:mb-0 pt-8"
            >
              <div className="flex items-center justify-start mb-8 md:mb-10 relative">
                 <div className="absolute -left-4 -top-6 w-20 h-20 bg-coffee-light/10 rounded-full blur-xl"></div>

                 <h2 className="font-display text-3xl md:text-5xl text-coffee relative z-10 uppercase tracking-wide">
                  {t(`categories.${category}`)}
                 </h2>
                 <div className="h-px bg-coffee/20 flex-grow ml-6 mt-2"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
                {categoryProducts.map((product) => (
                  <MemoizedProductCard
                    key={product.id}
                    image={product.image || ''}
                    imageDetail={product.imageDetail}
                    name={t(`products.${product.id}.name`, { defaultValue: product.name })}
                    price={product.price}
                    description={product.description ? t(`products.${product.id}.description`, { defaultValue: product.description }) : undefined}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed top-1/4 left-0 w-64 h-64 bg-coffee-light/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-cream-dark/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
};
