import { getResources } from "@/app/api/api";
import ResourcesList from "@/components/resources";

import { Item, MainCardProps } from "@/types/types";
import { getCardByPath } from "@/utils/constants";
import { groupByCategory } from "@/utils/helpers";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;
    const card = getCardByPath(category) as MainCardProps;

    let resources: { [key: string]: Item[] } = {};

    const data = await getResources();
    resources = groupByCategory(data.filter((data: { path: string }) => data.path === category));
    // try {

    // } catch (error) {
    //     console.error("Error fetching resources:", error);
    //     resources = {};
    // }


    return (
        <>
            <ResourcesList
                resources={resources}
                category={category}
            />
        </>
    )
}
