import { Request, Response } from 'express';
import { readUser } from '../../models/userModel';

const readController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await readUser(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json('Erro ao tentar encontrar Usuário.');
  }
};
export default readController;
