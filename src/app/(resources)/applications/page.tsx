import '@/styles/resources.scss'
import { getResources } from "@/app/api/api";
import { LoadApplications } from "@/app/components/resources/loadApplications";


type Applications = {
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

    let apps: { [key: string]: Applications[] } = {};

    try {
        const { response, result } = await getResources('/api/applications')
        if (response.ok) {
            apps = await result
        }

    } catch (error) {
        console.error("Error fetching applications:", error);
        // Provide fallback data or UI
        apps = {}; // Fallback to empty data or provide some default data
    }

    return (
        <>
            <LoadApplications apps={apps} />
        </>
    )
}