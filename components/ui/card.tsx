import Link from "next/link"

type CardMain = {
    icon: string,
    path: string,
    title: string,
    description: string,
}

const CardMain = ({ icon, title, description }: CardMain) => {
    return (
        <div className="flex flex-col w-full rounded-2xl p-6 lg:h-50 bg-card-background transition-border">
            <span className="w-fit p-2 rounded-sm bg-background" >{icon}</span>
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export { CardMain }