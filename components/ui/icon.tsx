import { Icons, IconsCategory } from "@/utils/constants"
import clsx from "clsx"


export const Icon = ({ path, size }: { path: string, size: number }) => {
    return (
        <>
            {Icons.map((item, index) => (
                item.path === path ? <item.icon key={index} size={size} color={item.iconColor} weight="regular" /> : null
            ))}
        </>
    )
}

export const IconCategory = ({ category, size, className }: { category: string, size: number, className: string}) => {
    return (
        <>
            {IconsCategory.map((item, index) => (
                item.category === category ? 
                    <item.icon key={index} size={size} color={item.iconColor} weight="bold" className={clsx("max-w-30 icons", className)} /> :
                 null
            ))}
        </>
    )
}