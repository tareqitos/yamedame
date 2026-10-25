"use client"

import { useTheme } from "@/context/themeContext"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import Button from "./ui/button"
import { useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme, actualTheme } = useTheme()
    // Only spins after a click, not on page load
    const [hasToggled, setHasToggled] = useState(false)
    const iconClass = hasToggled ? "animate-spin-in" : undefined

    return (

        <Button
            variant="primary"
            onClick={() => {
                const nextTheme = theme === 'light' ? 'dark' : 'light' 
                setTheme(nextTheme)
                setHasToggled(true)
            }}
        >
            {actualTheme == 'light' && <SunIcon key="light" weight="regular" size={24} className={iconClass} />}
            {actualTheme == 'dark' && <MoonIcon key="dark" weight="regular" size={24} className={iconClass} />}
        </Button>

    )
}