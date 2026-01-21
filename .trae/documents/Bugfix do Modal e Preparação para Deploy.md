Vou corrigir o bug de visualização do modal de imagem e preparar o projeto para deploy.

### 1. Correção do Bug no `ImageModal.tsx`
*   **Problema**: O modal está usando `fixed inset-0`, mas provavelmente o conteúdo interno está sendo empurrado para fora da tela ou sofrendo com problemas de centralização em telas menores/específicas.
*   **Solução**:
    *   Ajustar as classes do container para garantir centralização absoluta (`flex items-center justify-center min-h-screen`).
    *   Adicionar `max-h-[90vh]` e `overflow-y-auto` ao conteúdo do modal para garantir que, se a imagem for muito alta, ela caiba na tela ou permita rolagem interna, sem sair da viewport.
    *   Garantir `z-index` correto para ficar acima de tudo.

### 2. Revisão Geral (Checklist de Pre-Deploy)
*   **Performance**: Verificar se o `content-visibility` não está causando *layout shift* indesejado (CLS).
*   **Responsividade**: Garantir que o modal funcione bem em mobile (ajustar padding/tamanho).
*   **Build**: Rodar um build final limpo.

### 3. Deploy na Vercel (Preparação)
*   Como sou um assistente de código, prepararei o projeto para que *você* possa conectar à Vercel. O projeto já é estático (Vite + React), o que é nativo para a Vercel.
*   Não há configurações extras complexas necessárias, mas verificarei se o `vite.config.ts` está padrão.

Vamos corrigir esse modal agora mesmo! 🛠️