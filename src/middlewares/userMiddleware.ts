import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/users.interface';

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

function validateClasse(classe: string) {
  if (!classe) {
    const message = '"classe" is required';
    return ({ status: StatusCodes.BAD_REQUEST, message });
  }

  if (typeof classe !== 'string') {
    const message = '"classe" must be a string';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }

  if (classe.length <= 2) {
    const message = '"classe" length must be at least 3 characters long';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }
}

function validateLevel(level: number) {
  if (level === undefined) {
    const message = '"level" is required';
    return ({ status: StatusCodes.BAD_REQUEST, message });
  }

  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return ({ status: StatusCodes.UNPROCESSABLE_ENTITY, message });
  }

  if (level < 1 || level === null) {
    const message = '"level" must be greater than or equal to 1';
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
  const { username, classe, level, password } = req.body as IUser;

  let error = validateUsername(username);

  if (error) return res.status(error.status).json({ message: error.message });

  error = validateClasse(classe);

  if (error) return res.status(error.status).json({ message: error.message });

  error = validateLevel(level);

  if (error) return res.status(error.status).json({ message: error.message });

  error = validatePassword(password);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}
