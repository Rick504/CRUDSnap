import { Request, Response } from 'express';
import { updateUser, getUserById } from '../../models/userModel';

const updateController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;

    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ msgError: 'Usuário não encontrado' });
    }

    await updateUser({ name, email, password }, id);
    res.status(200).json('Usuário atualizado com sucesso !!');
  } catch (err) {
    console.log('Erro ao tentar atualizar conta.', err);
    res.status(409).json('Erro ao tentar atualizar conta.');
  }
};
export default updateController;
