import { AddProductDto } from '../dto/add-product.dto';
import { MessageResponse } from '../dto/message-response.dto';
import { Product } from '../models/product.model';

class ProductService {
  private products: Product[];

  constructor() {
    this.products = [];
  }
  // Generate a unique ID for each new product
  private _generateProductId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  public async addProduct(product: AddProductDto): Promise<MessageResponse> {
    try {
      const newProduct: Product = {
        id: this._generateProductId(),
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.products.push(newProduct);
      return { message: 'Product Created Successfully', statusCode: 201 };
    } catch (error) {
      throw error;
    }
  }

  public async updateProduct(
    id: string,
    product: AddProductDto,
  ): Promise<MessageResponse> {
    try {
      const productIndex = this.products.findIndex(
        product => product.id === id,
      );
      if (productIndex === -1) {
        return { message: 'Product not found', statusCode: 404 };
      }
      const updatedProduct: Product = {
        ...this.products[productIndex],
        ...product,
        updatedAt: new Date(),
      };
      this.products[productIndex] = updatedProduct;
      return { message: 'Updated Successfully', statusCode: 200 };
    } catch (error) {
      throw error;
    }
  }

  public async deleteProduct(id: string): Promise<MessageResponse> {
    try {
      this.products = this.products.filter(product => product.id !== id);
      return { message: 'Deleted Successfully', statusCode: 204 };
    } catch (error) {
      throw error;
    }
  }

  public async getProductbyId(id: string): Promise<Product | MessageResponse> {
    try {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        return { message: 'Product not found', statusCode: 404 };
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  public async listProduct(category: string): Promise<Product[]> {
    try {
      let filteredProducts: Product[] = this.products;
      if (category) {
        filteredProducts = this.products.filter(product =>
          product.category.toLowerCase().startsWith(category.toLowerCase()),
        );
      }
      return filteredProducts;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
