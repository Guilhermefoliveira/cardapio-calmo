Vou corrigir o alinhamento visual no Desktop para garantir que tudo fique perfeitamente alinhado e harmônico, sem quebrar a centralização no Mobile.

### Problema Identificado
No desktop, os elementos das colunas de endereço (centro) e redes sociais (direita) não estão alinhados verticalmente com o topo da coluna da esquerda (que agora cresceu por causa da imagem). Além disso, o alinhamento horizontal interno dos itens de endereço precisa ser revisado para garantir que o ícone e o texto fiquem alinhados à esquerda.

### Solução (`Footer.tsx`)
1.  **Container Principal**: Manter `items-start` no desktop (`md:items-start`), mas vou adicionar um ajuste fino de margem ou padding se necessário para alinhar visualmente os blocos.
2.  **Coluna de Endereços (Meio)**:
    *   Forçar `items-start` no desktop para garantir que o ícone do mapa e o texto fiquem alinhados à esquerda.
    *   No print desktop, parece que os itens estão centralizados ou flutuando estranho. Vou aplicar `md:items-start` e `text-left` explicitamente nos containers internos dos links.
3.  **Coluna da Esquerda**: Já está correta (`flex-col items-center md:items-start`), mas vou garantir que a imagem não empurre o conteúdo de forma desproporcional.

Vamos refinar esses alinhamentos agora! 📐