import { Request, Response } from 'express';
import { deleteUser } from '../../models/userModel';

const deleteController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUser(id);
  res.send('Usuário deletado com sucesso !!');
};
export default deleteController;
