"use client"

import { ChangeEvent, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { DownloadSimpleIcon, StarIcon, UploadSimpleIcon } from "@phosphor-icons/react";
import { toast } from "sonner";
import { Item } from "@/types/types";
import { getCardData } from "@/utils/constants";
import { addFavorites, useFavorites } from "@/utils/favorites";
import { MediaCard, ResourceCard } from "./ui/card";
import { Icon } from "./ui/icon";
import Button from "./ui/button";

const mediaTypes = ['podcast', 'media'];

// False during SSR and hydration, so the empty state doesn't flash before localStorage is read
const useHydrated = () => useSyncExternalStore(() => () => { }, () => true, () => false);

// Accepts our own export ({ favorites: [{ id }] }) or a plain list of ids
const parseImport = (data: unknown): string[] | null => {
    const list = Array.isArray(data) ? data : (data as { favorites?: unknown })?.favorites;
    if (!Array.isArray(list)) return null;

    return list
        .map((entry) => typeof entry === "object" && entry !== null ? (entry as { id?: unknown }).id : entry)
        .filter((id): id is string | number => typeof id === "string" || typeof id === "number")
        .map(String);
};

const FavoritesActions = ({ favorites, resources }: { favorites: Item[]; resources: Item[] }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        const data = {
            app: "yamedame",
            version: 1,
            exportedAt: new Date().toISOString(),
            // Name and link are only there to keep the file readable, the import relies on the id
            favorites: favorites.map(({ id, name, link }) => ({ id, name, link })),
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `yamedame-favorites-${data.exportedAt.slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImport = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        e.target.value = ""; // Allows importing the same file twice
        if (!file) return;

        let ids: string[] | null = null;
        try {
            ids = parseImport(JSON.parse(await file.text()));
        } catch {
            // Handled below, same as a valid JSON with the wrong shape
        }
        if (!ids) {
            toast.error("This file doesn't look like a favorites export.");
            return;
        }

        // Resources removed from the site since the export are ignored
        const known = new Set(resources.map((item) => String(item.id)));
        const added = addFavorites(ids.filter((id) => known.has(id)));

        if (added > 0) {
            toast.success(`${added} favorite${added > 1 ? "s" : ""} imported.`);
        } else {
            toast.info("Nothing new to import, these favorites are already here.");
        }
    };

    return (
        <div className="flex flex-wrap justify-end gap-2 mt-6">
            <Button variant="secondary" onClick={() => inputRef.current?.click()} data-umami-event="Import favorites">
                <UploadSimpleIcon size={20} weight="bold" className="mr-2 inline align-sub" />
                Import
            </Button>
            <Button
                variant="secondary"
                onClick={handleExport}
                disabled={favorites.length === 0}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
                data-umami-event="Export favorites"
            >
                <DownloadSimpleIcon size={20} weight="bold" className="mr-2 inline align-sub" />
                Export
            </Button>
            <input ref={inputRef} type="file" accept="application/json,.json" className="hidden" onChange={handleImport} />
        </div>
    );
};

export const FavoritesList = ({ resources }: { resources: Item[] }) => {
    const { ids } = useFavorites();
    const hydrated = useHydrated();

    if (!hydrated) return null;

    const favorites = resources.filter((item) => ids.includes(String(item.id)));
    const actions = <FavoritesActions favorites={favorites} resources={resources} />;

    if (favorites.length === 0) {
        return (
            <>
                {actions}
                <div className="flex flex-col items-center text-center gap-4 p-10 my-6 rounded-2xl bg-card-background">
                    <StarIcon size={48} weight="duotone" className="text-favorite" />
                    <p className="text-xl font-semibold">No favorites yet</p>
                    <p className="opacity-80 max-w-md">
                        Tap the <StarIcon size={18} weight="bold" className="inline" /> next to any resource to keep it here.
                        Your favorites are saved in this browser only.
                    </p>
                    <p className="opacity-80 max-w-md">
                        Coming from another device? Import your exported file.
                    </p>
                    <Link href="/" className="mt-2">
                        <Button variant="button" tabIndex={-1}>Browse resources</Button>
                    </Link>
                </div>
            </>
        );
    }

    // Grouped by main category, in the same order as the home page
    const groups = getCardData()
        .filter((card) => card.path)
        .map((card) => ({ card, items: favorites.filter((item) => item.path === card.path) }))
        .filter((group) => group.items.length > 0);

    return (
        <section>
            {actions}
            {groups.map(({ card, items }) => (
                <div key={card.path}>
                    <div id={card.path} className="pt-38 -mt-32"></div>
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-sm bg-card-background">
                            <Icon path={card.path} size={22} />
                        </span>
                        <Link href={`/${card.path}`} className="text-2xl font-semibold hover:text-primary transition-primary">{card.title}</Link>
                        <span className="text-sm opacity-60">{items.length}</span>
                    </div>
                    {mediaTypes.includes(card.path as string) ? (
                        <MediaCard array={items} className="mb-10" />
                    ) : (
                        <ResourceCard array={items} className="mb-10" />
                    )}
                </div>
            ))}
        </section>
    );
}
