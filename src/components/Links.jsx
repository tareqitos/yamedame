import { useEffect, useState, useRef } from "react"

export function Links({ filteredLinks, input_reference, isOnAnchor, setIsOnAnchor }) {

    const [isEmpty, setIsEmpty] = useState();
    const [categoryIcons, setCategoryIcons] = useState({
        'beginner': ["fa-solid fa-flag-checkered"],
        'dictionary': ["fa-solid fa-book"],
        'grammar': ["fa-solid fa-spell-check"],
        'vocabulary': ["fa-solid fa-language"],
        'reading': ["fa-solid fa-book-open"],
        'miscellaneous': ["fa-solid fa-bookmark"],
        'application': ["fa-solid fa-microchip"]
    })

    // Check if all the arrays are empty in filterLinks
    function checkListIsEmpty() {
        setIsEmpty(Object.keys(filteredLinks).every(category => filteredLinks[category].length === 0));
    }

    useEffect(() => {
        checkListIsEmpty()
    })

    const [anchorPositions, setAnchorPositions] = useState({});
    const anchor_references = useRef({});

    function updateAnchorPositions() {
        const newAnchorPositions = {};
        Object.keys(anchor_references.current).forEach(category => {
            const anchorElement = anchor_references.current[category];
            if (anchorElement) {
                const anchor_position = Math.floor(anchorElement.getBoundingClientRect().top + window.scrollY);
                newAnchorPositions[category] = anchor_position;
            }
        });
        setAnchorPositions(newAnchorPositions);
        console.log(newAnchorPositions);
    }

    useEffect(() => {
        updateAnchorPositions();
    }, []);

    return (
        <>
            <div className="links-container">
                {isEmpty ? <p className="empty-list-message">No result for {input_reference.current.value.trim()}</p> :
                    Object.keys(filteredLinks).map((category) => (
                        filteredLinks[category].length == 0 ? '' :

                            <section key={category} className={category + '-container'}>
                                <a ref={el => anchor_references.current[category] = el} className="anchor" id={category + '-id'}></a>
                                <h2 className='category-title'>{category}</h2>
                                <ul className="link-list">
                                    {filteredLinks[category].map((link) => (
                                        <li key={link.id} className={`link-item-container ${category}`}>
                                            <i className={categoryIcons[category] ? categoryIcons[category] : ''}></i>
                                            <a href={link.link} className="link-item" target="_blank" rel="noopener noreferrer">
                                                {link.name}
                                            </a>
                                            {' - ' + link.description}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                    ))}
            </div>
        </>
    )
}