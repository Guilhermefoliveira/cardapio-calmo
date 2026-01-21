import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageModal } from './ImageModal';
import { Product } from '../types';

type ProductCardProps = Omit<Product, 'id' | 'category'>;

export const ProductCard = ({ image, imageDetail, name, price, description }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const displayImage = (isHovered && imageDetail) ? imageDetail : image;
  const hasImage = image && !image.includes('desktop.ini') && !imageError;

  return (
    <>
      <motion.div 
        className="group relative bg-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream mb-4 relative shadow-sm transition-all duration-500 group-hover:shadow-md cursor-pointer"
          onClick={() => hasImage && setIsModalOpen(true)}
        >
          {!hasImage ? (
             <div className="w-full h-full flex items-center justify-center bg-cream-dark/10 text-coffee/20">
               <span className="font-display text-3xl opacity-50">Calmô</span>
             </div>
          ) : (
            <>
              <img 
                src={displayImage} 
                alt={name} 
                className={`w-full h-full object-cover transition-transform duration-700 ${isHovered && !imageDetail ? 'scale-110' : 'scale-100'}`}
                loading="lazy"
                decoding="async"
                onError={() => setImageError(true)}
              />
              <div className="placeholder hidden w-full h-full flex items-center justify-center bg-cream-dark/10 text-coffee/20 absolute inset-0">
                 <span className="font-display text-3xl opacity-50">Calmô</span>
              </div>
            </>
          )}
          
          <div className="absolute inset-0 bg-coffee/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {hasImage && (
            <div className="absolute bottom-3 right-3 bg-white/90 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coffee"><path d="m21 21-6-6"/><circle cx="10" cy="10" r="7"/><line x1="10" x2="10" y1="13" y2="7"/><line x1="13" x2="7" y1="10" y2="10"/></svg>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-display text-lg md:text-xl text-coffee font-medium leading-tight tracking-wide group-hover:text-coffee-light transition-colors">{name}</h3>
          </div>
          
          {price && <span className="text-coffee font-display font-bold text-lg mb-1 block">{price}</span>}

          {description && (
            <p className="font-sans text-gray-500 text-xs md:text-sm leading-relaxed font-light line-clamp-2">{description}</p>
          )}
        </div>
      </motion.div>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        image={imageDetail || image || ''} 
        name={name} 
      />
    </>
  );
};
