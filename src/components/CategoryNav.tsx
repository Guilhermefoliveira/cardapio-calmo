import { useTranslation } from 'react-i18next';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
}

export const CategoryNav = ({ categories, activeCategory }: CategoryNavProps) => {
  const { t } = useTranslation();

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(category);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 left-0 z-40 w-full bg-cream/95 backdrop-blur-md shadow-sm py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-8 pb-2 md:pb-0 snap-x">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
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
    </div>
  );
};
