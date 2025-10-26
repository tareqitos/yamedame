// NOT USED

import { convertToSlug } from "@/utils/helpers"
import { MediaCard, ResourceCard } from "./ui/card"
import { SidebarCategory, SidebarMenu } from "./ui/sidebar"
import { getCardByPath, getCardData } from "@/utils/constants"
import { Item, MainCardProps } from "@/types/types";
import NotFound from "@/app/not-found";

type ResourcesListProps = {
    resources: { [key: string]: Item[] };
    category: string;
};

export default function ResourcesList({ resources, category }: ResourcesListProps) {
    const card = getCardByPath(category) as MainCardProps;

    if (!card) {
        return <NotFound />
    }

    return (
        <div className="flex flex-row gap-8 ">
            <SidebarMenu items={getCardData()} />
            <div className="flex flex-col flex-1">
                <section className="sticky top-0 pt-10 lg:-top-10 lg:pt-20 bg-background z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dynamic-title transition-primary">{`${card.title} ${card.icon}`}</h1>
                    <p className="opacity-90">{card.desc}</p>
                    <hr className="mt-10 opacity-10" />
                </section>
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
    )
}