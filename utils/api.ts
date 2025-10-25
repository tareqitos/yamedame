import { cache } from 'react'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export const getResources = cache(async () => {

    try {
        const response = await fetch(`${API_URL}/resources`, {
            headers: {
                'x-api-key': process.env.NEXT_PUBLIC_API_KEY!
            },
            cache: 'no-store',
            next: { revalidate: 0 },
        })

        if (!response.ok) {
            console.error(`Get resources failed! : ${response.status}`)
        }

        const result = await response.json()
        return Array.isArray(result) ? result : [];
    } catch (error) {
        console.error("Failed to fetch resources: ", error)
        return [];
    }
})