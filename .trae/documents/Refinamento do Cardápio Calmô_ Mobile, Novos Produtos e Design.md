Vou implementar as alterações solicitadas para elevar o nível do cardápio da Calmô, focando em mobile e na nova estrutura de produtos.

### 1. Gestão de Assets e Dados
*   **Migração de Imagens**: Moverei as imagens da pasta `assets/Assets calmo/fotos produtos calmo/` para `public/images/products/` para uso otimizado.
*   **Mapeamento de Produtos**: Criarei o arquivo `src/data/products.ts` contendo toda a nova estrutura de categorias (Cookies, Cafés Quentes, Gelados, Matcha, etc.) e itens em ordem alfabética.
*   **Associação de Imagens**: Vou vincular cada produto à sua foto "padrão" correspondente. Produtos sem foto receberão um placeholder elegante com a identidade da marca.

### 2. Refinamento de UI/UX (Design System)
*   **Mobile First**: Ajustarei o grid para exibir **2 colunas** no celular (ao invés de 1), com cards menores e espaçamento reduzido (`gap-3`), melhorando a visualização rápida do cardápio.
*   **Hero Section**: Centralizarei perfeitamente o ícone/botão "Ver Cardápio".
*   **Cards de Produto**: Reduzirei o tamanho dos cards (padding menor, tipografia ajustada) para ficarem mais delicados e sofisticados.
*   **Categorização Visual**: Implementarei seções claras para cada categoria (Cookies, Cafés, etc.) com títulos elegantes.

### 3. Implementação Técnica
*   **Componente `ProductGrid`**: Atualizar para renderizar as múltiplas seções dinamicamente baseadas na nova estrutura de dados.
*   **Ordenação**: Garantir que a renderização respeite a ordem alfabética dentro de cada categoria.
*   **Performance**: Otimizar o carregamento das novas imagens.

Tudo pronto para transformar o feedback em código! 🚀