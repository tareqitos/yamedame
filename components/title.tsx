import clsx from "clsx"
import Link from "next/link"

type TitleProps = {
    fontSize?: string,
    logoSize?: string
}


export const Title =({fontSize = "text-xl", logoSize = "w-6 h-6"} : TitleProps ) => {

    return (
        <Link href="/" className={clsx("flex items-center gap-1 font-mochiy font-bold", fontSize)}>
            <div className={clsx("rounded-full bg-logo", logoSize)}></div>
            やめだめ
        </Link>
    )
}