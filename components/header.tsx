import { Socials } from "./socials"
import { ThemeToggle } from "./theme"
import { SearchButton } from "./ui/search"
import { Title } from "./ui/title"

export const Header = () => {
    return (
        <div className="flex justify-between p-4 bg-card-background">
            <Title />
            <div className="flex gap-4">
                <SearchButton />
                <div className="border-l-1"></div>
                <ThemeToggle />
                <div className="border-l-1"></div>
                <Socials className="flex gap-2" />
            </div>
        </div>
    )
}