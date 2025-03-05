"use client"

import { useAuth } from "@/context/authContext"
import Navbar from "../navbar";
import ScrollToHash from "@/utils/scrollToHash";
import { ResourcesTitle } from "../resourcesTitle";
import AddToFavorite from "../addFavorite";
import Sidebar from "../sidebar";
import Icons from "@/utils/icons";
import { useEffect } from "react";
import Feedback from "../feedback";

interface Resource {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platform: string
}

interface ResourcesProps {
    resources: { [key: string]: Resource[] };
}

export function ShowResources({ resources }: ResourcesProps) {

    const { hasAccess, favorites, loadFavorite } = useAuth();

    useEffect(() => {
        if (hasAccess && favorites) {
            loadFavorite();
        }
    }, [])

    return (
        <>
            <Navbar resources={resources} />
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Study Resources 📖" description="Dictionaries, grammar guides, vocabulary insights, reading materials and other useful resources for studying!" />
                    <Feedback
                        title="Share your favorite Japanese learning tool 📖"
                        categories={Object.keys(resources)} />
                    <hr className="resources-title-separator" />
                    <div className="list-container">
                        {Object.keys(resources).map((category, i) => (
                            <section key={i} className={`${resources[category][0].slug}-container`}>
                                <a id={`${resources[category][0].slug}-id`} className="anchor"></a>
                                <h2 className="category-title">{category}</h2>
                                <ul key={i} className="list-item-container">
                                    {resources[category].map((item: Resource) => (
                                        <li key={item.uuid} className={`item-container ${item.slug}`}>
                                            <Icons resource={item.slug} />
                                            <a href={item.link} className="item" target="_blank">{item.name}</a>
                                            {` - ${item.description}`}

                                            {hasAccess &&
                                                <div className="add-to-favorite" style={{ display: 'inline' }}>
                                                    <AddToFavorite
                                                        id={item.uuid}
                                                        type={'resources'}
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
                <Sidebar resources={resources} />
            </div>
        </>
    )
}