"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import Button from "./button"
import { MouseEvent, useEffect, useRef, useState } from "react";
import { search } from "@/utils/minisearch";
import { SearchResult } from "minisearch";
import Link from "next/link";
import { Icon } from "./icon";
import { ArrowSquareUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Item } from "@/types/types";

export const SearchButton = ({ resources }: { resources: Item[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [fitleredResults, setFilteredResults] = useState<SearchResult[]>([]);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (query.trim()) {
                const results = await search(query.trim(), resources);
                setFilteredResults(results);
            } else {
                setFilteredResults([]);
            }
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [query])

    const handleOpen = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
        setQuery('');
        setFilteredResults([]);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOpen(false);
        document.body.style.overflow = "";
    }

    const handleOpenLink = (link: string, e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <>
            <Button variant="search" className="inline-flex transition-primary !duration-50 hover:pr-8" onClick={() => isOpen ? handleClose() : handleOpen()}>
                <MagnifyingGlassIcon size={24} className="md:mr-2" />
                <span className="hidden md:inline">Search</span>
            </Button>

            {isOpen && (
                <div className="fixed inset-0 flex h-fit top-20 justify-center z-1000">
                    <div className="bg-black/60 fixed inset-0 flex items-center justify-center -z-1 transition-primary" onClick={() => handleClose()}></div>
                    <div className="bg-card-background p-4 pb-10 rounded-lg w-11/12 max-w-4xl border-1 border-primary">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Type to search..."
                                className="w-full p-2 border border-primary/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/50"
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value || '')}
                            />
                        </form>
                        {fitleredResults.length > 0 && (
                            <ul className="bg-card-background p-4 mt-2 rounded-lg max-h-96 overflow-y-auto">
                                {fitleredResults.map((result, index) => (
                                    <li key={index} className="border-b border-primary/10 last:border-b-0">
                                        <Link href={`/${result.path}#${result.slug}`} className="md:flex items-center gap-2 p-2 border-b border-primary/10 last:border-b-0" onClick={() => handleClose()}>
                                            <div className="flex items-center gap-2">
                                                <Icon path={result.path} className="inline-block md:mr-2" size={20} />
                                                <p className="text-primary font-semibold hover:text-link-hover">{result.name}</p>
                                            </div>
                                            <Button variant="primary" className="text-primary" onClick={(e) => handleOpenLink(result.link, e)}>
                                                <ArrowSquareUpRightIcon size={24} />
                                            </Button>
                                            <span className="hidden md:inline">-</span>
                                            <p className="text-sm md:flex-1">{result.description}</p>
                                            <p className="text-sm opacity-50">{result.category}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}