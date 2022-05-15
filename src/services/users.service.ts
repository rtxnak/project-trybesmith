import UserModel from '../models/users.model';
import IUser from '../interfaces/users.interface';

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
}
