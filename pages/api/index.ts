import { getConnection } from '@/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const queryResources = 'SELECT * FROM resources'; // Sample query to test DB connection
    const conn = await getConnection(process.env.DB_NAME);
    try {
        const response = await conn.query(queryResources);
        const result = response[0] as any;

        const parsedResult = Array.isArray(result) && result.map(item => {
            if (item.platform) {
                item.platform = JSON.parse(item.platform.replace(/'/g, '"'));
            }
            return item;
        })

        return res.status(200).json(parsedResult);
    } catch (error) {
        console.error('Error fetching resources:', error);
        res.status(500).json({ message: 'Failed to fetch resources', error: error });
    } finally {
        await conn.end();
    }
}