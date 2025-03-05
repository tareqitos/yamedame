"use client"

import { useAuth } from "@/context/authContext";
import { getAllResources, logout } from "@/app/api/api";
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react";

interface Props {
    id: number;
}

interface Resources {
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

interface AuthContextType {
    hasAccess: boolean,
    user: { id: number | null, username: string | null },
    favorites: string[],
    loadFavorite: () => void,
    checkAccess: () => void
}

export default function Dashboard({ id }: Props) {
    const { hasAccess, user, favorites, loadFavorite, checkAccess } = useAuth() as AuthContextType;
    const [allResources, setAllResources] = useState<Resources[]>([]);
    const router = useRouter();

    const handleLogout = async () => {
        await logout()
        localStorage.removeItem('hasAccess')
        checkAccess()
        router.refresh();
        router.push('/');
    }

    const getFavorites = useCallback(() => {
        if (hasAccess) {
            loadFavorite()
        }
    }, [])

    const getResources = useCallback(async () => {
        const { response, result } = await getAllResources(`/api/all`)
        if (response.ok) {
            const flattenedResult = Object.values(result).flat() as Resources[]
            const filteredResult = flattenedResult.filter((item) => favorites.includes(item.uuid))
            setAllResources(filteredResult)
        } else {
            console.log('oh no')
        }
    }, [favorites])

    useEffect(() => {
        getFavorites();
    }, [getFavorites]);

    useEffect(() => {
        if (!hasAccess || !favorites) return;
        if (hasAccess && favorites) {
            if (favorites.length > 0) {
                getResources();
            }
        }
    }, [hasAccess, favorites, getResources]);

    return (
        <>
            {hasAccess && user ?
                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <p style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>Welcome to your profile, {user.username}! #{id}</p>

                    <ul>
                        {allResources && allResources.map((resource) => (
                            <li key={resource.uuid}>
                                {resource.name}
                            </li>
                        ))}
                    </ul>

                    <button className='button-rounded and-hover' style={{ fontSize: '1.2em' }} onClick={handleLogout}>Log out</button>
                </div> : <p>Need to login to access this page</p>}
        </>
    )
}