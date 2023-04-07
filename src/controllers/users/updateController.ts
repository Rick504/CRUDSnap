import { Request, Response } from 'express';
import { updateUser, getUserById } from '../../models/userModel';

const updateController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({ msgError: 'Usuário não encontrado' });
  }

  await updateUser({ name, email, password }, id);
  res.json('Usuário atualizado com sucesso !!');
};
export default updateController;
