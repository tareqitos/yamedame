import type { NextApiRequest, NextApiResponse } from 'next';
import { initDatabase } from '../../lib/init';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await initDatabase(); // Ensure DB and tables exist
  res.status(200).json({ message: 'DB is ready!', });
}
