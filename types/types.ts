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

export type CardMainProps = {
    icon: string,
    path?: string,
    title: string,
    desc: string,
}

export type CardResourceProps = {
    array: Item[],
    className?: string,
}
