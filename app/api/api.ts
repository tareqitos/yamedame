const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getResources() {
    const response = await fetch(`${API_URL}/resources`);
    if (response.status !== 200) {
        return { response, result: null }
    }
    const result = await response.json();
    return result || []
}