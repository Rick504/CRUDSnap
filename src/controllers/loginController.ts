import { Request, Response } from 'express';
import { setToken } from '../security/token';
import { authUserLogin, getUserByEmail } from '../models/userModel';
import bcrypt from 'bcrypt';

const loginController = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  const textPassword = password;
  const hashPasswordDb = await getUserByEmail(email);

  const isValidPassword = bcrypt.compareSync(
    textPassword,
    hashPasswordDb.password
  );

  if (isValidPassword) {
    const user = {
      email: req.body.email,
      password: hashPasswordDb.password,
    };

    const userValidaty = await authUserLogin(user);

    if (!userValidaty) {
      return res.status(401).json({ msgError: 'access denied.' });
    }

    const { email } = user;
    const token = await setToken(user);

    res.json({ email, auth: true, token });
  } else {
    res.json('Usuario e senha incorretos.');
  }
};
export default loginController;
