import { useEffect, useState } from "react"
import styles from './Links.module.scss'

function Links({ filteredLinks, input_reference, variant }) {

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
        AOS.init();
    })

    useEffect(() => {
        filteredLinks ? checkListIsEmpty() : null
    }, [filteredLinks])

    return (
        <>
            <div className={styles['links-container']}>
                {isEmpty ? <p className={styles['empty-list-message']}>No result for <span style={{ color: '#92BFB1' }}>{input_reference.current.value.trim()}</span></p> :
                    filteredLinks ? Object.keys(filteredLinks).map((category) => (
                        filteredLinks[category].length == 0 ? '' :

                            <section key={category} className={`${category}_container`}>
                                <a className={styles.anchor} id={`${category}_id`}></a>
                                <h2 className={styles['category-title']}>{category == 'beginner' ? 'Beginner essentials' : category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                {variant === 'media' ? (
                                    // MEDIAS
                                    <div className={styles['media-list']}>
                                        <ul className={styles['link-list']} data-aos="fade-up" data-aos-offset="0" data-aos-once="true">
                                            {filteredLinks[category].map((link) => (
                                                <div key={link.id} className={styles['media-link-wrapper']}>
                                                    <li className={`${styles['link-item-container']} ${category}`}>
                                                        <img className={styles['media-img']}src={link.image} alt="" />
                                                        <div className={styles['media-infos']}>
                                                            <i className={categoryIcons[category] ? categoryIcons[category] : ''}></i>
                                                            <a href={link.link} className={styles['link-item']} target="_blank" rel="noopener noreferrer">
                                                                {link.name}  {<i className={`fa-brands fa-${link.platform}`}></i>}
                                                            </a>
                                                            {link.description}
                                                        </div>
                                                    </li>
                                                    <img className={styles['media-img-bg']} src={link.image} alt="" />
                                                </div>
                                            ))}
                                        </ul>
                                    </div>) : (
                                    // RESOURCES 
                                    <div>
                                        <ul className={styles['link-list']} data-aos="fade-up" data-aos-offset="0" data-aos-once="true">
                                            {filteredLinks[category].map((link) => (
                                                <li key={link.id} className={`${styles['link-item-container']} ${category}`}>
                                                    <i className={categoryIcons[category] ? categoryIcons[category] : ''}></i>
                                                    <a href={link.link} className={styles['link-item']} target="_blank" rel="noopener noreferrer">
                                                        {link.name}
                                                    </a>
                                                    {' - ' + link.description}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </section>
                    )) : null
                }
            </div>
        </>
    )
}

export default Links;