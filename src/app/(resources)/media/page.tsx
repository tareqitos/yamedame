import '@/styles/resources.scss'
import {getResources} from "@/app/api/api";
import { LoadMedia } from "@/app/components/resources/loadMedia";

type Media = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    platform: string
    image: string,
    slug: string,
}

export default async function Media() {

    let media: { [key: string]: Media[] } = {};

    try {
        const {response, result} = await getResources('/api/media')
        if (response.ok) {
            media = await result
        }
    } catch (error) {
        console.error("Error fetching media:", error);
        // Provide fallback data or UI
        media = {}; // Fallback to empty data or provide some default data
    }

    return (
        <>
            <LoadMedia media={media}  />
        </>
    )
}