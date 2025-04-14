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

type Games = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platforms: string[]
}

interface GamesProps {
    games: { [key: string]: Games[] };
}

export function LoadGames({ games }: GamesProps) {

    const { hasAccess, favorites, loadFavorite } = useAuth();

    useEffect(() => {
        if (hasAccess && favorites) {
            loadFavorite();
        }
    }, [])

    return (
        <>
            <Navbar resources={games} />
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Games 🎮" description="Find and play games to enhance to practice the language!" />
                    <Feedback
                        title="Share your favorite Japanese learning game 🎲"
                        categories={Object.keys(games)} />
                    <hr className="resources-title-separator" />
                    <div className="list-container">
                        {Object.keys(games).map((category, i) => (
                            <section key={i} className={`${games[category][0].slug}-container`}>
                                <div id={`${games[category][0].slug}-id`} className="anchor"></div>
                                <h2 className="category-title">{category}</h2>
                                <ul className="list-item-container">
                                    {games[category].map((game: Games) => (
                                        <li key={game.uuid} className={`item-container ${game.slug}`}>
                                            <Icons resource={game.slug} />
                                            <a href={game.link} className="item" target="_blank">{game.name}</a>
                                            {` - ${game.description}`}

                                            {hasAccess &&
                                                <div className="add-to-favorite" style={{ display: 'inline' }}>
                                                    <AddToFavorite
                                                        id={game.uuid}
                                                        type={'games'}
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
                <Sidebar resources={games} />
            </div>
        </>
    )
}
