import clsx from "clsx"
import Link from "next/link"

type TitleProps = {
    fontSize?: string,
    logoSize?: string
}


export const Title = ({ fontSize = "text-xl", logoSize = "w-6 h-6" }: TitleProps) => {

    return (
        <Link href="/" className={clsx("flex items-center gap-1 font-mochiy font-bold title", fontSize)}>
            <div className={clsx("relative rounded-full bg-white", logoSize)}>
                <div className={clsx("absolute rounded-full bg-logo w-full h-full scale-101 transition-logo")}></div>
                <div className={clsx("absolute rounded-full bg-logo w-full h-full -z-1 filter blur-3xl")}></div>
            </div>
            やめだめ
        </Link>
    )
}