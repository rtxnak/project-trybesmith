import { Router } from 'express';
import UserController from '../controllers/userController';
import userMiddleware from '../middlewares/userMiddleware';

const userController = new UserController();

const route = Router();

route.use(userMiddleware);

route.post('/', userController.create);

export default route;
