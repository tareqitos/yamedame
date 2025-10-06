import { CardResource } from "@/components/ui/card";
import { getResources } from "@/utils/api";
import { getCardByPath } from "@/utils/constants";
import { groupByCategory } from "@/utils/helpers";

type TitleData = { title: string; desc: string; icon: string }

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;
    const card = getCardByPath(category) as TitleData

    const data = await getResources()
    const resources = groupByCategory(data.filter((data: { path: string }) => data.path === category));

    // console.log(resources)

    return (
        <>
            <section className="my-10 lg:mt-20">
                <h1 className="text-4xl font-bold">{`${card.title} ${card.icon}`}</h1>
                <p className="opacity-90">{card.desc}</p>
            </section>
            <hr className="my-10 opacity-10" />
            <section>
                {Object.entries(resources).map((cat, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-semibold">{cat[0]}</h2>
                        <CardResource
                            array={cat[1]}
                            className="mb-10"
                        />
                    </div>
                ))}
            </section>
        </>
    )
}
