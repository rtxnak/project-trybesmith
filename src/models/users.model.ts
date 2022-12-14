import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/users.interface';
import ILogin from '../interfaces/login.interface';

export default class UsersModel {
  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
    return { id: user.insertId, username, classe, level, password };
  };

  public findOne = async (
    username: string,
    password: string,
  ) => {
    const [row] = await connection.execute(
      'SELECT * FROM Trybesmith.Users  WHERE username = ? and password = ? ',
      [username, password],
    );
    const user = row as ILogin[];
    return user[0];
  };
}