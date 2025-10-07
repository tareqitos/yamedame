import { CardResource } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar";
import { getResources } from "@/utils/api";
import { getCardByPath } from "@/utils/constants";
import { convertToSlug, groupByCategory } from "@/utils/helpers";

type TitleData = { title: string; desc: string; icon: string }

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;
    const card = getCardByPath(category) as TitleData

    const data = await getResources()
    const resources = groupByCategory(data.filter((data: { path: string }) => data.path === category));

    return (
        <div className="flex flex-row gap-8 ">
            <aside className="hidden lg:block w-60 h-fit p-4 mt-20 rounded-xl bg-card-background ">
                <Sidebar groups={Object.keys(resources)} />
            </aside>
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
                            <CardResource
                                array={cat[1]}
                                className="mb-10"
                            />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}
