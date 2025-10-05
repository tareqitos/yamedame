// lib/db.ts
import mysql from 'mysql2/promise';

export const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  multipleStatements: true, // Important if running multiple SQLs at once
};

async function getConnection(dbName?: string) {
  return mysql.createConnection({
    ...connectionConfig,
    database: dbName,
  });
}

export {getConnection}