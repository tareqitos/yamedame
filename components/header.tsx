import { Socials } from "./socials"
import { ThemeToggle } from "./theme"
import { Title } from "./title"

export const Header = () => {
    return (
        <div className="flex justify-between p-4 bg-card-background">
            <Title />
            <div className="flex gap-4">
                <ThemeToggle />
                <div className="border-l-1"></div>
                <Socials className="flex gap-2" />
            </div>
        </div>
    )
}