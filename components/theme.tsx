"use client"

import { useTheme } from "@/context/themeContext"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import Button from "./ui/button"

export function ThemeToggle() {
    const { theme, setTheme, actualTheme } = useTheme()

    return (

        <Button
            variant="primary"
            onClick={() => {
                const nextTheme = theme === 'light' ? 'dark' : 'light' 
                setTheme(nextTheme)
            }}
        >
            {actualTheme == 'light' && <SunIcon weight="regular" size={24} />}
            {actualTheme == 'dark' && <MoonIcon weight="regular" size={24} />}
        </Button>

    )
}