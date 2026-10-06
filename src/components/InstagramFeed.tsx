import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const POSTS = [
  {
    id: 1,
    image: '/images/products/cookies/cookie-pistache-perto.webp',
    link: 'https://www.instagram.com/querocalmo/reel/DTiVfKKDdPE/',
    captionKey: 'instagram.captions.pistache'
  },
  {
    id: 2,
    image: '/images/products/matcha/matcha-berry-padrao.webp',
    link: 'https://www.instagram.com/querocalmo/reel/DTVvo5GkV9X/',
    captionKey: 'instagram.captions.matchaBerry'
  },
  {
    id: 3,
    image: '/images/products/salgados/croissant-padrao.webp',
    link: 'https://www.instagram.com/querocalmo/reel/DRXf34OEWpX/',
    captionKey: 'instagram.captions.croissant'
  }
];

export function InstagramFeed() {
  const { t } = useTranslation();
  const [ref, inView] = useInView<HTMLUListElement>();

  return (
    <section className="bg-cream py-12 md:py-16" aria-labelledby="instagram-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <div className="flex items-center gap-2">
            <Instagram className="h-6 w-6 text-coffee" aria-hidden="true" />
            <h2 id="instagram-title" className="font-display text-2xl font-bold normal-case tracking-normal text-coffee">@querocalmo</h2>
          </div>
          <a
            href="https://www.instagram.com/querocalmo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center font-medium text-coffee transition-colors hover:text-coffee/80 text-sm md:text-base"
          >
            {t('instagram.viewProfile')}
          </a>
        </div>

        <ul ref={ref} className={cn('grid grid-cols-3 gap-2 reveal md:gap-8', !inView && 'reveal-pending')}>
          {POSTS.map((post) => (
            <li key={post.id}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl bg-cream-dark/40"
              >
                <img
                  src={post.image}
                  alt={t(post.captionKey)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-white drop-shadow-lg" aria-hidden="true" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
