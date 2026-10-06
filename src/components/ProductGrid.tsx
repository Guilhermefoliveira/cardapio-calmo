import { memo, useCallback, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductCard } from './ProductCard';
import { ProductSheet } from './ProductSheet';
import { CategoryNav } from './CategoryNav';
import { PRODUCTS } from '@/data/products';
import type { MenuItem } from '@/types';
import { useActiveSection } from '@/hooks/useActiveSection';
import { slugify } from '@/lib/utils';

const MemoizedProductCard = memo(ProductCard);

// Distance below the sticky nav where a section counts as the current one.
const ACTIVE_LINE_GAP = 24;

const CATEGORIES = Array.from(new Set(PRODUCTS.map((product) => product.category))).map((name) => ({
  name,
  id: slugify(name),
}));

const CATEGORY_IDS = CATEGORIES.map((category) => category.id);

export const ProductGrid = () => {
  const { t, i18n } = useTranslation();
  const [navHeight, setNavHeight] = useState(0);
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const activeId = useActiveSection(CATEGORY_IDS, navHeight + ACTIVE_LINE_GAP);

  const sections = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        ...category,
        label: t(`categories.${category.name}`),
        items: PRODUCTS.filter((product) => product.category === category.name)
          .sort((a, b) => Number(!!b.image) - Number(!!a.image))
          .map<MenuItem>((product) => ({
            id: product.id,
            name: t(`products.${product.id}.name`, { defaultValue: product.name }),
            description: product.description
              ? t(`products.${product.id}.description`, { defaultValue: product.description })
              : undefined,
            price: product.price,
            image: product.image,
            imageDetail: product.imageDetail,
          })),
      })),
    // Texts change with the language, which `t` alone does not signal.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, i18n.resolvedLanguage],
  );

  const openItem = useCallback((item: MenuItem) => setSelected(item), []);
  const closeSheet = useCallback(() => setSelected(null), []);

  return (
    <div id="menu" className="relative min-h-screen" style={{ '--category-nav-h': `${navHeight}px` } as CSSProperties}>
      <CategoryNav
        categories={sections.map(({ id, label }) => ({ id, label }))}
        activeId={activeId}
        onHeightChange={setNavHeight}
      />

      <div className="mx-auto max-w-7xl px-4 pb-28">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`category-title-${index}`}
            className="mb-16 scroll-mt-[calc(var(--category-nav-h)_-_1rem)] pt-8 last:mb-0 md:mb-24"
          >
            <div className="mb-8 flex items-center justify-start md:mb-10">
              <h2 id={`category-title-${index}`} className="font-display text-3xl uppercase tracking-wide text-coffee md:text-5xl">
                {section.label}
              </h2>
              <div className="ml-6 mt-2 h-px flex-grow bg-coffee/20" />
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:grid-cols-4">
              {section.items.map((item) => (
                <MemoizedProductCard key={item.id} item={item} onOpen={openItem} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <ProductSheet item={selected} onClose={closeSheet} />
    </div>
  );
};
