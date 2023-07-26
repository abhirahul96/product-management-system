import { Request, Response } from 'express';
import ProductService from '../services/product.service';

import { AddProductDto } from '../dto/add-product.dto';
import productValidation from '../validators/product.validator';

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }
  public async addProduct(req: Request, res: Response) {
    const product = req.body as AddProductDto;
    try {
      const response = await this.productService.addProduct(product);
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      // Handle any errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }

  public async bulkInsert(req: Request, res: Response) {
    const product = req.body.products as AddProductDto[];
    try {
      const validation = await productValidation(product);
      if (validation) {
        return res.status(400).json({ error: validation });
      }
      const response = await this.productService.bulkInsert(product);
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      // Handle any errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }

  public async updateProduct(req: Request, res: Response) {
    const product = req.body as AddProductDto;
    const id = req.params.id as string;
    try {
      const response = await this.productService.updateProduct(id, product);
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      // Handle any errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteProduct(req: Request, res: Response) {
    const id = req.params.id as string;
    try {
      const response = await this.productService.deleteProduct(id);
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      // Handle any errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }

  public async getProductbyId(req: Request, res: Response) {
    const id = req.params.id as string;
    try {
      const response = await this.productService.getProductbyId(id);
      res.status(200).json(response);
    } catch (error: any) {
      // Handle any errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }

  public async listProduct(req: Request, res: Response) {
    const category = req.query.category as string;
    try {
      const response = await this.productService.listProduct(category);
      res.status(200).json(response);
    } catch (error: any) {
      // Handle any errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }
}

export default ProductController;
