"use client"
import Button from "./ui/button";
import { useEffect, useState } from "react";
import { ShuffleIcon } from "@phosphor-icons/react";
import { Item } from "@/types/types";

export const RandomLink = ({ resources }: { resources: Item[] }) => {
    const [randomLink, setRandomLink] = useState<string>("");

    useEffect(() => {
        getRandomLink();
    }, []);

    const getRandomLink = async () => {
        const randomIndex = Math.floor(Math.random() * resources.length);
        setRandomLink(resources[randomIndex].link);
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