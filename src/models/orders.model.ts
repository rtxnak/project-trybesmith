import connection from './connection';
import IOrder from '../interfaces/orders.interface';

export default class ProductModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return orders as IOrder[];
  };
}