import Link from "next/link"

export const Cards = () => {
    const data = [
        { title: 'Study Resources', desc: 'Access essential materials for your study sessions.', path: 'resources' },
        { title: 'Media Library', desc: 'Teaching videos, vlogs, podcasts, gaming and more!', path: 'media' },
        { title: 'Software / Applications', desc: 'Useful software and applications to support your studies.', path: 'applications' },
        { title: 'And more to come', desc: 'Stay tuned for more resources and updates!' }
    ]

    const shortcuts = [
        { category: 'Dictionaries', slug: 'dictionaries-id', path: 'resources' },
        { category: 'Reading', slug: 'reading-id', path: 'resources' },
        { category: 'Culture', slug: 'culture-id', path: 'media' },
        { category: 'Podcast', slug: 'podcast-id', path: 'media' },
        { category: 'Flashcards', slug: 'flashcards-id', path: 'applications' },
        { category: 'Tools', slug: 'tools-id', path: 'applications' },
    ]

    return (
        <>
            {data.map((card, i) => {
                return (
                    <div key={i} className="card">
                        {card.path == 'resources' ? <span>📖</span> :
                            card.path == 'media' ? <span>💾</span> :
                                card.path == 'applications' ? <span>💻</span> : <span>✨</span>}

                        {!card.path ? <div className="card-title">{card.title}</div> :
                            <Link href={`/${card.path}`} className="card-title">{card.title}</Link>}

                        <p className="card-desc">{card.desc}</p>

                        <div className="shortcuts">
                            {shortcuts.map((shortcut, i) => (
                                card.path == shortcut.path ?
                                    <Link key={i} href={`/${shortcut.path}#${shortcut.slug}`} className="shortcut button-rounded and-border and-background">{shortcut.category}</Link> : null
                            ))}
                        </div>
                    </div>
                )
            })}
        </>
    )
}