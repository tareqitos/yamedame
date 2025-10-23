import { MediaCard, ResourceCard } from "@/components/ui/card";
import { SidebarCategory, SidebarMenu } from "@/components/ui/sidebar";
import { MainCardProps } from "@/types/types";
import { getResources } from "@/utils/api";
import { getCardByPath, getCardData } from "@/utils/constants";
import { convertToSlug, groupByCategory } from "@/utils/helpers";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;
    const card = getCardByPath(category) as MainCardProps;

    const data = await getResources()
    const resources = groupByCategory(data.filter((data: { path: string }) => data.path === category));

    return (
        <>
            <div className="flex flex-row gap-8 ">
                <SidebarMenu items={getCardData()} />
                <div className="flex flex-col flex-1">
                    <section className="mt-10 lg:mt-20">
                        <h1 className="text-4xl font-bold">{`${card.title} ${card.icon}`}</h1>
                        <p className="opacity-90">{card.desc}</p>
                    </section>
                    <hr className="my-10 opacity-10" />
                    <section>
                        {Object.entries(resources).map((cat, index) => (
                            <div key={index}>
                                <div id={convertToSlug(cat[0])} className="pt-4"></div>
                                <h2 className="text-2xl font-semibold">{cat[0]}</h2>
                                {category === "media" ? (
                                    <MediaCard array={cat[1]} className="mb-10" />
                                ) : (
                                    <ResourceCard
                                        array={cat[1]}
                                        className="mb-10"
                                    />)}
                            </div>
                        ))}
                    </section>
                </div>
                <SidebarCategory items={Object.keys(resources)} />
            </div>
        </>
    )
}
