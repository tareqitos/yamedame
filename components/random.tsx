"use client"
import { getResources } from "@/utils/api";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import { ShuffleIcon } from "@phosphor-icons/react";

export const RandomLink = () => {
    const [randomLink, setRandomLink] = useState<string>("");

    useEffect(() => {
        getRandomLink();
    }, []);

    const getRandomLink = async () => {
        const links = await getResources()
        const randomIndex = Math.floor(Math.random() * links.length);
        setRandomLink(links[randomIndex].link);
    }

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        getRandomLink().then(() => {
            if (randomLink) {
                window.open(randomLink, '_blank');
            }
        });
    };

    return (
        <Button variant="secondary" onClick={handleClick}>
            <ShuffleIcon className="mr-2 inline align-top" size={24} />
            <a href={randomLink} target="_blank" title="Open a random resource!" rel="noopener noreferrer">Surprise me</a>
        </Button>
    );
}