import { Product } from './product';
export class PagedProductsDto {
  page: number;
  totalPages: number;
  products: [Product];
}
