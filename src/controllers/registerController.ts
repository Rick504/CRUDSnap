import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { insertUser } from '../models/userModel';

const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userDd = await insertUser({ name, email, password });

  const userDataJWT = {
    id: userDd.id,
    name: userDd.name,
    email: userDd.email,
  };

  // console.log(userDataJWT);

  const jwtSecret = process.env.JWT_SECRET as string;
  jwt.sign({ userDataJWT }, jwtSecret, { expiresIn: '30m' }, (err, token) => {
    if (err) {
      res.status(500).send('Erro ao gerar token.');
      return;
    }

    res.json({ email: email, auth: true, token });
  });
};
export default registerController;
