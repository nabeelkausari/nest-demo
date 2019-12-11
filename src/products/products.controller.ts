import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfacess/product.interface';

@Controller('products')
export class ProductsController {

  constructor(
    private productsService: ProductsService
  ) {
  }

  @Get()
  findAll() {
    return this.productsService.fetch();
  }

  @Post()
  async create(@Body() product: CreateProductDto): Promise<Product[]> {
    return this.productsService.create(product)
  }
}
