import { useState } from "react"
import { Form } from "./Form"

export function toggleSideBar(sidebarActive, setSidebarActive) {
    setSidebarActive(!sidebarActive)
    console.log(sidebarActive)
}

export function Header({
    links,
    setFilteredLinks,
    input_reference,
    toggleTheme, theme,
    sidebarActive, setSidebarActive }) {

    return (
        <header>
            <div className="title">
                <a href="index.html"><span className="logo"></span>やめだめ</a>
            </div>

            <div className="form-container">
                <Form links={links} setFilteredLinks={setFilteredLinks} input_reference={input_reference} />
            </div>

            <div className="header-right-side">
                <hr />
                <button onClick={() => toggleTheme()} className="btn theme-toggle"><i className={`fa-solid ${theme == 'dark' ? 'fa-moon' : 'fa-sun'}`}></i></button>
                <hr />
                <div className="socials">
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:social@tareqitos.com"><i className="fa-solid fa-at"></i></a>
                </div>
            </div>
            <div className="sidebar-btn-container">
                <button onClick={() => toggleSideBar(sidebarActive, setSidebarActive)} className="sidebar-btn open"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>
    )
}