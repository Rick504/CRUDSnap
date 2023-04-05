import express, { Request, Response } from 'express';
import deleteController from '../controllers/users/deleteController';
import registerController from '../controllers/users/registerController';
import updateController from '../controllers/users/updateController';
import { getUsers } from '../models/userModel';

const userRouter = express.Router();

// TESTE
userRouter.get('/users', async (req: Request, res: Response) => {
  const users = await getUsers();
  return res.send(users);
});

userRouter.post('/register', registerController);
userRouter.put('/update/user/:id', updateController);
userRouter.delete('/delete/user/:id', deleteController);

export default userRouter;
