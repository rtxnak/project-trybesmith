import { Router } from 'express';
import ProductController from '../controllers/productController';
import productMiddleware from '../middlewares/productMiddleware';

const productController = new ProductController();

const route = Router();

route.get('/', productController.getAll);

route.use(productMiddleware);

route.post('/', productController.create);

export default route;
