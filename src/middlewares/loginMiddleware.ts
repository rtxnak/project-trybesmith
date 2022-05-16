import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Ilogin from '../interfaces/login.interface';

function validateUsername(username: string) {
  if (!username) {
    const message = '"username" is required';
    return ({ status: StatusCodes.BAD_REQUEST, message });
  }

  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }

  if (username.length <= 2) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }
}

function validatePassword(password: string) {
  if (!password) {
    const message = '"password" is required';
    return ({ status: StatusCodes.BAD_REQUEST, message });
  }

  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }

  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as Ilogin;

  let error = validateUsername(username);

  if (error) return res.status(error.status).json({ message: error.message });

  error = validatePassword(password);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}
