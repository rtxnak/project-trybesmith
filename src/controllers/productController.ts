import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const { name, amount } = req.body; 
    const product = await this.service.create(name, amount);
    return res.status(StatusCodes.CREATED).json(product);
  };
}