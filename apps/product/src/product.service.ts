import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from './dto/create-product.request';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async createProduct(request: CreateProductRequest) {
    try {
      return await this.productRepository.create(request);
    } catch (error) {
      throw new Error(`Failed to create product: ${error.message}`);
    }
  }
  
}