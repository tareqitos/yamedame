import { useState, useEffect, useRef } from 'react';
import components_styles from '../../styles/Components.module.scss'

function ToTop({button_css_selector}) {
    const [isScrolling, setIsScrolling] = useState(false);

    function handleToTopEvent() {
        window.scrollTo(0, 0);
    }
    const button_ref = useRef()
    useEffect(() => {
        function checkIfScrolling() {
            if (window.scrollY > 100) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        }

        window.addEventListener('scroll', checkIfScrolling);

        checkIfScrolling();

        return () => {
            window.removeEventListener('scroll', checkIfScrolling);
        }

    }, [isScrolling])

    return (
        <>
            <button ref={button_ref} onClick={() => handleToTopEvent()} className={`${components_styles['btn']} ${components_styles['to-top-button']} ${isScrolling ? components_styles['active'] : ''} ${button_css_selector}` }><i className="fa-solid fa-arrow-up"></i></button>
        </>
    )
}

export default ToTop;