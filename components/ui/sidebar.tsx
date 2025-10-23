"use client"

import { MainCardProps } from "@/types/types";
import { Icon, IconCategory } from "./icon"
import { convertToSlug } from "@/utils/helpers";
import Link from "next/link";
import Button from "./button";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

type SidebarMenuProps = {
    items: MainCardProps[]
}

const MenuList = ({ items }: { items: MainCardProps[] }) => (
    <>
        <h1 className="opacity-80">Menu</h1>
        <hr className="my-4 opacity-20" />
        {items.slice(0, -1).map((item, index: number) => (
            <div key={index} className="mb-2">
                <Icon path={item.path} size={20} className="inline-block mr-4" />
                <Link href={`/${item.path}`} className="inline text-lg">{item.title}</Link>
            </div>
        ))}
    </>
);

export const SidebarMenu = ({ items }: SidebarMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex xl:hidden gap-2 fixed left-10 bottom-10 z-99">
                <Button variant="secondaryBorder" className="" onClick={() => setIsOpen(!isOpen)}>
                    Menu
                </Button>
            </div>

            <div className={`fixed xl:hidden top-0 left-0 w-full h-full transition ${isOpen ? 'bg-black/50 z-100' : 'bg-black/0 invisible'}`} onClick={() => setIsOpen(false)}></div>

            <aside className="z-100">
                <nav className="hidden xl:block sticky left-0 top-10 h-fit w-60 p-4 mt-20 rounded-xl bg-card-background z-50">
                    <MenuList items={items} />
                </nav>

                {/* Mobile Menu */}
                <nav className={`fixed flex flex-col justify-between xl:hidden p-8 pl-10 top-0 left-0 bg-card-background h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div>
                        <MenuList items={items} />
                    </div>

                    <Button variant="secondaryBorder" onClick={() => setIsOpen(false)}>
                        <ArrowLeftIcon size={24} className="inline-block" />
                    </Button>
                </nav>
            </aside>
        </>
    )
}

type SidebarProps = {
    items: string[]
}

const CategoryList = ({ items }: { items: string[] }) => (
    <>
        <h1 className="opacity-80">Categories</h1>
        <hr className="my-4 opacity-20" />
        {items.map((cat: string, index: number) => (
            <div key={index} className="mb-2">
                <IconCategory category={convertToSlug(cat)} size={20} className="inline-block mr-4" />
                <a href={`#${convertToSlug(cat)}`} className="inline text-lg">{cat}</a>
            </div>
        ))}
    </>
);

export const SidebarCategory = ({ items }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex lg:hidden gap-2 fixed right-10 bottom-10 z-99">
                <Button variant="secondaryBorder" className="" onClick={() => setIsOpen(!isOpen)}>
                    On this page
                </Button>
            </div>

            <div className={`fixed lg:hidden top-0 left-0 w-full h-full transition ${isOpen ? 'bg-black/50 z-99' : 'bg-black/0 invisible'}`} onClick={() => setIsOpen(false)}></div>

            <aside className="z-99">
                <nav className="hidden lg:block sticky right-0 top-10 h-fit lg:w-60 p-4 mt-20 rounded-xl bg-card-background z-49">
                    <CategoryList items={items} />
                </nav>
                <nav className={`fixed flex flex-col justify-between lg:hidden p-8 pr-10 top-0 right-0 bg-card-background w-80 h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div>
                        <CategoryList items={items} />
                    </div>
                    <Button variant="secondaryBorder" onClick={() => setIsOpen(false)}>
                        <ArrowRightIcon size={24} className="inline-block" />
                    </Button>
                </nav>
            </aside>
        </>
    )
}