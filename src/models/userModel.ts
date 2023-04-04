import db from '../../config/config_pg';
import { IUser } from '../interfaces/user';

export function getUsers(): Promise<any> {
  return db
    .query('SELECT * FROM users')
    .then((res) => res.rows)
    .catch((err) => {
      console.error('Erro ao buscar usuários:', err);
      throw err;
    });
}

export function insertUser(user: IUser) {
  const { name, email, password } = user;
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [name, email, password];

  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.error('Erro ao inserir usuário:', err);
      throw err;
    });
}

export function updateUser(user: IUser, id: string) {
  const { name, email, password } = user;
  const query = `
    UPDATE users
    SET name = $1,
        email = $2,
        password = $3
    WHERE id = $4;
  `;
  const values = [name, email, password, id];

  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.error('Erro ao atualizar usuário:', err);
      throw err;
    });
}
