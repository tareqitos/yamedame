"use client"
import { useSidebar } from '@/context/sidebarContext'

export default function Sidebar() {
    const { isSidebarActive, toggleSidebar } = useSidebar() as unknown as { isSidebarActive: boolean, toggleSidebar: () => void };

    return (
        <>
            <button onClick={toggleSidebar}>Sidebar</button>
        </>
    )
}