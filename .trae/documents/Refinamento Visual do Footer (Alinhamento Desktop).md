Vou refinar o layout para garantir que o visual no Desktop fique **perfeitamente alinhado**, sem parecer "descentralizado" ou bagunçado, enquanto mantenho a centralização no Mobile que você gostou.

### Análise do Problema (Desktop)
*   A coluna da esquerda (Logo) está com o texto centralizado e a imagem centralizada em relação ao texto, mas a coluna como um todo está flutuando.
*   A coluna do meio (Endereços) está tentando alinhar à esquerda, mas os textos internos ainda podem estar centralizando devido a heranças ou falta de especificidade.
*   A coluna da direita (Redes Sociais) está alinhada à direita.

Essa mistura de alinhamentos cria o aspecto "descentralizado".

### Solução (`Footer.tsx`)
Vou unificar o alinhamento no Desktop para que **tudo (exceto a coluna da direita) fique alinhado à esquerda**, criando uma linha de leitura clara.

1.  **Coluna Esquerda (Logo)**:
    *   Forçar `items-start` e `text-left` no Desktop.
    *   Garantir que a imagem e o texto fiquem alinhados na esquerda.
2.  **Coluna do Meio (Endereços)**:
    *   Reforçar o `flex-row` para os ícones ficarem ao lado do texto.
    *   Garantir que o bloco de texto tenha `text-left`.
3.  **Coluna Direita (Social)**:
    *   Manter `items-end` e `text-right` para equilibrar o design.

### Ajuste Fino
Vou adicionar `w-full` nos containers internos para garantir que o Flexbox ocupe o espaço correto e respeite o alinhamento `start`.

Vamos deixar esse footer impecável! 📐