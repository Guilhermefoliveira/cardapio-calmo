Vou corrigir o alinhamento da coluna da marca (esquerda) para que ela fique alinhada à esquerda no Desktop, combinando visualmente com as colunas de endereço. Atualmente, o código mostra que ela foi alterada para `items-center` e `text-center` no Desktop, o que causou o desalinhamento relatado.

### Plano de Correção (`Footer.tsx`):
1.  **Coluna da Marca**:
    *   Alterar de `items-center md:items-center` para `items-center md:items-start`.
    *   Alterar de `text-center md:text-center` para `text-center md:text-left`.
2.  **Resultado Esperado**:
    *   **Mobile**: Continua tudo centralizado (perfeito).
    *   **Desktop**: A imagem, o título "Calmô" e o texto descritivo ficarão alinhados à esquerda, criando uma linha vertical sólida com o início do rodapé e conversando com a coluna de endereços (que já está à esquerda).

Vamos aplicar esse ajuste fino de CSS! 📐