"use client"

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({children}) {
  const [isOpen, setIsOpen] = useState();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("Is open? ", isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}


export default function SidebarButton() {
  const { isOpen, toggleSidebar} = useContext(SidebarContext);
  return (
      <>
          <button onClick={toggleSidebar}>Sidebar</button>
      </>
  )
}