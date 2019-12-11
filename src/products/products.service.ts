import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfacess/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find(p => p.id === id);
  }

  create(product: CreateProductDto): Product {
    this.products.push(product);
    return product;
  }

  delete(id: string): Product[] {
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
    return this.products;
  }
}
