import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import ThemeToggle from '../../utils/theme'
import AuthButton from '../../utils/auth'
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";

export const Header = () => {
    return (
        <header className="header">
            <div className="title">
                <Link href="/">やめだめ</Link>
            </div>

            <div className="header-links">
                <Searchbar />
                <ThemeToggle />
                <hr className="header-separator" />
                <div className="socials">
                    <a href="https://discord.gg/QW5QXf3YqX" target="_blank" className="links"><FontAwesomeIcon icon={faDiscord} fontSize={20} display={'block'} /></a>
                    <a href="https://github.com/tareqitos/yamedame" target="_blank" className="links"><FontAwesomeIcon icon={faGithub} fontSize={20} display={'block'} /></a>
                    <a href="mailto:contact@yameda.me" target="_blank" className="links"><AtSymbolIcon width={24} display={'block'} /></a>
                </div>
                <hr className="header-separator" />
                <AuthButton />
            </div>
        </header>
    )
}