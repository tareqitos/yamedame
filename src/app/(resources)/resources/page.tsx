import '@/styles/resources.scss'
import { getResources } from "@/app/api/api";
import { LoadResources } from "@/app/components/resources/loadResources";

type Resource = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platform: string
}

export default async function Resources() {
    let resources: { [key: string]: Resource[] } = {};

    try {
        const { response, result } = await getResources(`/api/resources`)
        if (response.ok) {
            resources = await result
        }
    } catch (error) {
        console.error("Error fetching resources:", error);
        // Provide fallback data or UI
        resources = {}; // Fallback to empty data or provide some default data
    }

    return (
        <>
            <LoadResources resources={resources}/>
        </>
    )
}