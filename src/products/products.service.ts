import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfacess/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  fetch() {
    return this.products;
  }

  create(product: CreateProductDto): Product {
    this.products.push(product);
    return product;
  }
}
