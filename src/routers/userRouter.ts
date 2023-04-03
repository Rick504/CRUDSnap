import express, { Request, Response } from 'express';
import { getUsers, insertUser } from '../models/userModel';

const userRouter = express.Router();

userRouter.get('/users', async (req: Request, res: Response) => {
  const users = await getUsers();
  return res.send(users);
});

userRouter.post('/insert/user', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await insertUser({ name, email, password });
  res.send(user);
});

export default userRouter;
