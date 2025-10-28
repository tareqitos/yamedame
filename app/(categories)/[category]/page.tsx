import { getResources } from "@/app/api/api";
import { MediaCard, ResourceCard } from "@/components/ui/card";
import { SidebarCategory, SidebarMenu } from "@/components/ui/sidebar";
import { MainCardProps } from "@/types/types";
import { getCardByPath, getCardData } from "@/utils/constants";
import { convertToSlug, groupByCategory } from "@/utils/helpers";

export async function generateStaticParams() {
    const data = await getResources();
    const uniquePaths = [...new Set(data.map((item: { path: string }) => item.path))];

    return uniquePaths.map((path) => ({
        category: path,
    }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;

    const card = getCardByPath(category) as MainCardProps;

    // This data will be fetched at build time
    const data = await getResources();
    const resources = groupByCategory(data.filter((data: { path: string }) => data.path === category));

    return (
        <>
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
                                <div id={convertToSlug(cat[0])} className="pt-38 -mt-32"></div>
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