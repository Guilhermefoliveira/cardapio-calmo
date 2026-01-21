import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  name: string;
}

export const ImageModal = ({ isOpen, onClose, image, name }: ImageModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" aria-hidden="true" />
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all hover:scale-110 shadow-lg"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <div className="flex-1 min-h-0 overflow-hidden bg-cream/50 relative flex items-center justify-center p-4 sm:p-8">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain shadow-md rounded-lg"
            loading="lazy"
          />
        </div>
        
        <div className="p-6 bg-white border-t border-gray-100 text-center flex-shrink-0 z-10">
          <h3 id="modal-title" className="font-display text-2xl md:text-3xl text-coffee uppercase tracking-wide">{name}</h3>
        </div>
      </div>
    </div>,
    document.body
  );
};
