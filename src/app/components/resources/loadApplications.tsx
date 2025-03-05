"use client"

import { useAuth } from "@/context/authContext"
import Navbar from "../navbar";
import ScrollToHash from "@/utils/scrollToHash";
import { ResourcesTitle } from "../resourcesTitle";
import AddToFavorite from "../addFavorite";
import Sidebar from "../sidebar";
import Icons from "@/utils/icons";
import { useEffect } from "react";

type Applications = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platforms: string[]
}

interface ApplicationsProps {
    apps: { [key: string]: Applications[] };
}

export function LoadApplications({ apps }: ApplicationsProps) {

    const { hasAccess, favorites, loadFavorite } = useAuth();

    useEffect(() => {
        if (hasAccess && favorites) {
            loadFavorite();
        }
    }, [])

    return (
        <>
            <Navbar resources={apps} />
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Software & Applications 💻" description="Useful software and applications to support your studies." />
                    <hr className="resources-title-separator" />
                    <div className="list-container">
                        {Object.keys(apps).map((category, i) => (
                            <section key={i} className={`${apps[category][0].slug}-container`}>
                                <div id={`${apps[category][0].slug}-id`} className="anchor"></div>
                                <h2 className="category-title">{category}</h2>
                                <ul className="list-item-container">
                                    {apps[category].map((item: Applications) => (
                                        <li key={item.uuid} className={`item-container ${item.slug}`}>
                                            <Icons resource={item.slug} />
                                            <a href={item.link} className="item" target="_blank">{item.name}</a>
                                            {` - ${item.description}  / `}
                                            {item.platforms.map((platform) => (
                                                <Icons key={platform} resource={platform} />
                                            ))}
                                            {hasAccess &&
                                                <div className="add-to-favorite" style={{ display: 'inline' }}>
                                                    <AddToFavorite
                                                        id={item.uuid}
                                                        type={'applications'}
                                                        favItems={favorites} />
                                                </div>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
                <Sidebar resources={apps} />
            </div>
        </>
    )
}
