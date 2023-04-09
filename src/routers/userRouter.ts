import express, { Request, Response } from 'express';
import deleteController from '../controllers/users/deleteController';
import registerController from '../controllers/users/insertController';
import updateController from '../controllers/users/updateController';
import { getUsers } from '../models/userModel';
import { verifyToken } from '../middlewares/verifyToken';

const userRouter = express.Router();

// TESTE
userRouter.get('/users', async (req: Request, res: Response) => {
  const users = await getUsers();
  return res.json(users);
});

userRouter.post('/register', registerController);
userRouter.put('/update/user/:id', verifyToken, updateController);
userRouter.delete('/delete/user/:id', verifyToken, deleteController);

export default userRouter;
