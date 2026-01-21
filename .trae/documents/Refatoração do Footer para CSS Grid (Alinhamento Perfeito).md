Vou aplicar uma solução baseada em **Grid Layout** para o Desktop. O Flexbox atual está causando o desalinhamento porque os itens têm alturas diferentes e o espaçamento (`gap`) não é suficiente para alinhar perfeitamente as colunas horizontalmente.

### Nova Estrutura para Desktop (`Footer.tsx`)
1.  **Grid System**: Substituir `flex md:flex-row` por `grid md:grid-cols-3`.
    *   Isso força matematicamente 3 colunas de larguras iguais (33.3%), garantindo que o início de cada coluna esteja perfeitamente alinhado com a grade, independente do conteúdo.
2.  **Alinhamento Vertical**: Manter `items-start` para que o topo de todos os elementos comece na mesma linha horizontal.
3.  **Coluna Direita**: Forçar `justify-self-end` para empurrar o conteúdo para a direita, mantendo o design original.
4.  **Mobile**: Manter `flex flex-col` para empilhar tudo centralizado.

Essa abordagem elimina a "flutuação" visual e garante um alinhamento rígido e profissional no Desktop. Vamos nessa? 📐