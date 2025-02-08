interface ResourcesTitleProps {
    title: string;
    description: string;
}

export const ResourcesTitle = ({title, description}: ResourcesTitleProps) => {
    return (
        <div className="resources-title">
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
        </div>
    )
}