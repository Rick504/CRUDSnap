import express, { Request, Response } from 'express';
import loginController from '../controllers/loginController';

const appRouter = express.Router();

// GET ----------------------------------------------------------------------
appRouter.get('/', async (req: Request, res: Response) => {
  res.json({ msg: 'testando rota publica sem a necessidade de token' });
});

//POST ----------------------------------------------------------------------
appRouter.post('/login', loginController);

export default appRouter;
