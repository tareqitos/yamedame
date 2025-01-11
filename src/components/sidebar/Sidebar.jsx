import { useEffect, useState, useRef } from "react"
import ToTop from "../toTop/";
import styles from './Sidebar.module.scss';
import header_styles from '../header/Header.module.scss';
import components_styles from '../../styles/Components.module.scss'


function Sidebar({ categories, sidebarActive, setSidebarActive, theme, toggleTheme, activeCategory}) {

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
                            <a href={`#${category}_id`} className={activeCategory == `${category}_id` ? styles.active : ''}><span></span>
                                {category == 'beginner' ? category + ' essentials' : category}</a>
                        </li>
                    ))}
                </ul>
                <ToTop button_css_selector={styles['to-top-sidebar']}/>
                </nav>
            <div className={`${header_styles['header-right-side']} ${styles['sidebar-external-links']}`}>
                <button onClick={() => toggleTheme()} className={`${components_styles.btn} ${styles['theme-toggle-sidebar']}`}><i className={`fa-solid ${theme == 'dark' ? 'fa-moon' : 'fa-sun'}`}></i></button>

                <div className={`${components_styles.socials} ${styles['socials-sidebar']}`}>
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank"><i
                        className="fa-brands fa-github"></i></a>
                    <a href="mailto:social@tareqitos.com"><i className="fa-solid fa-at"></i></a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;