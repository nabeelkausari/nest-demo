import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
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
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Product> {
    return this.productsService.findOne(params.id)
  }

  @Post()
  async create(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product)
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Product[]> {
    return this.productsService.delete(params.id);
  }

}
