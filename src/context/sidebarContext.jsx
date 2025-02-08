"use client"

import { createContext, useState, useContext } from "react";

const SidebarContext = createContext(false);

export const SidebarProvider = ({ children }) => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
        console.log('Button state: ', isSidebarActive)
    }

    return (
        <SidebarContext.Provider value={{isSidebarActive, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext);