import { useEffect, useState, useRef } from "react"

export function Links({ filteredLinks, input_reference, activeCategory, setActiveCategory }) {

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

    const observer = useRef(null);

    useEffect(() => {
      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      };
  
      const options = {
        root: null, // Use the viewport
        rootMargin: '0px 0px -90% 0px', // Offset to trigger earlier
        threshold: 0.6, // Trigger when 60% of the element is visible
      };
  
      observer.current = new IntersectionObserver(handleIntersect, options);
      const elements = document.querySelectorAll('.anchor');
  
      elements.forEach((element) => observer.current.observe(element));
      console.log(elements)
  
      return () => {
        elements.forEach((element) => observer.current.unobserve(element));
      };
    }, []);

    return (
        <>
            <div className="links-container">
                {isEmpty ? <p className="empty-list-message">No result for {input_reference.current.value.trim()}</p> :
                    Object.keys(filteredLinks).map((category) => (
                        filteredLinks[category].length == 0 ? '' :

                            <section key={category} className={category + '-container'}>
                                <a className="anchor" id={category + '-id'}></a>
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