"use client"

import { useAuth } from "@/context/authContext";
import { getAllResources, logout } from "@/app/api/api";
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react";
import '@/styles/auth.scss'
import Link from "next/link";
import '@/styles/resources.scss'
import '@/styles/dashboard.scss'
import AddToFavorite from "@/app/components/addFavorite";
import Icons from "@/utils/icons";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import { CakeIcon, EnvelopeIcon, HashtagIcon, StarIcon } from "@heroicons/react/24/outline";
import { logoutCookie } from "@/app/api/cookies";

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
    image: string,
    path_id: number
}

interface AuthContextType {
    hasAccess: boolean,
    user: { id: number | null, username: string | null, email: string | null, created_at: string | null },
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
        logoutCookie();
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
            console.log('Error loading saved resources')
        }
    }, [favorites])

    const { regularResources, mediaResources, appResources } = useMemo(() => {
        return {
            regularResources: allResources.filter(resource => resource.path_id == 1),
            mediaResources: allResources.filter(resource => resource.path_id == 2),
            appResources: allResources.filter(resource => resource.path_id == 3)
        }
    }, [allResources])

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


    if (!hasAccess && !user) {
        return (
            <div className="register-login-container">
                <div className="register-confirmation">
                    <p>Need to login to access this page</p>
                    <div className="registration-buttons">
                        <Link href={'/'} className="button-rounded and-border and-background">Home</Link>
                        <Link href={'/login'} className="button-rounded and-border and-background">Login</Link>
                    </div>
                </div>
            </div>
        )
    }

    if (user) {
        if (id.toString() !== user.id?.toString()) {
            router.push('/not-found')
        }
    }


    return (
        <>
            <Navbar resources={{}} />
            <h1 className="dashboard-title">Hello, {user && user.username}</h1>
            <div className="dashboard-container">
                <div className="panel-container">
                    <div className="panel">
                        <div className="panel-infos">
                            <div className="panel-item-container">
                                <p> <HashtagIcon width={20} display={'inline'} style={{ verticalAlign: 'sub' }} /> ID</p>
                                <p className="panel-item">{user && user.id}</p>
                            </div>
                            <div className="panel-item-container">
                                <p> <EnvelopeIcon width={20} display={'inline'} style={{ verticalAlign: 'sub' }} /> Email</p>
                                <p className="panel-item">{user && user.email && user.email.replace(/(?<=^.)[^@]+(?=@)/g, '****').replace(/@(.)([^.]*)/, '@$1****')}</p>
                            </div>
                            <div className="panel-item-container">
                                <p> <CakeIcon width={20} display={'inline'} style={{ verticalAlign: 'sub' }} /> Joined on</p>
                                <p className="panel-item">{user && user.created_at?.split("T")[0]}</p>
                            </div>
                            <div className="panel-item-container">
                                <p> <StarIcon width={20} display={'inline'} style={{ verticalAlign: 'sub' }} /> Resources starred</p>
                                <p className="panel-item">{favorites.length}</p>
                            </div>
                        </div>
                        <button className='button-rounded and-background and-border and-hover' style={{ fontSize: '.9em', width: 'fit-content', marginTop: '10px' }} onClick={handleLogout}>Log out</button>

                    </div>

                    <div className="sidebar">
                        <Sidebar resources={{}} />
                    </div>
                </div>

                <div className="list-container dashboard">
                    {regularResources.length == 0 ? <h3>Resources list is empty</h3> :
                        <section className="dashboard-section">
                            <ul className="list-item-container dashboard">
                                {regularResources.map((resource) => (
                                    <li key={resource.uuid} className={`item-container ${resource.slug}`}>
                                        <Icons resource={resource.slug} />
                                        <a href={resource.link} className="item" target="_blank">{resource.name}</a>
                                        {` - ${resource.description}`}
                                        <div className="add-to-favorite" style={{ display: 'inline' }}>
                                            <AddToFavorite
                                                id={resource.uuid}
                                                type={'resources'}
                                                favItems={favorites} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <h3>You have {regularResources.length} saved resources</h3>
                        </section>
                    }
                    {regularResources.length == 0 ? <h3>Media list is empty</h3> :
                        <section className="dashboard-section">
                            <ul className="list-item-container media dashboard">
                                {mediaResources.map((resource) => (
                                    <li key={resource.uuid} className={`item-container ${resource.slug} media`}>
                                        <Image src={resource.image} alt={resource.name} width={60} height={60} className="item-picture media" />
                                        <div className="item-infos">
                                            <a href={resource.link} className="item media" target="_blank">
                                                {resource.name}
                                                <Icons resource={resource.platform} />
                                            </a>
                                            <div>
                                                {resource.description}
                                                <div className="add-to-favorite" style={{ display: 'inline', verticalAlign: 'text-bottom' }}>
                                                    <AddToFavorite
                                                        id={resource.uuid}
                                                        type={'media'}
                                                        favItems={favorites} />
                                                </div>
                                            </div>
                                        </div>
                                        <Image src={resource.image} alt={resource.name} width={100} height={100} className="item-picture-bg" />
                                    </li>
                                ))}
                            </ul>
                            <h3>You have {mediaResources.length} saved media</h3>
                        </section>
                    }

                    {appResources.length == 0 ? <h3>Apps list is empty</h3> :
                        <section className="dashboard-section">
                            <ul className="list-item-container dashboard">
                                {appResources.map((resource) => (
                                    <li key={resource.uuid} className={`item-container ${resource.slug}`}>
                                        <Icons resource={resource.slug} />
                                        <a href={resource.link} className="item" target="_blank">{resource.name}</a>
                                        {` - ${resource.description}`}
                                        <div className="add-to-favorite" style={{ display: 'inline' }}>
                                            <AddToFavorite
                                                id={resource.uuid}
                                                type={'resources'}
                                                favItems={favorites} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <h3>You have {appResources.length} saved apps</h3>
                        </section>
                    }
                </div>
            </div>
        </>
    )
}