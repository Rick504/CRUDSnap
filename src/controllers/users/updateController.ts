import { Request, Response } from 'express';
import { updateUser } from '../../models/userModel';

const updateController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  await updateUser({ name, email, password }, id);
  res.json('Usuário atualizado com sucesso !!');
};
export default updateController;
