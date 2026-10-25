export type Item = {
    id: string;
    name: string;
    description: string,
    link: string,
    category: string;
    path?: string;
    slug: string;
    image?: string
    platform?: string[];
    created_at?: string | null; // YYYY-MM-DD, null for resources older than the column
    deleted_at?: string | null; // YYYY-MM-DD, only set on removed resources
}

// Card props types

export type MainCardProps = {
    icon: string,
    path?: string,
    title: string,
    desc: string,
}

export type ResourceCardProps = {
    array: Item[],
    className?: string,
    leavingIds?: string[], // Rows collapsing before being removed
}