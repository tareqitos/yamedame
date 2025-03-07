"use client"

import { useAuth } from "@/context/authContext";
import { addAndRemoveFavorite } from "@/app/api/api";
import { StarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface FavoriteProps {
    id: string;
    type: string;
    favItems: string[];
}

export default function AddToFavorite({ id, type, favItems }: FavoriteProps) {
    const { user, favorites } = useAuth();
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const uuid = id;
        const userId = user.id || 0;

        try {
            const { response, result } = await addAndRemoveFavorite(uuid, userId, type)
            if (response.status == 201) setFavorite(false)
            if (response.status == 200) setFavorite(true)

            console.log(result)
            console.log(result.message)

        } catch (error) {
            console.log("Error adding favorite: ", error)
        }
    }

    useEffect(() => {
        if (!favItems) return;
        const uuid = id;
        if (!favItems.includes(uuid)) {
            setFavorite(false);
        } else {
            setFavorite(true)
        }
    }, [favItems, id, favorites])

    return (
        <>
            <button onClick={handleFavorite} className="button-favorite">
                <StarIcon
                    className={`favorite-icon ${favorite ? 'spin' : ''}`}
                    display={'inline-block'}
                    width={20}
                    fill={favorite ? "#d9a323" : 'none'}
                    stroke={favorite ? "#d9a323" : 'grey'}
                />
                <p className="button-favorite-text">{!favorite ? "Add to my list" : "Remove from list"}</p>
            </button>
        </>
    )
}
