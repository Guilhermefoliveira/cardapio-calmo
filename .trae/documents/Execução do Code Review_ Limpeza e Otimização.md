Este Code Review é excelente e cobre pontos cruciais para a profissionalização do projeto. Com base no pedido de "desconsiderar apenas a parte de carrinho", vou estruturar um plano de ação para atacar os pontos mais críticos e de alto impacto (Quick Wins e Melhorias Estruturais).

### Plano de Implementação (Priorizado)

#### 1. Limpeza de Código e Dados (Imediato)
*   **Remover código morto**: Limpar `categoryRefs` e variáveis de estado não usadas (`currentImage`) identificadas no review.
*   **Sanitização de Dados (`products.ts`)**: Remover referências a `desktop.ini` e garantir que todos os produtos tenham estrutura válida.
*   **Otimização de Performance**: Implementar a memoização sugerida no `ProductGrid` para evitar re-cálculos desnecessários de filtros e sorts.

#### 2. SEO e Metadados (Alto Impacto)
*   **Atualizar `index.html`**: Configurar `title`, `meta description`, e Open Graph tags para compartilhamento em redes sociais (WhatsApp/Instagram).
*   **Sitemap e Robots**: Criar arquivos básicos para indexação.

#### 3. TypeScript e Qualidade (Médio Prazo/Iterativo)
*   **Tipagem**: Criar `src/types/index.ts` para centralizar as definições de `Product` e `Category`.
*   **Strict Mode**: Habilitar gradualmente (pode quebrar o build se fizermos tudo de uma vez, então vou focar em corrigir os erros mais óbvios primeiro).

#### 4. Acessibilidade e UX (Refinamento)
*   **Melhorias no Modal**: Adicionar suporte a tecla `ESC` e atributos ARIA.
*   **Scroll Spy**: Centralizar a lógica de scroll (que foi apontada como duplicada) em um hook personalizado.

### O que NÃO faremos (Conforme solicitado)
*   Carrinho de compras / Zustand store para checkout.
*   Integrações de pagamento.

### Próximo Passo
Vou começar pelos **Quick Wins** de limpeza e SEO, que trazem benefício imediato sem risco de quebrar a aplicação. Depois, avançamos para as refatorações de código.

Posso começar limpando o `products.ts` e o código morto? 🧹