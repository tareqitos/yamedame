'use client'

import clsx from "clsx"
import { Icon, IconCategory, IconMedia } from "./icon"
import { Item, MainCardProps, ResourceCardProps } from "@/types/types"
import Image from "next/image"
import { StarIcon } from "@phosphor-icons/react"
import { useFavorites } from "@/utils/favorites"
import { useState } from "react"


const MainCard = ({ title, path, desc }: MainCardProps) => {
    return (
        <div className="group flex flex-col w-full rounded-2xl p-6 lg:h-50 bg-card-background drop-shadow-lg transition-border hover-lift">
            <span className="w-fit p-2 rounded-sm bg-background hover-wiggle" >
                <Icon path={path} size={28} />
            </span>
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

const FavoriteButton = ({ item }: { item: Item }) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const active = isFavorite(item.id);
    // Only set by a click, so hearts don't animate when favorites load from storage
    const [animation, setAnimation] = useState<"pop" | "unpop" | null>(null);

    const handleClick = () => {
        setAnimation(active ? "unpop" : "pop");
        toggleFavorite(item.id);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-pressed={active}
            aria-label={active ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
            title={active ? "Remove from favorites" : "Add to favorites"}
            className={clsx(
                "relative shrink-0 p-1 rounded-full cursor-pointer transition-primary hover:scale-110 active:scale-95",
                active ? "text-favorite" : "text-foreground/30 hover:text-favorite"
            )}
            data-umami-event={active ? "Remove favorite" : "Add favorite"}
            data-umami-event-name={item.name}
        >
            {animation === "pop" && <span className="favorite-ring" aria-hidden />}
            <StarIcon
                size={22}
                weight={active ? "fill" : "bold"}
                className={clsx(animation && `favorite-${animation}`)}
                onAnimationEnd={() => setAnimation(null)}
            />
        </button>
    )
}

// Gives .animate-collapse the real height to start from
export const collapseFrom = (el: HTMLElement | null) => {
    el?.style.setProperty("--collapse-from", `${el.scrollHeight}px`);
}

const ResourceCard = ({ array, className, leavingIds }: ResourceCardProps) => {
    return (
        <ul className={clsx(
            "flex flex-col gap-4 p-4 bg-card-background rounded-2xl my-6 text-primary text-lg font-semibold",
            className
        )}>
            {array.map((child) => (
                <li
                    key={child.id}
                    ref={leavingIds?.includes(String(child.id)) ? collapseFrom : undefined}
                    className={clsx("flex items-start gap-2", leavingIds?.includes(String(child.id)) && "animate-collapse")}
                >
                    <div className="flex-1">
                        <IconCategory category={child.slug} size={20} className="inline align-sub mr-2" />
                        <a href={child.link} target="_blank" className={`flex-1 text-[16px] sm:text-lg hover:text-link-hover transition-primary`} data-umami-event="Open link" data-umami-event-name={child.name} data-umami-event-link={child.link}>
                            {child.name}
                        </a>
                        &nbsp;- <span className="text-[16px] sm:text-lg text-foreground">{child.description}</span>
                    </div>
                    <FavoriteButton item={child} />
                </li>
            ))}
        </ul>
    )
}

const MediaCard = ({ array, className, leavingIds }: ResourceCardProps) => {

    return (
        <ul className={clsx(
            "flex flex-col gap-4 p-4 bg-card-background rounded-2xl my-6 text-primary text-lg font-semibold overflow-hidden",
            className
        )}>
            {array.map((child) => (
                <li
                    key={child.id}
                    ref={leavingIds?.includes(String(child.id)) ? collapseFrom : undefined}
                    className={clsx("relative flex flex-row gap-4 items-center", leavingIds?.includes(String(child.id)) && "animate-collapse")}
                >
                    <div className="relative overflow-hidden w-20 h-20 flex-shrink-0 rounded-sm z-2">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/resources/${child.id}/image`}
                            alt={child.name}
                            width={80} height={80}
                            className="miniature w-20 h-20 object-cover object-center"
                        />
                    </div>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/resources/${child.id}/image`}
                        alt={child.name}
                        width={100} height={100}
                        quality={1}
                        className="absolute -left-4 blur-xl opacity-50 w-[100px] h-[100px]"
                    />
                    <div className="flex flex-col flex-1">
                        <a href={child.link} target="_blank" className="hover:text-white transition-primary" data-umami-event="Open link" data-umami-event-name={child.name} data-umami-event-link={child.link}>
                            {child.name}
                        </a>
                        <p className="text-foreground">{child.description}</p>
                        <div className="flex w-fit gap-2 py-1 rounded-lg">

                            {child.platform?.map((platform: string, index: number) => (
                                <div key={index} className="bg-background px-2 py-1 rounded-lg">
                                    <IconMedia platform={platform} size={24} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <FavoriteButton item={child} />
                </li>
            ))}
        </ul>
    )
}

export { MainCard, ResourceCard, MediaCard }