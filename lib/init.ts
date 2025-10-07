// lib/initDB.ts
import { getConnection } from './db'
import * as dataJSON from '../public/data.json';
import { readFileSync } from 'fs';
import { join } from 'path';

// const DB_NAME = process.env.DB_NAME;
const DB_NAME = process.env.DB_NAME || 'yamedame';
let isInitialized = false;

export async function initDatabase() {
  if (isInitialized) {
    console.log('Database already initialized, skipping...');
    return;
  }

  // Connect to MySQL server without specifying a database
  const conn = await getConnection();

  // Check if DB exists
  const [rows] = await conn.query(`SHOW DATABASES LIKE '${DB_NAME}'`);
  if ((rows as any[]).length === 0) {
    console.log(`Database "${DB_NAME}" not found. Creating...`);
    await conn.query(`CREATE DATABASE \`${DB_NAME}\``);
  } else {
    console.log(`Database "${DB_NAME}" already exists.`);
  }

  await conn.end();

  // Connect to the new/target DB
  const dbConn = await getConnection(DB_NAME);

  // Check if tables already exist
  const [tables] = await dbConn.query(`SHOW TABLES LIKE 'resources'`);
  if ((tables as any[]).length > 0) {
    console.log('Tables already exist, skipping initialization...');
    await dbConn.end();
    isInitialized = true;
    return;
  }

  // Read and execute the seed SQL file instead of creating tables separately
  const SEED_SQL = readFileSync(join(process.cwd(), 'public/database.sql'), 'utf-8');

  // Split the SQL file into individual statements and execute them
  const statements = SEED_SQL
    .split(';')
    .map(stmt => stmt.trim())
    .filter(stmt => stmt.length > 0 && !stmt.startsWith('/*') && !stmt.startsWith('--'));

  for (const statement of statements) {
    if (statement.trim()) {
      await dbConn.query(statement);
    }
  }


  await dbConn.end();
  isInitialized = true;
  console.log('Database initialization completed');
}
