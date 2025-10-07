import { Item } from "@/types/types";

// Group resources by their category
export const groupByCategory = (items: Item[]): Record<string, Item[]> => {
    return items.reduce((groupedItems, currentItem) => {
        const newCategory = currentItem.category;

        if (!groupedItems[newCategory]) {
            groupedItems[newCategory] = [];
        }

        groupedItems[newCategory].push(currentItem);

        return groupedItems;
    }, {} as Record<string, Item[]>);
}

export const convertToSlug = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[&]/g, '-')
        .replace(/[^a-z0-9-]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}