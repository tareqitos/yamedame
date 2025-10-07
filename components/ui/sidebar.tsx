import { Item } from "@/types/types";
import { IconCategory } from "./icon"
import { convertToSlug } from "@/utils/helpers";

type SidebarProps = {
    groups: string[]
}

export const Sidebar = ({ groups } : SidebarProps) => {
    const categories = groups.map((cat) => cat);

    return (
        <nav>
            {
                categories.map((cat: string , index: number) => {
                    console.log(cat[0], cat[1])
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