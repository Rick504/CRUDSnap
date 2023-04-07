import { Request, Response } from 'express';
import { setToken } from '../security/token';
import { authUserLogin } from '../models/userModel';

const loginController = async (req: Request, res: Response) => {
  const user = req.body;
  const authValidaty = await authUserLogin(user);

  if (!authValidaty) {
    return res.status(401).json({ msgError: 'access denied.' });
  }
  const { email } = user;
  const token = await setToken(user);

  res.json({ email, auth: true, token });
};
export default loginController;
