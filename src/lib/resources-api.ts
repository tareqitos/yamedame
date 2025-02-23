const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getResources(path: string) {
    const response = await fetch(`${API_URL}${path}`);
    if (response.status !== 200) {
        return {response, result: null}
    }
    const result = await response.json();
    return {response, result}
}

export default getResources;