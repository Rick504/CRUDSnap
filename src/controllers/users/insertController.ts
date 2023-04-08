import { Request, Response } from 'express';
import { setToken } from '../../security/token';
import { insertUser } from '../../models/userModel';

const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userDd = await insertUser({ name, email, password });

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
