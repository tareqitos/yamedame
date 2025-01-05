import { Form } from "./Form"

export function Header({ links, setFilteredLinks, input_reference }) {

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
                <button className="btn theme-toggle"><i className="fa-solid fa-moon"></i></button>
                <hr />
                <div className="socials">
                    <a href="https://github.com/tareqitos/yamedame.github.io" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:social@tareqitos.com"><i className="fa-solid fa-at"></i></a>
                </div>
            </div>
            <div className="sidebar-btn-container">
                <button className="sidebar-btn open"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>
    )
}