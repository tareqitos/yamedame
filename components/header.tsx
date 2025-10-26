import { getResources } from "@/app/api/api"
import { Socials } from "./socials"
import { ThemeToggle } from "./theme"
import { SearchButton } from "./ui/search"
import { Title } from "./ui/title"

export const Header = async () => {
    const data = await getResources();

    return (
        <div className="flex justify-between p-4 bg-card-background">
            <Title />
            <div className="flex gap-4">
                <SearchButton resources={data} />
                <div className="border-l-1 opacity-20"></div>
                <ThemeToggle />
                <div className="border-l-1 opacity-20"></div>
                <Socials className="flex gap-3" />
            </div>
        </div>
    )
}