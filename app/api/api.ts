const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getResources() {
    console.log("Fetching resources from URL:", API_URL); // Log the URL being used
    try {
        const response = await fetch(`${API_URL}/resources`);

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

export async function submitFeedback(category: string, name: string, url: string) {
    try {
        const response = await fetch(`${API_URL}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category, name, url }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Submit feedback failed! Status: ${response.status}, Body: ${errorText}`);
            return false;
        }

        console.log("Feedback submitted successfully.");
        return true;
    } catch (error) {
        console.error("Failed to submit feedback (catch block):", error);
        return false;
    }
}