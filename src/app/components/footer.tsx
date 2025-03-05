"use client"

import Link from "next/link"

export const Footer = () => {
    
    const date = new Date()

    return (
        <footer className='footer'>
            <p>{`© ${date.getFullYear()} yame dame`} | <Link className="links" href='/privacy'>Privacy Policy</Link></p>
            <p>Made with ♥️</p>
        </footer>
    )
}