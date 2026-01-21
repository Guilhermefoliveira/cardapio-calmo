export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
  imageDetail?: string;
  price?: string;
  description?: string;
}

export type Category = string;
