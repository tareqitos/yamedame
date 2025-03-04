const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Get resources

async function getResources(path: string) {
    const response = await fetch(`${API_URL}${path}`);
    if (response.status !== 200) {
        return { response, result: null }
    }
    const result = await response.json();
    return { response, result }
}

// Add resource to list

async function addAndRemoveFavorite(uuid: string, userId: number, type: string) {
    const response = await fetch(`${API_URL}/favorite/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid, userId, type }),
        credentials: "include",
    })

    const result = await response.json();
    return { response, result }
}

// Get favorite list 

async function getFavorite() {
    const response = await fetch(`${API_URL}/favorite/all`, {
        method: "GET",
        credentials: "include",
    })

    if (response.status !== 200) {
        return { response, result: null }
    }
    const result = await response.json();
    return { response, result }
};

export { getResources, addAndRemoveFavorite, getFavorite };