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
    description: 'Massa com especiarias e recheio do famoso creme de biscoito Lotus Biscoff.',
    // image: '/images/products/cookies/desktop.ini' // Removido referência inválida
  },
  {
    id: 'c-2',
    name: 'Brownie',
    category: 'Cookies',
    description: 'A intensidade do cacau de um brownie transformada em um cookie denso e ultra chocolatudo.',
    image: '/images/products/cookies/cookie brownie padrão.webp',
    imageDetail: '/images/products/cookies/cookie brownie perto.webp'
  },
  {
    id: 'c-3',
    name: 'Capuccino',
    category: 'Cookies',
    description: 'Para os amantes de café. Massa com toque de café, finalizada com generosos pedaços de chocolate caramelizado.',
    image: '/images/products/cookies/cookie capuccino padrão.webp',
    imageDetail: '/images/products/cookies/cookie capuccino perto.webp'
  },
  {
    id: 'c-4',
    name: 'Caramelo Salgado',
    category: 'Cookies',
    description: 'O equilíbrio perfeito entre o doce do caramelo artesanal e um toque de flor de sal para realçar o sabor.',
    image: '/images/products/cookies/cookie caramelo salgado padrão.webp'
  },
  {
    id: 'c-5',
    name: 'Clássico',
    category: 'Cookies',
    description: 'A receita tradicional. Massa amanteigada com generosos pedaços de chocolate meio amargo e um toque de aveia.',
    image: '/images/products/cookies/cookie classico padrão.webp'
  },
  {
    id: 'c-6',
    name: 'Ferrero Rocher',
    category: 'Cookies',
    description: 'Inspirado no bombom. Chocolate, avelãs crocantes e recheio cremoso.',
    // image: missing
  },
  {
    id: 'c-7',
    name: 'Framboesa Pistache e Cream Cheese',
    category: 'Cookies',
    description: 'Uma explosão de sabores. A acidez da framboesa, o crocante do pistache e a cremosidade do cream cheese no recheio.',
    image: '/images/products/cookies/cookie framboesa padrão.webp',
    imageDetail: '/images/products/cookies/cookie framboesa perto.webp'
  },
  {
    id: 'c-8',
    name: 'Kinder Bueno',
    category: 'Cookies',
    description: 'Massa de baunilha com pedaços de chocolate branco e chocolate ao leite, recheado com recheio cremoso de Kinder e coberto com chocolate Kinder.',
    image: '/images/products/cookies/cookie kinder padrão.webp',
    imageDetail: '/images/products/cookies/cookie kinder perto.webp'
  },
  {
    id: 'c-9',
    name: 'Macadâmia com Chocolate Branco e Geleia de Frutas Vermelhas',
    category: 'Cookies',
    description: 'Sofisticação pura. O amanteigado da macadâmia, a doçura do chocolate branco e a acidez equilibrada da geleia de frutas vermelhas.',
    image: '/images/products/cookies/cookie macadamia padrão.webp',
    imageDetail: '/images/products/cookies/cookie macadamia perto.webp'
  },
  {
    id: 'c-10',
    name: 'Nozes',
    category: 'Cookies',
    description: 'Massa clássica com a crocância e o sabor marcante de nozes selecionadas.',
    image: '/images/products/cookies/cookie nozes padrão.webp',
    imageDetail: '/images/products/cookies/cookie nozes perto.webp'
  },
  {
    id: 'c-11',
    name: 'Nutella',
    category: 'Cookies',
    description: 'O queridinho. Cookie recheado generosamente com o autêntico creme de avelã Nutella.',
    image: '/images/products/cookies/cookie nutella padrão.webp'
  },
  {
    id: 'c-12',
    name: 'Oreo',
    category: 'Cookies',
    description: 'Massa escura de cacau black recheado com ganache de chocolate branco e pedaços crocantes do biscoito favorito do mundo.',
    image: '/images/products/cookies/cookie oreo padrão.webp',
    imageDetail: '/images/products/cookies/cookie oreo perto.webp'
  },
  {
    id: 'c-13',
    name: 'Pistache',
    category: 'Cookies',
    description: 'Feito com pistache real. Massa saborizada com concentrado de pistache em pedaços e recheado com um delicioso creme de pistache.',
    image: '/images/products/cookies/cookie pistache padrão.webp',
    imageDetail: '/images/products/cookies/cookie pistache perto.webp'
  },
  {
    id: 'c-14',
    name: 'Red Velvet',
    category: 'Cookies',
    description: 'Massa de cacau avermelhada com um toque aveludado e pedaços de chocolate branco cremoso.',
    image: '/images/products/cookies/cookie red velvet padrão.webp',
    imageDetail: '/images/products/cookies/cookie red veltet perto.webp'
  },

  // Cafés Quentes
  {
    id: 'cq-1',
    name: 'Café Coado',
    category: 'Cafés Quentes',
    description: 'Café filtrado na hora, ressaltando as notas aromáticas e a doçura natural do grão. Suave e reconfortante como um abraço.',
    image: '/images/products/cafés quentes/café coado padrão.webp'
  },
  {
    id: 'cq-2',
    name: 'Espresso',
    category: 'Cafés Quentes',
    description: 'Intenso, encorpado e com crema aveludada. A essência do nosso café.',
    image: '/images/products/cafés quentes/café espresso padrão.webp'
  },
  {
    id: 'cq-3',
    name: 'Flat Baunilha',
    category: 'Cafés Quentes',
    description: 'A textura sedosa do Flat White com um toque aromático de xarope de baunilha.',
    image: '/images/products/cafés quentes/flat white padrão.webp'
  },
  {
    id: 'cq-4',
    name: 'Flat Caramelo Salgado',
    category: 'Cafés Quentes',
    description: 'Nosso Flat White adoçado com caramelo e um leve toque salgado para realçar o café.',
    image: '/images/products/cafés quentes/cafe caramelo salgado padrão.webp'
  },
  {
    id: 'cq-5',
    name: 'Flat Pistache',
    category: 'Cafés Quentes',
    description: 'O Flat White cremoso infusionado com o sabor sofisticado de pistache.',
    image: '/images/products/cafés quentes/flat pistache padrão.webp'
  },
  {
    id: 'cq-6',
    name: 'Flat White',
    category: 'Cafés Quentes',
    description: 'Duplo espresso cobertas por uma fina camada de leite vaporizado. Sedoso e intenso.',
    image: '/images/products/cafés quentes/flat white padrão.webp'
  },
  {
    id: 'cq-7',
    name: 'Mocha',
    category: 'Cafés Quentes',
    description: 'A combinação clássica de espresso, leite vaporizado e uma ganache rica de chocolate.',
    image: '/images/products/cafés quentes/mocha padrão.webp'
  },
  {
    id: 'cq-8',
    name: 'Picollo Latte',
    category: 'Cafés Quentes',
    description: 'Um "mini latte". Uma dose de espresso com pouco leite vaporizado, realçando o sabor do café.',
    image: '/images/products/cafés quentes/picollo latte padrão.webp'
  },

  // Cafés Gelados
  {
    id: 'cg-1',
    name: 'Affogato',
    category: 'Cafés Gelados',
    description: 'A união perfeita de sobremesa e café. Uma bola de sorvete de baunilha "afogada" em um espresso quente.',
    image: '/images/products/cafés gelados/affogato padrao.webp'
  },
  {
    id: 'cg-2',
    name: 'Cold Brew',
    category: 'Cafés Gelados',
    description: 'Café extraído a frio por longas horas. Sabor suave, baixa acidez e naturalmente adocicado.',
    image: '/images/products/cafés gelados/cold brew padrão.webp'
  },
  {
    id: 'cg-3',
    name: 'Espresso Tônica',
    category: 'Cafés Gelados',
    description: 'Espresso duplo servido sobre água tônica, gelo e limão. Cítrico, borbulhante e sofisticado.',
    image: '/images/products/cafés gelados/espresso tonica padrão.webp'
  },
  {
    id: 'cg-4',
    name: 'Frappe de Café',
    category: 'Cafés Gelados',
    description: 'Bebida batida com sorvete de creme holandes e café. Um "Milkshake" irresistível.',
    image: '/images/products/cafés gelados/frappe café padrão.webp'
  },
  /* {
    id: 'cg-5',
    name: 'Iced Banoffe',
    category: 'Cafés Gelados',
    description: 'Inspirado na torta inglesa. Café, leite, banana e caramelo em uma bebida gelada única.',
    // image: missing
  }, */
  {
    id: 'cg-6',
    name: 'Iced Flat Baunilha',
    category: 'Cafés Gelados',
    description: 'Espresso, leite gelado e essência de baunilha. Refrescante e aromático.',
    image: '/images/products/cafés gelados/ice flat-baunilha padrão.webp'
  },
  {
    id: 'cg-7',
    name: 'Iced Flat Caramelo Salgado',
    category: 'Cafés Gelados',
    description: 'Uma bebida gelada viciante com café, leite e o contraste do caramelo salgado.',
    image: '/images/products/cafés gelados/ice flat-caramelo padrão.webp'
  },
  {
    id: 'cg-8',
    name: 'Iced Flat Pistache',
    category: 'Cafés Gelados',
    description: 'Café gelado com leite e o sabor inconfundível e adocicado do nosso creme de pistache.',
    image: '/images/products/cafés gelados/ice pistache padrão.webp'
  },
  {
    id: 'cg-9',
    name: 'Iced Flat White',
    category: 'Cafés Gelados',
    description: 'A versão gelada do clássico. Espresso duplo, leite gelado e gelo. Simples e marcante.',
    // image: missing
  },
  {
    id: 'cg-10',
    name: 'Iced Mocha',
    category: 'Cafés Gelados',
    description: 'Café, leite gelado e ganache de chocolate. Uma sobremesa líquida refrescante.',
    image: '/images/products/cafés gelados/ice mocha padrão.webp'
  },

  // Matcha
  {
    id: 'm-1',
    name: 'Iced Matcha Baunilha',
    category: 'Matcha',
    description: 'Versão gelada, cremosa e aromatizada com baunilha.',
    image: '/images/products/matcha/ice matcha latte padrão.webp'
  },
  {
    id: 'm-2',
    name: 'Iced Matcha Berry',
    category: 'Matcha',
    description: 'A combinação surpreendente do Matcha gelado com leite e uma redução de frutas vermelhas.',
    image: '/images/products/matcha/matcha berry padrão.webp'
  },
  {
    id: 'm-3',
    name: 'Iced Matcha Latte',
    category: 'Matcha',
    description: 'Matcha servido sobre leite gelado e gelo. A cor vibrante e o sabor refrescante que você precisa.',
    image: '/images/products/matcha/ice matcha latte padrão.webp'
  },
  {
    id: 'm-4',
    name: 'Matcha Latte',
    category: 'Matcha',
    description: 'Matcha batido com leite vaporizado. Cremoso, doce na medida e reconfortante.',
    image: '/images/products/matcha/matcha latte padrão.webp'
  },
  {
    id: 'm-5',
    name: 'Matcha Latte Baunilha',
    category: 'Matcha',
    description: 'O nosso Matcha Latte com um toque aromático de baunilha.',
    image: '/images/products/matcha/matcha latte padrão.webp'
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
    image: '/images/products/Gelados/açai padrão.webp'
  },
  /* {
    id: 'g-2',
    name: 'Milkshake de Frutas Vermelhas',
    category: 'Gelados',
    description: 'Sorvete de creme batido com frutas vermelhas congeladas.',
    // image: missing
  }, */
  /* {
    id: 'g-3',
    name: 'Milkshake de Pistache',
    category: 'Gelados',
    description: 'Sorvete batido com pasta de pistache. Cremoso e com sabor autêntico.',
    // image: missing
  }, */
  {
    id: 'g-4',
    name: 'Açaí Premium P',
    category: 'Gelados',
    description: 'Puro açaí batido, cremoso e gelado. Energia natural.',
    image: '/images/products/Gelados/açai pequeno padrão.webp'
  },
  {
    id: 'g-5',
    name: 'Smoothie Banana Berry',
    category: 'Gelados',
    description: 'Banana e mix de frutas vermelhas (berries). Rico, doce e nutritivo.',
    image: '/images/products/Gelados/smoothie banana padrão.webp'
  },
  {
    id: 'g-6',
    name: 'Smoothie Detox',
    category: 'Gelados',
    description: 'Mix de folhas verdes, maça, gengibre e abacaxi. Para limpar e revitalizar.',
    image: '/images/products/Gelados/smoothie detox padrão.webp'
  },
  {
    id: 'g-7',
    name: 'Smoothie Mangocaxi',
    category: 'Gelados',
    description: 'A união solar da manga com morango e abacaxi. Refrescante e cítrico.',
    image: '/images/products/Gelados/smoothie mangocaxi padrão.webp'
  },
  {
    id: 'g-8',
    name: 'Smoothie de Manga com Água de Coco',
    category: 'Gelados',
    description: 'Tropical e leve. A doçura da manga com a hidratação da água de coco.',
    image: '/images/products/Gelados/smoothie manga padrão.webp'
  },
  /* {
    id: 'g-9',
    name: 'Smoothie Açaí',
    category: 'Gelados',
    description: 'Bebida cremosa à base de açaí batido com frutas.',
    // image: missing
  }, */

  // Outras bebidas
  /* {
    id: 'o-1',
    name: 'Chocolate Gelado',
    category: 'Outras bebidas',
    description: 'Refrescante e chocolatudo, perfeito para os dias quentes.',
    // image: missing
  }, */
  {
    id: 'o-2',
    name: 'Chocolate Quente',
    category: 'Outras bebidas',
    description: 'Cremoso, denso e feito com cacau de verdade. Um abraço em forma de bebida.',
    image: '/images/products/outras bebidas/chocolate quente padrao.webp'
  },
  {
    id: 'o-3',
    name: 'Soda Italiana Limão Siciliano',
    category: 'Outras bebidas',
    description: 'Água com gás, xarope de limão siciliano e muito gelo. Cítrica e leve.',
    image: '/images/products/outras bebidas/soda italiana limão siciliano padrão.webp'
  },
  {
    id: 'o-4',
    name: 'Soda Italiana Maçã',
    category: 'Outras bebidas',
    description: 'Refrescante bebida gaseificada com o sabor doce e frutado da maçã verde.',
    image: '/images/products/outras bebidas/soda italiana maça padrão.webp'
  },

  // Salgados
  {
    id: 's-1',
    name: 'Croissant Amanteigado',
    category: 'Salgados',
    description: 'Folhado clássico francês, leve, aerado e com sabor rico de manteiga.',
    image: '/images/products/salgados/croissant padrão.webp'
  },
  {
    id: 's-2',
    name: 'Empada de Camarão',
    category: 'Salgados',
    description: 'Sofisticada e saborosa, com recheio cremoso de camarão.',
    image: '/images/products/salgados/empada de camarão padrão.webp'
  },
  {
    id: 's-3',
    name: 'Empada de Carne Seca',
    category: 'Salgados',
    description: 'Recheio robusto de carne seca dessalgada e temperada, envolta em massa leve.',
    image: '/images/products/salgados/empada de carne seca padrão.webp'
  },
  {
    id: 's-4',
    name: 'Empada de Frango',
    category: 'Salgados',
    description: 'Massa "podre" que derrete na boca com recheio de frango temperado e úmido.',
    image: '/images/products/salgados/empada de frango padrão.webp'
  },
  {
    id: 's-5',
    name: 'Empada de Frango com Catupiry',
    category: 'Salgados',
    description: 'O clássico recheio de frango finalizado com a cremosidade do requeijão tipo Catupiry.',
    image: '/images/products/salgados/empada de frango com catupiry padrão.webp'
  },
  {
    id: 's-6',
    name: 'Empada de Palmito',
    category: 'Salgados',
    description: 'Recheio suave e cremoso de palmito em cubos na nossa massa amanteigada.',
    image: '/images/products/salgados/empada de palmito padrão.webp'
  },
  {
    id: 's-7',
    name: 'Misto Quente',
    category: 'Salgados',
    description: 'Pão tostado na chapa com presunto e queijo derretido. Simples e delicioso.',
    image: '/images/products/salgados/misto quente padrão.webp'
  },
  {
    id: 's-8',
    name: 'Pão de Queijo',
    category: 'Salgados',
    description: 'Receita mineira autêntica. Crosta crocante e interior macio com muito queijo.',
    image: '/images/products/salgados/pão de queijo padrão.webp'
  },
  {
    id: 's-9',
    name: 'Queijo Quente',
    category: 'Salgados',
    description: 'Pão tostado recheado com uma generosa camada de queijo derretido.',
    image: '/images/products/salgados/queijo quente padrão.webp'
  },
];
