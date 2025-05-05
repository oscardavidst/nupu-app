import { Product } from './product.interface';

export interface Category {
  name: string;
  description: string;
  src: string;
  products: Product[];
}
