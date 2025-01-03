import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductRequest } from './dto/create-product.request';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() request: CreateProductRequest) {
    try {
      return await this.productService.createProduct(request);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

}
