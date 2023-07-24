import express from 'express';
import ProductController from '../controllers/products.controller';

const router = express.Router();
const productController = new ProductController();

router.post('/', (req, res) => {
  productController.addProduct(req, res);
});

router.put('/:id', (req, res) => {
  productController.updateProduct(req, res);
});

router.delete('/:id', (req, res) => {
  productController.deleteProduct(req, res);
});

router.get('/:id', (req, res) => {
  productController.getProductbyId(req, res);
});

router.get('/', (req, res) => {
  productController.listProduct(req, res);
});

export default router;
