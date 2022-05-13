import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IProduct from '../interfaces/products.interface';

function validateName(name: string) {
  if (!name) {
    const message = '"name" is required';
    return ({ status: StatusCodes.BAD_REQUEST, message });
  }

  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }

  if (name.length <= 2) {
    const message = '"name" length must be at least 3 characters long';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }
}

function validateAmount(amount: string) {
  if (!amount) {
    const message = '"amount" is required';
    return ({ status: StatusCodes.BAD_REQUEST, message });
  } 
  
  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  } 
  
  if (amount.length <= 2) {
    const message = '"amount" length must be at least 3 characters long';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as IProduct;

  let error = validateName(name);

  if (error) return res.status(error.status).json({ message: error.message });

  error = validateAmount(amount);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}
