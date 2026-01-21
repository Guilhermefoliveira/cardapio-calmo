export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
  imageDetail?: string;
  price?: string;
  description?: string;
}

export const PRODUCTS: Product[] = [
  // Cookies
  {
    id: 'c-1',
    name: 'Biscoff',
    category: 'Cookies',
    // image: '/images/products/cookies/desktop.ini' // Removido referência inválida
  },
  {
    id: 'c-2',
    name: 'Brownie',
    category: 'Cookies',
    image: '/images/products/cookies/cookie brownie padrão.webp',
    imageDetail: '/images/products/cookies/cookie brownie perto.webp'
  },
  {
    id: 'c-3',
    name: 'Capuccino',
    category: 'Cookies',
    image: '/images/products/cookies/cookie capuccino padrão.webp',
    imageDetail: '/images/products/cookies/cookie capuccino perto.webp'
  },
  {
    id: 'c-4',
    name: 'Caramelo Salgado',
    category: 'Cookies',
    image: '/images/products/cookies/cookie caramelo salgado padrão.webp'
  },
  {
    id: 'c-5',
    name: 'Clássico',
    category: 'Cookies',
    image: '/images/products/cookies/cookie classico padrão.webp'
  },
  {
    id: 'c-6',
    name: 'Ferrero Rocher',
    category: 'Cookies',
    // image: missing
  },
  {
    id: 'c-7',
    name: 'Framboesa Pistache e Cream Cheese',
    category: 'Cookies',
    image: '/images/products/cookies/cookie framboesa padrão.webp',
    imageDetail: '/images/products/cookies/cookie framboesa perto.webp'
  },
  {
    id: 'c-8',
    name: 'Kinder Bueno',
    category: 'Cookies',
    image: '/images/products/cookies/cookie kinder padrão.webp',
    imageDetail: '/images/products/cookies/cookie kinder perto.webp'
  },
  {
    id: 'c-9',
    name: 'Macadâmia com Chocolate Branco e Geleia de Frutas Vermelhas',
    category: 'Cookies',
    image: '/images/products/cookies/cookie macadamia padrão.webp',
    imageDetail: '/images/products/cookies/cookie macadamia perto.webp'
  },
  {
    id: 'c-10',
    name: 'Nozes',
    category: 'Cookies',
    image: '/images/products/cookies/cookie nozes padrão.webp',
    imageDetail: '/images/products/cookies/cookie nozes perto.webp'
  },
  {
    id: 'c-11',
    name: 'Nutella',
    category: 'Cookies',
    image: '/images/products/cookies/cookie nutella padrão.webp'
  },
  {
    id: 'c-12',
    name: 'Oreo',
    category: 'Cookies',
    image: '/images/products/cookies/cookie oreo padrão.webp',
    imageDetail: '/images/products/cookies/cookie oreo perto.webp'
  },
  {
    id: 'c-13',
    name: 'Pistache',
    category: 'Cookies',
    image: '/images/products/cookies/cookie pistache padrão.webp',
    imageDetail: '/images/products/cookies/cookie pistache perto.webp'
  },
  {
    id: 'c-14',
    name: 'Red Velvet',
    category: 'Cookies',
    image: '/images/products/cookies/cookie red velvet padrão.webp',
    imageDetail: '/images/products/cookies/cookie red veltet perto.webp'
  },

  // Cafés Quentes
  {
    id: 'cq-1',
    name: 'Café Coado',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/café coado padrão.webp'
  },
  {
    id: 'cq-2',
    name: 'Espresso',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/café espresso padrão.webp'
  },
  {
    id: 'cq-3',
    name: 'Flat Baunilha',
    category: 'Cafés Quentes',
    // image: missing
  },
  {
    id: 'cq-4',
    name: 'Flat Caramelo Salgado',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/cafe caramelo salgado padrão.webp'
  },
  {
    id: 'cq-5',
    name: 'Flat Pistache',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/flat pistache padrão.webp'
  },
  {
    id: 'cq-6',
    name: 'Flat White',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/flat white padrão.webp'
  },
  {
    id: 'cq-7',
    name: 'Mocha',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/mocha padrão.webp'
  },
  {
    id: 'cq-8',
    name: 'Picollo Latte',
    category: 'Cafés Quentes',
    image: '/images/products/cafés quentes/picollo latte padrão.webp'
  },

  // Cafés Gelados
  {
    id: 'cg-1',
    name: 'Affogato',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/affogato padrao.webp'
  },
  {
    id: 'cg-2',
    name: 'Cold Brew',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/cold brew padrão.webp'
  },
  {
    id: 'cg-3',
    name: 'Espresso Tônica',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/espresso tonica padrão.webp'
  },
  {
    id: 'cg-4',
    name: 'Frappe de Café',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/frappe café padrão.webp'
  },
  {
    id: 'cg-5',
    name: 'Iced Banoffe',
    category: 'Cafés Gelados',
    // image: missing
  },
  {
    id: 'cg-6',
    name: 'Iced Flat Baunilha',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/ice flat-baunilha padrão.webp'
  },
  {
    id: 'cg-7',
    name: 'Iced Flat Caramelo Salgado',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/ice flat-caramelo padrão.webp'
  },
  {
    id: 'cg-8',
    name: 'Iced Flat Pistache',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/ice pistache padrão.webp'
  },
  {
    id: 'cg-9',
    name: 'Iced Flat White',
    category: 'Cafés Gelados',
    // image: missing
  },
  {
    id: 'cg-10',
    name: 'Iced Mocha',
    category: 'Cafés Gelados',
    image: '/images/products/cafés gelados/ice mocha padrão.webp'
  },

  // Matcha
  {
    id: 'm-1',
    name: 'Iced Matcha Baunilha',
    category: 'Matcha',
    // image: missing
  },
  {
    id: 'm-2',
    name: 'Iced Matcha Berry',
    category: 'Matcha',
    image: '/images/products/matcha/matcha berry padrão.webp'
  },
  {
    id: 'm-3',
    name: 'Iced Matcha Latte',
    category: 'Matcha',
    image: '/images/products/matcha/ice matcha latte padrão.webp'
  },
  {
    id: 'm-4',
    name: 'Matcha Latte',
    category: 'Matcha',
    image: '/images/products/matcha/matcha latte padrão.webp'
  },
  {
    id: 'm-5',
    name: 'Matcha Latte Baunilha',
    category: 'Matcha',
    // image: missing
  },
  {
    id: 'm-6',
    name: 'Matcha Tradicional',
    category: 'Matcha',
    // image: missing
  },

  // Gelados
  {
    id: 'g-1',
    name: 'Açaí Premium',
    category: 'Gelados',
    image: '/images/products/Gelados/açai padrão.webp'
  },
  {
    id: 'g-2',
    name: 'Milkshake de Frutas Vermelhas',
    category: 'Gelados',
    // image: missing
  },
  {
    id: 'g-3',
    name: 'Milkshake de Pistache',
    category: 'Gelados',
    // image: missing
  },
  {
    id: 'g-4',
    name: 'Açaí Premium P',
    category: 'Gelados',
    image: '/images/products/Gelados/açai pequeno padrão.webp'
  },
  {
    id: 'g-5',
    name: 'Smoothie Banana Berry',
    category: 'Gelados',
    image: '/images/products/Gelados/smoothie banana padrão.webp'
  },
  {
    id: 'g-6',
    name: 'Smoothie Detox',
    category: 'Gelados',
    image: '/images/products/Gelados/smoothie detox padrão.webp'
  },
  {
    id: 'g-7',
    name: 'Smoothie Mangocaxi',
    category: 'Gelados',
    image: '/images/products/Gelados/smoothie mangocaxi padrão.webp'
  },
  {
    id: 'g-8',
    name: 'Smoothie de Manga com Água de Coco',
    category: 'Gelados',
    image: '/images/products/Gelados/smoothie manga padrão.webp'
  },
  {
    id: 'g-9',
    name: 'Smoothie Açaí',
    category: 'Gelados',
    // image: missing
  },

  // Outras bebidas
  {
    id: 'o-1',
    name: 'Chocolate Gelado',
    category: 'Outras bebidas',
    // image: missing
  },
  {
    id: 'o-2',
    name: 'Chocolate Quente',
    category: 'Outras bebidas',
    image: '/images/products/outras bebidas/chocolate quente padrao.webp'
  },
  {
    id: 'o-3',
    name: 'Soda Italiana Limão Siciliano',
    category: 'Outras bebidas',
    image: '/images/products/outras bebidas/soda italiana limão siciliano padrão.webp'
  },
  {
    id: 'o-4',
    name: 'Soda Italiana Maçã',
    category: 'Outras bebidas',
    image: '/images/products/outras bebidas/soda italiana maça padrão.webp'
  },

  // Salgados
  {
    id: 's-1',
    name: 'Croissant Amanteigado',
    category: 'Salgados',
    image: '/images/products/salgados/croissant padrão.webp'
  },
  {
    id: 's-2',
    name: 'Empada de Camarão',
    category: 'Salgados',
    image: '/images/products/salgados/empada de camarão padrão.webp'
  },
  {
    id: 's-3',
    name: 'Empada de Carne Seca',
    category: 'Salgados',
    image: '/images/products/salgados/empada de carne seca padrão.webp'
  },
  {
    id: 's-4',
    name: 'Empada de Frango',
    category: 'Salgados',
    image: '/images/products/salgados/empada de frango padrão.webp'
  },
  {
    id: 's-5',
    name: 'Empada de Frango com Catupiry',
    category: 'Salgados',
    image: '/images/products/salgados/empada de frango com catupiry padrão.webp'
  },
  {
    id: 's-6',
    name: 'Empada de Palmito',
    category: 'Salgados',
    image: '/images/products/salgados/empada de palmito padrão.webp'
  },
  {
    id: 's-7',
    name: 'Misto Quente',
    category: 'Salgados',
    image: '/images/products/salgados/misto quente padrão.webp'
  },
  {
    id: 's-8',
    name: 'Pão de Queijo',
    category: 'Salgados',
    image: '/images/products/salgados/pão de queijo padrão.webp'
  },
  {
    id: 's-9',
    name: 'Queijo Quente',
    category: 'Salgados',
    image: '/images/products/salgados/queijo quente padrão.webp'
  },
];
