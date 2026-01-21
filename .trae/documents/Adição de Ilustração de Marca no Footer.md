Vou adicionar o "toque final" ao rodapé, incorporando a ilustração da marca para trazer mais personalidade.

### 1. Escolha da Imagem
Vou utilizar a versão **sem fundo** (`calmo-image-removebg.png`).
*   **Por que?**: Como o fundo do footer já tem uma cor sólida (Azul Petróleo), a versão com fundo branco (JPG/PNG normal) criaria um "box" quadrado feio. A versão transparente (removebg) se integrará perfeitamente, parecendo uma pintura sobre o rodapé.

### 2. Implementação no `Footer.tsx`
*   **Posicionamento**: Adicionarei a imagem na primeira coluna, logo abaixo do texto de conceito ("Pausa para um café...").
*   **Visualização Desktop**: A imagem ficará alinhada à esquerda ou levemente deslocada para compor com o texto.
*   **Visualização Mobile**: A imagem será centralizada, garantindo que não quebre o layout responsivo que acabamos de ajustar.
*   **Tamanho**: Usarei uma largura controlada (`w-32` ou `w-40`) para que seja um detalhe charmoso, e não um elemento invasivo.

### 3. Execução
1.  Copiar a imagem `calmo-image-removebg.png` para a pasta `public/images`.
2.  Atualizar o componente `Footer.tsx` para incluir a tag `<img>`.
3.  Verificar o build final.

Vamos fechar com chave de ouro! 🍪☕