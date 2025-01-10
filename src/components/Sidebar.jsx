import { useEffect, useRef } from "react"
import { toggleSideBar } from "./Header"
 

export function Sidebar({ categories, sidebarActive, setSidebarActive, theme, toggleTheme, activeCategory }) {

    useEffect (() => {
        function sidebarCloseOnResize() {
            if (window.innerWidth > 1200) {
                setSidebarActive(false);
            }
        }
        
        window.addEventListener('resize', sidebarCloseOnResize);

        return () => {
            window.removeEventListener('resize', sidebarCloseOnResize);
        }
    }, [])

    return (
        <aside className={`sidebar sidebar-main ${sidebarActive ? 'active' : ''}`} style={{visibility: sidebarActive ? 'visible' : '' }}>
            <nav className="navbar">
                <button onClick={() => toggleSideBar(sidebarActive, setSidebarActive)} className="sidebar-btn close"><i className="fa-solid fa-xmark"></i></button>
                <hr />
                <ul className="navbar-list">
                    {categories.map((category) => (
                        <li key={category} className={`navbar-item navbar-${category}`}>
                            <a href={`#${category}-id`} className={activeCategory == `${category}-id` ? 'active' : ''}><span></span>
                                {category == 'beginner' ? category + ' essentials' : category}</a>
                            </li>
                    ))}
                </ul>
            </nav>
            <div className="header-right-side sidebar-external-links">
                <button onClick={() => toggleTheme()} className="btn theme-toggle-sidebar"><i className={`fa-solid ${theme == 'dark' ? 'fa-moon' : 'fa-sun'}`}></i></button>

                <div className="socials socials-sidebar">
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank"><i
                        className="fa-brands fa-github"></i></a>
                    <a href="mailto:social@tareqitos.com"><i className="fa-solid fa-at"></i></a>
                </div>
            </div>
        </aside >
    )
}