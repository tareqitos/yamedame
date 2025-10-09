export type Item = {
    id: string;
    name: string;
    description: string,
    link: string,
    category: string;
    path: string;
    slug: string;
    image?: string
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
}
