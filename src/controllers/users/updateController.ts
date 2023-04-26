import { Request, Response } from 'express';
import { updateUser, getUserById } from '../../models/userModel';

const updateController = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    const { name, email, password } = req.body;

    if (id) {
      const user = await getUserById(id);
      if (!user) {
        return res.status(404).json({ msgError: 'Usuário não encontrado' });
      }
      await updateUser({ name, email, password }, id);
      return res.status(200).json('Usuário atualizado com sucesso !!');
    }
    return res.status(404).json('A rota necessita de id');
  } catch (err) {
    console.log('Erro ao tentar atualizar conta.', err);
    res.status(409).json('Erro ao tentar atualizar conta.');
  }
};
export default updateController;
