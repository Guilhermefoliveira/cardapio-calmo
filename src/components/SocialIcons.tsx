import { Instagram, Facebook } from 'lucide-react';

const TikTokIcon = ({ size = 24, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ size = 24, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const SocialIcons = () => {
  return (
    <div className="flex gap-6 items-center">
      <a 
        href="https://www.instagram.com/querocalmo/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cream hover:text-coffee-light transition-all duration-300 transform hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram size={28} strokeWidth={1.5} />
      </a>
      <a
        href="https://www.facebook.com/querocalmo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream hover:text-coffee-light transition-all duration-300 transform hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook size={28} strokeWidth={1.5} />
      </a>
      <a
        href="https://www.tiktok.com/@querocalmo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream hover:text-coffee-light transition-all duration-300 transform hover:scale-110"
        aria-label="TikTok"
      >
        <TikTokIcon size={28} strokeWidth={1.5} />
      </a>
      <a
        href="https://wa.me/554892111168"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream hover:text-coffee-light transition-all duration-300 transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={28} strokeWidth={1.5} />
      </a>
    </div>
  );
};