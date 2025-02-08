"use client"
import MiniSearch from "minisearch"
import { fetchData } from '@/utils/fetchAllData.js'
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import Icons from "@/utils/icons";
import { useHotkeys } from "react-hotkeys-hook";

interface Resource {
    uuid: string
    name: string;
    description: string;
    link: string;
    category: string;
    slug: string;
    path: string;
}

interface SearchResult extends Resource {
    score: number;
}

export const Search = () => {
    const [allResources, setAllResources] = useState<Resource[]>()
    const [filteredResources, setFilteredResources] = useState<SearchResult[]>()
    const [isSearchActive, setIsSearchActive] = useState(false)
    const input_reference = useRef<HTMLInputElement>(null);
    

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const all_resources: Resource[] = await fetchData() || [];
                setAllResources(all_resources);
            } catch (err) {
                console.error(err)
            }
        };
        fetchResources();
    }, [])

    useEffect(() => {
        isSearchActive ? document.documentElement.classList.add('no-scroll') : document.documentElement.classList.remove('no-scroll')
    }, [isSearchActive])

    const toggleSearch = () => {
        if (input_reference.current ) {
            input_reference.current.value = '';
        }
        setIsSearchActive(!isSearchActive);
    }

    const toggleSearchShortcuts = () => {
        if (isSearchActive) {
            setIsSearchActive(false)
            if (input_reference.current) {
                input_reference.current.blur()
                input_reference.current.value = '';
            }
        } else {
            setIsSearchActive(true)
            input_reference?.current?.focus();
        }
    }

    useHotkeys('esc', toggleSearchShortcuts, {enableOnFormTags: true})  
    useHotkeys('ctrl+k', toggleSearchShortcuts, {enableOnFormTags: true})
        

    const searchResult = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (!allResources || allResources.length == 0) return;

        let miniSearch = new MiniSearch({
            idField: 'uuid',
            fields: ['name', 'description'],
            storeFields: ['uuid', 'name', 'description', 'link', 'category', 'slug', 'path'],
            searchOptions: {
                boost: {name: 5},
                fuzzy: 0.2,
                prefix: true
            },
        })

        if (allResources) {
            miniSearch.addAll(allResources);
        } else {
            console.error('Failed to fetch resources');
        }

        let input = event.target.value.trim();
        let results = miniSearch.search(input);

        if (input_reference.current?.value.trim()) {
            setFilteredResources(results as unknown as SearchResult[]);
        } 
    }

    return (
        <div className="search-container">
            <form>
                <input ref={input_reference} className="search-input" type="text" placeholder="&#xF002; Search..." onClick={() => setIsSearchActive(true)} onChange={searchResult} />
            </form>

            <div className={`search-results-container ${isSearchActive ? 'active' : ''}`}>
                <div onClick={toggleSearch} className="search-background" style={{zIndex: isSearchActive ? 0 : -1000 }}></div>
                <ul className={`search-list ${input_reference.current?.value.trim().length != 0 ? 'active' : ''}`}>
                    <h4 className="search-status">{filteredResources?.length ? `${filteredResources?.length} results` : `No results for ${input_reference?.current?.value}`}</h4>
                    
                    {filteredResources?.map((resource) => (
                        <Link key={resource.uuid} href={`${resource.path}#${resource.slug}-id`} className="search-container" onClick={toggleSearch}>
                            <li className="search-item">
                                <p className={`search-path-category ${resource.slug}`}>{`${resource.path.charAt(0).toLocaleUpperCase()}${resource.path.slice(1)} / ${resource.category}`}</p>
                                <p className="search-item">
                                    {resource.path == 'media' ? 
                                        <Icons resource={resource.path} /> :
                                        <Icons resource={resource.slug} />}
                                    <span>{resource.name}</span> {` - ${resource.description}`}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}