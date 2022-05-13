import ProductModel from '../models/products.model';
import IProduct from '../interfaces/products.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };
}
