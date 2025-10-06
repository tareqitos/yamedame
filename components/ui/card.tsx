'use client'

import clsx from "clsx"
import { Icon, IconCategory } from "./icon"
import { CardMainProps, CardResourceProps } from "@/types/types"


const CardMain = ({ icon, title, path, description }: CardMainProps) => {
    return (
        <div className="flex flex-col w-full rounded-2xl p-6 lg:h-50 bg-card-background transition">
            <span className="w-fit p-2 rounded-sm bg-background" >
                <Icon path={path} size={28} />
            </span>
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

const CardResource = ({ array, className }: CardResourceProps) => {
    return (
        <ul className={clsx(
            "flex flex-col gap-2 p-4 bg-card-background rounded-2xl my-6 text-primary text-lg font-semibold",
            className
        )}>
            {array.map((child, index) => (
                <li key={child.id}>
                    <IconCategory category={child.slug} size={20} className="inline align-sub mr-2" />
                    <a href={child.link} target="_blank" className={`flex-1 hover:text-white transition-primary`}>
                        {child.name}
                    </a>
                    &nbsp;- <span className="text-white">{child.description}</span>
                </li>
            ))}
        </ul>
    )
}

export { CardMain, CardResource }