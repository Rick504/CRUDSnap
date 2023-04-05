import express, { Request, Response } from 'express';
import {
  deleteUser,
  getUsers,
  insertUser,
  updateUser,
} from '../models/userModel';

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

userRouter.put('/update/user/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  await updateUser({ name, email, password }, id);
  res.send('Usuário atualizado com sucesso !!');
});

userRouter.delete('/delete/user/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUser(id);
  res.send('Usuário deletado com sucesso !!');
});

export default userRouter;
