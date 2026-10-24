"use server";

import { headers } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Runs on the Next.js server so the API key stays secret
export async function submitFeedback(category: string, name: string, url: string) {
    // Forward the visitor IP so the API can rate-limit per visitor instead of per Vercel server
    const clientIp = (await headers()).get('x-forwarded-for')?.split(',')[0].trim() ?? '';

    try {
        const response = await fetch(`${API_URL}/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.API_KEY ?? '',
                'x-client-ip': clientIp,
            },
            body: JSON.stringify({ category, name, url }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Submit feedback failed! Status: ${response.status}, Body: ${errorText}`);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Failed to submit feedback (catch block):", error);
        return false;
    }
}
