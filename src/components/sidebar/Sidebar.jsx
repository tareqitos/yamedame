import { useEffect, useRef } from "react"
import styles from './Sidebar.module.scss';
import header_styles from '../header/Header.module.scss';
import components_styles from '../../styles/Components.module.scss'
 

function Sidebar({ categories, sidebarActive, setSidebarActive, theme, toggleTheme, activeCategory }) {

    useEffect (() => {
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
        <aside className={`${styles.sidebar_main} ${sidebarActive ? styles.active : ''}`} style={{visibility: sidebarActive ? 'visible' : '' }}>
            <nav className={styles.navbar}>
                <button onClick={() => setSidebarActive(false)} className={`${styles.sidebar_btn} ${styles.close}`}><i className="fa-solid fa-xmark"></i></button>
                <hr />
                <ul className={styles.navbar_list}>
                    {categories.map((category) => (
                        <li key={category} className={`${styles.navbar_item} ${`navbar_${category}`}`}>
                            <a href={`#${category}_id`} className={activeCategory == `${category}_id` ? styles.active : ''}><span></span>
                                {category == 'beginner' ? category + ' essentials' : category}</a>
                            </li>
                    ))}
                </ul>
            </nav>
            <div className={`${header_styles.header_right_side} ${styles.sidebar_external_links}`}>
                <button onClick={() => toggleTheme()} className={`${components_styles.btn} ${styles.theme_toggle_sidebar}`}><i className={`fa-solid ${theme == 'dark' ? 'fa-moon' : 'fa-sun'}`}></i></button>

                <div className={`${components_styles.socials} ${styles.socials_sidebar}`}>
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank"><i
                        className="fa-brands fa-github"></i></a>
                    <a href="mailto:social@tareqitos.com"><i className="fa-solid fa-at"></i></a>
                </div>
            </div>
        </aside >
    )
}

export default Sidebar;