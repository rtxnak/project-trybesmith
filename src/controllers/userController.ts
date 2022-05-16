import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/users.service';
import generateToken from '../helpers/generateToken';

export default class ProductController {
  public service = new UserService();
  
  public create = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const { username, classe, level, password } = req.body; 
    await this.service.create(username, classe, level, password);

    const { token } = generateToken;
    
    return res.status(StatusCodes.CREATED).json({ token });
  };

  public findOne = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const { username, password } = req.body; 
    const token = await this.service.findOne(username, password);
    if (typeof (token) !== 'string') {
      const { message } = token;
      return res.status(token.status).json({ message });
    }
    return res.status(StatusCodes.OK).json({ token });  
  };
}