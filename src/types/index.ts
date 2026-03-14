export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
  imageDetail?: string;
  /** Preço em centavos (ex: 1290 = R$12,90). undefined = preço não definido. */
  price?: number;
  description?: string;
}

export type Category = string;
