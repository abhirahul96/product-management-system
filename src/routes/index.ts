import express from 'express';
import productRoutes from './product.routes';

const router = express.Router();

router.use('/product', productRoutes);

export default router;
