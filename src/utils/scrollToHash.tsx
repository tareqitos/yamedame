"use client"

import { useEffect } from "react"

function ScrollToHash() {
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const element = document.querySelector(hash)

            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    return null;
}

export default ScrollToHash;