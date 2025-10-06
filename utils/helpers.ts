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