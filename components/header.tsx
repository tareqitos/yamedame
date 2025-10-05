import Link from "next/link"
import { Socials } from "./socials"
import { Title } from "./title"

export const Header = () => {
    return (
        <div className="flex justify-between p-4 bg-card-background">
            <Title />
            <Socials className="flex gap-2" />
        </div>
    )
}