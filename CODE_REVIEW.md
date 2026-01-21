# 📋 Code Review - Calmô Cafés e Cookies

**Data da Revisão:** 21 de Janeiro de 2026  
**Revisado por:** Engenheiro Senior Front-end & Especialista UI/UX  
**Versão do Projeto:** 0.0.0

---

## 📊 Resumo Executivo

### ✅ Pontos Fortes
- **Identidade Visual Excelente**: Design consistente e profissional com paleta de cores bem definida
- **Stack Moderna**: React 18 + TypeScript + Vite + Tailwind CSS
- **Performance Otimizada**: Uso de lazy loading, memoization e content-visibility
- **Responsividade**: Layout adaptável para mobile e desktop
- **Acessibilidade Básica**: Uso de aria-labels e estrutura semântica

### ⚠️ Áreas de Melhoria Prioritárias
1. **TypeScript não está sendo aproveitado** (strict mode desabilitado)
2. **Faltam testes** (0% de cobertura)
3. **SEO básico não implementado**
4. **Dados hardcoded** sem tipagem forte
5. **Algumas práticas de código podem ser melhoradas**

---

## 🔍 Análise de Código - Front-end

### 1. Arquitetura e Estrutura do Projeto

#### ✅ Pontos Positivos
```
src/
├── components/     ✓ Separação clara de componentes
├── data/          ✓ Dados isolados
├── hooks/         ✓ Lógica reutilizável
├── pages/         ✓ Organização por páginas
└── lib/           ✓ Utilitários separados
```

#### ⚠️ Recomendações

**1.1 Adicionar camada de tipos**
```typescript
// Criar: src/types/index.ts
export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  image?: string;
  imageDetail?: string;
  price?: string;
  description?: string;
}

export type CategoryType = 
  | 'Cookies'
  | 'Cafés Quentes'
  | 'Cafés Gelados'
  | 'Matcha'
  | 'Gelados'
  | 'Outras bebidas'
  | 'Salgados';

export const CATEGORIES: readonly CategoryType[] = [
  'Cookies',
  'Cafés Quentes',
  'Cafés Gelados',
  'Matcha',
  'Gelados',
  'Outras bebidas',
  'Salgados'
] as const;
```

**Por quê?**
- Centraliza tipos e evita duplicação
- Permite autocomplete em todo o projeto
- Previne erros de digitação em categorias
- Facilita manutenção futura

---

### 2. Componentes React

#### 2.1 ProductGrid.tsx

**🔴 Problemas Críticos**

```typescript
// ❌ PROBLEMA: Arrays hardcoded quando já existem nos dados
const categories = [
  'Cookies',
  'Cafés Quentes',
  // ...
];

// ✅ SOLUÇÃO: Derivar das categorias dos produtos
const categories = useMemo(() => {
  return Array.from(new Set(PRODUCTS.map(p => p.category)));
}, []);
```

```typescript
// ❌ PROBLEMA: categoryRefs criado mas nunca usado
const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

// ✅ SOLUÇÃO: Remover se não for necessário
```

```typescript
// ❌ PROBLEMA: Código morto
if (!activeCategory) {
  // Bloco vazio nas linhas 27-29
}

// ✅ SOLUÇÃO: Remover
```

**🟡 Otimizações de Performance**

```typescript
// ❌ PROBLEMA: Filtro e sort executados em cada render
{categories.map((category) => {
  const categoryProducts = PRODUCTS
    .filter(p => p.category === category)
    .sort((a, b) => {
      // ...
    });

// ✅ SOLUÇÃO: Memoizar o processamento
const productsByCategory = useMemo(() => {
  return categories.reduce((acc, category) => {
    acc[category] = PRODUCTS
      .filter(p => p.category === category)
      .sort((a, b) => {
        const aHasImage = a.image && !a.image.includes('desktop.ini');
        const bHasImage = b.image && !b.image.includes('desktop.ini');
        if (aHasImage && !bHasImage) return -1;
        if (!aHasImage && bHasImage) return 1;
        return 0;
      });
    return acc;
  }, {} as Record<string, Product[]>);
}, [categories]);
```

**🟡 Throttling Implementation**

```typescript
// ⚠️ ATENÇÃO: Implementação manual de throttle
let timeoutId: number | null = null;
const throttledScroll = () => {
  if (timeoutId === null) {
    timeoutId = window.setTimeout(() => {
      handleScroll();
      timeoutId = null;
    }, 100); 
  }
};

// ✅ MELHOR: Usar lodash.throttle ou custom hook
import { throttle } from 'lodash';

useEffect(() => {
  const handleScroll = throttle(() => {
    // lógica
  }, 100);

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
    handleScroll.cancel(); // Importante!
  };
}, [activeCategory, categories]);
```

#### 2.2 ProductCard.tsx

**🟢 Pontos Positivos**
- ✓ Lazy loading implementado
- ✓ Error handling de imagens
- ✓ Hover states bem implementados
- ✓ Modal de zoom funcional

**🟡 Melhorias Sugeridas**

```typescript
// ❌ PROBLEMA: State não utilizado
const [currentImage, setCurrentImage] = useState(image);
// Linha 15 - nunca é usado ou atualizado

// ✅ SOLUÇÃO: Remover

// ❌ PROBLEMA: Manipulação direta do DOM em onError
onError={(e) => {
  (e.target as HTMLImageElement).style.display = 'none';
  (e.target as HTMLImageElement).parentElement!.querySelector('.placeholder')!.classList.remove('hidden');
}}

// ✅ SOLUÇÃO: Usar estado React
const [imageError, setImageError] = useState(false);

onError={() => setImageError(true)}

{imageError ? (
  <div className="w-full h-full flex items-center justify-center bg-cream-dark/10">
    <span className="font-display text-3xl opacity-50">Calmô</span>
  </div>
) : (
  <img src={displayImage} alt={name} />
)}
```

#### 2.3 CategoryNav.tsx

**🟢 Implementação Sólida**
- Sticky header bem implementado
- Scroll suave funcionando
- Responsivo com scroll horizontal

**🟡 Sugestão de Melhoria**

```typescript
// ⚠️ ATENÇÃO: Listener de scroll duplicado
// ProductGrid.tsx tem outro listener
// CategoryNav.tsx tem outro listener

// ✅ SOLUÇÃO: Centralizar em um único hook
// Criar: src/hooks/useScrollSpy.ts
export function useScrollSpy(elementIds: string[], offset = 150) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = throttle(() => {
      for (const id of elementIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveId(id);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [elementIds, offset]);

  return activeId;
}
```

#### 2.4 ImageModal.tsx

**🟢 Excelente Implementação**
- ✓ Portal corretamente utilizado
- ✓ Body scroll lock implementado
- ✓ Backdrop com blur
- ✓ Animações suaves

**🟡 Acessibilidade**

```typescript
// ✅ ADICIONAR: Suporte para ESC key e foco automático
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  if (isOpen) {
    document.addEventListener('keydown', handleEscape);
    // Foco no botão de fechar
    const closeButton = document.querySelector('[aria-label="Fechar"]');
    (closeButton as HTMLElement)?.focus();
  }

  return () => {
    document.removeEventListener('keydown', handleEscape);
  };
}, [isOpen, onClose]);

// ✅ ADICIONAR: ARIA attributes
<div 
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  className="fixed inset-0..."
>
  {/* ... */}
  <h3 id="modal-title" className="...">
    {name}
  </h3>
</div>
```

#### 2.5 HeroSection.tsx

**🟢 Clean e Funcional**

**🟡 Performance**

```typescript
// ⚠️ ATENÇÃO: Imagem importada como módulo
import heroImage from '../assets/images/calmo-1.jpg';

// ✅ MELHOR: Deixar no /public para otimização do Vite
// Mover para: /public/images/hero/calmo-1.jpg
<img src="/images/hero/calmo-1.jpg" alt="..." />
```

---

### 3. TypeScript

#### 🔴 Problema Crítico: Strict Mode Desabilitado

**tsconfig.json atual:**
```json
{
  "compilerOptions": {
    "strict": false,                      // ❌
    "noUnusedLocals": false,             // ❌
    "noUnusedParameters": false,         // ❌
    "noFallthroughCasesInSwitch": false, // ❌
    "forceConsistentCasingInFileNames": false // ❌
  }
}
```

**✅ Recomendado:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "noImplicitAny": true
  }
}
```

**Por quê?**
- TypeScript sem strict mode perde 70% do seu valor
- Previne bugs em tempo de compilação
- Melhora a qualidade do código
- Facilita refatoração

**Impacto:**
Você terá que corrigir alguns erros que serão revelados, mas isso tornará o código muito mais robusto.

---

### 4. Estado e Gerenciamento de Dados

#### 🟡 Zustand Instalado mas Não Utilizado

```json
// package.json
"zustand": "^5.0.3"  // ⚠️ Instalado mas não usado
```

**Decisões:**

**Opção A - Remover Zustand:**
```bash
npm uninstall zustand
```
*Recomendado se o projeto permanecerá simples*

**Opção B - Usar Zustand para Estado Global:**
```typescript
// src/store/useMenuStore.ts
import { create } from 'zustand';

interface MenuStore {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  favoriteProducts: string[];
  toggleFavorite: (productId: string) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  activeCategory: '',
  setActiveCategory: (category) => set({ activeCategory: category }),
  favoriteProducts: [],
  toggleFavorite: (productId) => 
    set((state) => ({
      favoriteProducts: state.favoriteProducts.includes(productId)
        ? state.favoriteProducts.filter(id => id !== productId)
        : [...state.favoriteProducts, productId]
    }))
}));
```

*Útil se você planeja adicionar features como favoritos, carrinho, etc.*

---

### 5. Estilização (Tailwind CSS)

#### 🟢 Configuração Profissional

**Pontos Positivos:**
- ✓ Custom colors bem definidos
- ✓ Fontes personalizadas carregadas
- ✓ Animações customizadas
- ✓ Scrollbar estilizada

#### 🟡 Melhorias Sugeridas

**5.1 Classes Tailwind Repetidas**

Encontrei várias classes repetidas que poderiam ser extraídas:

```typescript
// ❌ Repetido em múltiplos lugares
className="text-cream hover:text-coffee-light transition-all duration-300 transform hover:scale-110"

// ✅ SOLUÇÃO 1: Criar classe CSS
// index.css
@layer components {
  .social-icon {
    @apply text-cream hover:text-coffee-light transition-all duration-300 transform hover:scale-110;
  }
  
  .category-button {
    @apply whitespace-nowrap px-4 py-2 rounded-full text-sm md:text-base font-display tracking-wide transition-all duration-300 snap-center;
  }
  
  .category-button-active {
    @apply bg-coffee text-cream shadow-md scale-105;
  }
  
  .category-button-inactive {
    @apply bg-white/50 text-coffee hover:bg-white hover:shadow-sm;
  }
}

// ✅ SOLUÇÃO 2: Criar componente
// src/components/ui/Button.tsx
```

**5.2 Font Loading Optimization**

```css
/* ⚠️ ATENÇÃO: 8 arquivos de fonte diferentes */
/* Isso pode impactar performance */

/* ✅ SOLUÇÃO: Usar subconjunto necessário */
/* Se você só usa Regular, Medium e Bold, remova Light */
```

---

### 6. Dados (products.ts)

#### 🔴 Problemas Identificados

**6.1 Dados Inconsistentes**
```typescript
// ❌ PROBLEMA: desktop.ini como imagem
{
  id: 'c-1',
  name: 'Biscoff',
  category: 'Cookies',
  image: '/images/products/cookies/desktop.ini'  // ❌
}

// ❌ PROBLEMA: Produtos sem imagem
{
  id: 'c-6',
  name: 'Ferrero Rocher',
  category: 'Cookies',
  // image: missing
}
```

**✅ Solução:**
```typescript
// 1. Limpar dados
export const PRODUCTS: Product[] = [
  {
    id: 'c-1',
    name: 'Biscoff',
    category: 'Cookies',
    image: undefined // ou remover a propriedade
  },
  // ...
].filter(p => !p.image?.includes('desktop.ini'));

// 2. Validação em tempo de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  const invalidProducts = PRODUCTS.filter(p => 
    p.image && (
      p.image.includes('desktop.ini') || 
      p.image === ''
    )
  );
  
  if (invalidProducts.length > 0) {
    console.warn('⚠️ Produtos com imagens inválidas:', invalidProducts);
  }
}
```

**6.2 Falta de Validação**

```typescript
// ✅ ADICIONAR: Validação com Zod
import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.enum([
    'Cookies',
    'Cafés Quentes',
    'Cafés Gelados',
    'Matcha',
    'Gelados',
    'Outras bebidas',
    'Salgados'
  ]),
  image: z.string().url().optional(),
  imageDetail: z.string().url().optional(),
  price: z.string().optional(),
  description: z.string().optional()
});

// Validar em build time
export const PRODUCTS = rawProducts.map(p => ProductSchema.parse(p));
```

---

### 7. Performance

#### 🟢 Otimizações Já Implementadas

- ✓ `React.memo` em ProductCard
- ✓ `lazy loading` em imagens
- ✓ `content-visibility: auto` em categorias
- ✓ Throttling em scroll

#### 🟡 Oportunidades de Melhoria

**7.1 Code Splitting**

```typescript
// ✅ ADICIONAR: Lazy loading de componentes
import { lazy, Suspense } from 'react';

const ImageModal = lazy(() => import('./components/ImageModal'));

// Uso:
<Suspense fallback={<div>Carregando...</div>}>
  <ImageModal {...props} />
</Suspense>
```

**7.2 Imagens**

```typescript
// ❌ PROBLEMA: Imagens não otimizadas
// JPG em tamanho original

// ✅ SOLUÇÃO: 
// 1. Converter para WebP
// 2. Gerar múltiplos tamanhos (thumbnails)
// 3. Usar srcset

<img
  src="/images/products/cookies/brownie-400w.webp"
  srcSet="
    /images/products/cookies/brownie-400w.webp 400w,
    /images/products/cookies/brownie-800w.webp 800w,
    /images/products/cookies/brownie-1200w.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt={name}
/>
```

**7.3 Preload de Fontes**

```html
<!-- index.html -->
<head>
  <!-- ✅ ADICIONAR: Preload critical fonts -->
  <link 
    rel="preload" 
    href="/fonts/Oswald/Oswald-Regular.ttf" 
    as="font" 
    type="font/ttf" 
    crossorigin="anonymous"
  />
  <link 
    rel="preload" 
    href="/fonts/OpenSans/OpenSans-Regular.ttf" 
    as="font" 
    type="font/ttf" 
    crossorigin="anonymous"
  />
</head>
```

**7.4 Virtual Scrolling**

Se o cardápio crescer muito (100+ produtos):

```typescript
// Considere: react-window ou react-virtualized
import { FixedSizeGrid } from 'react-window';

// Para renderizar apenas itens visíveis
```

---

### 8. Acessibilidade (A11Y)

#### 🟡 Score Atual: 6/10

**Implementado:**
- ✓ `aria-label` em botões
- ✓ Landmarks semânticos
- ✓ Contraste de cores adequado

**Faltando:**

**8.1 Navegação por Teclado**

```typescript
// ✅ ADICIONAR: Skip to content
<a href="#menu" className="sr-only focus:not-sr-only">
  Pular para o cardápio
</a>

// ✅ ADICIONAR: Focus trap no modal
import { FocusTrap } from '@headlessui/react';

<FocusTrap>
  <ImageModal ... />
</FocusTrap>
```

**8.2 Screen Reader Support**

```typescript
// ✅ MELHORAR: Anúncios de mudança de categoria
<div 
  role="status" 
  aria-live="polite" 
  className="sr-only"
>
  {activeCategory && `Visualizando ${activeCategory}`}
</div>
```

**8.3 ARIA Landmarks**

```html
<!-- ✅ ADICIONAR -->
<header role="banner">
  <HeroSection />
</header>

<nav role="navigation" aria-label="Categorias do cardápio">
  <CategoryNav />
</nav>

<main role="main">
  <ProductGrid />
</main>

<footer role="contentinfo">
  <Footer />
</footer>
```

---

### 9. SEO

#### 🔴 Score Atual: 2/10

**Problemas Críticos:**

```html
<!-- ❌ PROBLEMA 1: Title genérico -->
<title>My Trae Project</title>

<!-- ✅ SOLUÇÃO -->
<title>Calmô Cafés e Cookies - Cardápio Online | Florianópolis</title>
<meta name="description" content="Cardápio online da Calmô Cafés e Cookies. Cookies artesanais, cafés especiais, matcha e muito mais. Duas unidades em Florianópolis - SC." />

<!-- ✅ ADICIONAR: Open Graph -->
<meta property="og:title" content="Calmô Cafés e Cookies - Cardápio" />
<meta property="og:description" content="Cookies artesanais e cafés especiais em Florianópolis" />
<meta property="og:image" content="/images/og-image.jpg" />
<meta property="og:url" content="https://calmo.com.br" />
<meta property="og:type" content="website" />

<!-- ✅ ADICIONAR: Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Calmô Cafés e Cookies" />
<meta name="twitter:description" content="Cookies artesanais e cafés especiais" />
<meta name="twitter:image" content="/images/twitter-card.jpg" />

<!-- ✅ ADICIONAR: Mobile -->
<meta name="theme-color" content="#34657E" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
```

**Structured Data (JSON-LD):**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Calmô Cafés e Cookies",
  "image": "https://calmo.com.br/images/logo.png",
  "description": "Cafeteria especializada em cookies artesanais e cafés especiais",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Rua Altamiro Guimarães, 260 - Sala 1",
      "addressLocality": "Florianópolis",
      "addressRegion": "SC",
      "postalCode": "88015-510",
      "addressCountry": "BR"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Rua Osmar Cunha, 472",
      "addressLocality": "Florianópolis",
      "addressRegion": "SC",
      "addressCountry": "BR"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/querocalmo/",
    "https://www.facebook.com/querocalmo",
    "https://www.tiktok.com/@querocalmo"
  ],
  "servesCuisine": "Café, Cookies",
  "priceRange": "$$"
}
</script>
```

**Sitemap:**

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calmo.com.br</loc>
    <lastmod>2026-01-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

### 10. Testes

#### 🔴 Score: 0/10 (Nenhum teste encontrado)

**✅ Sugestões de Implementação:**

**10.1 Setup de Testes**

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
});
```

**10.2 Testes de Componentes**

```typescript
// src/components/__tests__/ProductCard.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductCard } from '../ProductCard';

describe('ProductCard', () => {
  it('deve renderizar o nome do produto', () => {
    render(
      <ProductCard
        name="Cookie de Chocolate"
        image="/test.jpg"
        price="R$ 8,00"
      />
    );
    
    expect(screen.getByText('Cookie de Chocolate')).toBeInTheDocument();
  });

  it('deve abrir modal ao clicar na imagem', async () => {
    const user = userEvent.setup();
    
    render(
      <ProductCard
        name="Cookie"
        image="/test.jpg"
        price="R$ 8,00"
      />
    );
    
    const image = screen.getByAltText('Cookie');
    await user.click(image);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('deve mostrar placeholder quando não há imagem', () => {
    render(
      <ProductCard
        name="Cookie"
        image=""
        price="R$ 8,00"
      />
    );
    
    expect(screen.getByText('Calmô')).toBeInTheDocument();
  });
});
```

**10.3 Testes de Hooks**

```typescript
// src/hooks/__tests__/useTheme.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve iniciar com tema light por padrão', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('deve alternar entre temas', () => {
    const { result } = renderHook(() => useTheme());
    
    act(() => {
      result.current.toggleTheme();
    });
    
    expect(result.current.theme).toBe('dark');
  });
});
```

---

## 🎨 Análise UI/UX

### 1. Usabilidade

#### 🟢 Pontos Fortes

**1.1 Navegação Intuitiva**
- ✓ Scroll suave implementado
- ✓ Indicação visual da categoria ativa
- ✓ Botão "Ver Cardápio" com animação

**1.2 Feedback Visual**
- ✓ Hover states em todos os elementos interativos
- ✓ Transições suaves (duration-300)
- ✓ Loading lazy com feedback

#### 🟡 Oportunidades de Melhoria

**1.1 Loading States**

```typescript
// ✅ ADICIONAR: Skeleton screens
const ProductCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-[4/3] bg-cream-dark/20 rounded-2xl mb-4" />
    <div className="h-4 bg-cream-dark/20 rounded w-3/4 mb-2" />
    <div className="h-3 bg-cream-dark/20 rounded w-1/2" />
  </div>
);

// Usar enquanto imagens carregam
```

**1.2 Estados Vazios**

```typescript
// ✅ MELHORAR: Empty state mais informativo
const Empty = () => (
  <div className="text-center py-12">
    <div className="text-6xl mb-4">☕</div>
    <h3 className="text-xl font-display mb-2">
      Nenhum produto nesta categoria
    </h3>
    <p className="text-gray-500">
      Estamos preparando novidades!
    </p>
  </div>
);
```

**1.3 Busca de Produtos**

Seria uma adição valiosa:

```typescript
// ✅ ADICIONAR: Barra de busca
const SearchBar = () => {
  const [query, setQuery] = useState('');
  
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <input
        type="search"
        placeholder="Buscar produtos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 rounded-full border-2 border-cream-dark focus:border-coffee outline-none"
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
};
```

---

### 2. Design Visual

#### 🟢 Excelente Execução

**2.1 Hierarquia Visual**
- ✓ Títulos de categorias com tamanho apropriado (text-3xl md:text-5xl)
- ✓ Espaçamento consistente (gap-4, gap-8)
- ✓ Contraste adequado

**2.2 Paleta de Cores**
```css
/* ✓ Muito bem escolhida */
--cream: #F5F1EB     /* Fundo suave */
--cream-dark: #E8DDD4 /* Variação */
--coffee: #34657E     /* Azul profundo */
--coffee-light: #FD9446 /* Laranja vibrante */
```

**2.3 Tipografia**
- ✓ Oswald para títulos (display)
- ✓ Open Sans para corpo (sans)
- ✓ Hierarquia clara

#### 🟡 Sugestões de Refinamento

**2.1 Micro-interações**

```css
/* ✅ ADICIONAR: Animações mais ricas */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating-icon {
  animation: float 3s ease-in-out infinite;
}
```

**2.2 Cards de Produto**

```typescript
// ✅ ADICIONAR: Badge para novos produtos
{product.isNew && (
  <span className="absolute top-2 left-2 bg-coffee-light text-white text-xs px-2 py-1 rounded-full font-display">
    NOVO
  </span>
)}

// ✅ ADICIONAR: Badge para favoritos
{product.isPopular && (
  <span className="absolute top-2 right-2 bg-coffee text-white text-xs px-2 py-1 rounded-full font-display">
    ⭐ POPULAR
  </span>
)}
```

**2.3 Grid Responsivo**

```typescript
// ⚠️ ATENÇÃO: Pode melhorar em telas grandes
// Atual: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

// ✅ SUGESTÃO: 
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
// Aproveita melhor telas grandes
```

---

### 3. Responsividade

#### 🟢 Bem Implementado

**Breakpoints Cobertos:**
- ✓ Mobile (< 768px)
- ✓ Tablet (768px - 1024px)
- ✓ Desktop (> 1024px)

#### 🟡 Testes em Dispositivos Reais

**Checklist de Testes:**
```
[ ] iPhone SE (375px)
[ ] iPhone 12/13 Pro (390px)
[ ] iPhone 14 Pro Max (430px)
[ ] iPad Mini (768px)
[ ] iPad Pro (1024px)
[ ] Desktop HD (1920px)
[ ] Desktop 4K (3840px)
```

**3.1 Touch Targets**

```typescript
// ✅ VERIFICAR: Mínimo 44x44px (iOS) ou 48x48px (Android)
// Atual nos botões de categoria: parece OK
// Ícones do footer: 28px - pode ser pequeno no mobile

// ✅ MELHORAR:
<a 
  href="..." 
  className="p-3" // Aumenta área de toque
>
  <Instagram size={28} />
</a>
```

---

### 4. Jornada do Usuário

#### 📊 Fluxo Atual

```
1. Usuário chega → Hero Section
2. Clica "Ver Cardápio" → Scroll suave para menu
3. Navega por categorias → Sticky nav
4. Vê produtos → Grid
5. Clica em produto → Modal com imagem ampliada
6. Fecha modal → Volta para grid
7. Scroll para footer → Vê localização e redes sociais
```

#### 🟡 Oportunidades

**4.1 Call-to-Actions**

```typescript
// ✅ ADICIONAR: CTAs estratégicos
<div className="sticky bottom-4 left-1/2 -translate-x-1/2 z-50">
  <a 
    href="https://wa.me/5548999999999" 
    className="bg-coffee text-cream px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
  >
    <MessageCircle size={20} />
    Fazer Pedido via WhatsApp
  </a>
</div>
```

**4.2 Informações de Entrega**

```typescript
// ✅ ADICIONAR: Banner informativo
<div className="bg-coffee-light/10 border-l-4 border-coffee-light p-4 mb-8">
  <h3 className="font-display text-coffee mb-2">🚴 Delivery Disponível</h3>
  <p className="text-sm text-gray-600">
    Entregamos em toda Florianópolis • Taxa a partir de R$ 5,00
  </p>
</div>
```

**4.3 Horário de Funcionamento**

```typescript
// ✅ ADICIONAR: No footer
const BusinessHours = () => (
  <div>
    <h4 className="font-display text-cream mb-2">Horário</h4>
    <p className="text-cream/70 text-sm">
      Seg - Sex: 8h às 19h<br />
      Sábado: 9h às 17h<br />
      Domingo: Fechado
    </p>
  </div>
);
```

---

### 5. Acessibilidade UX

#### 🟡 Melhorias Recomendadas

**5.1 Modo Escuro**

O hook `useTheme` existe mas não é usado!

```typescript
// ✅ IMPLEMENTAR:
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-white/20 backdrop-blur rounded-full"
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
```

```css
/* Adicionar no tailwind.config.js */
darkMode: 'class',

/* Adicionar variações dark: */
.dark {
  --cream: #1a1a1a;
  --coffee: #f5f1eb;
}
```

**5.2 Preferências do Usuário**

```typescript
// ✅ ADICIONAR: Respeitar preferências de movimento
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animation = prefersReducedMotion 
  ? {} 
  : { animate: { y: 0, opacity: 1 } };
```

---

### 6. Performance Percebida

#### 🟢 Bom

- ✓ Skeleton screens podem melhorar
- ✓ Transições suaves
- ✓ Lazy loading

#### 🟡 Pode Melhorar

**6.1 Primeira Impressão**

```typescript
// ✅ OTIMIZAR: Critical CSS inline
// Extrair CSS do hero section e colocar inline no <head>

// ✅ ADICIONAR: Preload da imagem do hero
<link rel="preload" as="image" href="/images/hero/calmo-1.jpg" />
```

**6.2 Spinner/Loading Global**

```typescript
// ✅ ADICIONAR: Loading indicator global
const LoadingBar = () => (
  <div className="fixed top-0 left-0 right-0 h-1 bg-coffee-light z-[9999]">
    <div className="h-full bg-coffee animate-pulse" />
  </div>
);
```

---

### 7. Experiência Mobile

#### 🟢 Pontos Fortes

- ✓ Touch gestures funcionam
- ✓ Scroll horizontal em categorias
- ✓ Modal ocupa tela cheia
- ✓ Imagens responsivas

#### 🟡 Melhorias Mobile-First

**7.1 Navegação Móvel**

```typescript
// ✅ CONSIDERAR: Bottom navigation no mobile
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-cream border-t">
  <div className="flex justify-around py-3">
    <a href="#menu">
      <Coffee size={24} />
      <span className="text-xs">Cardápio</span>
    </a>
    <a href="#locations">
      <MapPin size={24} />
      <span className="text-xs">Lojas</span>
    </a>
    <a href="tel:+5548999999999">
      <Phone size={24} />
      <span className="text-xs">Contato</span>
    </a>
  </div>
</nav>
```

**7.2 Gestos**

```typescript
// ✅ ADICIONAR: Swipe para fechar modal
import { useSwipeable } from 'react-swipeable';

const handlers = useSwipeable({
  onSwipedDown: () => onClose(),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
});

<div {...handlers}>
  {/* Modal content */}
</div>
```

---

## 🔧 Configuração e Tooling

### 1. ESLint

#### 🟢 Configurado

```javascript
// eslint.config.js - bem configurado
```

#### 🟡 Sugestões

```bash
# ✅ ADICIONAR: Plugins úteis
npm install -D eslint-plugin-jsx-a11y eslint-plugin-import
```

```javascript
// eslint.config.js
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  // ... config existente
  {
    plugins: {
      'jsx-a11y': jsxA11y,
      'import': importPlugin
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' }
      }]
    }
  }
);
```

---

### 2. Package.json Scripts

#### 🟡 Melhorias

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "check": "tsc -b --noEmit",
    
    // ✅ ADICIONAR:
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\"",
    "type-check": "tsc --noEmit",
    "validate": "npm run type-check && npm run lint && npm run test",
    "clean": "rm -rf dist node_modules/.vite",
    "analyze": "vite-bundle-visualizer"
  }
}
```

---

## 📊 Métricas de Qualidade

### Scores Atuais (Estimados)

| Métrica | Score | Target |
|---------|-------|--------|
| **Code Quality** | 7/10 | 9/10 |
| **TypeScript Usage** | 3/10 | 9/10 |
| **Performance** | 8/10 | 9/10 |
| **Accessibility** | 6/10 | 9/10 |
| **SEO** | 2/10 | 8/10 |
| **Testing** | 0/10 | 8/10 |
| **UX** | 8/10 | 9/10 |
| **Responsiveness** | 8/10 | 9/10 |

---

## 🎯 Plano de Ação Prioritário

### Fase 1: Quick Wins (1-2 dias)

#### Alta Prioridade
1. ✅ Corrigir `index.html` title e meta tags
2. ✅ Remover código morto (`currentImage`, `categoryRefs`)
3. ✅ Limpar dados (`desktop.ini`)
4. ✅ Adicionar validação de produtos
5. ✅ Implementar Skip to Content

#### Scripts para Ajudar
```bash
# 1. Encontrar código morto
npm install -D eslint-plugin-unused-imports

# 2. Formatar código
npm install -D prettier
npx prettier --write "src/**/*.{ts,tsx}"

# 3. Análise de bundle
npm install -D vite-bundle-visualizer
npm run build && npx vite-bundle-visualizer
```

---

### Fase 2: Melhorias Estruturais (3-5 dias)

#### Média Prioridade
1. ✅ Habilitar TypeScript strict mode
2. ✅ Criar camada de tipos centralizada
3. ✅ Implementar testes unitários básicos
4. ✅ Adicionar busca de produtos
5. ✅ Melhorar acessibilidade (ARIA, keyboard nav)
6. ✅ Otimizar imagens (WebP, srcset)

---

### Fase 3: Features Avançadas (1-2 semanas)

#### Baixa Prioridade (Nice to Have)
1. ✅ Modo escuro funcional
2. ✅ PWA (Service Worker, offline)
3. ✅ Analytics (Google Analytics 4)
4. ✅ Sistema de favoritos
5. ✅ Integração com WhatsApp Business API
6. ✅ CMS headless para gerenciar produtos

---

## 📝 Checklist de Implementação

### Imediato
- [ ] Atualizar `index.html` com title e meta tags corretas
- [ ] Remover `currentImage` state não usado
- [ ] Remover `categoryRefs` não usado
- [ ] Remover bloco vazio em `ProductGrid` (linhas 27-29)
- [ ] Limpar `desktop.ini` dos dados
- [ ] Adicionar preload de fontes críticas

### Curto Prazo (Esta Semana)
- [ ] Habilitar TypeScript strict mode
- [ ] Corrigir erros revelados pelo strict mode
- [ ] Criar `/src/types/index.ts`
- [ ] Memoizar `productsByCategory`
- [ ] Usar lodash.throttle ou criar hook de throttle
- [ ] Adicionar ESC key handler no modal
- [ ] Implementar testes para componentes principais
- [ ] Adicionar skeleton loaders

### Médio Prazo (Este Mês)
- [ ] Setup de testes com Vitest
- [ ] Cobertura de testes > 70%
- [ ] Otimizar imagens para WebP
- [ ] Implementar srcset responsivo
- [ ] Adicionar modo escuro
- [ ] Implementar busca de produtos
- [ ] Melhorar SEO com structured data
- [ ] Criar sitemap.xml

### Longo Prazo (Opcional)
- [ ] PWA com service worker
- [ ] Analytics e tracking
- [ ] Sistema de favoritos com localStorage
- [ ] Integração com WhatsApp
- [ ] CMS para gerenciar produtos
- [ ] Integração com pagamento online

---

## 🛠️ Recursos e Ferramentas Recomendadas

### Desenvolvimento
- **Zod** - Validação de dados runtime
- **React Query** - Se adicionar API futura
- **Framer Motion** - Animações avançadas
- **React Hook Form** - Para formulários futuros

### Testes
- **Vitest** - Test runner moderno
- **Testing Library** - Testes de componentes
- **Playwright** - E2E tests
- **MSW** - Mock de APIs

### Performance
- **Lighthouse CI** - Auditorias automáticas
- **Bundle Analyzer** - Análise de bundle
- **ImageOptim** - Otimização de imagens
- **Sharp** - Processamento de imagens

### DevOps
- **Vercel/Netlify** - Deploy fácil
- **GitHub Actions** - CI/CD
- **Sentry** - Error tracking
- **PostHog** - Analytics privacy-first

---

## 💡 Considerações Finais

### Pontos Muito Positivos do Projeto

1. **Código Limpo e Organizado**: Estrutura de pastas lógica
2. **Performance Awareness**: Uso de memo, lazy loading
3. **UI Polida**: Design profissional e consistente
4. **Stack Moderna**: Ferramentas adequadas

### Principais Gaps a Endereçar

1. **TypeScript Subutilizado**: Strict mode desabilitado perde benefícios
2. **Falta de Testes**: Risco para manutenção futura
3. **SEO Básico**: Impacta descoberta orgânica
4. **Algumas Optimizações de Performance**: Imagens não otimizadas

### Recomendação Final

**O projeto tem uma base SÓLIDA e uma identidade visual EXCELENTE.**

Para torná-lo **production-ready de nível empresarial**, sugiro focar em:

1. **TypeScript strict mode** (2-3 horas de trabalho)
2. **SEO básico** (1-2 horas)
3. **Testes unitários** (1 dia)
4. **Limpeza de código** (2-3 horas)

Isso elevará a qualidade técnica de ~6.5/10 para **8.5/10**.

As demais melhorias podem ser implementadas gradualmente conforme necessidade do negócio.

---

## 📞 Próximos Passos Sugeridos

1. **Revisar este documento** com a equipe
2. **Priorizar itens** do plano de ação
3. **Criar issues** no GitHub/Jira
4. **Implementar** em sprints de 1 semana
5. **Monitorar métricas** (Lighthouse, bundle size)

---

**Documento gerado em:** 21/01/2026  
**Revisão:** v1.0  
**Autor:** Senior Frontend Engineer & UX Specialist

Se precisar de clarificações ou assistência na implementação de qualquer item, estou à disposição! 🚀
