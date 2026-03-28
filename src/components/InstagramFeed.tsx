import { Instagram } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Instagram className="w-6 h-6 text-coffee" />
            <h2 className="text-2xl font-display text-coffee font-bold">@querocalmo</h2>
          </div>
          <a
            href="https://www.instagram.com/querocalmo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee font-medium hover:text-coffee/80 transition-colors text-sm md:text-base"
          >
            {t('instagram.viewProfile')}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-cream/20"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? {} : { delay: index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
            >
              <img
                src={post.image}
                alt={t(post.captionKey)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
