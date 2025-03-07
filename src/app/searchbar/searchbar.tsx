import { getResources } from "../api/api";
import { Search } from "../components/search";

export default async function Searchbar() {

    interface Resource {
        uuid: string,
        name: string,
        description: string,
        link: string,
        category: string,
        slug: string,
        path: string
    }

    let resources: Resource[] = [];
    try {
        const { response, result } = await getResources(`/api/all`)
        if (response.ok) {
            resources = Object.values(result).flat() as Resource[];
        }
    } catch (error) {
        console.error("Error fetching resources:", error);
        // Provide fallback data or UI
        resources = []; // Fallback to empty data or provide some default data
    }


    return (
        <>
            <Search resources={resources} />
        </>
    )
}