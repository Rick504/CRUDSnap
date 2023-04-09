import { Request, Response } from 'express';
import { deleteUser } from '../../models/userModel';

const deleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    res.status(204).json('Usuário deletado com sucesso !!');
  } catch (err) {
    res.status(404).json('Erro ao tentar deletar conta.');
  }
};
export default deleteController;
