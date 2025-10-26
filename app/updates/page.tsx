import { apr2025Updates, oct2025Updates } from "./updates";

type Update = {
    title: string;
    changes: {
        type: string;
        description: string;
    }[];
    newResources?: {
        name: string;
        link: string;
        description: string;
    }[];
}

const Update = ({ title, changes, newResources }: Update) => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>
            <ul className='flex flex-col gap-2 list-disc'>
                {changes.map((change, index) => (
                    <li key={index}>
                        <strong className="text-primary">{change.type}:</strong> {change.description}
                    </li>
                ))}
            </ul>
            {newResources && newResources.length > 0 && (
                <>
                    <h3 className="text-xl font-semibold tracking-tight mt-6 mb-2">New Resources:</h3>
                    <ul className='flex flex-col gap-2 list-disc'>
                        {newResources.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.link} className="text-primary hover:text-link-hover" target="_blank" rel="noopener noreferrer">
                                    {resource.name}
                                </a>
                                {' '}- {resource.description}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default function UpdatesPage() {
    const latestUpdate = oct2025Updates[0];
    const aprilUpdate = apr2025Updates[0];
    return (
        <div className="container mx-auto max-w-4xl px-4 py-12">
            <div className="space-y-8">
                <header className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        What's New
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        You can find the latest updates here!
                    </p>
                </header>
                <article className="rounded-lg border border-primary bg-card text-card-foreground shadow-md p-6 md:p-10">
                    <Update
                        title={latestUpdate.title}
                        changes={latestUpdate.changes}
                        newResources={latestUpdate.newResources}
                    />
                    <p className="mt-4">{latestUpdate.closingRemark}</p>
                </article>
                <article className="rounded-lg border border-primary bg-card text-card-foreground shadow-md p-6 md:p-10">
                    <Update
                        title={aprilUpdate.title}
                        changes={aprilUpdate.changes}
                        newResources={aprilUpdate.newResources}
                    />
                    <p className="mt-4">{aprilUpdate.closingRemark}</p>
                </article>
            </div>
            <p className="text-center text-9xl font-mochiy my-12 opacity-10" >以上です!</p>
        </div>
    );
}