import Link from "next/link";

export const Navigation = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/media">Media</Link>
            <Link href="/apps">Apps</Link>
        </nav>
    )
}