"use client"

import { MainCardProps } from "@/types/types";
import { Icon, IconCategory } from "./icon"
import { convertToSlug } from "@/utils/helpers";
import Link from "next/link";
import Button from "./button";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, HouseIcon, StarIcon, ListBulletsIcon, ListIcon } from "@phosphor-icons/react";

type SidebarMenuProps = {
    items: MainCardProps[]
}

const MenuList = ({ items, onLinkClick }: { items: MainCardProps[]; onLinkClick?: () => void }) => (
    <>
        <h1 className="opacity-80">Menu</h1>
        <hr className="my-4 opacity-20" />
        <div className="mb-2">
            <Icon path="home" size={20} className="inline-block align-sub mr-4" />
            <Link href="/" className="inline text-lg hover:text-primary" onClick={onLinkClick}>Home</Link>
        </div>
        <div className="mb-2">
            <Icon path="beginners" size={20} className="inline-block align-sub mr-4" />
            <Link href="/beginners" className="inline text-lg hover:text-primary" onClick={onLinkClick}>Beginners Guide</Link>
        </div>
        <div className="mb-2">
            <Icon path="favorites" size={20} className="inline-block align-sub mr-4" />
            <Link href="/favorites" className="inline text-lg hover:text-primary" onClick={onLinkClick}>Favorites</Link>
        </div>
        <hr className="my-4 opacity-20" />
        {items.slice(0, -1).map((item, index: number) => (
            <div key={index} className="mb-2">
                <Icon path={item.path} size={20} className="inline-block align-sub mr-4" />
                <Link href={`/${item.path}`} className="inline text-lg hover:text-primary" onClick={onLinkClick}>{item.title}</Link>
            </div>
        ))}
    </>
);

export const SidebarMenu = ({ items }: SidebarMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-2 fixed right-4 xl:-right-20 bottom-16 z-99 transition-primary duration-75">
                <Link href="/favorites" aria-label="Favorites">
                    <Button variant="button" className="p-3!" tabIndex={-1}>
                        <StarIcon size={24} weight="fill" className="block" />
                    </Button>
                </Link>
                <Button variant="button" className="p-3!" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                    <ListIcon size={24} weight="bold" className="block" />
                </Button>
                <Link href="/" aria-label="Home">
                    <Button variant="button" className="p-3!" tabIndex={-1}>
                        <HouseIcon size={24} weight="fill" className="block" />
                    </Button>
                </Link>
            </div>

            <div className={`fixed xl:hidden top-0 left-0 w-full h-full transition-primary ${isOpen ? 'bg-black/50 z-100' : 'bg-black/0 invisible'}`} onClick={() => setIsOpen(false)}></div>

            <div className="hidden xl:block sticky left-0 top-10 h-fit min-w-70 p-4 mt-20 rounded-xl bg-card-background z-50 drop-shadow">
                <aside className="z-100">
                    <MenuList items={items} />
                </aside>
            </div>

            {/* Mobile Menu */}
            <div className={`z-100 fixed flex flex-col justify-between xl:hidden p-8 pl-10 top-0 left-0 bg-card-background w-full sm:w-auto h-full border-r-1 border-primary transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <aside>
                    <div>
                        <MenuList items={items} />
                    </div>
                </aside>
                <Button variant="button" onClick={() => setIsOpen(false)}>
                    <ArrowLeftIcon size={24} className="inline-block" />
                </Button>
            </div>

        </>
    )
}

type SidebarProps = {
    items: string[]
}

const CategoryList = ({ items, onLinkClick }: { items: string[]; onLinkClick?: () => void }) => (
    <>
        <h1 className="opacity-80">Categories</h1>
        <hr className="my-4 opacity-20" />
        {items.map((cat: string, index: number) => (
            <div key={index} className="mb-2">
                <IconCategory category={convertToSlug(cat)} size={20} className="inline-block mr-4" />
                <a href={`#${convertToSlug(cat)}`} className="inline text-lg hover:text-primary" onClick={onLinkClick} data-umami-event={cat}>{cat}</a>
            </div>
        ))}
    </>
);

export const SidebarCategory = ({ items }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Stacked above the SidebarMenu buttons (3 × 52px + gaps) */}
            <div className="flex flex-col fixed right-4 lg:-right-20 bottom-61 z-99 transition-primary duration-75">
                <Button variant="button" className="p-3!" onClick={() => setIsOpen(!isOpen)} aria-label="On this page">
                    <ListBulletsIcon size={24} weight="bold" className="block" />
                </Button>
            </div>

            <div className={`fixed lg:hidden top-0 left-0 w-full h-full transition ${isOpen ? 'bg-black/50 z-99' : 'bg-black/0 invisible'}`} onClick={() => setIsOpen(false)}></div>

            <div className="z-99 hidden lg:block sticky right-0 top-10 h-fit lg:w-60 p-4 mt-20 rounded-xl bg-card-background drop-shadow">
                <aside className="z-99">
                    <CategoryList items={items} />
                </aside>
            </div>

            {/* Mobile Category Menu */}
            <div className={`z-100 fixed flex flex-col justify-between lg:hidden p-8 pr-10 top-0 right-0 bg-card-background w-full sm:w-80 h-full border-l-1 border-primary transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <aside>
                    <div>
                        <CategoryList items={items} onLinkClick={() => setIsOpen(false)} />
                    </div>
                </aside>
                <Button variant="button" onClick={() => setIsOpen(false)}>
                    <ArrowRightIcon size={24} className="inline-block" />
                </Button>
            </div>
        </>
    )
}