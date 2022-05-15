import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orders.service';

export default class ProductController {
  public service = new OrderService();

  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const orders = await this.service.getAll();
    return res.status(StatusCodes.OK).json(orders);
  };
}