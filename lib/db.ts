// lib/db.ts
import mysql from 'mysql2/promise';
import 'dotenv/config';

export const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '3306'),
  database: process.env.DB_NAME,
};

async function getConnection(dbName?: string) {
  return mysql.createConnection({
    ...connectionConfig,
    database: dbName,
  });
}

export {getConnection}