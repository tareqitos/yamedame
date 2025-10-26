import { Item } from '@/types/types'
import MiniSearch from 'minisearch'

let miniSearch: MiniSearch | null = null

export const search = async (query: string, resources: Item[]) => {
    if (!miniSearch) {
        miniSearch = new MiniSearch({
            fields: ['name', 'description', 'link', 'category'], // fields to index for full-text search
            storeFields: ['name', 'description', 'link', 'path', 'category', 'slug'], // fields to return with search results
            searchOptions: {
                boost: { name: 2, desc: 3, link: 1 },
                fuzzy: 0.2,
                prefix: true,
            },
        })
        miniSearch.addAll(resources)
    }
    return miniSearch.search(query)
}
