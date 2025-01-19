import { useEffect, useState, useRef } from "react"
import { AtSymbolIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { getTheme, toggleTheme } from '../theme/Theme.js';

import ToTop from "../toTop";
import styles from './Sidebar.module.scss';
import header_styles from '../header/Header.module.scss';
import components_styles from '../../styles/Components.module.scss'


function Sidebar({ categories, sidebarActive, setSidebarActive, activeCategory }) {
    const [theme, setTheme] = useState(getTheme());

    function handleToggleTheme() {
        toggleTheme();
        setTheme(getTheme());
    }

    useEffect(() => {
        function sidebarCloseOnResize() {
            if (window.innerWidth > 1200) {
                document.documentElement.classList.remove('stop-scrolling')
                setSidebarActive(false);
            }
        }

        window.addEventListener('resize', sidebarCloseOnResize);

        return () => {
            window.removeEventListener('resize', sidebarCloseOnResize);
        }
    }, [])

    return (
        <aside className={`${styles['sidebar-main']} ${sidebarActive ? styles.active : ''}`} style={{ visibility: sidebarActive ? 'visible' : '' }}>
            <nav className={styles.navbar}>
                <button onClick={() => setSidebarActive(false)} className={`${styles['sidebar-btn']} ${styles.close}`}><i className="fa-solid fa-xmark"></i></button>
                <hr />
                <ul className={styles['navbar-list']}>
                    {categories.map((category) => (
                        <li key={category} className={`${styles['navbar-item']} ${`navbar-${category}`}`}>
                            <a onClick={() => sidebarActive ? setSidebarActive(false) : sidebarActive} href={`#${category}_id`} className={activeCategory == `${category}_id` ? styles.active : ''}><span></span>
                                {category == 'beginner' ? category.charAt(0).toUpperCase() + category.slice(1) + ' essentials' : category.charAt(0).toUpperCase() + category.slice(1)}</a>
                        </li>
                    ))}
                </ul>
                <ToTop button_css_selector={styles['to-top-sidebar']} />
            </nav>
            <div className={`${header_styles['header-right-side']} ${styles['sidebar-external-links']}`}>
                <button onClick={() => handleToggleTheme()} className={`${components_styles.btn} ${styles['theme-toggle-sidebar']}`}>{theme == 'dark' ? <MoonIcon className={components_styles['h-icon']} /> : <SunIcon className={components_styles['h-icon']} />}</button>

                <div className={`${components_styles.socials} ${styles['socials-sidebar']}`}>
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank"><i
                        className="fa-brands fa-github"></i></a>
                    <a href="mailto:contact@yameda.me"><AtSymbolIcon className={components_styles['h-icon']} /></a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;