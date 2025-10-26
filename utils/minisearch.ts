import { getResources } from '@/app/api/api'
import MiniSearch from 'minisearch'

let miniSearch: MiniSearch | null = null

export const search = async (query: string) => {
    if (!miniSearch) {
        const resources = await getResources()
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
