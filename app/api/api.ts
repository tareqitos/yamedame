const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getResources() {
    console.log("Fetching resources from URL:", API_URL); // Log the URL being used
    try {
        const response = await fetch(`${API_URL}/resources`, {
            // Server-only: API_KEY has no NEXT_PUBLIC_ prefix, so it never reaches the browser bundle
            headers: { 'x-api-key': process.env.API_KEY ?? '' },
        });

        console.log("API Response Status:", response.status); // Log the response status

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Get resources failed! Status: ${response.status}, Body: ${errorText}`);
            return [];
        }

        const result = await response.json();
        console.log("Successfully fetched and parsed resources.");
        return result || [];
    } catch (error) {
        console.error("Failed to fetch resources (catch block):", error);
        return [];
    }
}
