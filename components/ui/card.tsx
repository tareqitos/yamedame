'use client'

import clsx from "clsx"
import { Icon, IconCategory, IconMedia } from "./icon"
import { MainCardProps, ResourceCardProps } from "@/types/types"
import Image from "next/image"


const MainCard = ({ title, path, desc }: MainCardProps) => {
    return (
        <div className="flex flex-col w-full rounded-2xl p-6 lg:h-50 bg-card-background transition-border">
            <span className="w-fit p-2 rounded-sm bg-background" >
                <Icon path={path} size={28} />
            </span>
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

const ResourceCard = ({ array, className }: ResourceCardProps) => {
    return (
        <ul className={clsx(
            "flex flex-col gap-4 p-4 bg-card-background rounded-2xl my-6 text-primary text-lg font-semibold",
            className
        )}>
            {array.map((child) => (
                <li key={child.id}>
                    <IconCategory category={child.slug} size={20} className="inline align-sub mr-2" />
                    <a href={child.link} target="_blank" className={`flex-1 hover:text-white transition-primary`}>
                        {child.name}
                    </a>
                    &nbsp;- <span className="text-foreground">{child.description}</span>
                </li>
            ))}
        </ul>
    )
}

const MediaCard = ({ array, className }: ResourceCardProps) => {

    return (
        <ul className={clsx(
            "flex flex-col gap-4 p-4 bg-card-background rounded-2xl my-6 text-primary text-lg font-semibold overflow-hidden",
            className
        )}>
            {array.map((child) => (
                <li key={child.id} className="relative flex flex-row gap-4 items-center">
                    <Image
                        src={child.image?.startsWith("https") ? child.image : "/red-on-white-circle.png"}
                        alt={child.name}
                        width={80} height={80}
                        className="rounded-sm z-1"
                    />
                    <Image
                        src={child.image?.startsWith("https") ? child.image : "/red-on-white-circle.png"}
                        alt={child.name}
                        width={100} height={100}
                        quality={1}
                        className="absolute -left-4 blur-xl opacity-50"
                    />
                    <div className="flex flex-col">
                        <a href={child.link} target="_blank" className={` hover:text-white transition-primary`}>
                            {child.name}
                        </a>
                        <p className="text-foreground">{child.description}</p>
                        <div className="flex w-fit gap-2 bg-background px-2 py-1 rounded-lg">
                            {
                                child.platform?.map((platform: string, index: number) => (
                                    <IconMedia key={index} platform={platform} size={24} />
                                )
                                )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export { MainCard, ResourceCard, MediaCard }