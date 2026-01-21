import { motion } from 'framer-motion';

export function FloatingButton() {
  return (
    <motion.a
      href="https://www.ifood.com.br/delivery/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#EA1D2C] rounded-full shadow-lg hover:shadow-xl transition-shadow group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      title="Peça no iFood"
    >
      <div className="relative w-8 h-8 md:w-10 md:h-10 text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"/>
        </svg>
      </div>
      <span className="absolute right-full mr-3 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-bold text-[#EA1D2C] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Peça no iFood
      </span>
    </motion.a>
  );
}
