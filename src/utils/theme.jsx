"use client"

import { useTheme } from "@/context/themeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="links theme-toggle">{theme === 'dark' ?
            <MoonIcon display={'flex'} width={24} shapeRendering="auto"/> :
            <SunIcon display={'flex'} width={24} shapeRendering="auto"/> }
        </button>
    )
}