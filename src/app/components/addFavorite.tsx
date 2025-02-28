"use client"

import { useAuth } from "@/context/authContext";
import { addAndRemoveFavorite } from "@/lib/resources-api";
import { PlusCircleIcon, PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react";

interface FavoriteProps {
    id: string;
    type: string;
    fav: string[]
}

export default function AddToFavorite({ id, type, fav }: FavoriteProps) {
    const { hasAccess, user, checkAccess } = useAuth();
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const uuid = id;
        const userId = user.id || 0;

        try {
            const {response, result} = await addAndRemoveFavorite(uuid, userId, type)
            if (response.status == 201) setFavorite(false)
            if (response.status == 200) setFavorite(true)

            console.log(result)
            console.log(result.message)

        } catch (err) {
            console.log("Error adding favorite")
        }
    }

    useEffect(() => {
        const uuid = id;
        if (fav.includes(uuid)) {
            setFavorite(true);
        }
    }, [])

    return (
        <>
        {hasAccess && 
            <button onClick={handleFavorite} className="button-favorite">
                <StarIcon
                    className={`favorite-icon ${favorite ? 'spin' : ''}`}
                    display={'inline-block'}
                    width={20}
                    fill={favorite  ? "#d9a323" : ''}
                    stroke={favorite  ? "#d9a323" : 'grey'}
                />
                <p className="button-favorite-text">{!favorite ? "Add to my list" : "Remove from list"}</p>
            </button> }
        </>
    )
}
