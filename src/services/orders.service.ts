import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';
import IOrder from '../interfaces/orders.interface';

export default class ProductService {
  public model = new OrderModel();

  public productModel = new ProductModel();

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();
    const products = await this.productModel.getAll();

    const result = orders.map((order) => ({
      ...order,
      productsIds: products.filter((product) => product.orderId === order.id)
        .map((productArr) => productArr.id),
    }));
    return result;
  };
}
