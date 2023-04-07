import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crudsnapdb',
  password: '123',
  port: 5432,
});

export default pool;
