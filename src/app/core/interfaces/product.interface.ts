import { ProductOptions } from './product-options.interface';

export interface Product {
  isExtra?: boolean;
  name: string;
  description: string;
  src: string;
  options: ProductOptions[];
}
