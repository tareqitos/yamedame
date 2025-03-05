"use client"

import { useAuth } from "@/context/authContext"
import Navbar from "../navbar";
import ScrollToHash from "@/utils/scrollToHash";
import { ResourcesTitle } from "../resourcesTitle";
import AddToFavorite from "../addFavorite";
import Sidebar from "../sidebar";
import Icons from "@/utils/icons";
import { useEffect } from "react";
import Image from "next/image";

interface Media {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platform: string,
    image: string
}

interface ResourcesProps {
    media: { [key: string]: Media[] };
}

export function LoadMedia({ media }: ResourcesProps) {

    const { hasAccess, favorites, loadFavorite } = useAuth();

    useEffect(() => {
        if (hasAccess && favorites) {
            loadFavorite();
        }
    }, [])

    return (
        <>

            <Navbar resources={media} />
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Media 💾" description="Teaching videos, vlogs, podcasts, gaming and more!" />
                    <hr className="resources-title-separator" />
                    <div className="list-container media">
                        {Object.keys(media).map((category, i) => (
                            <section key={i} className={`${media[category][0].slug}-container`}>
                                <a id={`${media[category][0].slug}-id`} className="anchor"></a>
                                <h2 className="category-title">{category}</h2>
                                <ul key={i} className="list-item-container media">
                                    {media[category].map((item: Media) => (
                                        <li key={item.uuid} className={`item-container ${item.slug} media`}>
                                            <Image src={item.image} alt={item.name} width={60} height={60} className="item-picture media" />
                                            <div className="item-infos">
                                                <a href={item.link} className="item media" target="_blank">{item.name}
                                                    <Icons resource={item.platform} />
                                                </a>
                                                <div>
                                                    {item.description}
                                                    {hasAccess &&
                                                        <div className="add-to-favorite" style={{ display: 'inline', verticalAlign: 'text-bottom' }}>
                                                            <AddToFavorite
                                                                id={item.uuid}
                                                                type={'media'}
                                                                favItems={favorites} />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <Image src={item.image} alt={item.name} width={100} height={100} className="item-picture-bg" />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
                <Sidebar resources={media} />
            </div>
        </>

    )
}