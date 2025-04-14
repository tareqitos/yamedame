import '@/styles/resources.scss'
import { getResources } from "@/app/api/api";
import { LoadGames } from '@/app/components/resources/loadGames';


type Games = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platforms: string[]
}

export default async function Applications() {

    let apps: { [key: string]: Games[] } = {};

    try {
        const { response, result } = await getResources('/api/games')
        if (response.ok) {
            apps = await result
        }

    } catch (error) {
        console.error("Error fetching games:", error);
        // Provide fallback data or UI
        apps = {}; // Fallback to empty data or provide some default data
    }

    return (
        <>
            <LoadGames games={apps} />
        </>
    )
}