const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getResources() {
    try {
        const response = await fetch(`${API_URL}/resources`);
        if (!response.ok) {
            console.error(`Get resources failed! : ${response.status}`);
            return [];
        }
        const result = await response.json();
        return result || [];
    } catch (error) {
        console.error("Failed to fetch resources: ", error);
        return [];
    }
}