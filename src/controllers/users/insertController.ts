import { Request, Response } from 'express';
import { setToken } from '../../security/token';
import { insertUser } from '../../models/userModel';
import { IUser } from '../../interfaces/user';

const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user: IUser = {
      name,
      email,
      password,
    };
    const userDd = await insertUser(user);

    const userDataJWT = {
      id: userDd.id,
      name: userDd.name,
      email: userDd.email,
    };

    const token = await setToken(userDataJWT);

    res.json({ email: email, auth: true, token });
  } catch (err) {
    res.json('Erro ao tentar cadastrar usuário.');
  }
};
export default registerController;
