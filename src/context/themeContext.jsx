"use client"

import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext('');

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved_theme = localStorage.getItem('theme') || 'dark';
            setTheme(saved_theme);
            document.documentElement.dataset.theme = saved_theme;
        }
    }, []);

    const toggleTheme = () => {
        const new_theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(new_theme);

        if (typeof window !== 'undefined') {
            document.documentElement.dataset.theme = new_theme;
            localStorage.setItem('theme', new_theme);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

