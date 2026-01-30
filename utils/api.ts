import { cache } from 'react'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getResources = cache(async () => {

    try {
        const response = await fetch(`${API_URL}/resources`)

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