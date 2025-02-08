'use client'

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '@/styles/components.scss'

export default function ToTopButton() {
    const [isScrolling, setIsScrolling] = useState(false);
    const isBrowser = () => typeof window !== undefined;

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo(0, 0);
    }

    const button_reference = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function checkIfScrolling() {
            window.scrollY > 100 ?
                setIsScrolling(true) :
                setIsScrolling(false)
        }

        window.addEventListener('scroll', checkIfScrolling);
        checkIfScrolling();

        return () => { window.removeEventListener('scroll', checkIfScrolling) };
    }, [isScrolling])

    return (
        <div className='to-top-container'>
            <button
                ref={button_reference}
                onClick={() => scrollToTop()}
                className={`button-rounded to-top ${isScrolling ? 'visible' : ''}`}>
                <FontAwesomeIcon icon={faArrowUp} width={40} />
            </button>
        </div>
    )
}