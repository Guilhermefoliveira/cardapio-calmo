Vou implementar um refinamento completo focado em UX e Performance, atendendo a todos os pontos críticos levantados:

### 1. Reordenação Inteligente de Produtos (`ProductGrid.tsx`)
*   **Lógica de Ordenação**: Modificar o filtro de produtos para separar itens com foto e sem foto.
*   **Renderização**: Exibir primeiro todos os produtos com imagem, seguidos pelos produtos sem imagem (placeholders) no final da lista de cada categoria. Isso garante que o impacto visual inicial seja sempre positivo.

### 2. Experiência Visual dos Cookies (`ProductCard.tsx` e `products.ts`)
*   **Funcionalidade de Zoom/Modal**: Criar um modal "lightbox" que abre ao clicar na imagem do cookie, permitindo ver a textura "perto" em alta resolução.
*   **Suporte a Múltiplas Imagens**: Atualizar a estrutura de dados (`Product` interface) para aceitar uma segunda imagem (`imageDetail` ou `imageZoom`).
*   **Mapeamento de Assets**: Vincular as fotos "perto" (ex: `cookie brownie perto.jpg`) aos respectivos produtos no `products.ts`.

### 3. Redes Sociais (`Footer.tsx` / `SocialIcons.tsx`)
*   **Correção de Ícones**: Substituir os ícones genéricos (MessageCircle) pelos ícones oficiais de marca (Facebook, Instagram, WhatsApp/Phone) usando a biblioteca `lucide-react` ou similar já instalada.
*   **Links Funcionais**: Garantir que os links abram corretamente.

### 4. Otimização de Performance (Crítico)
*   **Formato de Imagem**: Converter as imagens pesadas (JPG/PNG de alta resolução) para **WebP** otimizado. Isso reduzirá drasticamente o tempo de carregamento.
*   **Lazy Loading Avançado**: Implementar o atributo `loading="lazy"` e `decoding="async"` em todas as imagens.
*   **Code Splitting**: Garantir que componentes pesados (como o Modal de Zoom) sejam carregados apenas quando necessários.

### Plano de Execução
1.  **Otimização de Imagens**: Converter assets principais para WebP (via script ou ferramenta).
2.  **Atualização de Dados**: Enriquecer `products.ts` com as segundas imagens dos cookies.
3.  **Refatoração do Grid**: Implementar a lógica de ordenação (Com Foto -> Sem Foto).
4.  **Feature de Zoom**: Criar componente `ImageModal` e integrar no `ProductCard`.
5.  **Fix Social Icons**: Atualizar componente de ícones.

Podemos começar essa transformação? 🚀