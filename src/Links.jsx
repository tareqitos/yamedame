import { useEffect, useState } from "react"

export function Links({ filteredLinks, input_reference }) {

    const [isEmpty, setIsEmpty] = useState();

    // Check if all the arrays are empty in filterLinks
    function checkListIsEmpty() {
        setIsEmpty(Object.keys(filteredLinks).every(category => filteredLinks[category].length === 0));
    }

    useEffect(() => {
        checkListIsEmpty()
    })

    return (
        <div className="links-container">
            {isEmpty ? <p>No result for {input_reference.current.value.trim()}</p> :
                Object.keys(filteredLinks).map((category) => ( 
                    filteredLinks[category].length == 0 ? '' :
                        <section key={category} className={category + '-container'}>
                            <h2 className='category-title'>{category}</h2>
                            <ul className="link-list">
                                {filteredLinks[category].map((link) => (
                                    <li key={link.id} className={`link-item-container ${category}`}>
                                        {/* {link.category == category ? category : ''} */}
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
    )
}