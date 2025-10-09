import { Icons, IconsCategory, IconsMedia } from "@/utils/constants"
import clsx from "clsx"


export const Icon = ({ path, size, className }: { path?: string, size: number, className?: string }) => {
    return (
        <>
            {Icons.map((item, index) => (
                item.path === path ? <item.icon key={index} size={size} color={item.iconColor} weight="regular" className={className} /> : null
            ))}
        </>
    )
}

export const IconCategory = ({ category, size, className }: { category: string, size: number, className: string}) => {
    return (
        <>
            {IconsCategory.map((item, index) => (
                item.category === category ? 
                    <item.icon key={index} size={size} color={item.iconColor} weight="bold" className={clsx("max-w-30 align-sub icons", className)} /> :
                 null
            ))}
        </>
    )
}

export const IconMedia = ({ platform, size, className }: { platform: string, size: number, className?: string }) => {
    return (
        <>
            {IconsMedia.map((item, index) => (
                item.platform === platform ?
                    <item.icon key={index} size={size} color={item.iconColor} weight="fill" className={clsx("max-w-30 align-sub ", className)} /> :
                    null
            ))}
        </>
    )
}