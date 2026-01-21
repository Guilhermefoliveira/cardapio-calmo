Após analisar a fundo a estrutura de assets em `assets/Assets calmo/Materiais/01 INSTAGRAM/03 FONTES/`, confirmei a tipografia oficial da marca para uso digital:

### 1. Tipografia Oficial Identificada
*   **Oswald** (Bold/Medium): Será usada para **Títulos, Categorias e Preços**. Sua natureza condensada e geométrica traz modernidade e impacto visual, otimizando espaço em telas mobile.
*   **Open Sans** (Regular/Light): Será usada para **Descrições e Textos de Apoio**. Sua legibilidade é perfeita para tamanhos menores, garantindo que o cliente leia os ingredientes com clareza.
*   *Nota*: A fonte "curva" do logo é exclusiva da marca gráfica. Para o cardápio, a combinação Oswald + Open Sans é a escolha técnica correta para manter consistência com os materiais de redes sociais.

### 2. Elementos Gráficos (`02 Elementos`)
*   Integrarei as **formas orgânicas** e a "vírgula" (pausa) como texturas de fundo sutis, quebrando a rigidez do grid e trazendo a sensação de "leveza" da marca.

### 3. Proposta de UX/UI (Senior Level)
*   **Navegação "Sticky" (Mobile First)**: Criar uma barra de categorias que fixa no topo ao rolar. Isso permite que o usuário pule de "Cookies" para "Salgados" com um toque, sem scrolar infinitamente.
*   **Hierarquia Visual**:
    *   **Preço** em destaque (Oswald) ao lado do nome.
    *   **Imagens** com *aspect-ratio* consistente e *lazy-loading*.
    *   **Feedback Tátil**: Efeitos visuais sutis ao tocar nos itens.

### Plano de Implementação
1.  **Instalação de Fontes**: Copiar `Oswald` e `Open Sans` para o projeto e configurar `@font-face` (melhor performance que Google Fonts).
2.  **Refatoração do Design System**: Atualizar `tailwind.config.js` com as novas famílias tipográficas.
3.  **Componente de Navegação**: Implementar o menu de categorias deslizante.
4.  **Integração de Assets**: Adicionar os elementos decorativos ao layout.

Podemos aplicar esse upgrade no visual? 🎨