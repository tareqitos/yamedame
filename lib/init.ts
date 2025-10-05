// lib/initDB.ts
import { getConnection } from './db'
import * as dataJSON from '../public/data.json';

// const DB_NAME = process.env.DB_NAME;
const DB_NAME = process.env.DB_NAME

const TABLES_SQL = `
CREATE TABLE IF NOT EXISTS resources (
name VARCHAR(50) NOT NULL,
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(140) NOT NULL,
  link VARCHAR(300) NOT NULL,
  category VARCHAR(50) NOT NULL,
  platform VARCHAR(50),
  slug VARCHAR(50) NOT NULL,
  path VARCHAR(50) NOT NULL,
  image VARCHAR(300)
);
`;

export async function initDatabase() {
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

  // Create tables if they don’t exist
  await dbConn.query(TABLES_SQL);

  const data = Array.isArray(dataJSON) ? dataJSON : (dataJSON as any).default || [];

  // Seed all resources from data.json
  for (const resource of data) {
    const SEED_SQL = `
      INSERT INTO resources (name, description, link, category, platform, slug, path, image)
      SELECT ?, ?, ?, ?, ?, ?, ?, ?
      WHERE NOT EXISTS (
        SELECT 1 FROM resources WHERE name = ?
      );
    `;
    
    await dbConn.query(SEED_SQL, [
      resource.name,
      resource.description,
      resource.link,
      resource.category,
      resource.platform,
      resource.slug,
      resource.path,
      resource.image,
      resource.name
    ]);
  }

  await dbConn.end();
}
