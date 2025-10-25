import { cache } from 'react'

export const getResources = cache(async () => {
    const API_URL = process.env.API_URL || 'http://localhost:3000'

    try {
        const response = await fetch(`${API_URL}/api`)
        const result = await response.json()
        return result
    } catch (error) {
        console.error("Failed to fetch resources: ", error)
        return null
    }
})