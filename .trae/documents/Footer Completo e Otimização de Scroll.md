Para atender à solicitação de inclusão de endereços no rodapé e otimização de performance, seguirei o seguinte plano técnico:

### 1. Refinamento do Footer (`Footer.tsx`)
*   **Seção de Unidades**: Adicionarei um bloco dedicado para as duas unidades físicas, utilizando o ícone `MapPin` da biblioteca Lucide para criar identificação visual imediata.
*   **Layout Responsivo**: As unidades serão exibidas lado a lado em telas maiores e empilhadas verticalmente em mobile, mantendo o design limpo e organizado.
*   **Estilização**: Utilizarei a fonte `font-display` (Oswald) para os nomes das unidades ("Beira Mar" e "Centro") e `font-sans` (Open Sans) para os endereços, garantindo hierarquia e legibilidade.

### 2. Otimização de Performance (Diagnóstico e Ação)
A lentidão relatada geralmente está ligada a renderizações desnecessárias e manipulação pesada do DOM durante o scroll.
*   **Virtualização do Grid (React Window)**: Em vez de renderizar todos os produtos de uma vez (o que pesa no DOM, especialmente com muitas imagens), implementarei uma estratégia de renderização condicional ou otimizada.
    *   *Ação Imediata*: Aplicar `content-visibility: auto` no CSS das seções de categoria (`ProductGrid.tsx`). Isso instrui o navegador a pular a renderização de layout para conteúdo fora da tela, melhorando drasticamente a performance de scroll sem complexidade de código.
*   **Memoização**: Envolver componentes chave (`ProductCard`, `SocialIcons`) em `React.memo` para evitar re-renderizações quando o estado pai (ex: scroll spy) muda.

### 3. Execução
1.  Atualizar `Footer.tsx` com as informações das lojas.
2.  Otimizar `ProductGrid.tsx` com `content-visibility` e memoização.
3.  Verificar build final.

Vamos nessa? 🚀