import { Request, Response } from 'express';
import { setToken } from '../security/auth';

const loginController = async (req: Request, res: Response) => {
  const user = req.body;
  const { email } = user;
  const token = await setToken(user);

  res.json({ email, auth: true, token });
};
export default loginController;
