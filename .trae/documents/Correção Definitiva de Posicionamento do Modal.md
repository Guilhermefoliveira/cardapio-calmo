Entendi o problema pelo print. O modal está sendo cortado na parte inferior ou posicionado incorretamente, provavelmente devido ao comportamento do `fixed inset-0` em combinação com o `flex items-center`.

Vou aplicar uma correção mais robusta para garantir que o modal fique sempre **totalmente visível e centralizado**, independentemente da rolagem da página ou tamanho da tela.

### Plano de Correção (`ImageModal.tsx`)

1.  **Ajuste de Posicionamento (`z-index` e `position`)**:
    *   Manter `fixed inset-0` e `z-[100]`, mas garantir que o container pai tenha `h-screen` e `w-screen` explícitos para ocupar toda a viewport.
2.  **Conteúdo do Modal**:
    *   Remover `max-h-[90vh]` fixo do container do modal e usar uma abordagem mais flexível com margens (`m-4`).
    *   Ajustar a imagem para `max-h-[80vh]` para garantir que sobre espaço para o título e o botão de fechar.
    *   Adicionar `pointer-events-auto` ao modal para garantir cliques.

### Solução Proposta
Vou simplificar a estrutura do modal para:
*   Overlay: `fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]`
*   Modal Content: `relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xl flex flex-col overflow-hidden`
*   Image Container: `flex-1 overflow-auto flex items-center justify-center bg-black/5` (fundo leve para destacar a imagem)
*   Image: `max-w-full max-h-[75vh] object-contain`

Isso deve resolver o problema de corte visual. Vamos aplicar? 🛠️