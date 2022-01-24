import { Injectable } from '@nestjs/common';
import { Product } from './product';
import * as fs from 'fs';
import { PagedProductsDto } from './pagedProducts.dto';
const ITMES_PER_PAGE = 5;
@Injectable()
export class ProductsService {
  async getProducts(page = 1) {
    const skip = (page - 1) * ITMES_PER_PAGE;
    let jsonStr: string = null;
    try {
      jsonStr = await fs.readFileSync('products.json', 'utf8');
    } catch (error) {
      console.log(`Error in reading user json file - ${error.message}`);
    }

    const allProduct: [Product] = JSON.parse(jsonStr);
    const totalPages: number = Math.ceil(allProduct.length / ITMES_PER_PAGE);
    const products = allProduct.slice(skip, skip + ITMES_PER_PAGE);

    return { page, products, totalPages } as PagedProductsDto;
  }
}
