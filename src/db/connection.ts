import { Pool } from 'pg';

let pool: Pool;

export const connect = (config: { host: string; database: string; user: string; password: string; port: number }) => {
  pool = new Pool(config);
};

export const query = async (text: string, params?: any[]) => {
  if (!pool) {
    throw new Error('Database connection not initialized. Call connect() first.');
  }
  return pool.query(text, params);
};
