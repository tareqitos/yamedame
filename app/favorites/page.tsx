import { getResources } from "@/app/api/api";
import { FavoritesList } from "@/components/favorites";
import { SidebarMenu } from "@/components/ui/sidebar";
import { getCardData } from "@/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Favorites - Yame Dame",
    description: "The Japanese learning resources you saved, sorted by category.",
    robots: { index: false },
};

export default async function FavoritesPage() {
    const resources = await getResources();

    return (
        <div className="flex flex-row gap-8">
            <SidebarMenu items={getCardData()} />
            <div className="flex flex-col flex-1">
                <section className="sticky top-0 pt-10 lg:-top-10 lg:pt-20 bg-background z-10">
                    <h1 className="text-4xl lg:text-5xl font-black dynamic-title transition-primary animate-rise">Favorites</h1>
                    <p className="mt-4 animate-rise" style={{ "--i": 1 } as React.CSSProperties}>Your saved resources, sorted by category. They stay in this browser only.</p>
                    <hr className="mt-10 opacity-10" />
                </section>
                <FavoritesList resources={resources} />
            </div>
        </div>
    );
}
