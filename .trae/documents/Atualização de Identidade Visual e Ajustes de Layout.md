Vou implementar a atualização de paleta de cores e refinamento do footer conforme solicitado:

### 1. Atualização da Paleta de Cores (`tailwind.config.js`)
*   **PANTONE 2160 C (Azul Petróleo)**: Substituirei o antigo tom marrom (`#8B6F47`) pelo novo azul oficial `#34657E`.
*   **PANTONE 2011 C (Laranja)**: Atualizarei o tom de laranja (`coffee-light`) para `#FD9446` para garantir fidelidade total à marca.
*   **Impacto**: Isso alterará automaticamente a cor de todos os textos e fundos que usam a classe `text-coffee` ou `bg-coffee`, garantindo consistência imediata.

### 2. Refinamento do Footer (`Footer.tsx`)
*   **Centralização Mobile**: Ajustarei as classes flexbox para garantir que, em telas menores, todos os elementos (logo, endereços, redes sociais) fiquem perfeitamente centralizados.
    *   *Solução Técnica*: Alterar `items-start` para `items-center` no container principal (mobile) e manter `md:items-start` para desktop.
*   **Cor de Fundo**: A atualização no `tailwind.config.js` já cuidará da cor de fundo do footer automaticamente.

### 3. Execução
1.  Atualizar `tailwind.config.js` com as novas cores HEX.
2.  Ajustar classes de alinhamento no `Footer.tsx`.
3.  Verificar o build.

Pronto para aplicar a nova identidade visual? 🎨