export function Links({ filteredLinks }) {
    return (
        <>
         {Object.keys(filteredLinks).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {filteredLinks[category].map((link) => (
                            <li key={link.id}>
                                {link.category == category ? category : ''}
                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                                {link.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}