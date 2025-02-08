"use client"
import { useSidebar } from '@/context/sidebarContext'

export default function Sidebar() {
    const { toggleSidebar } = useSidebar() as unknown as { toggleSidebar: () => void };

    return (
        <>
            <button onClick={toggleSidebar}>Sidebar</button>
        </>
    )
}