import { Router } from 'express';
import LoginController from '../controllers/userController';
import loginMiddleware from '../middlewares/loginMiddleware';

const loginController = new LoginController();

const route = Router();

route.use(loginMiddleware);

route.post('/', loginController.findOne);

export default route;
