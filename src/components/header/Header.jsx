import { useState } from "react"
import Form from "../form"
import styles from './Header.module.scss'
import sidebar_styles from '../sidebar/Sidebar.module.scss'
import components_styles from '../../styles/Components.module.scss'

function Header({
    links,
    setFilteredLinks,
    input_reference,
    toggleTheme, theme,
    sidebarActive, setSidebarActive }) {

    return (
        <header className={styles['header']}>
            <div className={styles['title']}>
                <a href="index.html"><span className={styles['logo']}></span>やめだめ</a>
            </div>

            <div className={styles['form-container']}>
                <Form links={links} setFilteredLinks={setFilteredLinks} input_reference={input_reference} />
            </div>

            <div className={styles['header-right-side']}>
                <hr className={styles['hr']} />
                <button onClick={() => toggleTheme()} className={`${components_styles['btn']} ${components_styles['theme-toggle']}`}><i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i></button>
                <hr className={styles['hr']} />
                <div className={components_styles['socials']}>
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank" className={styles['social-link']}><i className={`fa-brands fa-github`}></i></a>
                    <a href="mailto:social@tareqitos.com" className={styles['social-link']}><i className={`fa-solid fa-at`}></i></a>
                </div>
            </div>
            <div className={sidebar_styles['sidebar-btn-container']}>
                <button onClick={() => setSidebarActive(true)} className={`${sidebar_styles['sidebar-btn']} ${sidebar_styles['open']}`}><i className={`fa-solid fa-bars`}></i></button>
            </div>
        </header>
    )
}

export default Header;