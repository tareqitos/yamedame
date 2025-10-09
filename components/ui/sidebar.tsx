import { MainCardProps } from "@/types/types";
import { Icon, IconCategory } from "./icon"
import { convertToSlug } from "@/utils/helpers";
import Link from "next/link";

type SidebarProps = {
    groups: string[]
}

export const SidebarCategory = ({ groups }: SidebarProps) => {
    const categories = groups.map((cat) => cat);

    return (
        <nav>
            {
                categories.map((cat: string, index: number) => {
                    return (
                        <div key={index} className="mb-2">
                            <IconCategory category={convertToSlug(cat)} size={20} className="inline-block mr-4" />
                            <a href={`#${convertToSlug(cat)}`} className="inline text-lg">{cat}</a>
                        </div>
                    )
                })
            }
        </nav>
    )
}

type SidebarMenuProps = {
    items: MainCardProps[]
}

export const SidebarMenu = ({ items }: SidebarMenuProps) => {

    return (
        <nav>
            {
                items.slice(0, -1).map((item, index: number) => (
                    <div key={index} className="mb-2">
                        <Icon path={item.path} size={20} className="inline-block mr-4" />
                        <Link href={`/${item.path}`} className="inline text-lg">{item.title}</Link>
                    </div>
                ))
            }
        </nav>
    )
}   