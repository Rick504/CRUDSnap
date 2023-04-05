import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const loginController = (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET as string;
  const userDataJWT = req.body;
  jwt.sign({ userDataJWT }, jwtSecret, { expiresIn: '30m' }, (err, token) => {
    if (err) {
      res.status(500).send('Erro ao gerar token.');
      return;
    }

    res.json({ email: userDataJWT.email, auth: true, token });
  });
};
export default loginController;
