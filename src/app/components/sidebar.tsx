"use client"

import Link from "next/link";
import '@/styles/resources.scss'
import { useEffect, useRef, useState } from "react";

interface Resource {
    slug: string;
}

interface SidebarProps {
    resources: { [key: string]: Resource[] };
}

export default function Sidebar({ resources }: SidebarProps) {
    const [activeCategory, setActiveCategory] = useState<string>('')
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const handleIntersect = (entries: any[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCategory(entry.target.id)
                }
            })
        }

        const options = {
            root: null,
            rootMargin: '0px 0px -80% 0px', // Offset to trigger earlier
            threshold: 0.6, // Trigger when 60% of the element is visible
        };

        observer.current = new IntersectionObserver(handleIntersect, options);
        const anchors = document.querySelectorAll('.anchor');
        console.log(activeCategory)

        anchors.forEach((anchor) => observer.current?.observe(anchor));
        return () => {
            anchors.forEach((anchor) => observer.current?.unobserve(anchor));
        }
    }, [setActiveCategory])

    return (
        <aside className="sidebar-container">
            <div className="sidebar-wrapper">
                <ul className="sidebar-ul">
                    {Object.keys(resources).map((category) => (
                        <Link href={`#${resources[category][0].slug}-id`} key={category}
                            className={`sidebar-li ${activeCategory == `${resources[category][0].slug}-id` ? 'active' : ''}`}><li>{category}</li></Link>
                    ))}
                </ul>
                <div className={'menu-sidebar'}>
                    <Link className="" href="/">🏠&nbsp;&nbsp;Home</Link>
                    <hr />
                    <Link className="" href="/resources">📖&nbsp;&nbsp;Study Resources</Link>
                    <hr />
                    <Link className="" href="/media">💾&nbsp;&nbsp;Media Library</Link>
                    <hr />
                    <Link className="" href="/applications">💻&nbsp;&nbsp;Software & Applications</Link>
                </div>
            </div>
        </aside>
    )
}