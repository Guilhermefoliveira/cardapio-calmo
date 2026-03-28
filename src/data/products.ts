import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  // Cookies
  {
    id: 'c-1',
    name: 'Biscoff',
    category: 'Cookies',
    description: 'Massa com especiarias e recheio do famoso creme de biscoito Lotus Biscoff.',
    price: 1650,
  },
  {
    id: 'c-2',
    name: 'Brownie',
    category: 'Cookies',
    description: 'A intensidade do cacau de um brownie transformada em um cookie denso e ultra chocolatudo.',
    price: 1300,
    image: '/images/products/cookies/cookie-brownie-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-brownie-perto.webp'
  },
  {
    id: 'c-3',
    name: 'Capuccino',
    category: 'Cookies',
    description: 'Para os amantes de café. Massa com toque de café, finalizada com generosos pedaços de chocolate caramelizado.',
    price: 1200,
    image: '/images/products/cookies/cookie-capuccino-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-capuccino-perto.webp'
  },
  {
    id: 'c-4',
    name: 'Caramelo Salgado',
    category: 'Cookies',
    description: 'O equilíbrio perfeito entre o doce do caramelo artesanal e um toque de flor de sal para realçar o sabor.',
    price: 1400,
    image: '/images/products/cookies/cookie-caramelo-salgado-padrao.webp'
  },
  {
    id: 'c-5',
    name: 'Clássico',
    category: 'Cookies',
    description: 'A receita tradicional. Massa amanteigada com generosos pedaços de chocolate meio amargo e um toque de aveia.',
    price: 1100,
    image: '/images/products/cookies/cookie-classico-padrao.webp'
  },
  {
    id: 'c-6',
    name: 'Ferrero Rocher',
    category: 'Cookies',
    description: 'Inspirado no bombom. Chocolate, avelãs crocantes e recheio cremoso.',
    price: 1650,
    // image: missing
  },
  {
    id: 'c-7',
    name: 'Framboesa Pistache e Cream Cheese',
    category: 'Cookies',
    description: 'Uma explosão de sabores. A acidez da framboesa, o crocante do pistache e a cremosidade do cream cheese no recheio.',
    price: 1500,
    image: '/images/products/cookies/cookie-framboesa-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-framboesa-perto.webp'
  },
  {
    id: 'c-8',
    name: 'Kinder Bueno',
    category: 'Cookies',
    description: 'Massa de baunilha com pedaços de chocolate branco e chocolate ao leite, recheado com recheio cremoso de Kinder e coberto com chocolate Kinder.',
    price: 1550,
    image: '/images/products/cookies/cookie-kinder-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-kinder-perto.webp'
  },
  {
    id: 'c-9',
    name: 'Macadâmia com Chocolate Branco e Geleia de Frutas Vermelhas',
    category: 'Cookies',
    description: 'Sofisticação pura. O amanteigado da macadâmia, a doçura do chocolate branco e a acidez equilibrada da geleia de frutas vermelhas.',
    price: 1500,
    image: '/images/products/cookies/cookie-macadamia-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-macadamia-perto.webp'
  },
  {
    id: 'c-10',
    name: 'Nozes',
    category: 'Cookies',
    description: 'Massa clássica com a crocância e o sabor marcante de nozes selecionadas.',
    price: 1300,
    image: '/images/products/cookies/cookie-nozes-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-nozes-perto.webp'
  },
  {
    id: 'c-11',
    name: 'Nutella',
    category: 'Cookies',
    description: 'O queridinho. Cookie recheado generosamente com o autêntico creme de avelã Nutella.',
    price: 1450,
    image: '/images/products/cookies/cookie-nutella-padrao.webp'
  },
  {
    id: 'c-12',
    name: 'Oreo',
    category: 'Cookies',
    description: 'Massa escura de cacau black recheado com ganache de chocolate branco e pedaços crocantes do biscoito favorito do mundo.',
    price: 1400,
    image: '/images/products/cookies/cookie-oreo-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-oreo-perto.webp'
  },
  {
    id: 'c-13',
    name: 'Pistache',
    category: 'Cookies',
    description: 'Feito com pistache real. Massa saborizada com concentrado de pistache em pedaços e recheado com um delicioso creme de pistache.',
    price: 1750,
    image: '/images/products/cookies/cookie-pistache-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-pistache-perto.webp'
  },
  {
    id: 'c-14',
    name: 'Red Velvet',
    category: 'Cookies',
    description: 'Massa de cacau avermelhada com um toque aveludado e pedaços de chocolate branco cremoso.',
    price: 1200,
    image: '/images/products/cookies/cookie-red-velvet-padrao.webp',
    imageDetail: '/images/products/cookies/cookie-red-veltet-perto.webp'
  },

  // Cafés Quentes
  {
    id: 'cq-1',
    name: 'Café Coado',
    category: 'Cafés Quentes',
    description: 'Café filtrado na hora, ressaltando as notas aromáticas e a doçura natural do grão. Suave e reconfortante como um abraço.',
    price: 1400,
    image: '/images/products/cafes-quentes/cafe-coado-padrao.webp'
  },
  {
    id: 'cq-2',
    name: 'Espresso',
    category: 'Cafés Quentes',
    description: 'Intenso, encorpado e com crema aveludada. A essência do nosso café.',
    price: 1000,
    image: '/images/products/cafes-quentes/cafe-espresso-padrao.webp'
  },
  {
    id: 'cq-3',
    name: 'Flat Baunilha',
    category: 'Cafés Quentes',
    description: 'A textura sedosa do Flat White com um toque aromático de xarope de baunilha.',
    price: 1750,
    image: '/images/products/cafes-quentes/flat-white-padrao.webp'
  },
  {
    id: 'cq-4',
    name: 'Flat Caramelo Salgado',
    category: 'Cafés Quentes',
    description: 'Nosso Flat White adoçado com caramelo e um leve toque salgado para realçar o café.',
    price: 1850,
    image: '/images/products/cafes-quentes/cafe-caramelo-salgado-padrao.webp'
  },
  {
    id: 'cq-5',
    name: 'Flat Pistache',
    category: 'Cafés Quentes',
    description: 'O Flat White cremoso infusionado com o sabor sofisticado de pistache.',
    price: 2200,
    image: '/images/products/cafes-quentes/flat-pistache-padrao.webp'
  },
  {
    id: 'cq-6',
    name: 'Flat White',
    category: 'Cafés Quentes',
    description: 'Duplo espresso cobertas por uma fina camada de leite vaporizado. Sedoso e intenso.',
    price: 1600,
    image: '/images/products/cafes-quentes/flat-white-padrao.webp'
  },
  {
    id: 'cq-7',
    name: 'Mocha',
    category: 'Cafés Quentes',
    description: 'A combinação clássica de espresso, leite vaporizado e uma ganache rica de chocolate.',
    price: 1900,
    image: '/images/products/cafes-quentes/mocha-padrao.webp'
  },
  {
    id: 'cq-8',
    name: 'Picollo Latte',
    category: 'Cafés Quentes',
    description: 'Um "mini latte". Uma dose de espresso com pouco leite vaporizado, realçando o sabor do café.',
    price: 1100,
    image: '/images/products/cafes-quentes/picollo-latte-padrao.webp'
  },

  // Cafés Gelados
  {
    id: 'cg-1',
    name: 'Affogato',
    category: 'Cafés Gelados',
    description: 'A união perfeita de sobremesa e café. Uma bola de sorvete de baunilha "afogada" em um espresso quente.',
    price: 1600,
    image: '/images/products/cafes-gelados/affogato-padrao.webp'
  },
  {
    id: 'cg-2',
    name: 'Cold Brew',
    category: 'Cafés Gelados',
    description: 'Café extraído a frio por longas horas. Sabor suave, baixa acidez e naturalmente adocicado.',
    price: 1400,
    image: '/images/products/cafes-gelados/cold-brew-padrao.webp'
  },
  {
    id: 'cg-3',
    name: 'Espresso Tônica',
    category: 'Cafés Gelados',
    description: 'Espresso duplo servido sobre água tônica, gelo e limão. Cítrico, borbulhante e sofisticado.',
    price: 1700,
    image: '/images/products/cafes-gelados/espresso-tonica-padrao.webp'
  },
  {
    id: 'cg-4',
    name: 'Frappe de Café',
    category: 'Cafés Gelados',
    description: 'Bebida batida com sorvete de creme holandes e café. Um "Milkshake" irresistível.',
    price: 2190,
    image: '/images/products/cafes-gelados/frappe-cafe-padrao.webp'
  },
  /* {
    id: 'cg-5',
    name: 'Iced Banoffe',
    category: 'Cafés Gelados',
    description: 'Inspirado na torta inglesa. Café, leite, banana e caramelo em uma bebida gelada única.',
    price: 1700
    // image: missing
  }, */
  {
    id: 'cg-6',
    name: 'Iced Flat Baunilha',
    category: 'Cafés Gelados',
    description: 'Espresso, leite gelado e essência de baunilha. Refrescante e aromático.',
    price: 1850,
    image: '/images/products/cafes-gelados/ice-flat-baunilha-padrao.webp'
  },
  {
    id: 'cg-7',
    name: 'Iced Flat Caramelo Salgado',
    category: 'Cafés Gelados',
    description: 'Uma bebida gelada viciante com café, leite e o contraste do caramelo salgado.',
    price: 2000,
    image: '/images/products/cafes-gelados/ice-flat-caramelo-padrao.webp'
  },
  {
    id: 'cg-8',
    name: 'Iced Flat Pistache',
    category: 'Cafés Gelados',
    description: 'Café gelado com leite e o sabor inconfundível e adocicado do nosso creme de pistache.',
    price: 2300,
    image: '/images/products/cafes-gelados/ice-pistache-padrao.webp'
  },
  {
    id: 'cg-9',
    name: 'Iced Flat White',
    category: 'Cafés Gelados',
    description: 'A versão gelada do clássico. Espresso duplo, leite gelado e gelo. Simples e marcante.',
    price: 1700,
    image: '/images/products/cafes-gelados/ice-flat-baunilha-padrao.webp'
  },
  {
    id: 'cg-10',
    name: 'Iced Mocha',
    category: 'Cafés Gelados',
    description: 'Café, leite gelado e ganache de chocolate. Uma sobremesa líquida refrescante.',
    price: 2100,
    image: '/images/products/cafes-gelados/ice-mocha-padrao.webp'
  },

  // Matcha
  {
    id: 'm-1',
    name: 'Iced Matcha Baunilha',
    category: 'Matcha',
    description: 'Versão gelada, cremosa e aromatizada com baunilha.',
    image: '/images/products/matcha/ice-matcha-latte-padrao.webp'
  },
  {
    id: 'm-2',
    name: 'Iced Matcha Berry',
    category: 'Matcha',
    description: 'A combinação surpreendente do Matcha gelado com leite e uma redução de frutas vermelhas.',
    image: '/images/products/matcha/matcha-berry-padrao.webp'
  },
  {
    id: 'm-3',
    name: 'Iced Matcha Latte',
    category: 'Matcha',
    description: 'Matcha servido sobre leite gelado e gelo. A cor vibrante e o sabor refrescante que você precisa.',
    image: '/images/products/matcha/ice-matcha-latte-padrao.webp'
  },
  {
    id: 'm-4',
    name: 'Matcha Latte',
    category: 'Matcha',
    description: 'Matcha batido com leite vaporizado. Cremoso, doce na medida e reconfortante.',
    image: '/images/products/matcha/matcha-latte-padrao.webp'
  },
  {
    id: 'm-5',
    name: 'Matcha Latte Baunilha',
    category: 'Matcha',
    description: 'O nosso Matcha Latte com um toque aromático de baunilha.',
    image: '/images/products/matcha/matcha-latte-padrao.webp'
  },
  /* {
    id: 'm-6',
    name: 'Matcha Tradicional',
    category: 'Matcha',
    description: 'Preparado com água quente. Sabor vegetal intenso, umami e pura energia.',
    // image: missing
  }, */

  // Gelados
  {
    id: 'g-1',
    name: 'Açaí Premium',
    category: 'Gelados',
    description: 'Puro açaí batido, cremoso e gelado. Energia natural.',
    price: 2800,
    image: '/images/products/gelados/acai-padrao.webp'
  },
  /* {
    id: 'g-2',
    name: 'Milkshake de Frutas Vermelhas',
    category: 'Gelados',
    description: 'Sorvete de creme batido com frutas vermelhas congeladas.',
    price: 2200,
    // image: missing
  }, */
  /* {
    id: 'g-3',
    name: 'Milkshake de Pistache',
    category: 'Gelados',
    description: 'Sorvete batido com pasta de pistache. Cremoso e com sabor autêntico.',
    price: 2400,
    // image: missing
  }, */
  {
    id: 'g-4',
    name: 'Açaí Premium P',
    category: 'Gelados',
    description: 'Puro açaí batido, cremoso e gelado. Energia natural.',
    price: 2100,
    image: '/images/products/gelados/acai-pequeno-padrao.webp'
  },
  {
    id: 'g-5',
    name: 'Smoothie Banana Berry',
    category: 'Gelados',
    description: 'Banana e mix de frutas vermelhas (berries). Rico, doce e nutritivo.',
    price: 2200,
    image: '/images/products/gelados/smoothie-banana-padrao.webp'
  },
  {
    id: 'g-6',
    name: 'Smoothie Detox',
    category: 'Gelados',
    description: 'Mix de folhas verdes, maça, gengibre e abacaxi. Para limpar e revitalizar.',
    price: 1800,
    image: '/images/products/gelados/smoothie-detox-padrao.webp'
  },
  {
    id: 'g-7',
    name: 'Smoothie Mangocaxi',
    category: 'Gelados',
    description: 'A união solar da manga com morango e abacaxi. Refrescante e cítrico.',
    price: 1800,
    image: '/images/products/gelados/smoothie-mangocaxi-padrao.webp'
  },
  {
    id: 'g-8',
    name: 'Smoothie de Manga com Água de Coco',
    category: 'Gelados',
    description: 'Tropical e leve. A doçura da manga com a hidratação da água de coco.',
    price: 1800,
    image: '/images/products/gelados/smoothie-manga-padrao.webp'
  },
  /* {
    id: 'g-9',
    name: 'Smoothie Açaí',
    category: 'Gelados',
    description: 'Bebida cremosa à base de açaí batido com frutas.',
    price: 1800,
    // image: missing
  }, */

  // Outras bebidas
  /* {
    id: 'o-1',
    name: 'Chocolate Gelado',
    category: 'Outras bebidas',
    description: 'Refrescante e chocolatudo, perfeito para os dias quentes.',
    price: 1600,
    // image: missing
  }, */
  {
    id: 'o-2',
    name: 'Chocolate Quente',
    category: 'Outras bebidas',
    description: 'Cremoso, denso e feito com cacau de verdade. Um abraço em forma de bebida.',
    price: 1600,
    image: '/images/products/outras-bebidas/chocolate-quente-padrao.webp'
  },
  {
    id: 'o-3',
    name: 'Soda Italiana Limão Siciliano',
    category: 'Outras bebidas',
    description: 'Água com gás, xarope de limão siciliano e muito gelo. Cítrica e leve.',
    price: 1550,
    image: '/images/products/outras-bebidas/soda-italiana-limao-siciliano-padrao.webp'
  },
  {
    id: 'o-4',
    name: 'Soda Italiana Maçã',
    category: 'Outras bebidas',
    description: 'Refrescante bebida gaseificada com o sabor doce e frutado da maçã verde.',
    price: 1550,
    image: '/images/products/outras-bebidas/soda-italiana-maca-padrao.webp'
  },

  // Salgados
  {
    id: 's-1',
    name: 'Croissant Amanteigado',
    category: 'Salgados',
    description: 'Folhado clássico francês, leve, aerado e com sabor rico de manteiga.',
    price: 1100,
    image: '/images/products/salgados/croissant-padrao.webp'
  },
  {
    id: 's-2',
    name: 'Empada de Camarão',
    category: 'Salgados',
    description: 'Sofisticada e saborosa, com recheio cremoso de camarão.',
    price: 1500,
    image: '/images/products/salgados/empada-de-camarao-padrao.webp'
  },
  {
    id: 's-3',
    name: 'Empada de Carne Seca',
    category: 'Salgados',
    description: 'Recheio robusto de carne seca dessalgada e temperada, envolta em massa leve.',
    price: 1450,
    image: '/images/products/salgados/empada-de-carne-seca-padrao.webp'
  },
  {
    id: 's-4',
    name: 'Empada de Frango',
    category: 'Salgados',
    description: 'Massa "podre" que derrete na boca com recheio de frango temperado e úmido.',
    price: 1350,
    image: '/images/products/salgados/empada-de-frango-padrao.webp'
  },
  {
    id: 's-5',
    name: 'Empada de Frango com Catupiry',
    category: 'Salgados',
    description: 'O clássico recheio de frango finalizado com a cremosidade do requeijão tipo Catupiry.',
    price: 1350,
    image: '/images/products/salgados/empada-de-frango-com-catupiry-padrao.webp'
  },
  {
    id: 's-6',
    name: 'Empada de Palmito',
    category: 'Salgados',
    description: 'Recheio suave e cremoso de palmito em cubos na nossa massa amanteigada.',
    price: 1350,
    image: '/images/products/salgados/empada-de-palmito-padrao.webp'
  },
  {
    id: 's-7',
    name: 'Misto Quente',
    category: 'Salgados',
    description: 'Pão tostado na chapa com presunto e queijo derretido. Simples e delicioso.',
    price: 1500,
    image: '/images/products/salgados/misto-quente-padrao.webp'
  },
  {
    id: 's-8',
    name: 'Pão de Queijo',
    category: 'Salgados',
    description: 'Receita mineira autêntica. Crosta crocante e interior macio com muito queijo.',
    price: 750,
    image: '/images/products/salgados/pao-de-queijo-padrao.webp'
  },
  {
    id: 's-9',
    name: 'Queijo Quente',
    category: 'Salgados',
    description: 'Pão tostado recheado com uma generosa camada de queijo derretido.',
    price: 1400,
    image: '/images/products/salgados/queijo-quente-padrao.webp'
  },
];
