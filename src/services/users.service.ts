import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/users.model';
import IUser from '../interfaces/users.interface';
import generateToken from '../helpers/generateToken';

export default class ProductService {
  public model = new UserModel();

  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const user = await this.model.create(username, classe, level, password);
    return user;
  };

  public findOne = async (
    username: string,
    password: string,
  ) => {
    const user = await this.model.findOne(username, password);

    if (!user) {
      const message = 'Username or password invalid';
      return ({ status: StatusCodes.UNAUTHORIZED, message });
    } 
    const { token } = generateToken;
    const login = jwt.sign({ data: user }, token);
    return login;
  };
}