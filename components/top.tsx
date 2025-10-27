"use client"

import { ArrowUpIcon } from "@phosphor-icons/react";
import Button from "./ui/button";
import { useEffect, useState } from "react";

export const ToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const buttonVisiblityStyle = isVisible ? 'bottom-10 visible' : '-bottom-10 invisible';

    return (
        <Button
            onClick={scrollToTop}
            variant="button"
            className={`fixed center-horizontal z-99 duration-75! ${buttonVisiblityStyle}`}
        >
            <ArrowUpIcon size={24} weight="bold" className="inline-block" />
        </Button>
    );
}