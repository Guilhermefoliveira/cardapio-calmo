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
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" opacity="0" /> 
    {/* Using a simplified path for visual consistency with lucide style, but let's make it look like a phone inside bubble */}
    <path d="M9 10a2 2 0 0 0 2 2h2" opacity="0" /> 
    {/* Re-drawing standard whatsapp path for clarity in line-style */}
    <path d="M12.42 16.035a9.08 9.08 0 0 1-2.58-.645.45.45 0 0 0-.46.11l-1.07 1.32a.45.45 0 0 1-.61.12 12.08 12.08 0 0 1-5.18-5.18.45.45 0 0 1 .12-.61l1.32-1.07a.45.45 0 0 0 .11-.46 9.08 9.08 0 0 1-.645-2.58.45.45 0 0 0-.45-.4h-1.8a.45.45 0 0 0-.45.45 9 9 0 0 0 9 9 .45.45 0 0 0 .45-.45v-1.8a.45.45 0 0 0-.4-.45z" fill="currentColor" stroke="none" transform="scale(0.8) translate(4,4)" style={{ display: 'none' }} /> 
    {/* Let's use a clean outline path that matches Lucide style */}
     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57 2 2 0 0 1 1.72 2z" transform="scale(0.5) translate(22,22)" opacity="0" />
     {/* Actually, let's just use the standard bubble + phone path manually constructed to look good */}
     <path d="M2.59 21.7l1.2-4.2C2.47 15.65 1.8 13.37 1.8 11A10.2 10.2 0 1 1 12 21.2c-2.09 0-4.13-.53-5.94-1.53L2.59 21.7z" />
     <path d="M8.5 8.9c-.2-.5-.4-.5-.6-.5s-.4 0-.6.1a1.9 1.9 0 0 0-1.4 1.4c-.2 1 .3 2.5 3.3 5.4 3 2.9 4.4 3.1 5.4 3s1.5-.6 1.8-1.2.3-1.1.1-1.2-.4-.2-.9-.4-1-.1-1.2.3-.2.5-.4.6-.3.1-.7-.1c-1.6-.7-2.6-1.5-3.6-3.2-.2-.3-.1-.5 0-.7s.3-.4.4-.6c.1-.1.1-.2.2-.4.1-.2 0-.3-.1-.4l-.9-2.2z" />
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