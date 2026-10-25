import { getRemovedResources, getResources } from "@/app/api/api";
import { Item } from "@/types/types";
import { formatUpdateMonth, updates } from "./entries";
import type { Update } from "./types";

const PENDING = "pending";
const oldestFirst = [...updates].reverse();

// A date belongs to the first update published on or after it,
// dates after the latest update are "pending" (not announced yet)
const bucketOf = (date: string) => oldestFirst.find(u => date <= u.date)?.date ?? PENDING;

type Changes = { added: Item[]; removed: Item[] };

function assignResources(resources: Item[], removedResources: Item[]) {
    const byUpdate = new Map<string, Changes>(
        [...updates.map(u => u.date), PENDING].map(key => [key, { added: [], removed: [] }])
    );

    for (const resource of resources) {
        if (resource.created_at) byUpdate.get(bucketOf(resource.created_at))!.added.push(resource);
    }
    for (const resource of removedResources) {
        if (!resource.deleted_at) continue;
        const removedIn = bucketOf(resource.deleted_at);
        // Added and removed between the same two updates: nobody saw it, list it nowhere
        if (resource.created_at && bucketOf(resource.created_at) === removedIn) continue;
        if (resource.created_at) byUpdate.get(bucketOf(resource.created_at))!.added.push(resource);
        byUpdate.get(removedIn)!.removed.push(resource);
    }
    return byUpdate;
}

const ResourceList = ({ title, resources }: { title: string; resources: Item[] }) => (
    <>
        <h3 className="text-xl font-semibold tracking-tight mt-6 mb-2">{title}:</h3>
        <ul className="flex flex-col gap-2 list-disc">
            {[...resources].sort((a, b) => a.name.localeCompare(b.name)).map(resource => (
                <li key={resource.id}>
                    <a href={resource.link} className="text-primary hover:text-link-hover" target="_blank" rel="noopener noreferrer">
                        {resource.name}
                    </a>
                    {' '}- {resource.description}
                </li>
            ))}
        </ul>
    </>
);

const ResourceChanges = ({ added, removed }: Changes) => (
    <>
        {added.length > 0 && <ResourceList title="New Resources" resources={added} />}
        {removed.length > 0 && <ResourceList title="Removed Resources" resources={removed} />}
    </>
);

const UpdateContent = ({ update, changes }: { update: Update; changes: Changes }) => (
    <>
        <ul className="flex flex-col gap-2 list-disc">
            {update.changes?.map((change, index) => (
                <li key={index}>
                    <strong className="text-primary">{change.type}:</strong> {change.description}
                </li>
            ))}
        </ul>
        <ResourceChanges {...changes} />
        {update.closingRemark && <p className="mt-6">{update.closingRemark}</p>}
    </>
);

export default async function UpdatesPage() {
    const [resources, removedResources] = await Promise.all([getResources(), getRemovedResources()]);
    const byUpdate = assignResources(resources, removedResources);
    const pending = byUpdate.get(PENDING)!;
    const pendingCount = pending.added.length + pending.removed.length;
    const [latest, ...older] = updates;

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12">
            <div className="space-y-8">
                <header>
                    <h1 className="text-4xl lg:text-5xl font-black">
                        What's New
                    </h1>
                    <p className="mt-4">
                        You can find the latest updates here!
                    </p>
                </header>

                {pendingCount > 0 && (
                    <details className="rounded-lg bg-card-background p-6 md:px-10">
                        <summary className="cursor-pointer text-xl font-semibold">
                            Changes since the last update ({pendingCount})
                        </summary>
                        <ResourceChanges {...pending} />
                    </details>
                )}

                <article className="rounded-lg border border-primary shadow-md p-6 md:p-10">
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        {formatUpdateMonth(latest.date)} - Update {latest.emoji}
                    </h2>
                    <UpdateContent update={latest} changes={byUpdate.get(latest.date)!} />
                </article>

                {older.map(update => (
                    <details key={update.date} className="rounded-lg border border-foreground/10 p-6 md:px-10">
                        <summary className="cursor-pointer text-2xl font-semibold tracking-tight">
                            {formatUpdateMonth(update.date)} - Update {update.emoji}
                        </summary>
                        <div className="mt-4">
                            <UpdateContent update={update} changes={byUpdate.get(update.date)!} />
                        </div>
                    </details>
                ))}
            </div>
            <p className="text-center text-8xl md:text-9xl font-mochiy my-12 opacity-10 transition-primary" >以上です!</p>
        </div>
    );
}
