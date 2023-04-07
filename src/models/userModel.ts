import db from '../../config/config_pg';
import { IUser, IAuth } from '../interfaces/user';
import { v4 as uuidv4 } from 'uuid';

export function authUserLogin(user: IAuth) {
  const { email, password } = user;
  const query = `SELECT * FROM users WHERE email = $1 AND password = $2;`;
  const values = [email, password];

  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => {
      throw new Error(`Erro ao autenticar usuário: ${err.message}`);
    });
}

export function getUserById(id: string) {
  const query = `SELECT * FROM users WHERE id = $1;`;
  const values = [id];

  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.error('Erro ao buscar usuário por ID:', err);
      throw err;
    });
}

export function getUsers(): Promise<Object[]> {
  return db
    .query('SELECT * FROM users')
    .then((res) => res.rows)
    .catch((err) => {
      console.error('Erro ao buscar usuários:', err);
      throw err;
    });
}

export function insertUser(user: IUser) {
  const id = uuidv4();
  const { name, email, password } = user;
  const query = `
    INSERT INTO users (id, name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [id, name, email, password];

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

export function deleteUser(id: string) {
  const query = `
    DELETE FROM users
    WHERE id = $1;
  `;
  const values = [id];

  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.error('Erro ao deletar usuário:', err);
      throw err;
    });
}
