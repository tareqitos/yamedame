"use client"

import Link from "next/link"
import { useEffect, useState } from "react";

interface Resource {
    slug: string;
}

interface NavbarProps {
    resources: { [key: string]: Resource[] };
}

export default function Navbar({ resources }: NavbarProps) {
    const [menuActive, setMenuActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive)
        setSidebarActive(false)
    }

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive)
        setMenuActive(false);
    }

    const handleCloseMenus = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (!target.closest('.menu-container')) {
            setMenuActive(false);
            setSidebarActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseMenus);
        return () => {
            document.removeEventListener("mousedown", handleCloseMenus);
        }
    }, [])


    return (
        <div className="menu-navbar">
            <div className="menu-container">
                <button className="menu-button button-rounded" onClick={toggleMenu}>Menu</button>
                <div className={`menu-modal ${menuActive ? 'active' : ''}`}>
                    <Link className="" href="/">🏠&nbsp;&nbsp;Home</Link>
                    <hr />
                    <Link href="/resources">📖&nbsp;&nbsp;Resources</Link>
                    <hr />
                    <Link href="/media">💾&nbsp;&nbsp;Media</Link>
                    <hr />
                    <Link href="/games">🎮&nbsp;&nbsp;Games</Link>
                    <hr />
                    <Link href="/applications">💻&nbsp;&nbsp;Software & Applications</Link>
                </div>
            </div>
            <div className="menu-container">
                {Object.keys(resources).length == 0 ? null :
                    <button className="on-this-page-button button-rounded" onClick={toggleSidebar}>On this page</button>}
                <ul className={`otpb-modal menu-modal ${sidebarActive ? 'active' : ''}`}>
                    {Object.keys(resources).map((category) => (
                        <Link href={`#${resources[category][0].slug}-id`} key={category}
                            className='sidebar-li' onClick={toggleSidebar}><li>{category}</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}