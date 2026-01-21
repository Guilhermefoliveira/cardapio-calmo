O problema persiste porque o modal está sendo renderizado **dentro** de um container que tem otimizações de performance (`content-visibility: auto`), o que cria um "contexto de contenção". Isso faz com que o `position: fixed` do modal funcione relativo àquele container específico, e não à tela inteira (viewport), causando o comportamento estranho de corte e posicionamento errado.

### Solução Definitiva (Senior Level)
Vou implementar um **React Portal**.
Isso vai "teletransportar" o modal para fora da hierarquia do DOM atual (que está presa no grid de produtos) e renderizá-lo diretamente no `document.body`.

### O que vou fazer:
1.  **React Portal**: Modificar o `ImageModal.tsx` para usar `createPortal`.
2.  **Resultado**: O modal passará a existir no nível mais alto da página, ignorando qualquer restrição de layout, scroll ou otimização dos componentes pais. Ele ficará 100% livre para centralizar na tela corretamente.

Essa é a correção arquitetural correta para modais em aplicações React complexas. Vamos aplicar! 🚀